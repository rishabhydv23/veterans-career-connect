import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { AboutSection, CtaBanner } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ex-Servicemen Service Foundation" },
      { name: "description", content: "Who we are and why we serve India's veterans and their families." },
      { property: "og:title", content: "About Us — Ex-Servicemen Service Foundation" },
      { property: "og:description", content: "Who we are and why we serve India's veterans and their families." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="About Us" text="Who we are and why we serve India's veterans and their families." />
      <AboutSection /><CtaBanner />
    </>
  );
}
