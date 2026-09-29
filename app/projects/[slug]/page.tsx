import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PortfolioLayout } from "@/components/PortfolioLayout";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Project details — Maureen Calista Surjo",
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <PortfolioLayout>
      <ProjectDetail project={project} />
    </PortfolioLayout>
  );
}