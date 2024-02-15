import {
  IoCloseSharp,
  IoLogoGithub,
  IoCreate,
  IoFlameSharp,
  IoWaterSharp,
  IoInformation,
  IoHomeSharp,
} from "react-icons/io5";
import { FaParachuteBox, FaGlobe } from "react-icons/fa";
import {
  FaDiscord,
  FaXTwitter,
  FaTelegram,
  FaInstagram,
  FaCircleCheck as FaCheck
} from "react-icons/fa6";
import ConnectButton from "./ConnectButton";
import { toast } from "./Notification";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import useLocalStorageState from "use-local-storage-state";

import "react-tooltip/dist/react-tooltip.css";
import { useRouter } from "next/router";

export default function Sidebar({ close }: { close: any }) {
  const router = useRouter();
  const [network, setNetwork] = useLocalStorageState<
    "mainnet" | "devnet" | "testnet"
  >("network", {
    defaultValue: "mainnet",
  });
  const networks = [
    { value: "mainnet-beta", text: "Mainnet Beta" },
    { value: "devnet", text: "Devnet" },
    { value: "testnet", text: "Testnet" },
  ];
  const promiseNevergnagiveUup = new Promise((resolve, reject) => {
    try {
      return setTimeout(() => resolve(true), 4000);
    } catch {
      reject(false);
    }
  });
  const handleNetworkChange = (event: any) => {
    setNetwork(event.target.value as "mainnet" | "devnet" | "testnet");
  };

  return (
    <div
      className="fixed overflow-x-hidden inset-y-0 left-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-indigo-900 to-sky-900 text-white w-full sm:w-1/2 md:w-1/3 sm:rounded-e-xl p-3 overflow-y-scroll"
      id="slide"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={close}
        className="absolute top-0 right-0 rounded-full border border-red-600 hover:opacity-50 text-red-600 p-1 m-4"
      >
        <IoCloseSharp size={20} />
      </button>
      <button
        className="absolute top-0 left-0 rounded-full cursor-help border border-sky-500 hover:opacity-50 p-1 m-4"
        data-tooltip-id="info-sidebar"
        data-tooltip-content="we're open source, we dont intercept your requests! <3"
      >
        <IoInformation size={20} className="text-sky-500" />
      </button>
      <div className="flex flex-row justify-center align-center">
        <p className="align-center justify-center pb-2 pt-2 font-audiowide text-lg sm:text-sm">
          Creator Dashboard
        </p>
      </div>

      <div className="space-y-3">
        <div className="pt-7 flex justify-center align-center pb-10 pt-10">
          <ConnectButton />
        </div>

        {/** middle */}
        <div
          id="quick-links"
          className="flex flex-col space-y-3 p-6 justify-center align-center bg-black/10 rounded-lg"
        >
          <button className="btn btn-error text-white" onClick={() => router.push("/")}>
            <IoHomeSharp size={24} /> Dashboard
          </button>
          <button className="btn btn-success text-white" onClick={() => router.push('/create')}>
            <IoCreate size={24} /> Create Token
          </button>
          <button className="btn btn-warning bg-orange-600 border-orange-600 hover:bg-orange-800 hover:border-orange-800 text-red-800">
            <IoFlameSharp size={24} /> Burn Token
          </button>
          <button
            className="btn btn-warning text-pink-600"
            onClick={() => router.push("/airdrop")}
          >
            <FaParachuteBox /> Request Airdrop
          </button>
          <button
            className="btn btn-primary cursor-no-drop text-blue-600"
            onClick={() => toast.warn("Hold tight, we're working on it! ^_^")}
          >
            <IoWaterSharp size={24} /> Manage Liquidity
          </button>
        </div>

        <div className="card bg-transparent p-2 space-y-3">
          <div className="flex items-center space-x-2 font-manrope align-center justify-center">
            <FaGlobe className="text-blue-300" />
            <label htmlFor="network" className="text-white">
              Network
            </label>
          </div>
          <div className="relative">
            <select
              value={network}
              onChange={handleNetworkChange}
              className="appearance-none rounded-md px-4 py-2 bg-black/20 text-white w-full focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {networks.map((networkOption) => (
                <option key={networkOption.value} className="bg-black text-white" value={networkOption.value}>
                  {networkOption.text}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FaCheck size={24} className="text-green-600" />
            </div>
          </div>
        </div>
        {/** close */}
      </div>

      <footer className="bottom-0 p-10 align-center justify-center flex flex-col space-y-4">
        <center>
          <div
            className={`flex flex-row p-4 bg-black/30 w-full justify-center align-center rounded-xl space-x-3 md:w-full`}
          >
            <Link
              href="#"
              onClick={() =>
                toast.promise(promiseNevergnagiveUup, {
                  pending: "Searching for discord...",
                  error: "Sorryy! Couldn't find it :(",
                  success: "No :D",
                })
              }
            >
              <FaDiscord size={24} className="text-blue-400 hover:opacity-50" />
            </Link>
            <Link
              href="#"
              onClick={() => toast.error("dont trust the lizard man.")}
            >
              <FaInstagram
                size={24}
                className="text-pink-500 hover:opacity-50"
              />
            </Link>
            <Link
              href="https://twitter.com/write_int"
              target="_blank"
              onClick={() => toast.success("sending you to my twitter <3")}
            >
              <FaXTwitter
                size={24}
                className="text-slate-300 hover:opacity-50"
              />
            </Link>
            <Link
              href="#"
              onClick={() =>
                toast.warn("really? i've heard it's the dark side?!")
              }
            >
              <FaTelegram size={24} className="text-sky-400 hover:opacity-50" />
            </Link>
          </div>
        </center>
        <button
          onClick={() =>
            window.open("https://github.com/WriteNaN/SolanaCreator")
          }
          className="btn btn-secondary bg-pink-800/40 hover:bg-pink-800/70"
        >
          <IoLogoGithub className="text-black" size={24} />
          <span>Fork Me On Github</span>
        </button>
        <center className="align-center select-none justify-center flex flex-row">
          <img
            src="/img/sol.svg"
            width={128}
            className="align-center justify-center flex"
            height={"auto"}
          />
        </center>
      </footer>

      <Tooltip id="info-sidebar" place="bottom-start" />
    </div>
  );
}
