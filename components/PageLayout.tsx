import Navbar from "./Navbar";
import Footer from "@/components/Footer";
import UnifiedProvider from "@/context/unifiedProvider";

import type { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen select-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-indigo-900 to-sky-900">
      <UnifiedProvider>
        <Navbar />
        <div className="flex items-center relative justify-center h-screen font-manrope" id="content-screen">
          {children}
        </div>
        <Footer />
      </UnifiedProvider>
    </div>
  );
}
