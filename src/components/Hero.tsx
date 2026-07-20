import { ACCENT, display } from "@/lib/theme";

const stat = { fontFamily: display, fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.02em" } as const;
const statLabel = { fontSize: 13, color: "#9aa1ab", marginTop: 4 } as const;

export default function Hero() {
  return (
    <section id="home" style={{ scrollMarginTop: 72, position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 55% at 50% -10%, rgba(232,234,237,0.09), transparent 70%)" }} />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "clamp(96px,16vh,180px) 24px clamp(80px,12vh,140px)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: display, fontSize: 12.5, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9aa1ab", border: "1px solid rgba(255,255,255,0.12)", padding: "7px 14px", marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, background: ACCENT, borderRadius: "50%" }} />
          Global Business Development
        </div>
        <h1 style={{ fontFamily: display, fontWeight: 500, fontSize: "clamp(2.5rem,6.2vw,5.2rem)", lineHeight: 1.04, letterSpacing: "-0.025em", margin: "0 0 28px", maxWidth: "16ch", textWrap: "balance" as any }}>
          I build <span style={{ color: "#8b929c" }}>opportunities</span> across borders.
        </h1>
        <p style={{ fontSize: "clamp(1.05rem,1.7vw,1.3rem)", lineHeight: 1.6, color: "#9aa1ab", maxWidth: "56ch", margin: "0 0 44px" }}>
          Peruvian-Australian business development professional connecting real estate, fintech, international trade, and emerging markets across Australia, the United States, and Latin America.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <a href="#work" style={{ fontFamily: display, fontSize: 15, fontWeight: 600, padding: "15px 30px", background: "#e8eaed", color: "#0b0d10", border: "1px solid #e8eaed", display: "inline-flex", alignItems: "center", gap: 10 }}>
            View my work <span style={{ fontSize: 17 }}>&rarr;</span>
          </a>
          <a href="#contact" style={{ fontFamily: display, fontSize: 15, fontWeight: 600, padding: "15px 30px", background: "transparent", color: "#e8eaed", border: "1px solid rgba(255,255,255,0.2)" }}>
            Get in touch
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginTop: "clamp(56px,9vh,96px)", paddingTop: 36, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div><div style={stat}>8+</div><div style={{ ...statLabel, maxWidth: "22ch" }}>Years across business, sales &amp; operations</div></div>
          <div><div style={stat}>3</div><div style={statLabel}>Continents worked across</div></div>
          <div><div style={stat}>4</div><div style={statLabel}>Industries navigated</div></div>
        </div>
      </div>
    </section>
  );
}
