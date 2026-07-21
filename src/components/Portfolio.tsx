import { ACCENT, display } from "@/lib/content";
import type { Strings, Project } from "@/lib/content";

export default function Portfolio({ t, projects, media }: { t: Strings; projects: Project[]; media: { photo: string; video: string; alt: string }[] }) {
  return (
    <section id="work" style={{ scrollMarginTop: 72, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(80px,12vh,140px) 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: 24, marginBottom: "clamp(40px,6vh,64px)" }}>
          <div>
            <div style={{ fontFamily: display, fontSize: 12.5, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8b929c", marginBottom: 18 }}>{t.work.eyebrow}</div>
            <h2 style={{ fontFamily: display, fontWeight: 500, fontSize: "clamp(2rem,4.2vw,3.2rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, maxWidth: "20ch" }}>{t.work.heading}</h2>
          </div>
          <a href="#contact" style={{ fontSize: 14, fontWeight: 600, color: "#9aa1ab", display: "inline-flex", alignItems: "center", gap: 8, paddingBottom: 6, borderBottom: "1px solid rgba(255,255,255,0.2)" }}>{t.work.start}</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 20 }}>
          {projects.map((p, i) => {
            const m = media[i];
            return (
              <article key={p.title} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: 32, display: "flex", flexDirection: "column", background: "#0d0f13" }}>
                <div style={{ margin: "-32px -32px 26px", height: 190, borderBottom: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", background: "#101318" }}>
                  <img src={m.photo} alt={m.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 22 }}>
                  <span style={{ fontFamily: display, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8b929c" }}>{p.industry}</span>
                  <span style={{ fontSize: 12, color: "#5a616b", textAlign: "right" }}>{p.location}</span>
                </div>
                <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: "1.4rem", letterSpacing: "-0.01em", margin: "0 0 12px" }}>{p.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#9aa1ab", margin: "0 0 20px" }}>{p.desc}</p>
                <div style={{ fontSize: 12, color: "#5a616b", marginBottom: 16 }}><span style={{ color: "#c3c8cf", fontWeight: 600 }}>{t.work.roleWord}</span> {p.role}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
                  {p.skills.map((s) => (
                    <span key={s} style={{ fontSize: 12, padding: "5px 11px", border: "1px solid rgba(255,255,255,0.12)", color: "#c3c8cf" }}>{s}</span>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16, marginBottom: 24 }}>
                  <div style={{ fontFamily: display, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a616b", marginBottom: 6 }}>{t.work.resultsWord}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.55, color: "#9aa1ab" }}>{p.results}</div>
                </div>
                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
                  <a href={m.video} target="_blank" rel="noopener" style={{ fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, color: ACCENT }}>&#9654; {t.work.watch}</a>
                  <a href="#contact" style={{ fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, color: "#9aa1ab" }}>{t.work.discuss}</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
