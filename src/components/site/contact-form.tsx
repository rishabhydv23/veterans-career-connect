import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal, SectionHeading } from "./primitives";
import { services, contactInfo } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{9,14}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactSection() {
  const [errors, setErrors] = useState<Errors>({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const r = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: connect to your existing backend API here
    toast.success("Thank you! We'll contact you within 2 working days.");
    form.reset();
  };
  const field = "h-12 text-base bg-background";
  const err = (k: keyof Errors) => errors[k] && <p className="mt-1 text-sm text-destructive">{errors[k]}</p>;
  return (
    <section className="py-24">
      <div className="container-site">
        <SectionHeading eyebrow="Get in Touch" title="We're Here to Help" text="Tell us what you need and our team will reach out." />
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-xl border border-border bg-card p-8 shadow-soft sm:grid-cols-2">
              <div><Label htmlFor="name">Full name</Label><Input id="name" name="name" className={field} />{err("name")}</div>
              <div><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" className={field} />{err("phone")}</div>
              <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" className={field} />{err("email")}</div>
              <div>
                <Label htmlFor="service">Service needed</Label>
                <select id="service" name="service" defaultValue="" className="flex h-12 w-full rounded-md border border-input bg-background px-3 text-base">
                  <option value="" disabled>Select…</option>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                  <option>Other</option>
                </select>
                {err("service")}
              </div>
              <div className="sm:col-span-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={5} className="bg-background text-base" />{err("message")}</div>
              <Button type="submit" variant="gold" size="lg" className="sm:col-span-2">Send Message</Button>
            </form>
          </Reveal>
          <Reveal delay={150} className="space-y-5 lg:col-span-2">
            {[{ icon: MapPin, label: "Address", v: contactInfo.address }, { icon: Phone, label: "Phone", v: contactInfo.phone }, { icon: Mail, label: "Email", v: contactInfo.email }].map((c) => (
              <div key={c.label} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-soft">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"><c.icon className="h-5 w-5" /></span>
                <div><div className="font-semibold text-navy-deep">{c.label}</div><div className="text-muted-foreground">{c.v}</div></div>
              </div>
            ))}
            <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-border bg-secondary text-muted-foreground">Map embed placeholder</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
