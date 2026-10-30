import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { ServicesSection, CtaBanner } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Ex-Servicemen Service Foundation" },
      { name: "description", content: "Free, practical help with pensions, healthcare, jobs, legal matters and family welfare." },
      { property: "og:title", content: "Our Services — Ex-Servicemen Service Foundation" },
      { property: "og:description", content: "Free, practical help with pensions, healthcare, jobs, legal matters and family welfare." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Our Services" text="Free, practical help with pensions, healthcare, jobs, legal matters and family welfare." />
      <ServicesSection /><CtaBanner />
    </>
  );
}
