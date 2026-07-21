"use client";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/content";
import { STR, PROJECTS, TIMELINE, PROJECT_MEDIA } from "@/lib/content";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Site() {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("jose_lang");
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    try { localStorage.setItem("jose_lang", l); } catch {}
    setLangState(l);
  };

  const t = STR[lang];

  return (
    <div style={{ minHeight: "100vh", background: "#0b0d10" }}>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Portfolio t={t} projects={PROJECTS[lang]} media={PROJECT_MEDIA} />
      <Timeline t={t} nodes={TIMELINE[lang]} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
