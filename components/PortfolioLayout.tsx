import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-[var(--text)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col md:flex-row">
        <Navbar />

        <main className="flex min-h-screen flex-1 flex-col px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          <div className="mx-auto flex w-full max-w-[1180px] flex-1 flex-col">
            <div className="flex-1 space-y-6 sm:space-y-8">{children}</div>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
