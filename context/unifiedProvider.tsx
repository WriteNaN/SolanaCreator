import { Notify } from "@/components/Notification";
import wallet from "@/utils/Wallets";
import { UnifiedWalletProvider } from "@jup-ag/wallet-adapter";

import type { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return (
    <UnifiedWalletProvider
      wallets={wallet}
      config={{
        autoConnect: true,
        theme: "dark",
        lang: "en",
        env: "mainnet-beta",
        metadata: {
          name: "Token Builder",
          description: "simplifying creating spl tokens on solana",
          url: "https://sol-builder.vercel.app",
          iconUrls: ["https://sol-builder.vercel.app/img/logo.png"],
        },
        notificationCallback: Notify(),
        walletlistExplanation: {
          href: "https://station.jup.ag/docs/additional-topics/wallet-list",
        },
      }}
    >
      {children}
    </UnifiedWalletProvider>
  );
}
