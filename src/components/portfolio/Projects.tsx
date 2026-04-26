import { SectionHead } from "./Skills";

const projects = [
  {
    year: "2024",
    title: "Atlas Commerce Platform",
    desc: "A multi-tenant headless commerce engine built on .NET 8 microservices and a Next.js storefront. Powers 50k+ daily transactions.",
    tags: [".NET", "Next.js", "Azure"],
  },
  {
    year: "2024",
    title: "Lumen Health CRM",
    desc: "HIPAA-ready patient relationship platform with real-time messaging, appointment routing, and analytics dashboards.",
    tags: ["MERN", "Socket.io", "MongoDB"],
  },
  {
    year: "2023",
    title: "Forge DevTools",
    desc: "Open-source CLI suite for scaffolding production-grade React + Node apps. 4k stars on GitHub.",
    tags: ["Node.js", "TypeScript", "OSS"],
  },
  {
    year: "2023",
    title: "Northstar Analytics",
    desc: "Real-time event ingestion and visualization for SaaS teams. Sub-second dashboards over billions of rows.",
    tags: ["React", "ASP.NET", "PostgreSQL"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-cream grain">
      <div className="container">
        <SectionHead
          eyebrow="03 — Selected work"
          title="Projects I'm proud of."
          sub="A glimpse of recent things I've designed, architected, and shipped — from MVPs to enterprise platforms."
        />

        <div className="mt-16 border-t border-border">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group grid md:grid-cols-12 gap-6 py-10 border-b border-border hover:bg-background/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 cursor-pointer"
            >
              <div className="md:col-span-1 text-sm font-mono text-muted-foreground pt-1">
                {p.year}
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
              </div>
              <div className="md:col-span-4 text-muted-foreground leading-relaxed">
                {p.desc}
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-2 md:justify-end items-start">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
