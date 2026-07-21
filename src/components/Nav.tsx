"use client";
import { useState } from "react";
import { display } from "@/lib/content";
import type { Lang, Strings } from "@/lib/content";

export default function Nav({ t, lang, setLang }: { t: Strings; lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const link = { fontSize: 14, fontWeight: 500, color: "#9aa1ab" } as const;

  const langBtn = (active: boolean) =>
    ({
      fontFamily: display, fontSize: 12, fontWeight: 600, letterSpacing: "0.02em",
      padding: "7px 12px", border: "none", cursor: "pointer",
      background: active ? "#e8eaed" : "transparent", color: active ? "#0b0d10" : "#9aa1ab",
    }) as const;

  const pick = (l: Lang) => { setLang(l); setOpen(false); };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(14px)", background: "rgba(11,13,16,0.72)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <nav style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#home" style={{ fontFamily: display, fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 9, height: 9, background: "#e8eaed" }} />
          Jose Ausejo Rojas
        </a>
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a href="#about" style={link}>{t.nav.about}</a>
          <a href="#work" style={link}>{t.nav.work}</a>
          <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.18)" }}>
            <button onClick={() => pick("en")} aria-label="English" aria-pressed={lang === "en"} style={langBtn(lang === "en")}>EN</button>
            <button onClick={() => pick("es")} aria-label="Español" aria-pressed={lang === "es"} style={langBtn(lang === "es")}>ES</button>
          </div>
          <a href="#contact" style={{ fontSize: 14, fontWeight: 600, padding: "9px 18px", border: "1px solid rgba(255,255,255,0.18)", color: "#e8eaed" }}>{t.nav.contact}</a>
        </div>
        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5 }}>
          <span style={{ display: "block", width: 22, height: 2, background: "#e8eaed" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#e8eaed" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#e8eaed" }} />
        </button>
      </nav>
      {open && (
        <div className="nav-mobile" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "12px 24px 20px", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.18)", alignSelf: "flex-start", marginBottom: 8 }}>
            <button onClick={() => pick("en")} aria-label="English" aria-pressed={lang === "en"} style={langBtn(lang === "en")}>EN</button>
            <button onClick={() => pick("es")} aria-label="Español" aria-pressed={lang === "es"} style={langBtn(lang === "es")}>ES</button>
          </div>
          <a href="#about" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 16, fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{t.nav.about}</a>
          <a href="#work" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 16, fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{t.nav.work}</a>
          <a href="#contact" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 16, fontWeight: 600 }}>{t.nav.contact}</a>
        </div>
      )}
      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: flex !important; }
          .nav-mobile { display: flex !important; }
        }
        @media (min-width: 821px) { .nav-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}
