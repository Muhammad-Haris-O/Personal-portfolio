const items = [
  "MERN Stack",
  "·",
  ".NET Core",
  "·",
  "TypeScript",
  "·",
  "System Design",
  "·",
  "Public Speaking",
  "·",
  "Mentorship",
  "·",
  "Cloud Native",
  "·",
];

export const Marquee = () => {
  return (
    <section className="border-y border-border bg-cream py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl px-6 text-muted-foreground"
          >
            {it === "·" ? <span className="text-accent">{it}</span> : it}
          </span>
        ))}
      </div>
    </section>
  );
};
