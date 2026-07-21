import { display } from "@/lib/content";
import type { Strings } from "@/lib/content";

export default function Footer({ t }: { t: Strings }) {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "36px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: display, fontWeight: 600, fontSize: 14 }}>
          <span style={{ display: "inline-block", width: 8, height: 8, background: "#e8eaed" }} />
          Jose Ausejo Rojas
        </div>
        <div style={{ fontSize: 13, color: "#5a616b" }}>© 2026 · {t.footer}</div>
      </div>
    </footer>
  );
}
