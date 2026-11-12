import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, CalendarDays, MapPin } from "lucide-react";
import { courses, lkr } from "@/lib/data";

export const metadata: Metadata = {
  title: "Academy | Sooriya Solar Hub",
  description: "Hands-on solar technician training in Sri Lanka with NVQ Level 3 preparation and RPL support.",
};

const timeline = [
  ["Today", "Anyone can work on solar; demand for skilled technicians keeps growing."],
  ["1 Jan 2028", "Solar technicians need at least NVQ Level 3 (Engineering Council rules)."],
  ["1 Jan 2030", "NVQ Level 4 and ECSL registration as an engineering technician."],
];

export default function AcademyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-forest">Sooriya Academy</p>
      <h1 className="mt-1 max-w-3xl text-4xl font-extrabold sm:text-5xl">Hands-on solar training, from village to rooftop.</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        About 60% of every course is practical, on a live training rig. Graduates can join our partner network with a starter tool kit, a trade account and rural partner pricing.
      </p>
      <p lang="si" className="mt-2 text-muted">අතින් කරමින් ඉගෙනගන්න — පසුව අපත් සමඟ වැඩ අරඹන්න.</p>

      <section aria-labelledby="rules" className="mt-12 rounded-[var(--radius-card)] border border-line bg-surface p-6 md:p-8">
        <h2 id="rules" className="text-2xl font-bold">Why now: the qualification rules are changing</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {timeline.map(([d, t]) => (
            <li key={d} className="rounded-xl bg-sunken p-5">
              <p className="font-display text-xl font-bold text-sun-deep">{d}</p>
              <p className="mt-1 text-sm">{t}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-muted">Our certificates are company certificates. NVQ is awarded through TVEC-accredited centres and RPL; we prepare you for it.</p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2" aria-label="Courses">
        {courses.map((c) => (
          <article key={c.name} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-bold">{c.name}</h2>
              <p className="shrink-0 font-display text-2xl font-bold text-forest">{c.fee === 0 ? "Free" : lkr(c.fee)}</p>
            </div>
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
              <span className="flex items-center gap-1"><CalendarDays size={15} aria-hidden="true" /> {c.length}</span>
              <span className="flex items-center gap-1"><MapPin size={15} aria-hidden="true" /> Kelaniya & Ratnapura (sample)</span>
            </p>
            <p className="mt-3"><span className="font-semibold">For:</span> {c.who}</p>
            <p><span className="font-semibold">You get:</span> {c.outcome}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {c.modules.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-ok" aria-hidden="true" /> {m}
                </li>
              ))}
            </ul>
            <Link href={`/account/?type=academy&course=${encodeURIComponent(c.name)}`} className="mt-6 self-start rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest-deep">
              Reserve a seat
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
