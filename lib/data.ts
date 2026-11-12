// Sample catalogue data. Prices are SAMPLE figures for the demo site only —
// replace with the client's real price list before launch.

export type CategoryId =
  | "panels"
  | "inverters"
  | "batteries"
  | "mounting"
  | "cables"
  | "protection"
  | "ev"
  | "tools";

export const categories: {
  id: CategoryId;
  name: string;
  si: string;
  blurb: string;
  group: "Solar" | "Storage" | "Accessories" | "e-Mobility";
}[] = [
  { id: "panels", name: "Solar Panels", si: "සූර්ය පැනල", blurb: "Tier-1 N-type TOPCon, 550–640 W", group: "Solar" },
  { id: "inverters", name: "Inverters", si: "ඉන්වර්ටර්", blurb: "On-grid & hybrid, 3–60 kW", group: "Solar" },
  { id: "batteries", name: "Batteries", si: "බැටරි", blurb: "LiFePO4 home & rack storage", group: "Storage" },
  { id: "mounting", name: "Mounting & Racking", si: "රාක්ක", blurb: "Locally made rails, clamps, hooks", group: "Solar" },
  { id: "cables", name: "Cables & Connectors", si: "කේබල්", blurb: "PV cable, MC4, earthing", group: "Accessories" },
  { id: "protection", name: "Protection & Meters", si: "ආරක්ෂණ", blurb: "DC/AC breakers, SPD, smart meters", group: "Accessories" },
  { id: "ev", name: "EV Chargers", si: "EV චාජර්", blurb: "7–22 kW home & workplace", group: "e-Mobility" },
  { id: "tools", name: "Tools & Testers", si: "මෙවලම්", blurb: "Crimpers, IR testers, clamp meters", group: "Accessories" },
];

export type Product = {
  sku: string;
  name: string;
  brand: string;
  category: CategoryId;
  spec: string;
  price: number; // LKR, sample retail incl. VAT
  unit: string;
  stock: { colombo: number; regions: number };
  tag?: "Best seller" | "New" | "Made in SL" | "Outlet" | "Budget 2027 watch";
};

export const products: Product[] = [
  { sku: "PV-JNK-620N", name: "Tiger Neo N-type 620 W", brand: "Jinko", category: "panels", spec: "TOPCon · 22.9% · 30-yr power warranty", price: 38500, unit: "per panel", stock: { colombo: 1240, regions: 310 }, tag: "Best seller" },
  { sku: "PV-JA-550M", name: "DeepBlue 550 W Mono", brand: "JA Solar", category: "panels", spec: "Mono PERC · 21.3% · 144 half-cell", price: 35000, unit: "per panel", stock: { colombo: 860, regions: 220 } },
  { sku: "PV-TRN-610N", name: "Vertex N 610 W", brand: "Trina", category: "panels", spec: "N-type · bifacial · dual glass", price: 37900, unit: "per panel", stock: { colombo: 540, regions: 96 }, tag: "New" },
  { sku: "INV-GW-5K", name: "5 kW On-grid Inverter", brand: "GoodWe", category: "inverters", spec: "Single phase · 2 MPPT · Wi-Fi", price: 285000, unit: "each", stock: { colombo: 64, regions: 18 } },
  { sku: "INV-SOL-6KH", name: "6 kW Hybrid Inverter", brand: "Solis", category: "inverters", spec: "Single phase · battery-ready · backup port", price: 465000, unit: "each", stock: { colombo: 41, regions: 9 }, tag: "Best seller" },
  { sku: "INV-DEY-10KH", name: "10 kW Hybrid Inverter", brand: "Deye", category: "inverters", spec: "Three phase · 48 V · parallel up to 10", price: 720000, unit: "each", stock: { colombo: 22, regions: 4 } },
  { sku: "INV-HW-10KTL", name: "SUN2000 10 kW", brand: "Huawei", category: "inverters", spec: "Three phase · optimiser-ready", price: 610000, unit: "each", stock: { colombo: 18, regions: 3 } },
  { sku: "BAT-DYN-5K", name: "5.12 kWh LiFePO4 Module", brand: "Dyness", category: "batteries", spec: "51.2 V · 6,000 cycles · wall/rack", price: 395000, unit: "each", stock: { colombo: 35, regions: 0 }, tag: "Budget 2027 watch" },
  { sku: "BAT-BYD-HVS", name: "Battery-Box HVS 7.7", brand: "BYD", category: "batteries", spec: "High voltage · stackable", price: 990000, unit: "each", stock: { colombo: 8, regions: 0 } },
  { sku: "MNT-RAIL-42", name: "Aluminium Rail 4.2 m", brand: "Sooriya Mount", category: "mounting", spec: "6063-T6 · anodised · Sri Lanka-made", price: 7800, unit: "per rail", stock: { colombo: 2100, regions: 640 }, tag: "Made in SL" },
  { sku: "MNT-CLMP-KIT", name: "Mid + End Clamp Kit (10 panels)", brand: "Sooriya Mount", category: "mounting", spec: "30–35 mm frames · SS bolts", price: 6400, unit: "per kit", stock: { colombo: 900, regions: 300 }, tag: "Made in SL" },
  { sku: "MNT-HOOK-T", name: "Tile Roof Hook", brand: "Sooriya Mount", category: "mounting", spec: "SS304 · adjustable", price: 1150, unit: "each", stock: { colombo: 3200, regions: 1100 }, tag: "Made in SL" },
  { sku: "CBL-PV-6", name: "PV Cable 6 mm² (100 m)", brand: "Kelani", category: "cables", spec: "TÜV · UV-resistant · red/black", price: 42000, unit: "per roll", stock: { colombo: 300, regions: 120 } },
  { sku: "CON-MC4-10", name: "MC4 Connector Pair ×10", brand: "Stäubli-type", category: "cables", spec: "1500 V DC · IP68", price: 4500, unit: "per pack", stock: { colombo: 1500, regions: 600 } },
  { sku: "PRT-SPD-DC", name: "DC Surge Protector 1000 V", brand: "Schneider", category: "protection", spec: "Type 2 · 40 kA", price: 9800, unit: "each", stock: { colombo: 260, regions: 90 } },
  { sku: "PRT-DCB-25", name: "DC Breaker 2P 25 A", brand: "ABB", category: "protection", spec: "1000 V DC", price: 8200, unit: "each", stock: { colombo: 410, regions: 150 } },
  { sku: "PRT-MTR-SM", name: "Smart Meter (Net Plus ready)", brand: "Approved type*", category: "protection", spec: "*Check CEB/LECO approved list", price: 48000, unit: "each", stock: { colombo: 60, regions: 12 }, tag: "New" },
  { sku: "EV-7K", name: "7 kW AC Wallbox", brand: "Growatt", category: "ev", spec: "Type 2 · app control", price: 165000, unit: "each", stock: { colombo: 25, regions: 2 } },
  { sku: "TL-IR-1K", name: "Insulation Tester 1 kV", brand: "Fluke-type", category: "tools", spec: "PV string testing", price: 72000, unit: "each", stock: { colombo: 14, regions: 0 } },
  { sku: "TL-CRMP", name: "MC4 Crimp Tool Kit", brand: "Generic", category: "tools", spec: "2.5–6 mm² · spanners incl.", price: 9500, unit: "per kit", stock: { colombo: 120, regions: 45 }, tag: "Outlet" },
];

export const brands = ["Jinko", "JA Solar", "Trina", "LONGi", "Huawei", "GoodWe", "Solis", "Deye", "Growatt", "Sungrow", "SMA", "BYD", "Dyness"];

export const provinces: { name: string; hub: string; type: "Main warehouse" | "Branch store" | "Partner depot"; status: "Open" | "Opening 2027" }[] = [
  { name: "Western", hub: "Kelaniya", type: "Main warehouse", status: "Open" },
  { name: "Sabaragamuwa", hub: "Ratnapura", type: "Branch store", status: "Open" },
  { name: "Central", hub: "Kandy", type: "Branch store", status: "Opening 2027" },
  { name: "Southern", hub: "Galle / Matara", type: "Branch store", status: "Opening 2027" },
  { name: "North Western", hub: "Kurunegala", type: "Branch store", status: "Opening 2027" },
  { name: "North Central", hub: "Anuradhapura", type: "Partner depot", status: "Opening 2027" },
  { name: "Uva", hub: "Badulla", type: "Partner depot", status: "Opening 2027" },
  { name: "Eastern", hub: "Batticaloa", type: "Partner depot", status: "Opening 2027" },
  { name: "Northern", hub: "Jaffna", type: "Partner depot", status: "Opening 2027" },
];

export const courses = [
  { name: "Solar Technician Hands-On", length: "4–6 weeks · part-time", who: "Electricians, school leavers, rural youth", outcome: "Certificate + NVQ Level 3 preparation", fee: 45000, modules: ["Safety & DC basics", "Site survey & sizing", "Mounting on a training roof", "MC4 crimping & testing", "On-grid & hybrid inverter setup", "Commissioning & handover"] },
  { name: "Battery & Hybrid Upgrade", length: "3 days", who: "Working installers", outcome: "Certificate", fee: 18000, modules: ["LiFePO4 & BMS", "Hybrid wiring", "Backup design", "Fault finding"] },
  { name: "Weekend Starter", length: "2 weekends", who: "Anyone curious about solar work", outcome: "Certificate of completion", fee: 9500, modules: ["Electrical safety", "How PV works", "Basic sizing", "DC wiring"] },
  { name: "RPL Clinic", length: "1 day", who: "Technicians with 2+ years' experience", outcome: "Help to apply for NVQ Level 3 via RPL", fee: 0, modules: ["Portfolio building", "Evidence checklist", "Application walkthrough"] },
];

export const lkr = (n: number) => "Rs " + n.toLocaleString("en-LK");
