import { Metadata } from "next";

import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills — Maureen Calista Surjo",
};

export default function SkillsPage() {
  return (
    <PortfolioLayout>
      <Skills />
    </PortfolioLayout>
  );
}
