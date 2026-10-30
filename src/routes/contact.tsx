import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { ContactSection } from "@/components/site/contact-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ex-Servicemen Service Foundation" },
      { name: "description", content: "Reach out for support, to volunteer, or to donate." },
      { property: "og:title", content: "Contact Us — Ex-Servicemen Service Foundation" },
      { property: "og:description", content: "Reach out for support, to volunteer, or to donate." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Contact Us" text="Reach out for support, to volunteer, or to donate." />
      <ContactSection />
    </>
  );
}
