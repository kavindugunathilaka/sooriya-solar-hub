"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { provinces } from "@/lib/data";

// Demo only: submits by opening WhatsApp with a pre-filled message. Replace the number and
// wire to a Go API endpoint (e.g. POST /api/leads) for production.
const WHATSAPP = "94700000000";

type Kind = "installer" | "home" | "academy";

export function SignupForm() {
  const params = useSearchParams();
  const [kind, setKind] = useState<Kind>("installer");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const t = params.get("type");
    if (t === "home" || t === "academy") setKind(t);
  }, [params]);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const err: Record<string, string> = {};
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/\s/g, "");
    if (name.length < 2) err.name = "Please enter your name.";
    if (!/^(\+94|0)7\d{8}$/.test(phone)) err.phone = "Enter a Sri Lankan mobile number, e.g. 0771234567.";
    if (!fd.get("province")) err.province = "Choose your province.";
    setErrors(err);
    if (Object.keys(err).length) return;
    const lines = [
      `New ${kind} enquiry — Sooriya Solar Hub`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Province: ${fd.get("province")}`,
      fd.get("company") ? `Company / SLSEA reg: ${fd.get("company")}` : "",
      params.get("course") ? `Course: ${params.get("course")}` : "",
      fd.get("note") ? `Note: ${fd.get("note")}` : "",
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
  }

  const input = "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base focus:border-forest focus:outline-none aria-[invalid=true]:border-clay";

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-[var(--radius-card)] border border-line bg-surface p-6 md:p-8">
      <fieldset>
        <legend className="text-sm font-semibold">I am a…</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {([["installer", "Installer / electrician"], ["home", "Homeowner"], ["academy", "Academy student"]] as const).map(([k, l]) => (
            <label key={k} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium ${kind === k ? "border-forest bg-[#e6efe9]" : "border-line"}`}>
              <input type="radio" name="kind" value={k} checked={kind === k} onChange={() => setKind(k)} className="accent-[var(--color-forest)]" />
              {l}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold">Full name</label>
          <input id="name" name="name" autoComplete="name" className={input} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          {errors.name && <p id="name-err" className="mt-1 text-sm text-clay">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold">Mobile number</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="07X XXX XXXX" className={input} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} />
          {errors.phone && <p id="phone-err" className="mt-1 text-sm text-clay">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="province" className="text-sm font-semibold">Province</label>
          <select id="province" name="province" defaultValue="" className={input} aria-invalid={!!errors.province} aria-describedby={errors.province ? "prov-err" : undefined}>
            <option value="" disabled>Select…</option>
            {provinces.map((p) => <option key={p.name}>{p.name}</option>)}
          </select>
          {errors.province && <p id="prov-err" className="mt-1 text-sm text-clay">{errors.province}</p>}
        </div>
        {kind === "installer" && (
          <div>
            <label htmlFor="company" className="text-sm font-semibold">Company & SLSEA reg. no. <span className="font-normal text-muted">(optional)</span></label>
            <input id="company" name="company" className={input} />
          </div>
        )}
      </div>

      <div>
        <label htmlFor="note" className="text-sm font-semibold">
          {kind === "home" ? "Monthly bill or what you need" : kind === "academy" ? "Your experience so far" : "What do you buy most?"}
        </label>
        <textarea id="note" name="note" rows={3} className={input} />
      </div>

      <button className="w-full rounded-full bg-forest py-3.5 font-semibold text-white hover:bg-forest-deep sm:w-auto sm:px-8">
        Send via WhatsApp
      </button>
      {sent && (
        <p role="status" className="rounded-xl bg-[#dcefe2] px-4 py-3 text-sm text-ok">
          WhatsApp opened with your details. If it didn&apos;t open, call our trade line and we&apos;ll set you up.
        </p>
      )}
      <p className="text-xs text-muted">Demo form. Your details are only sent when you press send in WhatsApp.</p>
    </form>
  );
}
