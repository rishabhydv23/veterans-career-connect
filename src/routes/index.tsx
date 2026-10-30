import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/site/primitives";
import { BranchesSection, ServicesSection, TestimonialsSection, CtaBanner, EmptyFeed } from "@/components/site/sections";
import { stats } from "@/lib/site-data";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ex-Servicemen Service Foundation — Honoring Those Who Served" },
      { name: "description", content: "Support for Indian Army, Air Force and Navy veterans: pensions, healthcare, jobs, legal aid and family welfare." },
      { property: "og:title", content: "Ex-Servicemen Service Foundation — Honoring Those Who Served" },
      { property: "og:description", content: "Support for Indian Army, Air Force and Navy veterans and their families." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img src={hero} alt="Indian veterans saluting the national flag at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-site relative py-24 animate-fade-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">Ex-Servicemen Service Foundation</p>
          <h1 className="max-w-3xl text-5xl font-extrabold text-primary-foreground md:text-7xl">Honoring Those Who Served</h1>
          <p className="mt-6 max-w-xl text-xl text-primary-foreground/85">Standing with Indian Army, Air Force, and Navy veterans — and the families who served beside them.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="gold" size="lg"><Link to="/contact">Get Support</Link></Button>
            <Button asChild variant="heroOutline" size="lg"><Link to="/contact">Join Us</Link></Button>
          </div>
        </div>
        <a href="#impact" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 animate-bob"><ChevronDown className="h-8 w-8" /></a>
      </section>
      <section id="impact" className="bg-navy-deep py-16">
        <div className="container-site grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </section>
      <BranchesSection />
      <ServicesSection />
      <EmptyFeed title="Latest Notifications" text="Stay updated with important announcements and news" empty="No notifications available" />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
