import type { ReactNode } from "react";

import { Navbar } from "@/components/Navbar";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col text-[var(--text)]">
      <Navbar />

      <main className="flex flex-1 flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto flex w-full max-w-[1180px] flex-1 flex-col">
          <div className="flex-1 space-y-6 sm:space-y-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
