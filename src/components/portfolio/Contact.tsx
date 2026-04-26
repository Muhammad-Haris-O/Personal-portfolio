import { useState } from "react";
import { toast } from "sonner";
import { useProfileLinks, formatHref, displayValue } from "@/hooks/useProfileLinks";
import { ProfileSettings } from "./ProfileSettings";
import { Settings } from "lucide-react";
import contactPortrait from "@/assets/haris-contact.jpeg";

export const Contact = () => {
  const [sending, setSending] = useState(false);
  const { links } = useProfileLinks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-ink text-cream grain relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-mono mb-4">
              05 — Let's collaborate
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight text-balance">
              Have an idea worth <em className="text-gold not-italic italic">building</em>?
            </h2>
            <p className="mt-6 text-cream/70 text-lg max-w-md leading-relaxed">
              Drop me a line — about a project, a speaking invite, or just to say hi.
              I read every message personally.
            </p>

            <div className="mt-10 space-y-4">
              <ContactRow label="Email" value={links.email} href={formatHref("email", links.email)} />
              <ContactRow label="LinkedIn" value={displayValue("linkedin", links.linkedin)} href={formatHref("linkedin", links.linkedin)} />
              <ContactRow label="GitHub" value={displayValue("github", links.github)} href={formatHref("github", links.github)} />
              <ContactRow label="Twitter" value={displayValue("twitter", links.twitter)} href={formatHref("twitter", links.twitter)} />
              <ContactRow label="Based in" value="Karachi, Pakistan · Worldwide" />
            </div>

            <div className="mt-8">
              <ProfileSettings
                trigger={
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-soft hover:text-gold transition-colors"
                  >
                    <Settings className="h-3.5 w-3.5" />
                    Edit profile links
                  </button>
                }
              />
            </div>
          </div>

          <div className="space-y-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 via-transparent to-transparent blur-2xl pointer-events-none" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-portrait">
                <img
                  src={contactPortrait}
                  alt="Muhammad Haris portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft mb-2">
                    Muhammad Haris
                  </div>
                  <div className="font-display text-2xl text-cream leading-tight">
                    Let's build something <em className="text-gold not-italic italic">meaningful</em>.
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
              <Field label="Subject" name="subject" placeholder="What's this about?" required />
              <div>
                <label className="text-xs uppercase tracking-widest text-gold-soft mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or invitation..."
                  className="w-full bg-transparent border-b border-cream/20 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-ink text-sm font-semibold hover:bg-cream transition-colors disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send message"}
                <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="text-xs uppercase tracking-widest text-gold-soft mb-2 block">{label}</label>
    <input
      {...props}
      className="w-full bg-transparent border-b border-cream/20 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
    />
  </div>
);

const ContactRow = ({ label, value, href }: { label: string; value: string; href?: string }) => {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      className="flex items-center justify-between border-b border-cream/10 pb-4 group hover:border-gold transition-colors"
    >
      <span className="text-xs uppercase tracking-widest text-gold-soft">{label}</span>
      <span className="font-display text-lg group-hover:text-gold transition-colors">
        {value}
      </span>
    </Tag>
  );
};
