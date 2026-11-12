import { Sun, Cpu, BatteryCharging, Ruler, Cable, ShieldCheck, PlugZap, Wrench } from "lucide-react";
import type { CategoryId } from "@/lib/data";

const map = {
  panels: Sun,
  inverters: Cpu,
  batteries: BatteryCharging,
  mounting: Ruler,
  cables: Cable,
  protection: ShieldCheck,
  ev: PlugZap,
  tools: Wrench,
} as const;

const tint: Record<CategoryId, string> = {
  panels: "bg-[#fbe7bd] text-[#8a5a00]",
  inverters: "bg-[#dbe9e1] text-forest",
  batteries: "bg-[#e3eedc] text-ok",
  mounting: "bg-[#f1dccf] text-clay",
  cables: "bg-[#ece4d6] text-ink",
  protection: "bg-[#dfe6ea] text-[#29475a]",
  ev: "bg-[#e7e0f0] text-[#4b3a6b]",
  tools: "bg-[#ece4d6] text-muted",
};

export function CategoryIcon({ id, size = 28, className = "" }: { id: CategoryId; size?: number; className?: string }) {
  const Icon = map[id];
  return (
    <span className={`inline-flex items-center justify-center rounded-xl ${tint[id]} ${className}`} aria-hidden="true">
      <Icon size={size} strokeWidth={1.75} />
    </span>
  );
}
