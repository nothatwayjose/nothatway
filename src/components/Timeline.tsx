import { ACCENT, display } from "@/lib/theme";

const nodes = [
  ["Gold Coast, Australia", "2010–2016 · Foundations", "Bond University — Bachelor of Commerce (Finance), later a Master of Valuation. Founded and exited Body Dynamics Training, a multi-disciplinary allied-health gym. Former Peru Rugby 7s player."],
  ["Brisbane, Australia", "2016–2022 · Commercial real estate", "Six years across the full asset lifecycle — McGees Property, CBRE, Ray White Commercial and Pellicano. Sales, leasing, facilities and development; personally sold and leased AUD 10M+ and supported deals up to $63.5M."],
  ["Miami, USA", "2022–2024 · Maywei (Consumer Tech)", "Head of Sales, Business Development & Equity Partner (exited). Grew the customer base from 2 to 120+ in 12 months, built the CRM and LATAM strategy, and drove $10M+ turnover across cross-border transactions."],
  ["South Florida, USA", "2024–2025 · Ventures & operations", "Business brokering and commercial real estate at WestVest; property management of a 204-unit Blackstone affordable-housing portfolio with FPI; and freelance video, copywriting and creative direction for Miami F&B venues."],
  ["Lima, Peru", "2025 · International trade", "Head of International Sales at Artidoro Rodriguez Café, a pioneering Peruvian specialty-coffee brand — expanding distribution across Peru and into the United States."],
  ["Miami · APAC", "2025–Present · Shield (FinTech)", "International Sales Manager at Shield, an a16z-backed, FinCEN-registered money-services business. Lead generation and client activation for stablecoin payments — same-day USDT-to-USD settlement for wholesalers and cross-border traders."],
];

export default function Timeline() {
  return (
    <section id="path" style={{ scrollMarginTop: 72, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(80px,12vh,140px) 24px" }}>
        <div style={{ fontFamily: display, fontSize: 12.5, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8b929c", marginBottom: 18 }}>03 — Career path</div>
        <h2 style={{ fontFamily: display, fontWeight: 500, fontSize: "clamp(2rem,4.2vw,3.2rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: "0 0 clamp(40px,6vh,64px)", maxWidth: "20ch" }}>An international career.</h2>
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.12)", maxWidth: 740 }}>
          {nodes.map(([place, meta, desc], i) => (
            <div key={place} style={{ position: "relative", padding: i === nodes.length - 1 ? "0 0 0 clamp(24px,4vw,40px)" : "0 0 clamp(32px,5vh,48px) clamp(24px,4vw,40px)" }}>
              <span style={{ position: "absolute", left: -5, top: 6, width: 9, height: 9, borderRadius: "50%", background: ACCENT }} />
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: "1.3rem", letterSpacing: "-0.01em", margin: 0 }}>{place}</h3>
                <span style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5a616b" }}>{meta}</span>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#9aa1ab", margin: 0, maxWidth: "62ch" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
