import Link from "next/link";
import { ArrowRight, BadgeCheck, CreditCard, GraduationCap, MapPinned, ShieldCheck, Truck, Zap } from "lucide-react";
import { brands, categories, courses, products, provinces, lkr } from "@/lib/data";
import { CategoryIcon } from "@/components/CategoryIcon";
import { ProductCard } from "@/components/ProductCard";
import { Calculator } from "@/components/Calculator";

const spotlight = products.filter((p) => ["PV-JNK-620N", "INV-SOL-6KH", "BAT-DYN-5K", "INV-GW-5K"].includes(p.sku));
const madeHere = products.filter((p) => p.category === "mounting" || p.category === "cables").slice(0, 4);

const faqs = [
  ["Do you sell to homeowners or only installers?", "Both. Installers get trade prices, credit and stock alerts. Homeowners can buy battery upgrades and backup kits, and we connect them with a registered partner installer for fitting."],
  ["Can I still get net metering?", "Not for new connections. From the Ministry directive of 11 September 2026, new rooftop systems go on Net Plus (exports paid at Rs 15.81–23.11/unit, 12-year term, smart meter required). Using solar yourself, or storing it in a battery, now pays more than exporting."],
  ["Do I need NVQ to work as a solar technician?", "From 1 January 2028 solar technicians need at least NVQ Level 3, and Level 4 plus ECSL registration from 2030. If you have 2+ years' experience, our RPL clinic helps you apply for Level 3 free of charge."],
  ["Why is mounting cheaper here?", "Imported racking carries 20% duty plus PAL and cess. Our rails and clamps are made in Sri Lanka, so installers pay less and get them faster."],
  ["Are batteries going to get cheaper?", "The Government said Budget 2027 will include concessions for home solar batteries. We will update battery prices as soon as the final rates are gazetted."],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="sun-field border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.2fr_1fr] lg:py-20">
          <div>
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-forest">
              <Zap size={15} aria-hidden="true" /> Solar wholesale for Sri Lanka
            </p>
            <h1 className="reveal reveal-2 mt-5 text-[42px] font-extrabold sm:text-6xl">
              Every part an installer needs, <span className="text-sun-deep">in every province.</span>
            </h1>
            <p className="reveal reveal-3 mt-5 max-w-xl text-lg text-muted">
              Panels, inverters, batteries and locally made racking at trade prices. Stock near your job site, 30-day credit for approved installers, and an academy that trains the next generation of solar technicians.
            </p>
            <p lang="si" className="reveal reveal-3 mt-2 text-muted">ස්ථාපකයන්ට අවශ්‍ය සියලු කොටස් — සෑම පළාතකටම.</p>
            <div className="reveal reveal-3 mt-8 flex flex-wrap gap-3">
              <Link href="/account/" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 font-semibold text-white hover:bg-forest-deep">
                Open a trade account <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/shop/" className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3.5 font-semibold text-forest hover:bg-surface">
                Browse the catalogue
              </Link>
            </div>
          </div>

          <div className="reveal reveal-2 grid content-start gap-3 sm:grid-cols-2">
            {categories.slice(0, 6).map((c) => (
              <Link key={c.id} href={`/shop/?c=${c.id}`} className="flex items-center gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-4 hover:border-forest/50">
                <CategoryIcon id={c.id} size={22} className="h-11 w-11 shrink-0" />
                <span>
                  <span className="block font-semibold">{c.name}</span>
                  <span className="block text-sm text-muted">{c.blurb}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section aria-label="Why installers buy here" className="border-b border-line bg-surface">
        <ul className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [MapPinned, "Stock in your province", "Main warehouse + branches and partner depots"],
            [CreditCard, "30-day trade credit", "Plus rural partner discounts up to 6%"],
            [ShieldCheck, "Genuine, traceable stock", "Serial tracking and local warranty claims"],
            [GraduationCap, "Hands-on academy", "NVQ Level 3 prep before the 2028 rule"],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Truck;
            return (
              <li key={t as string} className="flex gap-3">
                <I className="mt-0.5 shrink-0 text-sun-deep" size={22} aria-hidden="true" />
                <span>
                  <span className="block font-semibold">{t as string}</span>
                  <span className="block text-sm text-muted">{d as string}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sun-deep">Spotlight</p>
            <h2 className="mt-1 text-3xl font-bold sm:text-4xl">Moving fast this week</h2>
          </div>
          <Link href="/shop/" className="hidden items-center gap-1 font-semibold text-forest hover:underline sm:flex">
            Full catalogue <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {spotlight.map((p) => <ProductCard key={p.sku} p={p} />)}
        </div>
      </section>

      {/* BATTERY UPGRADE BANNER */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="grid items-center gap-8 overflow-hidden rounded-[var(--radius-card)] bg-ink p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sun">Battery upgrade kits</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">129,000+ rooftops are ready for a battery.</h2>
            <p className="mt-4 max-w-xl text-[#cfd8d3]">
              Solar now exceeds Sri Lanka&apos;s night-time peak, and battery-backed exports earn about Rs 45.53 a unit in the priority window. Our hybrid inverter + LiFePO4 kits fit most existing systems, and partner installers fit them in a day.
            </p>
          </div>
          <ul className="space-y-3">
            {[["Starter 5 kWh", 395000], ["Family 10 kWh", 760000], ["Business 15 kWh", 1120000]].map(([n, p]) => (
              <li key={n as string} className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-4 ring-1 ring-white/10">
                <span className="font-semibold">{n as string}</span>
                <span className="text-sm text-[#cfd8d3]">from <span className="font-display text-lg font-bold text-sun">{lkr(p as number)}</span></span>
              </li>
            ))}
            <li className="text-xs text-[#9fb3a6]">Sample prices. Batteries will be re-priced after Budget 2027 rates are gazetted.</li>
          </ul>
        </div>
      </section>

      {/* MADE IN SL */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-clay">We recommend</p>
        <h2 className="mt-1 text-3xl font-bold sm:text-4xl">Racking made in Sri Lanka</h2>
        <p className="mt-3 max-w-2xl text-muted">Imported racking and cable carry 20% duty plus PAL. Ours is fabricated locally, so it costs less, arrives faster, and spares are always in stock.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {madeHere.map((p) => <ProductCard key={p.sku} p={p} />)}
        </div>
      </section>

      {/* BRANDS */}
      <section className="mx-auto max-w-7xl px-4 pt-16" aria-labelledby="brands-h">
        <h2 id="brands-h" className="text-2xl font-bold">Brands we stock</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {brands.map((b) => (
            <li key={b} className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold">{b}</li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-muted">Sample brand list. Authorised-distributor status to be confirmed with each manufacturer.</p>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="mx-auto max-w-7xl scroll-mt-32 px-4 pt-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-sun-deep">Calculator</p>
        <h2 className="mt-1 text-3xl font-bold sm:text-4xl">What will solar + battery save under Net Plus?</h2>
        <p className="mt-3 max-w-2xl text-muted">Move the sliders to see the new rules in rupees. Installers can use this with customers on site.</p>
        <div className="mt-8"><Calculator /></div>
      </section>

      {/* ACADEMY */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-forest">Sooriya Academy</p>
            <h2 className="mt-1 text-3xl font-bold sm:text-4xl">Learn it hands-on. Then start earning.</h2>
            <p className="mt-4 text-muted">
              From 1 January 2028, solar technicians need at least NVQ Level 3. Train on our live rooftop rig, then join the partner network with a starter kit, a trade account and rural pricing.
            </p>
            <ol className="mt-6 space-y-3 text-sm">
              {["Train on real equipment", "Get certified (NVQ Level 3 prep)", "Join as a partner installer", "Buy at partner prices, get leads from us"].map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sun font-bold text-forest-deep">{i + 1}</span> {s}
                </li>
              ))}
            </ol>
            <Link href="/academy/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-white hover:bg-forest-deep">
              See courses & dates <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((c) => (
              <article key={c.name} className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
                <GraduationCap className="text-forest" size={24} aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold">{c.name}</h3>
                <p className="text-sm text-muted">{c.length}</p>
                <p className="mt-2 text-sm">{c.who}</p>
                <p className="mt-3 font-display text-lg font-bold">{c.fee === 0 ? "Free" : lkr(c.fee)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section id="network" className="mx-auto max-w-7xl scroll-mt-32 px-4 pt-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-sun-deep">Branches & depots</p>
        <h2 className="mt-1 text-3xl font-bold sm:text-4xl">Local stock. Local people. All 9 provinces.</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {provinces.map((p) => (
            <li key={p.name} className="flex items-start justify-between gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-5">
              <span>
                <span className="block font-semibold">{p.name} Province</span>
                <span className="block text-sm text-muted">{p.hub} · {p.type}</span>
              </span>
              <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${p.status === "Open" ? "bg-[#dcefe2] text-ok" : "bg-sunken text-muted"}`}>
                {p.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-32 px-4 pt-16">
        <h2 className="text-3xl font-bold sm:text-4xl">Questions installers ask</h2>
        <div className="mt-6 divide-y divide-line rounded-[var(--radius-card)] border border-line bg-surface">
          {faqs.map(([q, a]) => (
            <details key={q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q}
                <span className="text-xl text-sun-deep transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[var(--radius-card)] bg-sun p-8 text-forest-deep md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-extrabold">Ready to order at trade prices?</h2>
            <p className="mt-2 max-w-xl">Approval within one working day for SLSEA-registered installers. Rural partners get extra discounts.</p>
          </div>
          <Link href="/account/" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest-deep px-6 py-3.5 font-semibold text-white hover:bg-ink">
            <BadgeCheck size={18} aria-hidden="true" /> Create trade account
          </Link>
        </div>
      </section>
    </>
  );
}
