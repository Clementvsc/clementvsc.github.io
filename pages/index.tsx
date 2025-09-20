import React from 'react'

type Theme = 'light' | 'dark' | 'aurora'

function useTheme() {
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof document === 'undefined') return 'light'
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    root.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const cycle = () => setTheme(t => (t === 'light' ? 'dark' : t === 'dark' ? 'aurora' : 'light'))
  return { theme, setTheme, cycle }
}

const accent = '[--accent:theme(colors.blue.500)] [--from:#60a5fa] [--to:#22d3ee] data-[theme=dark]:[--accent:theme(colors.emerald.400)] data-[theme=dark]:[--from:#34d399] data-[theme=dark]:[--to:#06b6d4] data-[theme=aurora]:[--accent:#a78bfa] data-[theme=aurora]:[--from:#a78bfa] data-[theme=aurora]:[--to:#f472b6]'

const Section: React.FC<React.PropsWithChildren<{ id: string; title?: string; subtitle?: string }>> = ({ id, title, subtitle, children }) => (
  <section id={id} className="mx-auto max-w-2xl flex flex-col items-center justify-center text-center px-4 py-16 gap-6">
    {title && (
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-400">{subtitle}</p>}
      </div>
    )}
    {children}
  </section>
)

const Nav: React.FC = () => {
  const { cycle } = useTheme()
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className={`sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800/60 ${accent}`}>
      <nav className="mx-auto max-w-2xl px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex-1" />
          <a href="#home" className="select-none">
            <span className="inline-flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_24px_var(--from)]" />
              <span className="font-semibold tracking-tight">MyPortfolio</span>
            </span>
          </a>
          <div className="flex-1 flex items-center justify-end gap-2">
            <div className="hidden sm:flex items-center gap-4 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-600 hover:text-[var(--accent)] dark:text-slate-300 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <button aria-label="Switch theme" onClick={cycle} className="rounded-md border border-slate-200 dark:border-slate-700 px-2 py-1 text-sm text-slate-700 dark:text-slate-200 hover:border-[var(--accent)] hover:text-[var(--accent)]">Theme</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Hero: React.FC = () => (
  <Section id="home">
    <div className={`relative ${accent}`}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--from)]/25 via-transparent to-transparent blur-2xl" />
      <div className="mx-auto flex flex-col items-center justify-center text-center gap-5">
        <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-[var(--from)] to-[var(--to)] p-[2px]">
          <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 grid place-items-center text-slate-500">👤</div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Your Name</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl">Building delightful, accessible web experiences with React, TypeScript, and design systems.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium shadow-sm hover:opacity-95">View Projects</a>
          <a href="#contact" className="px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-[var(--accent)]">Contact Me</a>
        </div>
      </div>
    </div>
  </Section>
)

const About: React.FC = () => (
  <Section id="about" title="About" subtitle="A brief introduction">
    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
      I am a frontend engineer focused on type-safe, accessible interfaces. I enjoy building clean UIs, component libraries, and performant apps powered by modern tooling.
    </p>
  </Section>
)

const Badge: React.FC<React.PropsWithChildren<{ tone?: 'sky' | 'blue' | 'neutral' | 'cyan' | 'emerald' | 'purple' }>> = ({ children, tone = 'neutral' }) => {
  const tones: Record<string, string> = {
    sky: 'text-sky-900 dark:text-sky-100 bg-sky-100/70 dark:bg-sky-900/30 border-sky-200/60 dark:border-sky-800/60',
    blue: 'text-blue-900 dark:text-blue-100 bg-blue-100/70 dark:bg-blue-900/30 border-blue-200/60 dark:border-blue-800/60',
    neutral: 'text-slate-900 dark:text-slate-100 bg-slate-100/70 dark:bg-slate-800/30 border-slate-200/60 dark:border-slate-700/60',
    cyan: 'text-cyan-900 dark:text-cyan-100 bg-cyan-100/70 dark:bg-cyan-900/30 border-cyan-200/60 dark:border-cyan-800/60',
    emerald: 'text-emerald-900 dark:text-emerald-100 bg-emerald-100/70 dark:bg-emerald-900/30 border-emerald-200/60 dark:border-emerald-800/60',
    purple: 'text-purple-900 dark:text-purple-100 bg-purple-100/70 dark:bg-purple-900/30 border-purple-200/60 dark:border-purple-800/60',
  }
  return <span className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border ${tones[tone]}`}>{children}</span>
}

const Skills: React.FC = () => (
  <Section id="skills" title="Skills" subtitle="A snapshot of my toolkit">
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <Badge tone="sky">🧭 TypeScript</Badge>
      <Badge tone="blue">⚛️ React</Badge>
      <Badge tone="neutral">⏭️ Next.js</Badge>
      <Badge tone="cyan">🌊 Tailwind</Badge>
      <Badge tone="emerald">🟩 Node.js</Badge>
      <Badge tone="purple">🧪 Testing</Badge>
    </div>
  </Section>
)

const ProjectCard: React.FC<{ title: string; desc: string; tags: string[]; live?: string; gh?: string }> = ({ title, desc, tags, live, gh }) => (
  <div className={`group rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white/60 dark:bg-slate-900/40 backdrop-blur ${accent}`}>
    <div className="flex items-start justify-between">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--from)]" />
    </div>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="text-xs px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">{t}</span>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-3">
      {live && <a href={live} className="px-3 py-1.5 rounded-md bg-[var(--accent)] text-white text-sm">Live</a>}
      {gh && <a href={gh} className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-200">GitHub</a>}
    </div>
  </div>
)

const Projects: React.FC = () => (
  <Section id="projects" title="Projects" subtitle="Selected work">
    <div className="grid gap-4 w-full">
      <ProjectCard title="Design System Starter" desc="Composable UI primitives with theming and tokens." tags={["React", "TypeScript", "Storybook"]} live="#" gh="#" />
      <ProjectCard title="Analytics Dashboard" desc="Next.js dashboard with charts, tables, and dark mode." tags={["Next.js", "Tailwind", "Charts"]} live="#" gh="#" />
    </div>
  </Section>
)

const Contact: React.FC = () => (
  <Section id="contact" title="Contact" subtitle="Let's build something great">
    <form className="w-full grid gap-3 text-left">
      <input aria-label="Name" placeholder="Name" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
      <input aria-label="Email" placeholder="Email" type="email" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
      <textarea aria-label="Message" placeholder="Message" rows={4} className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
      <div className="flex items-center justify-center gap-3">
        <button type="submit" className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium">Send</button>
        <a href="mailto:you@example.com" className="px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700">Email</a>
      </div>
    </form>
  </Section>
)

const Footer: React.FC = () => (
  <footer className="mx-auto max-w-2xl px-4 py-10 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</footer>
)

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
