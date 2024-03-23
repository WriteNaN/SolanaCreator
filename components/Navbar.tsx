"use client";

import ConnectButton from "./ConnectButton";
import { IoMenu } from "react-icons/io5";
import { NotifBtn } from "./Notification";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = (): void => {
    setSidebarActive(!sidebarActive);
  };
  const closeSidebar = (): void => {
      setSidebarActive(false);
  };
  
  return (
    <>
      <nav className="top-0 relative z-10 flex p-3 justify-between mx-auto w-full h-auto bg-blue-500/10">
        <button className="flex items-center space-x-2" onClick={toggleSidebar}>
          <IoMenu className="cursor-pointer hover:text-slate-400" size={24} />
          <p className="font-audiowide hidden md:!block">SPL Token</p>
        </button>
        <div className="text-center font-audiowide text-lg flex flex-col items-center justify-center md:flex-row md:justify-center md:text-left md:items-center md:text-xs md:space-x-2 sm:text-xl md:hidden">
          <p>SPL TOKEN</p>
          <div className="flex items-center mt-2 md:mt-0">
            <Image
              alt="solana"
              src="/img/sol.svg"
              width={0}
              height={0}
              className="h-2 w-auto ml-1"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:!block">
            <ConnectButton />
          </div>
          <NotifBtn />
        </div>
      </nav>
      {sidebarActive && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={toggleSidebar}>
          <Sidebar close={closeSidebar} />
        </div>
      )}
    </>
  );
}
