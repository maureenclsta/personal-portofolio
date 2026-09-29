import { Metadata } from "next";

import { About } from "@/components/About";
import { PortfolioLayout } from "@/components/PortfolioLayout";

export const metadata: Metadata = {
  title: "About — Maureen Calista Surjo",
};

export default function AboutPage() {
  return (
    <PortfolioLayout>
      <About />
    </PortfolioLayout>
  );
}
