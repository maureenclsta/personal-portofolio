import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text)]">
      <div className="mx-auto flex min-h-screen max-w-[1700px] flex-col md:flex-row">
        <Navbar />

        <main className="flex-1 px-3 py-4 sm:px-5 lg:px-6 lg:py-5">
          <div className="space-y-5">{children}<Footer /></div>
        </main>
      </div>
    </div>
  );
}
