import { CategoryIcon } from "./CategoryIcon";
import { lkr, type Product } from "@/lib/data";

const tagStyle: Record<string, string> = {
  "Best seller": "bg-sun text-forest-deep",
  New: "bg-forest text-white",
  "Made in SL": "bg-clay text-white",
  Outlet: "bg-ink text-white",
  "Budget 2027 watch": "bg-[#fff1cf] text-warn border border-[#efcf86]",
};

export function ProductCard({ p }: { p: Product }) {
  const inStock = p.stock.colombo > 0;
  return (
    <article className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-forest/40">
      <div className="relative mb-4 grid aspect-[4/3] place-items-center rounded-xl bg-sunken">
        <CategoryIcon id={p.category} size={44} className="h-20 w-20" />
        {p.tag && (
          <span className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-xs font-semibold ${tagStyle[p.tag]}`}>{p.tag}</span>
        )}
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{p.brand}</p>
      <h3 className="mt-1 text-[17px] font-semibold leading-snug">{p.name}</h3>
      <p className="mt-1 text-sm text-muted">{p.spec}</p>
      <p className="mt-1 font-mono text-xs text-muted">SKU {p.sku}</p>

      <div className="mt-auto pt-4">
        <p className="text-sm text-muted">
          <span className="font-display text-xl font-bold text-ink">{lkr(p.price)}</span> {p.unit}
        </p>
        <p className="text-xs text-muted">Sample retail price incl. VAT · <span className="font-medium text-forest">log in for trade price</span></p>
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
          <span className={inStock ? "text-ok" : "text-warn"}>● Colombo: {p.stock.colombo > 0 ? `${p.stock.colombo} in stock` : "on order"}</span>
          <span className={p.stock.regions > 0 ? "text-ok" : "text-warn"}>● Regions: {p.stock.regions > 0 ? p.stock.regions : "ships from Colombo"}</span>
        </p>
        <button className="mt-3 w-full rounded-full bg-forest py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-deep">
          Add to quote
        </button>
      </div>
    </article>
  );
}
