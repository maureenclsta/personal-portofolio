import { Metadata } from "next";

import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Maureen Calista Surjo",
};

export default function ProjectsPage() {
  return (
    <PortfolioLayout>
      <Projects />
    </PortfolioLayout>
  );
}
