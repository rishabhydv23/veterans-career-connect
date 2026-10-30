import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { GallerySection } from "@/components/site/sections";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ex-Servicemen Service Foundation" },
      { name: "description", content: "Moments of pride, remembrance and camaraderie from our community." },
      { property: "og:title", content: "Gallery — Ex-Servicemen Service Foundation" },
      { property: "og:description", content: "Moments of pride, remembrance and camaraderie from our community." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Gallery" text="Moments of pride, remembrance and camaraderie from our community." />
      <GallerySection />
    </>
  );
}
