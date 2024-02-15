import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Notification from "@/components/Notification";
import NextNProgress from "nextjs-progressbar";

import "@/styles/adapterGlobal.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Notification />
      <Component {...pageProps} />
    </>
  );
}
