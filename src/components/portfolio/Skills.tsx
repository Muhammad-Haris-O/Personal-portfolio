const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "ASP.NET Core", "C#", "REST", "GraphQL"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "SQL Server", "Redis", "Prisma", "EF Core"],
  },
  {
    title: "Tooling & Cloud",
    skills: ["Docker", "Azure", "AWS", "CI/CD", "Git", "Linux"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <SectionHead eyebrow="02 — Capabilities" title="Skills & expertise" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skillGroups.map((g, i) => (
            <div
              key={g.title}
              className="group p-6 rounded-sm border border-border bg-card hover:bg-cream transition-all hover:shadow-card hover:-translate-y-1 duration-500"
            >
              <div className="text-xs text-accent font-mono mb-4">0{i + 1}</div>
              <h3 className="font-display text-2xl font-semibold mb-5">{g.title}</h3>
              <ul className="space-y-2">
                {g.skills.map((s) => (
                  <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SectionHead = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
  <div className="max-w-3xl">
    <div className="text-xs uppercase tracking-[0.25em] text-accent font-mono mb-4">{eyebrow}</div>
    <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
      {title}
    </h2>
    {sub && <p className="mt-5 text-lg text-muted-foreground max-w-xl">{sub}</p>}
  </div>
);
