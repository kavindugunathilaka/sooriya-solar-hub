"use client";

import { useMemo, useState } from "react";
import { lkr } from "@/lib/data";

// Assumptions (shown to the user). Sources: CEB tariff ~Rs 41/unit above 120 units (Oct 2026);
// PUCSL Net Plus export Rs 23.11 (≤10 kW) / 19.15 (10–40 kW) from 25 Aug 2026;
// ~113 units per kWp per month from 2026 installer price lists.
const GRID = 41;
const UNITS_PER_KWP = 113;

export function Calculator() {
  const [kwp, setKwp] = useState(6.2);
  const [usage, setUsage] = useState(400);
  const [day, setDay] = useState(45);
  const [battery, setBattery] = useState(10);

  const r = useMemo(() => {
    const gen = kwp * UNITS_PER_KWP;
    const exportRate = kwp <= 10 ? 23.11 : 19.15;
    const dayUse = Math.min(gen, (usage * day) / 100);
    const nightNeed = usage - (usage * day) / 100;
    const spare = Math.max(gen - dayUse, 0);
    const stored = Math.min(battery * 30 * 0.9, nightNeed, spare);
    const exported = Math.max(spare - stored, 0);
    const saving = (dayUse + stored) * GRID;
    const exportIncome = exported * exportRate;
    return { gen, dayUse, stored, exported, saving, exportIncome, total: saving + exportIncome, exportRate };
  }, [kwp, usage, day, battery]);

  const field = "w-full accent-[var(--color-forest)]";

  return (
    <div className="grid gap-8 rounded-[var(--radius-card)] border border-line bg-surface p-6 md:grid-cols-2 md:p-8">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()} aria-label="Savings calculator inputs">
        <div>
          <label htmlFor="kwp" className="flex justify-between text-sm font-medium">
            Panel size <output className="font-display text-base font-bold">{kwp.toFixed(1)} kWp</output>
          </label>
          <input id="kwp" type="range" min={2} max={20} step={0.2} value={kwp} onChange={(e) => setKwp(+e.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor="usage" className="flex justify-between text-sm font-medium">
            Your monthly units (kWh) <output className="font-display text-base font-bold">{usage}</output>
          </label>
          <input id="usage" type="range" min={60} max={1500} step={10} value={usage} onChange={(e) => setUsage(+e.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor="day" className="flex justify-between text-sm font-medium">
            Share used in daytime <output className="font-display text-base font-bold">{day}%</output>
          </label>
          <input id="day" type="range" min={10} max={90} step={5} value={day} onChange={(e) => setDay(+e.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor="bat" className="flex justify-between text-sm font-medium">
            Battery <output className="font-display text-base font-bold">{battery === 0 ? "None" : `${battery} kWh`}</output>
          </label>
          <input id="bat" type="range" min={0} max={30} step={5} value={battery} onChange={(e) => setBattery(+e.target.value)} className={field} />
        </div>
        <p className="text-xs leading-relaxed text-muted">
          Estimate only. Assumes about {UNITS_PER_KWP} units per kWp a month, grid power at Rs {GRID}/unit, and Net Plus export at Rs {r.exportRate}/unit (PUCSL, from 25 Aug 2026). Your installer will confirm on site.
        </p>
      </form>

      <div className="flex flex-col justify-between rounded-xl bg-forest p-6 text-white">
        <div>
          <p className="text-sm uppercase tracking-wider text-sun">Estimated monthly benefit</p>
          <p className="mt-1 font-display text-5xl font-extrabold" aria-live="polite">{lkr(Math.round(r.total))}</p>
          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between border-b border-white/15 pb-2"><dt>Solar generated</dt><dd>{Math.round(r.gen)} units</dd></div>
            <div className="flex justify-between border-b border-white/15 pb-2"><dt>Used in daytime</dt><dd>{Math.round(r.dayUse)} units</dd></div>
            <div className="flex justify-between border-b border-white/15 pb-2"><dt>Stored for night (battery)</dt><dd>{Math.round(r.stored)} units</dd></div>
            <div className="flex justify-between border-b border-white/15 pb-2"><dt>Bill saving</dt><dd>{lkr(Math.round(r.saving))}</dd></div>
            <div className="flex justify-between"><dt>Export income</dt><dd>{lkr(Math.round(r.exportIncome))}</dd></div>
          </dl>
        </div>
        <a href="/account/?type=home" className="mt-6 rounded-full bg-sun py-3 text-center font-semibold text-forest-deep hover:bg-[#ffb83a]">
          Get a quote from a partner installer
        </a>
      </div>
    </div>
  );
}
