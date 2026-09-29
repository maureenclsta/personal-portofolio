import { Metadata } from "next";

import { Experience } from "@/components/Experience";
import { PortfolioLayout } from "@/components/PortfolioLayout";

export const metadata: Metadata = {
  title: "Experience — Maureen Calista Surjo",
};

export default function ExperiencePage() {
  return (
    <PortfolioLayout>
      <Experience />
    </PortfolioLayout>
  );
}
