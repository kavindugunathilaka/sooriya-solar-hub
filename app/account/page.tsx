import { Suspense } from "react";
import type { Metadata } from "next";
import { SignupForm } from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Open a trade account | Sooriya Solar Hub",
  description: "Trade prices, 30-day credit and rural partner discounts for Sri Lankan solar installers.",
};

const tiers = [
  ["Graduate Starter", "5% off for 3 months", "Academy graduates in rural districts"],
  ["Rural Partner", "4% off · 30-day credit", "Active installers outside Western Province"],
  ["Rural Gold", "6% off · 45-day credit", "Rural partners buying Rs 1m+ per quarter"],
  ["Urban Partner", "2% off · 30-day credit", "Installers in Western Province"],
];

export default function AccountPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-sun-deep">Trade account</p>
        <h1 className="mt-1 text-4xl font-extrabold sm:text-5xl">Buy at trade prices. Pay in 30 days.</h1>
        <p className="mt-4 text-lg text-muted">Open an account in a few minutes. SLSEA-registered installers are usually approved within one working day.</p>
        <h2 className="mt-10 text-xl font-bold">Partner tiers</h2>
        <ul className="mt-4 space-y-3">
          {tiers.map(([n, d, w]) => (
            <li key={n} className="rounded-[var(--radius-card)] border border-line bg-surface p-4">
              <p className="flex justify-between gap-3 font-semibold"><span>{n}</span><span className="text-forest">{d}</span></p>
              <p className="text-sm text-muted">{w}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted">Sample terms. Discounts apply to core items for jobs in the partner&apos;s own area.</p>
      </div>
      <Suspense fallback={<p className="text-muted">Loading form…</p>}>
        <SignupForm />
      </Suspense>
    </div>
  );
}
