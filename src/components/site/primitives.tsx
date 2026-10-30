import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, text, light, center = true }: { eyebrow?: string; title: string; text?: string; light?: boolean; center?: boolean }) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
      <h2 className={cn("text-3xl font-bold md:text-5xl", light && "text-primary-foreground")}>{title}</h2>
      <div className={cn("tricolor-bar mt-5 w-20 rounded-full", center && "mx-auto")} />
      {text && <p className={cn("mt-5 text-lg", light ? "text-primary-foreground/80" : "text-muted-foreground")}>{text}</p>}
    </Reveal>
  );
}

export function SiteCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift", className)}>{children}</div>;
}

export function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1600);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl font-bold text-gold md:text-5xl">{n.toLocaleString("en-IN")}{suffix}</div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/80">{label}</div>
    </div>
  );
}

export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-navy-deep py-20 text-center md:py-28">
      <div className="container-site animate-fade-up">
        <h1 className="text-4xl font-bold text-primary-foreground md:text-6xl">{title}</h1>
        <div className="tricolor-bar mx-auto mt-6 w-24 rounded-full" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">{text}</p>
      </div>
    </section>
  );
}
