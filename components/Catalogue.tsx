"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { categories, products, type CategoryId } from "@/lib/data";
import { ProductCard } from "./ProductCard";

type Filter = CategoryId | "all" | "outlet";

export function Catalogue() {
  const params = useSearchParams();
  const [cat, setCat] = useState<Filter>("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"relevance" | "low" | "high">("relevance");
  const [inRegion, setInRegion] = useState(false);

  useEffect(() => {
    const c = params.get("c");
    if (c) setCat(c as Filter);
    const qq = params.get("q");
    if (qq) setQ(qq);
  }, [params]);

  const list = useMemo(() => {
    let l = products.filter((p) => {
      if (cat === "outlet") return p.tag === "Outlet";
      return cat === "all" || p.category === cat;
    });
    if (q.trim()) {
      const s = q.toLowerCase();
      l = l.filter((p) => [p.name, p.brand, p.sku, p.spec].join(" ").toLowerCase().includes(s));
    }
    if (inRegion) l = l.filter((p) => p.stock.regions > 0);
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [cat, q, sort, inRegion]);

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active ? "border-forest bg-forest text-white" : "border-line bg-surface hover:border-forest/50"}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <aside className="space-y-6" aria-label="Filters">
        <div>
          <label htmlFor="shop-q" className="text-sm font-semibold">Search</label>
          <input
            id="shop-q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Brand, model or SKU"
            className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-base focus:border-forest focus:outline-none"
          />
        </div>
        <fieldset>
          <legend className="text-sm font-semibold">Category</legend>
          <div className="mt-2 flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
            <button type="button" className={chip(cat === "all")} onClick={() => setCat("all")}>All products</button>
            {categories.map((c) => (
              <button type="button" key={c.id} className={chip(cat === c.id)} onClick={() => setCat(c.id)} aria-pressed={cat === c.id}>
                {c.name}
              </button>
            ))}
            <button type="button" className={chip(cat === "outlet")} onClick={() => setCat("outlet")} aria-pressed={cat === "outlet"}>Outlet</button>
          </div>
        </fieldset>
        <label className="flex items-center gap-3 text-sm">
          <input type="checkbox" checked={inRegion} onChange={(e) => setInRegion(e.target.checked)} className="h-5 w-5 accent-[var(--color-forest)]" />
          In stock outside Colombo
        </label>
      </aside>

      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted" aria-live="polite">{list.length} product{list.length === 1 ? "" : "s"}</p>
          <label className="flex items-center gap-2 text-sm">
            Sort
            <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="rounded-lg border border-line bg-surface px-3 py-2 text-base">
              <option value="relevance">Relevance</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </label>
        </div>
        {list.length === 0 ? (
          <div className="rounded-[var(--radius-card)] border border-dashed border-line bg-surface p-10 text-center">
            <p className="font-semibold">No products match.</p>
            <p className="mt-1 text-sm text-muted">Try another search, or ask us on WhatsApp — we can source most brands within a week.</p>
            <button className="mt-4 rounded-full border border-forest px-5 py-2 text-sm font-semibold text-forest" onClick={() => { setQ(""); setCat("all"); setInRegion(false); }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {list.map((p) => <ProductCard key={p.sku} p={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
