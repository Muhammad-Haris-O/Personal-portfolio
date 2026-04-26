import portrait from "@/assets/haris-portrait.png";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="container relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              Lead Software Engineer · Speaker
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-balance">
              Building <em className="text-accent not-italic font-display italic">thoughtful</em> software, one stack at a time.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              I'm <span className="text-foreground font-medium">Muhammad Haris</span> — a self-taught engineer and tech enthusiast
              crafting full-stack experiences with the MERN stack and .NET. When I'm not shipping code, I'm on stage talking about it.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream text-sm font-medium hover:bg-accent transition-all hover:shadow-soft"
              >
                View my work
                <span aria-hidden>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:border-foreground transition-colors"
              >
                Get in touch
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8 text-sm">
              <Stat value="5+" label="Years building" />
              <div className="h-8 w-px bg-border" />
              <Stat value="40+" label="Projects shipped" />
              <div className="h-8 w-px bg-border" />
              <Stat value="20+" label="Talks given" />
            </div>
          </div>

          <div className="md:col-span-5 relative animate-fade-in">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -inset-6 bg-gradient-warm rounded-full blur-2xl opacity-70" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent/40 via-gold-soft/30 to-transparent" />
              <img
                src={portrait}
                alt="Muhammad Haris, lead software engineer"
                className="relative w-full h-full object-cover object-center rounded-full shadow-portrait ring-4 ring-cream"
                loading="eager"
              />
              <div className="absolute -bottom-4 -left-2 md:-left-6 bg-ink text-cream px-5 py-3 rounded-full shadow-soft">
                <div className="text-[10px] uppercase tracking-widest text-gold-soft">Currently</div>
                <div className="text-sm font-medium">Open to opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display text-2xl font-semibold">{value}</div>
    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
  </div>
);
