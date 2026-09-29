import { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { PortfolioLayout } from "@/components/PortfolioLayout";

export const metadata: Metadata = {
  title: "Contact — Maureen Calista Surjo",
};

export default function ContactPage() {
  return (
    <PortfolioLayout>
      <Contact />
    </PortfolioLayout>
  );
}
