export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 grain relative overflow-hidden">
      <div className="container relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-mono mb-4">
              01 — About me
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1] tracking-tight">
              A curious engineer with a <em className="text-accent not-italic italic">storyteller's</em> heart.
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="text-foreground font-medium">Muhammad Haris</span> — a self-taught
              software engineer who fell in love with code and never looked back. Today I lead engineering
              teams building production systems across the <span className="text-foreground">MERN stack</span>{" "}
              and <span className="text-foreground">.NET</span>, balancing pixel-perfect frontends with robust,
              scalable backends.
            </p>
            <p>
              My approach is simple: write software the same way you'd write a good essay — clear, considered,
              and free of clutter. I care deeply about developer experience, maintainability, and shipping
              things people actually enjoy using.
            </p>
            <p>
              Beyond the keyboard, I'm a public speaker. I love stepping on stage to share what I've learned
              about engineering culture, modern web architecture, and the craft of building software that
              outlives the trend cycle.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <Detail label="Role" value="Lead Software Engineer" />
              <Detail label="Stack" value="MERN · .NET" />
              <Detail label="Speaking" value="Conferences & Meetups" />
              <Detail label="Approach" value="Self-taught · Always shipping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
    <div className="font-display text-base text-foreground">{value}</div>
  </div>
);
