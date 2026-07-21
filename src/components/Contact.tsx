"use client";
import { useState } from "react";
import { ACCENT, display } from "@/lib/content";
import type { Strings } from "@/lib/content";
import { contactSchema } from "@/lib/validation";

type Errors = Partial<Record<"fullName" | "email" | "reason" | "message", string>>;
const empty = { fullName: "", email: "", company: "", reason: "", message: "", website: "" };

export default function Contact({ t }: { t: Strings }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const labelStyle = { fontSize: 13, fontWeight: 600, color: "#c3c8cf" } as const;
  const inputStyle = { fontFamily: "inherit", fontSize: 15, color: "#e8eaed", background: "#0b0d10", border: "1px solid rgba(255,255,255,0.14)", padding: "13px 15px" } as const;
  const errStyle = { fontSize: 12.5, color: "#e0796b" } as const;
  const field = { display: "flex", flexDirection: "column" as const, gap: 8 };

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fe = parsed.error.flatten().fieldErrors;
      setErrors({
        fullName: fe.fullName ? t.contact.v.name : undefined,
        email: fe.email ? (form.email.trim() ? t.contact.v.emailBad : t.contact.v.emailReq) : undefined,
        reason: fe.reason ? t.contact.v.reason : undefined,
        message: fe.message ? (form.message.trim() ? t.contact.v.msgShort : t.contact.v.msgReq) : undefined,
      });
      return;
    }
    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setStatus("success"); setForm(empty); }
      else { const data = await res.json().catch(() => ({})); setServerError(data.error || t.contact.v.msgReq); setStatus("error"); }
    } catch { setServerError("Network error. Please try again."); setStatus("error"); }
  }

  return (
    <section id="contact" style={{ scrollMarginTop: 72 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(80px,12vh,140px) 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(40px,6vw,80px)", alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: display, fontSize: 12.5, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8b929c", marginBottom: 18 }}>{t.contact.eyebrow}</div>
            <h2 style={{ fontFamily: display, fontWeight: 500, fontSize: "clamp(2rem,4.2vw,3.2rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: "0 0 24px", maxWidth: "16ch" }}>{t.contact.heading}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#9aa1ab", maxWidth: "44ch", margin: "0 0 32px" }}>{t.contact.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14, color: "#c3c8cf" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ width: 6, height: 6, background: ACCENT, borderRadius: "50%" }} /> {t.contact.avail1}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ width: 6, height: 6, background: "#8b929c", borderRadius: "50%" }} /> {t.contact.avail2}</div>
            </div>
          </div>

          <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "clamp(24px,4vw,40px)", background: "#0d0f13" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "32px 8px" }}>
                <div style={{ width: 52, height: 52, border: `1px solid ${ACCENT}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px", color: ACCENT, fontSize: 24 }}>&#10003;</div>
                <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: "1.5rem", margin: "0 0 12px" }}>{t.contact.successHeading}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#9aa1ab", margin: "0 0 28px" }}>{t.contact.successText}</p>
                <button onClick={() => setStatus("idle")} style={{ fontFamily: display, fontSize: 14, fontWeight: 600, padding: "12px 24px", background: "transparent", color: "#e8eaed", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}>{t.contact.sendAnother}</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
                  <label htmlFor="website">Do not fill this field</label>
                  <input id="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
                </div>

                <div style={field}>
                  <label htmlFor="fullName" style={labelStyle}>{t.contact.form.fullName} <span style={{ color: "#8b929c" }}>*</span></label>
                  <input id="fullName" type="text" placeholder={t.contact.ph.name} value={form.fullName} onChange={set("fullName")} aria-invalid={!!errors.fullName} style={inputStyle} />
                  {errors.fullName && <span style={errStyle}>{errors.fullName}</span>}
                </div>

                <div style={field}>
                  <label htmlFor="email" style={labelStyle}>{t.contact.form.email} <span style={{ color: "#8b929c" }}>*</span></label>
                  <input id="email" type="email" placeholder={t.contact.ph.email} value={form.email} onChange={set("email")} aria-invalid={!!errors.email} style={inputStyle} />
                  {errors.email && <span style={errStyle}>{errors.email}</span>}
                </div>

                <div style={field}>
                  <label htmlFor="company" style={labelStyle}>{t.contact.form.company} <span style={{ color: "#5a616b", fontWeight: 400 }}>{t.contact.form.optional}</span></label>
                  <input id="company" type="text" placeholder="Acme Inc." value={form.company} onChange={set("company")} style={inputStyle} />
                </div>

                <div style={field}>
                  <label htmlFor="reason" style={labelStyle}>{t.contact.form.reason} <span style={{ color: "#8b929c" }}>*</span></label>
                  <select id="reason" value={form.reason} onChange={set("reason")} aria-invalid={!!errors.reason} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                    <option value="">{t.contact.selectDefault}</option>
                    {t.contact.reasons.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                  {errors.reason && <span style={errStyle}>{errors.reason}</span>}
                </div>

                <div style={field}>
                  <label htmlFor="message" style={labelStyle}>{t.contact.form.message} <span style={{ color: "#8b929c" }}>*</span></label>
                  <textarea id="message" rows={4} placeholder={t.contact.ph.message} value={form.message} onChange={set("message")} aria-invalid={!!errors.message} style={{ ...inputStyle, resize: "vertical", minHeight: 110 }} />
                  {errors.message && <span style={errStyle}>{errors.message}</span>}
                </div>

                {status === "error" && <p style={{ ...errStyle, margin: 0 }}>{serverError}</p>}

                <button type="submit" disabled={status === "sending"} style={{ fontFamily: display, fontSize: 15, fontWeight: 600, padding: "15px 28px", background: "#e8eaed", color: "#0b0d10", border: "1px solid #e8eaed", cursor: status === "sending" ? "wait" : "pointer", marginTop: 4, opacity: status === "sending" ? 0.7 : 1 }}>
                  {status === "sending" ? "…" : t.contact.submit}
                </button>
                <p style={{ fontSize: 12, color: "#5a616b", margin: 0, lineHeight: 1.5 }}>{t.contact.privacy}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
