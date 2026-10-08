import { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Cloud, Code2, Cpu, Layers, Mail, MapPin, Menu, PenTool, Sparkles, X,
  Landmark, Users, Bot, Repeat, Database,
} from 'lucide-react';
import { COPY, initialLang, saveLang, type Lang } from './copy';

const EMAIL = 'contact@ddweb.ro';

const NAV_HREFS = ['#services', '#work', '#investors', '#contact'];

const STACK = ['Software Development', 'SaaS', 'Cloud Native', 'Artificial Intelligence', 'IoT & Edge', 'DevOps', 'API Platforms', 'Data Engineering', 'Product Design', 'Automation'];

const CLIENTS = [
  { name: 'The Telegraph', className: 'font-display text-3xl tracking-tight' },
  { name: 'hedvig', className: 'font-semibold text-3xl lowercase tracking-tight' },
  { name: 'Vodafone', className: 'font-bold text-3xl tracking-tight' },
  { name: 'Superbet', className: 'font-extrabold italic text-3xl tracking-tight' },
];

const SERVICE_ICONS = [Code2, Layers, Cloud, Sparkles, Cpu, Database, PenTool];
const WIDE_SERVICES = [0, 6];

const WORK = [
  { url: 'https://civida.ro', host: 'civida.ro', image: '/portfolio/civida.webp' },
  { url: 'https://primariasanduleni.ro', host: 'primariasanduleni.ro', image: '/portfolio/sanduleni.webp' },
  { url: 'https://ateliermurra.ro', host: 'ateliermurra.ro', image: '/portfolio/murra.webp' },
  { url: 'https://mast.ro', host: 'mast.ro', image: '/portfolio/mast.webp' },
];

const THESIS_ICONS = [Landmark, Repeat, Bot, Users];

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('.spotlight');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    window.addEventListener('pointermove', onMove);
    return () => { io.disconnect(); window.removeEventListener('pointermove', onMove); };
  }, []);
}

function Terminal({ lines }: { lines: string[] }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown(shown + 1), shown === 0 ? 900 : 650);
    return () => clearTimeout(t);
  }, [shown, lines.length]);
  return (
    <div className="float-slow rounded-2xl border hairline bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-violet-500/10 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b hairline">
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="ml-3 text-xs text-white/40 font-mono">ddweb — production</span>
      </div>
      <pre className="p-5 text-[13px] leading-7 font-mono text-white/70 min-h-[200px]">
        {lines.slice(0, shown).map((line, i) => (
          <div key={i} className={line.startsWith('→') ? 'text-[#3ee6c1]' : line.startsWith('✓') ? 'text-white/80' : 'text-white'}>
            {line}
            {i === shown - 1 && shown < lines.length && <span className="caret" />}
          </div>
        ))}
        {shown >= lines.length && <span className="caret" />}
      </pre>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border hairline bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
      <span className="h-1.5 w-1.5 rounded-full bg-[#3ee6c1]" />
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string[]; text?: string }) {
  return (
    <div className="reveal max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
        {title[0]} <span className="font-display italic font-normal text-gradient">{title[1]}</span>
      </h2>
      {text && <p className="mt-6 text-lg text-white/55 leading-relaxed">{text}</p>}
    </div>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex rounded-full border hairline p-1 text-xs font-semibold" role="group" aria-label="Language">
      {(['en', 'ro'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 uppercase transition ${lang === l ? 'bg-white text-ink' : 'text-white/60 hover:text-white'}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function App() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLangState] = useState<Lang>(initialLang);
  const t = COPY[lang];
  const nav = t.nav.map((label, i) => [label, NAV_HREFS[i]]);

  const setLang = (l: Lang) => { setLangState(l); saveLang(l); };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.title;
  }, [lang, t.title]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="grain min-h-screen overflow-x-clip">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-ink/80 backdrop-blur-xl border-b hairline' : ''}`}>
        <nav className="container flex h-20 items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3" aria-label="DD Web">
            <img src="/favicon.svg" alt="" className="h-9 w-9" />
            <span className="text-lg font-semibold tracking-tight">DD Web</span>
          </a>
          <div className="hidden md:flex items-center gap-9 text-sm text-white/60">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <LangSwitch lang={lang} setLang={setLang} />
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-white/90 transition">
              {t.navCta} <ArrowRight size={16} />
            </a>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <LangSwitch lang={lang} setLang={setLang} />
            <button className="p-2" aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden container pb-6 flex flex-col gap-4 text-lg">
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-white/80">{label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section className="relative min-h-screen flex items-center pt-28 pb-20">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="aurora h-[38rem] w-[38rem] -left-40 -top-40 bg-[#5b4bff]" />
            <div className="aurora h-[30rem] w-[30rem] right-[-10rem] top-20 bg-[#0fb8a0]" style={{ animationDelay: '-6s' }} />
            <div className="aurora h-[26rem] w-[26rem] left-1/3 bottom-[-12rem] bg-[#b04bff]" style={{ animationDelay: '-11s' }} />
            <div className="absolute inset-0 grid-fade" />
          </div>
          <div className="container relative grid lg:grid-cols-[1.25fr_1fr] gap-16 items-center">
            <div>
              <div className="reveal"><Eyebrow>{t.heroEyebrow}</Eyebrow></div>
              <h1 className="reveal mt-8 text-5xl sm:text-6xl lg:text-[5.4rem] font-semibold tracking-tight leading-[0.98]" style={delay(120)}>
                {t.heroTitle[0]}
                <br />
                {t.heroTitle[1]} <span className="font-display italic font-normal text-gradient">{t.heroTitle[2]}</span>
              </h1>
              <p className="reveal mt-8 max-w-xl text-lg md:text-xl text-white/60 leading-relaxed" style={delay(240)}>{t.heroText}</p>
              <div className="reveal mt-10 flex flex-wrap gap-4" style={delay(360)}>
                <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink hover:bg-white/90 transition">
                  {t.heroPortfolio} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#investors" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white hover:bg-white/5 transition">
                  {t.heroInvestors}
                </a>
              </div>
            </div>
            <div className="reveal hidden md:block" style={delay(300)}>
              <Terminal key={lang} lines={t.terminal} />
            </div>
          </div>
        </section>

        <div className="border-y hairline py-6 overflow-hidden" aria-hidden="true">
          <div className="marquee gap-12 text-white/35 text-sm font-medium uppercase tracking-[0.22em]">
            {[...STACK, ...STACK].map((item, i) => (
              <span key={i} className="flex items-center gap-12">{item}<span className="text-[#8b7bff]">✦</span></span>
            ))}
          </div>
        </div>

        <section className="py-24">
          <div className="container">
            <p className="reveal text-center text-sm uppercase tracking-[0.2em] text-white/40">{t.clientsLabel}</p>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border hairline bg-white/[0.06]">
              {CLIENTS.map((c, i) => (
                <div key={i} className="reveal bg-ink px-6 py-10 text-center group" style={delay(i * 90)}>
                  <div className={`${c.className} text-white/70 group-hover:text-white transition-colors`}>{c.name}</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.18em] text-white/35">{t.clientsWhere[i]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24 scroll-mt-20">
          <div className="container">
            <SectionTitle eyebrow={t.servicesEyebrow} title={t.servicesTitle} text={t.servicesText} />
            <div className="mt-16 grid md:grid-cols-3 gap-5">
              {t.services.map(([title, text], i) => {
                const Icon = SERVICE_ICONS[i];
                return (
                  <div key={i} className={`reveal spotlight rounded-3xl border hairline bg-white/[0.025] p-8 hover:border-white/15 transition-colors ${WIDE_SERVICES.includes(i) ? 'md:col-span-2' : ''}`} style={delay((i % 3) * 90)}>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b7bff]/25 to-[#3ee6c1]/20 border hairline">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h3>
                    <p className="mt-3 text-white/55 leading-relaxed max-w-xl">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="py-24 scroll-mt-20">
          <div className="container">
            <SectionTitle eyebrow={t.workEyebrow} title={t.workTitle} text={t.workText} />
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORK.map((w, i) => {
                const item = t.work[i];
                const featured = i === 0;
                return (
                  <a key={i} href={w.url} target="_blank" rel="noopener" className={`reveal group spotlight block rounded-3xl border hairline bg-white/[0.025] p-3 hover:border-white/20 transition-colors ${featured ? 'md:col-span-2 lg:col-span-3' : ''}`} style={delay((i % 3) * 120)}>
                    <div className={`grid ${featured ? 'lg:grid-cols-[1.4fr_1fr]' : ''} gap-6 items-center`}>
                      <div className="overflow-hidden rounded-2xl border hairline bg-black">
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b hairline">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                          <span className="ml-3 text-[11px] text-white/40 font-mono">{w.host}</span>
                        </div>
                        <img src={w.image} alt={`${t.screenshot} ${w.host}`} loading="lazy" width={1200} height={750} className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                      </div>
                      <div className="px-4 pb-5 pt-2 lg:py-6">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="rounded-full border hairline px-3 py-1 text-xs text-white/55">{tag}</span>
                          ))}
                        </div>
                        <h3 className="mt-5 flex items-center justify-between gap-4 text-2xl md:text-3xl font-semibold tracking-tight">
                          {item.name}
                          <ArrowUpRight className="shrink-0 text-white/40 transition-all group-hover:text-[#3ee6c1] group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </h3>
                        <p className="mt-3 text-white/55 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <SectionTitle eyebrow={t.processEyebrow} title={t.processTitle} />
            <div className="mt-16 grid md:grid-cols-4 gap-px rounded-3xl overflow-hidden border hairline bg-white/[0.06]">
              {t.steps.map(([title, text], i) => (
                <div key={i} className="reveal bg-ink p-8" style={delay(i * 100)}>
                  <div className="font-display italic text-5xl text-gradient">0{i + 1}</div>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-white/55 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="investors" className="py-24 scroll-mt-20">
          <div className="container">
            <div className="relative overflow-hidden rounded-[2rem] border hairline bg-gradient-to-br from-[#151230] via-ink to-[#071a17] p-8 md:p-16">
              <div className="aurora h-96 w-96 -right-20 -top-24 bg-[#5b4bff] opacity-40" aria-hidden="true" />
              <div className="relative">
                <SectionTitle eyebrow={t.investorsEyebrow} title={t.investorsTitle} text={t.investorsText} />
                <div className="mt-14 grid sm:grid-cols-2 gap-5">
                  {t.thesis.map(([title, text], i) => {
                    const Icon = THESIS_ICONS[i];
                    return (
                      <div key={i} className="reveal rounded-2xl border hairline bg-white/[0.03] p-7" style={delay((i % 2) * 100)}>
                        <Icon className="text-[#3ee6c1]" size={24} />
                        <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                        <p className="mt-2 text-white/55 leading-relaxed">{text}</p>
                      </div>
                    );
                  })}
                </div>
                <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.investorsSubject)}`} className="reveal mt-12 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink hover:bg-white/90 transition">
                  {t.investorsCta} <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 scroll-mt-20">
          <div className="container grid lg:grid-cols-2 gap-16 items-end">
            <div className="reveal">
              <Eyebrow>{t.contactEyebrow}</Eyebrow>
              <h2 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1]">
                {t.contactTitle[0]}
                <br />
                <span className="font-display italic font-normal text-gradient">{t.contactTitle[1]}</span>
              </h2>
            </div>
            <div className="reveal grid gap-4" style={delay(150)}>
              <a href={`mailto:${EMAIL}`} className="group spotlight flex items-center justify-between rounded-2xl border hairline bg-white/[0.025] p-6 hover:border-white/20 transition-colors">
                <span className="flex items-center gap-4"><Mail className="text-[#3ee6c1]" /> <span className="text-lg font-medium">{EMAIL}</span></span>
                <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors" />
              </a>
              <div className="flex items-center gap-4 rounded-2xl border hairline p-6 text-white/60">
                <MapPin className="text-[#3ee6c1]" /> {t.location}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t hairline py-10">
        <div className="container flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-white/40">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="" className="h-7 w-7" />
            <span>© {new Date().getFullYear()} DD Web. {t.footer}</span>
          </div>
          <div className="flex gap-8">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
