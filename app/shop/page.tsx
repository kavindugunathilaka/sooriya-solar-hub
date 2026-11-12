import { Suspense } from "react";
import type { Metadata } from "next";
import { Catalogue } from "@/components/Catalogue";

export const metadata: Metadata = {
  title: "Catalogue | Sooriya Solar Hub",
  description: "Solar panels, inverters, batteries, mounting, cables and protection with live stock by province.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-sun-deep">Catalogue</p>
      <h1 className="mt-1 text-4xl font-extrabold sm:text-5xl">Shop solar at trade scale</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Prices shown are sample retail prices incl. VAT. Log in with a trade account to see your price tier, credit balance and stock at your nearest branch.
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="text-muted">Loading catalogue…</p>}>
          <Catalogue />
        </Suspense>
      </div>
    </div>
  );
}
