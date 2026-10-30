import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { EmptyFeed, CtaBanner } from "@/components/site/sections";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — Ex-Servicemen Service Foundation" },
      { name: "description", content: "Join us for community gatherings and special occasions." },
      { property: "og:title", content: "Upcoming Events — Ex-Servicemen Service Foundation" },
      { property: "og:description", content: "Join us for community gatherings and special occasions." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Upcoming Events" text="Join us for community gatherings and special occasions." />
      <EmptyFeed title="Upcoming Events" text="Join us for community gatherings and special occasions" empty="No events scheduled" /><CtaBanner />
    </>
  );
}
