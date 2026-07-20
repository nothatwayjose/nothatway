import { describe, it, expect } from "vitest";
import { contactSchema } from "../src/lib/validation";

const valid = {
  fullName: "Jane Doe",
  email: "jane@company.com",
  company: "Acme",
  reason: "Business opportunity",
  message: "I'd like to discuss a cross-border payments project.",
  website: "",
};

describe("contactSchema", () => {
  it("accepts a valid submission", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a missing name", () => {
    const r = contactSchema.safeParse({ ...valid, fullName: "" });
    expect(r.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const r = contactSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(r.success).toBe(false);
  });

  it("rejects a missing reason", () => {
    const r = contactSchema.safeParse({ ...valid, reason: "" });
    expect(r.success).toBe(false);
  });

  it("rejects a too-short message", () => {
    const r = contactSchema.safeParse({ ...valid, message: "hi" });
    expect(r.success).toBe(false);
  });

  it("rejects a filled honeypot", () => {
    const r = contactSchema.safeParse({ ...valid, website: "http://spam.example" });
    expect(r.success).toBe(false);
  });

  it("allows an optional empty company", () => {
    const r = contactSchema.safeParse({ ...valid, company: "" });
    expect(r.success).toBe(true);
  });
});
