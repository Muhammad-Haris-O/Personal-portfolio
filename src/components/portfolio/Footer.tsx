import { useProfileLinks, formatHref } from "@/hooks/useProfileLinks";

export const Footer = () => {
  const { links } = useProfileLinks();
  return (
    <footer className="bg-ink text-cream/60 py-10 border-t border-cream/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="font-display text-base text-cream">
          Muhammad Haris<span className="text-gold">.</span>
        </div>
        <div>© {new Date().getFullYear()} — Designed & built with care.</div>
        <div className="flex gap-5">
          <a href={formatHref("linkedin", links.linkedin)} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
          <a href={formatHref("github", links.github)} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">GitHub</a>
          <a href={formatHref("twitter", links.twitter)} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
