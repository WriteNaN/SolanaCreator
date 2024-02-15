"use client";

import { useUnifiedWallet } from "@jup-ag/wallet-adapter";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { toast } from "@/components/Notification";
import HL from "react-spinners/HashLoader";

export default function () {
  const { publicKey } = useUnifiedWallet();
  const [connection, setConnection] = useState<Connection | null>(null);
  const [screwPromise, setScrewPromise] = useState<boolean>(false); // disguised promise 🥸
  const [amount, setAmout] = useState<1 | 2 | 3 | 4 | 5>(1); // oh god i deserve hell >.<
  const [balanceX, setBalance] = useState(0);
  const [network, $] = useLocalStorageState<"mainnet" | "devnet" | "testnet">(
    "network",
    {
      defaultValue: "mainnet",
    }
  );
  const networks = {
    mainnet: "https://api.mainnet-beta.solana.com",
    devnet: "https://api.devnet.solana.com",
    testnet: "https://api.testnet.solana.com",
  };
  useEffect(() => {
    setConnection(new Connection(networks[network]));
  }, [network]);

  const requestAirdrop = async () => {
    setScrewPromise(true);
    try {
      if (connection && publicKey) {
        const txHash = await connection.requestAirdrop(
          publicKey,
          amount * LAMPORTS_PER_SOL
        );

        toast.success(`Sent: ${txHash}`);

        setScrewPromise(false);
      } else {
        toast.warn("please connect wallet first!");
        setScrewPromise(false);
      }
    } catch (e) {
      console.error(e);
      toast.error((e as typeof Error).toString());
      setScrewPromise(false);
    }
  };

  return (
    <form
      className="max-w-sm mx-auto items-center p-4 rounded-xl space-y-2 bg-black/30 justify-center align-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <center>
        <label htmlFor="rangePicker font-manrope">AMOUNT</label>
      </center>
      <input
        type="range"
        min="1"
        max="5"
        id="rangePicker"
        defaultValue={1}
        onChange={(e) =>
          setAmout(e.target.value as unknown as 1 | 2 | 3 | 4 | 5)
        }
        className="w-full rounded-lg appearance-none cursor-grab p-2 bg-blue-600/20"
      />
      <button
        className="btn btn-primary p-2 text-white w-full"
        onClick={requestAirdrop}
      >
        {screwPromise && <HL size={21} color="white" />} Airdrop {amount} SOL
      </button>
    </form>
  );
}
