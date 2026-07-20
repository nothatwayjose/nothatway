import { display } from "@/lib/theme";

const panelLabel = { fontFamily: display, fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" as const, color: "#8b929c", marginBottom: 14 };
const panelText = { fontSize: 15, lineHeight: 1.65, color: "#c3c8cf", margin: 0 };

const panels = [
  ["Background", "Six years in real estate, valuation, leasing, and property development across Queensland, Australia and Huacho, Peru — then two years in Miami in fintech and cross-border money services."],
  ["Strengths", "Relationship building, cross-cultural communication, and sales — with a knack for turning complex financial products into practical solutions clients actually use."],
  ["Approach", "Direct and hands-on. I focus on understanding the client's real problem first, then create a clear, honest path forward — no jargon, no filler."],
  ["Focus areas", "Real estate, stablecoins, cross-border payments, and building better financial access for international businesses."],
];

export default function About() {
  return (
    <section id="about" style={{ scrollMarginTop: 72, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(80px,12vh,140px) 24px" }}>
        <div style={{ maxWidth: 900 }}>
          <div style={{ fontFamily: display, fontSize: 12.5, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8b929c", marginBottom: 20 }}>01 — About</div>
          <p style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(1.4rem,2.6vw,2.1rem)", lineHeight: 1.4, letterSpacing: "-0.015em", margin: 0, textWrap: "pretty" as any }}>
            I'm a Peruvian-Australian business development professional with six years in real estate and property operations across Australia, followed by two years in Miami working in fintech and money services.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", marginTop: "clamp(48px,7vh,72px)" }}>
          {panels.map(([t, d]) => (
            <div key={t} style={{ background: "#0b0d10", padding: 32 }}>
              <div style={panelLabel}>{t}</div>
              <p style={panelText}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
