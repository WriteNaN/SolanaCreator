import { IWalletNotification } from "@jup-ag/wallet-adapter/dist/types/contexts/WalletConnectionProvider";
import { ToastContainer, Bounce, toast } from "react-toastify";
import { IoMdNotificationsOutline as NotifIcon } from "react-icons/io";

import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export { toast };

export function NotifBtn() {
  return (
    <div className="dropdown dropdown-end">
      <div
        role="button"
        tabIndex={0}
        className="flex justify-center align-center p-2 cursor-pointer !bg-transparent rounded-full border border-purple-600 ml-3 rounded-md"
      >
        <NotifIcon
          size={24}
          className="text-purple-600 hover:text-purple-800"
        />
      </div>

      <div className="dropdown-content z-999 menu w-72 card shadow-xl bg-black/30">
        
        <div className="card-body font-manrope">
          <h2 className="card-title text-center align-center flex justify-center">Your Notifications</h2>
          <p className="pb-1 text-center align-center flex justify-center"></p>
          <div className="card-actions justify-end">
            <Link href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ex&screen_name=write_int" target="_blank">
            <button className="btn btn-primary w-full text-white font-manrope">
              Follow me on X for updates
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Notification() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export function Notify() {
  const declaratives = {
    onConnect: (props: IWalletNotification) => {
      return toast.success("Wallet Connected!");
    },
    onConnecting: (props: IWalletNotification) => {
      return;
    },
    onDisconnect: (props: IWalletNotification) => {
      return toast.error("Wallet Disconnected");
    },
    onNotInstalled: (props: IWalletNotification) => {
      return;
    },
  };
  return declaratives;
}
