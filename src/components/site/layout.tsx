import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Shield, Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, contactInfo } from "@/lib/site-data";

function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Ex-Servicemen Service Foundation home">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground"><Shield className="h-6 w-6" /></span>
      <span className="leading-tight">
        <span className={`block font-serif text-lg font-bold ${light ? "text-primary-foreground" : "text-navy-deep"}`}>Ex-Servicemen</span>
        <span className={`block text-xs uppercase tracking-widest ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Service Foundation</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="tricolor-bar" />
      <div className="container-site flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }}
              className="rounded-md px-4 py-2 font-medium text-foreground transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:font-semibold">
              {l.label}
            </Link>
          ))}
          <Button asChild variant="gold" className="ml-3"><Link to="/contact">Join / Donate</Link></Button>
        </nav>
        <button className="flex h-11 w-11 items-center justify-center rounded-md lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col py-4">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
                className="rounded-md px-3 py-3 text-lg font-medium data-[status=active]:text-primary">{l.label}</Link>
            ))}
            <Button asChild variant="gold" size="lg" className="mt-3"><Link to="/contact" onClick={() => setOpen(false)}>Join / Donate</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const socials = [Facebook, Instagram, Twitter, Youtube];
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 text-primary-foreground/70">Honoring those who served — standing with India's veterans and their families.</p>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a key={i} href="#" aria-label="Social media link" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-gold hover:text-gold-foreground"><Icon className="h-5 w-5" /></a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gold">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((l) => <li key={l.to}><Link to={l.to} className="text-primary-foreground/80 hover:text-gold">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gold">Reach Us</h3>
          <ul className="space-y-3 text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold" />{contactInfo.address}</li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold" />{contactInfo.phone}</li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-gold" />{contactInfo.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-sm text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Ex-Servicemen Service Foundation. All rights reserved.</p>
          <p className="font-serif text-base text-gold">जय हिन्द · Jai Hind</p>
        </div>
      </div>
    </footer>
  );
}
