"use client";

import {
  useUnifiedWallet as useWallet,
  useUnifiedWalletContext
} from "@jup-ag/wallet-adapter";
import { useState, useEffect, useRef } from "react";
import { MdOutlineCopyAll, MdLogout } from "react-icons/md";
import { PiUserSwitchDuotone as MdSwitch } from "react-icons/pi";

export default function ConnectButton() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [currentState, setCurrentState] = useState<
    "disconnected" | "disconnecting" | "connecting" | "connected"
  >("disconnected");
  const { publicKey, connecting, disconnecting, disconnect, wallet } = useWallet();
  const { setShowModal } = useUnifiedWalletContext();
  const [hidden, setHidden] = useState<boolean>(true);
  const dropdownRef = useRef(null);
  const [previewAddr, setPreviewAddr] = useState<string|null>(null);

  useEffect(() => {
    setIsConnected(!(publicKey == null));
    if (publicKey) {
        const address = publicKey.toString();
        const p1 = address.slice(0, 3);
        const p2 = address.slice(-4);
        const formattedAddress: string | null = `${p1}...${p2}`;
        setPreviewAddr(formattedAddress);
    }
  }, [publicKey]);

  useEffect(() => {
    if (connecting) return setCurrentState("connecting");
    if (disconnecting) return setCurrentState("disconnecting");
    if (isConnected) {
      return setCurrentState("connected");
    } else {
      return setCurrentState("disconnected");
    }
  }, [connecting, disconnecting, isConnected]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-expect-error contains never?
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHidden(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleConnect = () => {
    if (currentState === "disconnected") return setShowModal(true);
    setHidden(!hidden);
  };

  const switchWallet = () => setShowModal(true);
  const copyAddress = async () => {
    if (!publicKey) return;
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(publicKey.toString());
    } else {
      document.execCommand("copy", true, publicKey.toString());
    }
  };

  return (
    <div className={`dropdown`}>
      <button className="custom-btn-connect rounded-md" onClick={handleConnect}>
        {currentState === "connecting" && <span>Connecting...</span>}
        {currentState === "disconnecting" && <span>Disconnecting...</span>}
        {currentState === "connected" && (
          <>
          <img src={wallet?.adapter.icon} className="h-7 pr-2 w-auto"/>
            <span>{previewAddr}</span>
          </>
        )}
        {currentState === "disconnected" && <span>Select Wallet</span>}
      </button>
      {!hidden && (
        <div
          ref={dropdownRef}
          id="dropdown-btn-sol"
          className={`z-999 bg-black/30 flex flex-col font-manrope justify-center align-center absolute p-2 rounded-lg shadow w-40`}
        >
          <button
            className="dropdown-btn hover:bg-black/50 rounded-lg p-2 flex items-center justify-center"
            onClick={copyAddress}
          >
            <MdOutlineCopyAll className="mr-2 z-666" /> <span>Address</span>
          </button>
          <button
            className="dropdown-btn hover:bg-black/50 rounded-lg p-2 flex items-center justify-center"
            onClick={switchWallet}
          >
            <MdSwitch className="mr-2" /> <span>Switch</span>
          </button>
          <button
            className="dropdown-btn hover:bg-black/50 rounded-lg p-2 flex items-center justify-center"
            onClick={() => {
              disconnect();
              setHidden(true);
            }}
          >
            <MdLogout className="mr-2" /> <span>Logout</span>
          </button>
        </div>
      )}
    </ div>
  );
}
