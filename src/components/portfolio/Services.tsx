import { SectionHead } from "./Skills";
import { Code2, Layers, Mic, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-stack development",
    desc: "End-to-end product builds across MERN and .NET — from architecture decisions to pixel-perfect interfaces.",
  },
  {
    icon: Layers,
    title: "Engineering leadership",
    desc: "Tech strategy, code reviews, and team mentoring. I help engineering teams ship faster without breaking things.",
  },
  {
    icon: Sparkles,
    title: "Product consulting",
    desc: "From rough idea to validated MVP. I partner with founders to translate vision into scalable technical reality.",
  },
  {
    icon: Mic,
    title: "Public speaking & workshops",
    desc: "Talks, panels, and hands-on workshops on modern web, career growth, and the craft of engineering.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <SectionHead
          eyebrow="04 — How I help"
          title="Services."
          sub="Whether you need a thinking partner, a builder, or a voice on stage — here's how we can collaborate."
        />

        <div className="grid md:grid-cols-2 gap-px mt-16 bg-border rounded-sm overflow-hidden">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background p-8 md:p-10 hover:bg-cream transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-12 w-12 rounded-sm bg-ink text-cream flex items-center justify-center group-hover:bg-accent transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-muted-foreground group-hover:text-accent transition-colors text-xl">↗</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
