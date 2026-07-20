import { ACCENT, display } from "@/lib/theme";

const nodes = [
  ["Australia", "6 years · Real estate & property operations", "Property management, valuation, leasing, and residential operations across Queensland — the foundation of my client, negotiation, and operations experience."],
  ["Miami, USA", "2 years · Fintech & money services", "Business development at Shield — building stablecoin payments, cross-border transactions, business banking, and international B2B financial infrastructure."],
  ["Peru", "Ongoing · Development & international trade", "Real estate development in Huacho alongside international electronics sourcing and distribution with Maywei — connecting Latin American markets with global supply."],
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
