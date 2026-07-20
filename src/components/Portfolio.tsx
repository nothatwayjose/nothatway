import { display } from "@/lib/theme";

type Project = { industry: string; location: string; title: string; desc: string; role: string; skills: string[]; results: string };

const projects: Project[] = [
  { industry: "Real Estate", location: "Queensland, Australia", title: "Property Management & Operations", desc: "Property management, valuation, leasing, and residential operations across Queensland — the foundation of my client and negotiation experience.", role: "Property & Operations", skills: ["Management", "Valuation", "Leasing", "Residential Ops"], results: "Add a measurable outcome — e.g. properties managed or occupancy improved." },
  { industry: "Real Estate Dev", location: "Huacho, Peru", title: "Development & Investment", desc: "Involvement in local development, commercial concepts, land use, and investment opportunities in Huacho, Peru.", role: "Development & Investment", skills: ["Land Use", "Commercial Concepts", "Investment"], results: "Add a measurable outcome — e.g. project value or units delivered." },
  { industry: "FinTech", location: "Miami, USA", title: "Shield", desc: "Business development for stablecoin payments, cross-border transactions, business banking, and international B2B financial infrastructure.", role: "Business Development", skills: ["Stablecoins", "Cross-border", "B2B", "Banking"], results: "Add a measurable outcome — e.g. transaction volume or clients onboarded." },
  { industry: "Wholesale Electronics", location: "International", title: "Maywei", desc: "International electronics sourcing, wholesale sales, distribution, and client relationship management across global markets.", role: "Sales & Distribution", skills: ["Sourcing", "Wholesale", "Distribution", "Client Relations"], results: "Add a measurable outcome — e.g. sales volume or new distribution markets." },
  { industry: "Fitness & Events", location: "Community", title: "Gym & Event Operations", desc: "Gym operations, community building, and organizing fitness seminars and events — including seminars involving Mat Fraser.", role: "Operations & Events", skills: ["Operations", "Community", "Events"], results: "Add a measurable outcome — e.g. attendance or membership growth." },
];

export default function Portfolio() {
  return (
    <section id="work" style={{ scrollMarginTop: 72, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(80px,12vh,140px) 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: 24, marginBottom: "clamp(40px,6vh,64px)" }}>
          <div>
            <div style={{ fontFamily: display, fontSize: 12.5, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8b929c", marginBottom: 18 }}>02 — Selected projects</div>
            <h2 style={{ fontFamily: display, fontWeight: 500, fontSize: "clamp(2rem,4.2vw,3.2rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, maxWidth: "20ch" }}>Selected projects.</h2>
          </div>
          <a href="#contact" style={{ fontSize: 14, fontWeight: 600, color: "#9aa1ab", display: "inline-flex", alignItems: "center", gap: 8, paddingBottom: 6, borderBottom: "1px solid rgba(255,255,255,0.2)" }}>Start a conversation &rarr;</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20 }}>
          {projects.map((p) => (
            <article key={p.title} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: 32, display: "flex", flexDirection: "column", background: "#0d0f13" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 22 }}>
                <span style={{ fontFamily: display, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8b929c" }}>{p.industry}</span>
                <span style={{ fontSize: 12, color: "#5a616b", textAlign: "right" }}>{p.location}</span>
              </div>
              <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: "1.4rem", letterSpacing: "-0.01em", margin: "0 0 12px" }}>{p.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#9aa1ab", margin: "0 0 20px" }}>{p.desc}</p>
              <div style={{ fontSize: 12, color: "#5a616b", marginBottom: 16 }}><span style={{ color: "#c3c8cf", fontWeight: 600 }}>Role ·</span> {p.role}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
                {p.skills.map((s) => (
                  <span key={s} style={{ fontSize: 12, padding: "5px 11px", border: "1px solid rgba(255,255,255,0.12)", color: "#c3c8cf" }}>{s}</span>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16, marginBottom: 24 }}>
                <div style={{ fontFamily: display, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a616b", marginBottom: 6 }}>Results</div>
                <div style={{ fontSize: 13, lineHeight: 1.55, color: "#9aa1ab" }}>{p.results}</div>
              </div>
              <a href="#contact" style={{ marginTop: "auto", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>Discuss this work &rarr;</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
