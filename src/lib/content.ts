export const ACCENT = "#6fd08c";
export const display = "'Space Grotesk', sans-serif";

export type Lang = "en" | "es";

export interface Strings {
  nav: { about: string; work: string; contact: string };
  hero: { eyebrow: string; pre: string; hi: string; post: string; sub: string; ctaWork: string; ctaContact: string };
  stats: { num: string; label: string }[];
  about: { eyebrow: string; lead: string; panels: { t: string; d: string }[] };
  work: { eyebrow: string; heading: string; start: string; roleWord: string; resultsWord: string; discuss: string; watch: string; photoHint: string };
  timeline: { eyebrow: string; heading: string };
  contact: {
    eyebrow: string; heading: string; sub: string; avail1: string; avail2: string;
    form: { fullName: string; email: string; company: string; optional: string; reason: string; message: string };
    ph: { name: string; email: string; message: string };
    selectDefault: string; submit: string; privacy: string;
    successHeading: string; successText: string; sendAnother: string;
    reasons: { value: string; label: string }[];
    v: { name: string; emailReq: string; emailBad: string; reason: string; msgReq: string; msgShort: string };
  };
  footer: string;
}

export interface Project { industry: string; location: string; title: string; desc: string; role: string; skills: string[]; results: string }
export interface TimelineNode { place: string; meta: string; desc: string }

// Language-independent media for each project (index-aligned with PROJECTS).
export const PROJECT_MEDIA: { photo: string; video: string; alt: string }[] = [
  { photo: "/projects/queensland-real-estate.jpg", video: "#", alt: "Commercial real estate, Queensland" },
  { photo: "/projects/huacho-development.jpg", video: "#", alt: "Development site, Huacho, Peru" },
  { photo: "/projects/shield-fintech.jpg", video: "#", alt: "Shield fintech platform" },
  { photo: "/projects/maywei-electronics.jpg", video: "#", alt: "Maywei wholesale electronics" },
  { photo: "/projects/fitness-events.jpg", video: "#", alt: "Gym and fitness events" },
];

export const STR: Record<Lang, Strings> = {
  en: {
    nav: { about: "About", work: "Work", contact: "Contact" },
    hero: {
      eyebrow: "Global Business Development",
      pre: "I build ", hi: "opportunities", post: " across borders.",
      sub: "Peruvian-Australian business development professional connecting real estate, fintech, international trade, and emerging markets across Australia, the United States, and Latin America.",
      ctaWork: "View my work", ctaContact: "Get in touch",
    },
    stats: [
      { num: "12+", label: "Years across business, sales & operations" },
      { num: "3", label: "Continents worked across" },
      { num: "4", label: "Industries navigated" },
    ],
    about: {
      eyebrow: "01 — About",
      lead: "I'm a Peruvian-Australian business development professional with six years in real estate and property operations across Australia, followed by two years in Miami working in fintech and money services.",
      panels: [
        { t: "Background", d: "Six years in real estate, valuation, leasing, and property development across Queensland, Australia and Huacho, Peru — then two years in Miami in fintech and cross-border money services." },
        { t: "Strengths", d: "Relationship building, cross-cultural communication, and sales — with a knack for turning complex financial products into practical solutions clients actually use." },
        { t: "Approach", d: "Direct and hands-on. I focus on understanding the client's real problem first, then create a clear, honest path forward — no jargon, no filler." },
        { t: "Focus areas", d: "Real estate, stablecoins, cross-border payments, and building better financial access for international businesses." },
      ],
    },
    work: {
      eyebrow: "02 — Selected projects", heading: "Selected projects.",
      start: "Start a conversation →", roleWord: "Role ·", resultsWord: "Results", discuss: "Discuss this work →", watch: "Watch video", photoHint: "Add a photo",
    },
    timeline: { eyebrow: "03 — Career path", heading: "An international career." },
    contact: {
      eyebrow: "04 — Contact", heading: "Let's build something worth doing.",
      sub: "Have a project, a partnership, or a hard problem in real estate, fintech, or cross-border trade? Tell me what you're working on.",
      avail1: "Available for new opportunities", avail2: "Based in Miami & Lima · Working globally",
      form: { fullName: "Full name", email: "Email", company: "Company", optional: "(optional)", reason: "Reason for contacting", message: "Message" },
      ph: { name: "Jane Doe", email: "jane@company.com", message: "Tell me what you're working on…" },
      selectDefault: "Select a reason…", submit: "Send message",
      privacy: "Your details are validated and stored securely. They're only used to respond to your inquiry.",
      successHeading: "Message received.", successText: "Thanks for reaching out. I'll get back to you shortly.", sendAnother: "Send another",
      reasons: [
        { value: "Business opportunity", label: "Business opportunity" },
        { value: "Real estate inquiry", label: "Real estate inquiry" },
        { value: "Fintech / payments", label: "Fintech / payments" },
        { value: "Partnership", label: "Partnership" },
        { value: "Other", label: "Other" },
      ],
      v: { name: "Please enter your full name.", emailReq: "Please enter your email address.", emailBad: "Please enter a valid email address.", reason: "Please select a reason.", msgReq: "Please enter a message.", msgShort: "Please add a little more detail (10+ characters)." },
    },
    footer: "Global Business Development",
  },
  es: {
    nav: { about: "Sobre mí", work: "Trabajo", contact: "Contacto" },
    hero: {
      eyebrow: "Desarrollo de Negocios Global",
      pre: "Construyo ", hi: "oportunidades", post: " sin fronteras.",
      sub: "Profesional de desarrollo de negocios peruano-australiano que conecta el sector inmobiliario, fintech, el comercio internacional y los mercados emergentes en Australia, Estados Unidos y América Latina.",
      ctaWork: "Ver mi trabajo", ctaContact: "Hablemos",
    },
    stats: [
      { num: "12+", label: "Años en negocios, ventas y operaciones" },
      { num: "3", label: "Continentes donde he trabajado" },
      { num: "4", label: "Industrias exploradas" },
    ],
    about: {
      eyebrow: "01 — Sobre mí",
      lead: "Soy un profesional de desarrollo de negocios peruano-australiano con seis años en el sector inmobiliario y operaciones de propiedad en Australia, seguidos de dos años en Miami trabajando en fintech y servicios financieros.",
      panels: [
        { t: "Antecedentes", d: "Seis años en bienes raíces, valuación, arrendamiento y desarrollo inmobiliario en Queensland, Australia y Huacho, Perú — y dos años en Miami en fintech y servicios de dinero transfronterizos." },
        { t: "Fortalezas", d: "Construcción de relaciones, comunicación intercultural y ventas — con la habilidad de convertir productos financieros complejos en soluciones prácticas que los clientes realmente usan." },
        { t: "Enfoque", d: "Directo y práctico. Primero entiendo el problema real del cliente y luego creo un camino claro y honesto — sin jerga, sin relleno." },
        { t: "Áreas de interés", d: "Bienes raíces, stablecoins, pagos transfronterizos y mejorar el acceso financiero para empresas internacionales." },
      ],
    },
    work: {
      eyebrow: "02 — Proyectos", heading: "Proyectos seleccionados.",
      start: "Iniciar una conversación →", roleWord: "Rol ·", resultsWord: "Resultados", discuss: "Hablar de este trabajo →", watch: "Ver video", photoHint: "Añade una foto",
    },
    timeline: { eyebrow: "03 — Trayectoria", heading: "Una carrera internacional." },
    contact: {
      eyebrow: "04 — Contacto", heading: "Construyamos algo que valga la pena.",
      sub: "¿Tienes un proyecto, una alianza o un problema difícil en bienes raíces, fintech o comercio transfronterizo? Cuéntame en qué estás trabajando.",
      avail1: "Disponible para nuevas oportunidades", avail2: "En Miami y Lima · Trabajando globalmente",
      form: { fullName: "Nombre completo", email: "Correo electrónico", company: "Empresa", optional: "(opcional)", reason: "Motivo de contacto", message: "Mensaje" },
      ph: { name: "Juan Pérez", email: "juan@empresa.com", message: "Cuéntame en qué estás trabajando…" },
      selectDefault: "Selecciona un motivo…", submit: "Enviar mensaje",
      privacy: "Tus datos se validan y almacenan de forma segura. Solo se usan para responder a tu consulta.",
      successHeading: "Mensaje recibido.", successText: "Gracias por escribir. Te responderé pronto.", sendAnother: "Enviar otro",
      reasons: [
        { value: "Business opportunity", label: "Oportunidad de negocio" },
        { value: "Real estate inquiry", label: "Consulta inmobiliaria" },
        { value: "Fintech / payments", label: "Fintech / pagos" },
        { value: "Partnership", label: "Alianza" },
        { value: "Other", label: "Otro" },
      ],
      v: { name: "Por favor ingresa tu nombre completo.", emailReq: "Por favor ingresa tu correo electrónico.", emailBad: "Por favor ingresa un correo válido.", reason: "Por favor selecciona un motivo.", msgReq: "Por favor ingresa un mensaje.", msgShort: "Por favor añade más detalle (10+ caracteres)." },
    },
    footer: "Desarrollo de Negocios Global",
  },
};

export const PROJECTS: Record<Lang, Project[]> = {
  en: [
    { industry: "Real Estate", location: "Queensland, Australia", title: "Property Management & Leasing Operations", desc: "Property management, commercial sales and leasing, and residential development across Queensland — the foundation of my client and negotiation experience.", role: "Property & Operations", skills: ["Management", "Valuation", "Leasing", "Sales"], results: "Closed landmark deals including a $10.6M development site (Stones Corner), a $4.63M Woolloongabba showroom and a $3.52M childcare site (Yeronga), and supported the $63.5M sale of 241 Adelaide St, Brisbane CBD." },
    { industry: "Real Estate Dev", location: "Huacho, Peru", title: "Development & Investment", desc: "Involvement in local development, commercial concepts, land use, and investment opportunities in Huacho, Peru.", role: "Development & Investment", skills: ["Land Use", "Commercial Concepts", "Investment"], results: "Feasibility, land-use and commercial-concept work on local development and investment opportunities in the Huacho market." },
    { industry: "FinTech", location: "Miami, USA", title: "Shield", desc: "Business development for stablecoin payments, cross-border transactions, business banking, and international B2B financial infrastructure.", role: "Business Development", skills: ["Stablecoins", "Cross-border", "B2B", "Banking"], results: "Activated new cross-border clients across LATAM and APAC — moving prospects from KYB through to their first live transaction." },
    { industry: "Wholesale Electronics", location: "International", title: "Maywei", desc: "International electronics sourcing, wholesale sales, distribution, and client relationship management across global markets.", role: "Sales & Distribution", skills: ["Sourcing", "Wholesale", "Distribution", "Client Relations"], results: "Grew the customer base from 2 to 120+ and drove $10M+ turnover in 12 months, with orders regularly exceeding $20K weekly." },
    { industry: "Fitness & Events", location: "Community", title: "Gym & Event Operations", desc: "Gym operations, community building, and organizing fitness seminars and events — including seminars involving Mat Fraser.", role: "Operations & Events", skills: ["Operations", "Community", "Events"], results: "Built and exited a multi-disciplinary allied-health gym — partnering with GPs and physios, plus CrossFit coaching and seminars." },
  ],
  es: [
    { industry: "Bienes Raíces", location: "Queensland, Australia", title: "Gestión y Operaciones Inmobiliarias", desc: "Gestión de propiedades, valuación, arrendamiento y operaciones residenciales en Queensland — la base de mi experiencia en clientes y negociación.", role: "Propiedad y Operaciones", skills: ["Gestión", "Valuación", "Arrendamiento", "Ops. Residenciales"], results: "Cerró operaciones destacadas: un sitio de desarrollo de $10.6M (Stones Corner), un showroom de $4.63M en Woolloongabba y un sitio de guardería de $3.52M (Yeronga), y apoyó la venta de $63.5M de 241 Adelaide St, Brisbane CBD." },
    { industry: "Desarrollo Inmobiliario", location: "Huacho, Perú", title: "Desarrollo e Inversión", desc: "Participación en desarrollo local, conceptos comerciales, uso de suelo y oportunidades de inversión en Huacho, Perú.", role: "Desarrollo e Inversión", skills: ["Uso de Suelo", "Conceptos Comerciales", "Inversión"], results: "Trabajo de factibilidad, uso de suelo y conceptos comerciales sobre desarrollo local y oportunidades de inversión en el mercado de Huacho." },
    { industry: "FinTech", location: "Miami, EE. UU.", title: "Shield", desc: "Desarrollo de negocios para pagos con stablecoins, transacciones transfronterizas, banca empresarial e infraestructura financiera B2B internacional.", role: "Desarrollo de Negocios", skills: ["Stablecoins", "Transfronterizo", "B2B", "Banca"], results: "Activación de nuevos clientes transfronterizos en LATAM y APAC — llevando prospectos desde el KYB hasta su primera transacción." },
    { industry: "Electrónica Mayorista", location: "Internacional", title: "Maywei", desc: "Abastecimiento internacional de electrónicos, ventas mayoristas, distribución y gestión de relaciones con clientes en mercados globales.", role: "Ventas y Distribución", skills: ["Abastecimiento", "Mayorista", "Distribución", "Relaciones con Clientes"], results: "Creció la base de clientes de 2 a más de 120 y generó más de $10M de facturación en 12 meses, con pedidos que superaban los $20K semanales." },
    { industry: "Fitness y Eventos", location: "Comunidad", title: "Operaciones de Gimnasio y Eventos", desc: "Operaciones de gimnasio, construcción de comunidad y organización de seminarios y eventos de fitness — incluyendo seminarios con Mat Fraser.", role: "Operaciones y Eventos", skills: ["Operaciones", "Comunidad", "Eventos"], results: "Creó y vendió un gimnasio multidisciplinario de salud aliada — en alianza con médicos y fisioterapeutas, además de coaching y seminarios de CrossFit." },
  ],
};

export const TIMELINE: Record<Lang, TimelineNode[]> = {
  en: [
    { place: "Gold Coast, Australia", meta: "2010–2016 · Foundations", desc: "Bond University — Bachelor of Commerce (Finance), later a Master of Valuation. Founded and exited Body Dynamics Training, a multi-disciplinary allied-health gym. Former Peru Rugby 7s player." },
    { place: "Brisbane, Australia", meta: "2016–2022 · Commercial real estate", desc: "Six years across the full asset lifecycle — McGees Property, CBRE, Ray White Commercial and Pellicano. Sales, leasing, facilities and development; personally sold and leased AUD 10M+ and supported deals up to $63.5M." },
    { place: "Miami, USA", meta: "2022–2024 · Maywei (Consumer Tech)", desc: "Head of Sales, Business Development & Equity Partner (exited). Grew the customer base from 2 to 120+ in 12 months, built the CRM and LATAM strategy, and drove $10M+ turnover across cross-border transactions." },
    { place: "South Florida, USA", meta: "2024–2025 · Ventures & operations", desc: "Business brokering and commercial real estate at WestVest; property management of a 204-unit Blackstone affordable-housing portfolio with FPI; and freelance video, copywriting and creative direction for Miami F&B venues." },
    { place: "Lima, Peru", meta: "2025 · International trade", desc: "Head of International Sales at Artidoro Rodriguez Café, a pioneering Peruvian specialty-coffee brand — expanding distribution across Peru and into the United States." },
    { place: "Miami · APAC", meta: "2025–Present · Shield (FinTech)", desc: "International Sales Manager at Shield, an a16z-backed, FinCEN-registered money-services business. Lead generation and client activation for stablecoin payments — same-day USDT-to-USD settlement for wholesalers and cross-border traders." },
  ],
  es: [
    { place: "Gold Coast, Australia", meta: "2010–2016 · Fundamentos", desc: "Bond University — Bachillerato en Comercio (Finanzas) y luego una Maestría en Valuación. Fundó y vendió Body Dynamics Training, un gimnasio multidisciplinario de salud aliada. Exjugador de Rugby 7 de Perú." },
    { place: "Brisbane, Australia", meta: "2016–2022 · Bienes raíces comerciales", desc: "Seis años en todo el ciclo de vida del activo — McGees Property, CBRE, Ray White Commercial y Pellicano. Ventas, arrendamiento, facilities y desarrollo; vendió y arrendó más de AUD 10M y apoyó operaciones de hasta $63.5M." },
    { place: "Miami, EE. UU.", meta: "2022–2024 · Maywei (Tecnología)", desc: "Jefe de Ventas, Desarrollo de Negocios y Socio (retirado). Creció la base de clientes de 2 a más de 120 en 12 meses, construyó el CRM y la estrategia LATAM, y generó más de $10M de facturación en transacciones transfronterizas." },
    { place: "Sur de Florida, EE. UU.", meta: "2024–2025 · Iniciativas y operaciones", desc: "Corretaje de negocios e inmobiliaria comercial en WestVest; gestión de una cartera de 204 unidades de vivienda asequible de Blackstone con FPI; y video, copywriting y dirección creativa freelance para locales gastronómicos de Miami." },
    { place: "Lima, Perú", meta: "2025 · Comercio internacional", desc: "Jefe de Ventas Internacionales en Artidoro Rodriguez Café, una marca pionera de café peruano de especialidad — expandiendo la distribución en Perú y hacia Estados Unidos." },
    { place: "Miami · APAC", meta: "2025–Presente · Shield (FinTech)", desc: "International Sales Manager en Shield, un negocio de servicios de dinero registrado ante FinCEN y respaldado por a16z. Generación de leads y activación de clientes para pagos con stablecoins — liquidación USDT a USD el mismo día para mayoristas y comerciantes transfronterizos." },
  ],
};
