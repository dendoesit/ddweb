export type Lang = 'en' | 'ro';

const en = {
  title: 'DD Web — Software Development, SaaS, Cloud, AI & IoT',
  nav: ['Services', 'Portfolio', 'Investors', 'Contact'],
  navCta: "Let's talk",
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  heroEyebrow: 'Software · SaaS · Cloud · AI · IoT',
  heroTitle: ['We build software', 'that', 'scales.'],
  heroText: 'A software engineering studio based in Bucharest. We build SaaS platforms, cloud applications, AI automation and IoT solutions, from the first idea to production.',
  heroPortfolio: 'See our work',
  heroInvestors: 'For investors',
  terminal: ['$ ddweb deploy --env production', '✓ optimized build', '✓ automated tests passed', '✓ cloud · eu-central', '→ live: civida.ro'],
  clientsLabel: 'Previous work · our team has shipped products for',
  clientsWhere: ['Media · UK', 'Insurtech · Sweden', 'Telecom · Romania', 'Gaming · UK'],
  servicesEyebrow: 'Services',
  servicesTitle: ['Technology built', 'for growth.'],
  servicesText: 'One team for the whole product lifecycle: strategy, design, engineering, infrastructure and operations.',
  services: [
    ['Software Development', 'Web and mobile apps, APIs and distributed systems, built to hold up in production under real traffic.'],
    ['SaaS Platforms', 'Multi-tenant products with subscriptions, roles, self-service onboarding and built-in analytics.'],
    ['Cloud & DevOps', 'Serverless, containers, CI/CD and monitoring, with infrastructure costs kept under control.'],
    ['AI & Automation', 'AI assistants, intelligent document processing and automations that take repetitive work out of operations.'],
    ['IoT & Edge', 'Sensors, gateways and real-time dashboards, from the device all the way to the cloud.'],
    ['Data & Analytics', 'Data pipelines, dashboards and reporting that turn daily activity into decisions.'],
    ['Product & UX Design', 'Research, prototypes and clear interfaces, designed for conversion and tested with real users.'],
  ],
  workEyebrow: 'Portfolio',
  workTitle: ['Live products,', 'used every day.'],
  workText: 'From platforms for public administration to local brands that sell better online.',
  work: [
    { name: 'Civida', tags: ['GovTech', 'SaaS'], text: 'Online forms platform for Romanian city halls. Citizens submit requests, attach documents and track their status without queuing at the counter.' },
    { name: 'Sănduleni City Hall', tags: ['Public sector', 'Portal'], text: 'Official website of the commune: online services, decision transparency, the local official bulletin and news for citizens.' },
    { name: 'Atelier Murra', tags: ['Brand', 'Local SEO'], text: 'Website for an embroidery studio: a categorized work catalog, local SEO and Lighthouse scores of 97–100.' },
    { name: 'MAST Windows & Façades', tags: ['Industry', 'SEO & Analytics'], text: 'Showcase platform for a façade company founded in 1997: project portfolio, technical SEO, domain migration and conversion tracking.' },
  ],
  screenshot: 'Screenshot of',
  processEyebrow: 'Process',
  processTitle: ['From idea to product,', 'no surprises.'],
  steps: [
    ['Discovery', 'We understand the problem, the users and the business model, and leave with a clear plan and budget.'],
    ['Design', 'Interactive prototypes and technical architecture, validated before the first line of code.'],
    ['Build', 'Short iterations with automated tests and a demo at every milestone.'],
    ['Launch & Scale', 'Launch, monitoring and continuous optimization as the product grows.'],
  ],
  investorsEyebrow: 'For investors',
  investorsTitle: ['Built for scale.', "And we're looking for partners."],
  investorsText: 'We combine our own SaaS products with the experience of a team that has worked inside international companies. We are looking for partners who want to grow with us.',
  thesis: [
    ['GovTech with a clear market', 'Civida digitizes the relationship between citizens and city halls. Romania has more than 3,000 city halls, and the platform replicates from one to the next.'],
    ['Recurring revenue', 'We build subscription SaaS products, not one-off projects: every new customer adds value to the platform.'],
    ['AI-first', 'We integrate AI models directly into workflows, from request triage to user assistance.'],
    ['Enterprise experience', 'The team has shipped software for media, insurtech, telecom and gaming, at the scale of international companies.'],
  ],
  investorsCta: 'Book a conversation',
  investorsSubject: 'Investment conversation — DD Web',
  contactEyebrow: 'Contact',
  contactTitle: ['Have a project?', "Let's build it."],
  location: 'Bucharest, Romania',
  footer: 'Software development, SaaS, cloud, AI & IoT.',
};

const ro: typeof en = {
  title: 'DD Web — Dezvoltare software, SaaS, Cloud, AI și IoT',
  nav: ['Servicii', 'Portofoliu', 'Investitori', 'Contact'],
  navCta: 'Hai să vorbim',
  menuOpen: 'Deschide meniul',
  menuClose: 'Închide meniul',
  heroEyebrow: 'Software · SaaS · Cloud · AI · IoT',
  heroTitle: ['Construim software', 'care', 'scalează.'],
  heroText: 'Studio de inginerie software din București. Dezvoltăm platforme SaaS, aplicații cloud, automatizări cu AI și soluții IoT, de la prima idee până în producție.',
  heroPortfolio: 'Vezi portofoliul',
  heroInvestors: 'Pentru investitori',
  terminal: ['$ ddweb deploy --env production', '✓ build optimizat', '✓ teste automate trecute', '✓ cloud · eu-central', '→ live: civida.ro'],
  clientsLabel: 'Previous work · echipa noastră a livrat produse pentru',
  clientsWhere: ['Media · UK', 'Insurtech · Suedia', 'Telecom · România', 'Gaming · UK'],
  servicesEyebrow: 'Servicii',
  servicesTitle: ['Tehnologie gândită', 'pentru creștere.'],
  servicesText: 'O singură echipă pentru tot ciclul de viață al produsului: strategie, design, dezvoltare, infrastructură și operare.',
  services: [
    ['Software Development', 'Aplicații web și mobile, API-uri și sisteme distribuite, construite să reziste în producție, la trafic real.'],
    ['SaaS Platforms', 'Produse multi-tenant cu abonamente, roluri, onboarding self-service și analytics integrat.'],
    ['Cloud & DevOps', 'Serverless, containere, CI/CD și monitorizare, cu costurile de infrastructură sub control.'],
    ['AI & Automatizare', 'Asistenți AI, procesare inteligentă de documente și automatizări care scot munca repetitivă din procese.'],
    ['IoT & Edge', 'Senzori, gateway-uri și dashboard-uri în timp real, de la dispozitiv până în cloud.'],
    ['Data & Analytics', 'Pipeline-uri de date, dashboard-uri și raportare care transformă activitatea zilnică în decizii.'],
    ['Product & UX Design', 'Cercetare, prototipuri și interfețe clare, gândite pentru conversie și testate cu utilizatori reali.'],
  ],
  workEyebrow: 'Portofoliu',
  workTitle: ['Produse live,', 'folosite zilnic.'],
  workText: 'De la platforme pentru administrația publică la branduri locale care vând mai bine online.',
  work: [
    { name: 'Civida', tags: ['GovTech', 'SaaS'], text: 'Portal de formulare online pentru primării. Cetățenii depun cereri, atașează documente și urmăresc statusul, fără drum la ghișeu.' },
    { name: 'Primăria Sănduleni', tags: ['Administrație publică', 'Portal'], text: 'Site-ul oficial al comunei: servicii online, transparență decizională, monitorul oficial local și știri pentru cetățeni.' },
    { name: 'Atelier Murra', tags: ['Brand', 'SEO local'], text: 'Site pentru un atelier de broderie din Bacău: catalog de lucrări pe categorii, SEO local și scoruri Lighthouse de 97–100.' },
    { name: 'Ferestre MAST', tags: ['Industrie', 'SEO & Analytics'], text: 'Platformă de prezentare pentru o firmă de fațade din 1997: portofoliu de lucrări, SEO tehnic, migrare de domeniu și tracking de conversii.' },
  ],
  screenshot: 'Captură de ecran',
  processEyebrow: 'Proces',
  processTitle: ['De la idee la produs,', 'fără surprize.'],
  steps: [
    ['Discovery', 'Înțelegem problema, utilizatorii și modelul de business. Ieșim cu un plan și un buget clar.'],
    ['Design', 'Prototipuri interactive și arhitectură tehnică, validate înainte de prima linie de cod.'],
    ['Build', 'Livrăm în iterații scurte, cu teste automate și demo la fiecare etapă.'],
    ['Launch & Scale', 'Lansare, monitorizare și optimizare continuă pe măsură ce produsul crește.'],
  ],
  investorsEyebrow: 'Pentru investitori',
  investorsTitle: ['Construim pentru scală.', 'Și căutăm parteneri.'],
  investorsText: 'Combinăm produse SaaS proprii cu experiența unei echipe care a lucrat în companii internaționale. Ne interesează parteneri care vor să crească împreună cu noi.',
  thesis: [
    ['GovTech cu piață clară', 'Civida digitalizează relația dintre cetățean și primărie. În România sunt peste 3.000 de primării, iar platforma se replică de la una la alta.'],
    ['Venituri recurente', 'Construim produse SaaS pe abonament, nu proiecte unice: fiecare client nou crește valoarea platformei.'],
    ['AI-first', 'Integrăm modele AI direct în fluxurile de lucru, de la triajul cererilor până la asistența pentru utilizatori.'],
    ['Experiență enterprise', 'Echipa a livrat software pentru media, insurtech, telecom și gaming, la scara companiilor internaționale.'],
  ],
  investorsCta: 'Programează o discuție',
  investorsSubject: 'Discuție investiție DD Web',
  contactEyebrow: 'Contact',
  contactTitle: ['Ai un proiect?', 'Hai să-l construim.'],
  location: 'București, România',
  footer: 'Software development, SaaS, cloud, AI & IoT.',
};

export const COPY = { en, ro };

export function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'ro') return saved;
  } catch { /* storage blocked */ }
  return navigator.language.toLowerCase().startsWith('ro') ? 'ro' : 'en';
}

export function saveLang(lang: Lang) {
  try { localStorage.setItem('lang', lang); } catch { /* storage blocked */ }
}
