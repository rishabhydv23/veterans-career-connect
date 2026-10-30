import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Quote, Target, Eye, Medal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading, SiteCard } from "./primitives";
import { services, testimonials, gallery, branches } from "@/lib/site-data";
import army from "@/assets/army.jpg";

export function BranchesSection() {
  return (
    <section className="py-24">
      <div className="container-site">
        <SectionHeading eyebrow="Our Veterans" title="Three Services, One Family" text="Indian Army, Air Force, and Navy veterans" />
        <div className="grid gap-8 md:grid-cols-3">
          {branches.map((b, i) => (
            <Reveal key={b.title} delay={i * 120}>
              <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={b.img} alt={b.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold">{b.title}</h3>
                  <p className="mt-3 text-muted-foreground">{b.text}</p>
                  <Link to="/about" className="mt-5 inline-flex min-h-11 items-center font-semibold text-primary hover:text-gold">Learn More →</Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const cards = [
    { icon: Target, title: "Mission", text: "To ensure every veteran and their family receives the welfare, dignity and support they earned in service." },
    { icon: Eye, title: "Vision", text: "A nation where no soldier is forgotten after the uniform comes off." },
    { icon: Medal, title: "Values", text: "Honour, discipline, compassion and selfless service — the values of the forces." },
  ];
  return (
    <section className="py-24">
      <div className="container-site">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src={army} alt="Decorated Indian Army veteran" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-xl object-cover shadow-lift" />
              <div className="absolute -bottom-6 -right-4 rounded-xl bg-gold px-6 py-4 text-gold-foreground shadow-gold md:-right-6">
                <div className="font-serif text-3xl font-bold">25+</div>
                <div className="text-sm font-medium">Years of service {/* PLACEHOLDER */}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">About Us</p>
            <h2 className="text-3xl font-bold md:text-5xl">They served the nation. Now we serve them.</h2>
            <div className="tricolor-bar mt-5 w-20 rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground">The Ex-Servicemen Service Foundation is a non-profit dedicated to Indian Army, Air Force and Navy veterans. We help with pensions, healthcare, employment, legal aid and family welfare — and keep the spirit of camaraderie alive through community events.</p>
            <Button asChild variant="navy" size="lg" className="mt-8"><Link to="/services">Our Services</Link></Button>
          </Reveal>
        </div>
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <SiteCard className="h-full">
                <c.icon className="h-10 w-10 text-gold" />
                <h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.text}</p>
              </SiteCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="container-site">
        <SectionHeading eyebrow="What We Do" title="Support for Every Step" text="Practical help for veterans and their families, free of cost." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <SiteCard className="group h-full">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground"><s.icon className="h-7 w-7" /></span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
              </SiteCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="py-24">
      <div className="container-site">
        <SectionHeading eyebrow="Gallery" title="Moments of Pride" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 80} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <button onClick={() => setActive(i)} className="group block h-full w-full overflow-hidden rounded-xl" aria-label={`Open image: ${g.alt}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {active !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/95 p-4" onClick={() => setActive(null)}>
          <button className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground" aria-label="Close"><X /></button>
          <img src={gallery[active]!.src} alt={gallery[active]!.alt} className="max-h-[85vh] max-w-full rounded-xl" />
        </div>
      )}
    </section>
  );
}

export function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;
  const go = (d: number) => setI((i + d + testimonials.length) % testimonials.length);
  return (
    <section className="bg-navy-deep py-24">
      <div className="container-site">
        <SectionHeading light eyebrow="Voices" title="In Their Words" />
        <Reveal className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-12 w-12 text-gold" />
          <blockquote key={i} className="animate-fade-up">
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-primary-foreground md:text-3xl">“{t.quote}”</p>
            <footer className="mt-8">
              <div className="font-semibold text-gold">{t.name}</div>
              <div className="text-primary-foreground/70">{t.rank}</div>
            </footer>
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-gold hover:text-gold-foreground"><ChevronLeft /></button>
            {testimonials.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} className={`h-3 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-3 bg-primary-foreground/30"}`} />
            ))}
            <button onClick={() => go(1)} aria-label="Next testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-gold hover:text-gold-foreground"><ChevronRight /></button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="py-24">
      <div className="container-site">
        <Reveal>
          <div className="rounded-2xl bg-gradient-cta px-8 py-16 text-center shadow-lift md:px-16">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-5xl">Stand with those who stood for us</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/85">Your time or contribution brings real help to a veteran's doorstep.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="gold" size="lg"><Link to="/contact">Donate</Link></Button>
              <Button asChild variant="heroOutline" size="lg"><Link to="/contact">Volunteer</Link></Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function EmptyFeed({ title, text, empty }: { title: string; text: string; empty: string }) {
  return (
    <section className="py-24">
      <div className="container-site">
        <SectionHeading title={title} text={text} />
        <Reveal>
          <div className="mx-auto max-w-xl rounded-xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">{empty}</div>
        </Reveal>
      </div>
    </section>
  );
}
