import { display } from "@/lib/content";
import type { Strings } from "@/lib/content";

export default function About({ t }: { t: Strings }) {
  const panelLabel = { fontFamily: display, fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" as const, color: "#8b929c", marginBottom: 14 };
  const panelText = { fontSize: 15, lineHeight: 1.65, color: "#c3c8cf", margin: 0 };

  return (
    <section id="about" style={{ scrollMarginTop: 72, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(80px,12vh,140px) 24px" }}>
        <div style={{ maxWidth: 900 }}>
          <div style={{ fontFamily: display, fontSize: 12.5, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8b929c", marginBottom: 20 }}>{t.about.eyebrow}</div>
          <p style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(1.4rem,2.6vw,2.1rem)", lineHeight: 1.4, letterSpacing: "-0.015em", margin: 0, textWrap: "pretty" } as React.CSSProperties}>
            {t.about.lead}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", marginTop: "clamp(48px,7vh,72px)" }}>
          {t.about.panels.map((p) => (
            <div key={p.t} style={{ background: "#0b0d10", padding: 32 }}>
              <div style={panelLabel}>{p.t}</div>
              <p style={panelText}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
