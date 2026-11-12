import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 bg-forest-deep text-[#dfe8e2]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-white">
            Sooriya <span className="text-sun">Solar Hub</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Solar wholesale, training and support for Sri Lankan installers and homeowners. Stock and people in every province.
          </p>
          <p lang="si" className="mt-3 text-sm text-[#b9c9be]">සෑම පළාතකටම සූර්ය බලශක්ති කොටස්, පුහුණුව සහ සහාය.</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sun">Shop</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop/?c=panels" className="hover:text-white">Solar panels</Link></li>
            <li><Link href="/shop/?c=inverters" className="hover:text-white">Inverters</Link></li>
            <li><Link href="/shop/?c=batteries" className="hover:text-white">Batteries</Link></li>
            <li><Link href="/shop/?c=mounting" className="hover:text-white">Mounting & racking</Link></li>
            <li><Link href="/shop/?c=outlet" className="hover:text-white">Outlet</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sun">Service</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/account/" className="hover:text-white">Open a trade account</Link></li>
            <li><Link href="/academy/" className="hover:text-white">Academy & NVQ prep</Link></li>
            <li><Link href="/#calculator" className="hover:text-white">Calculators</Link></li>
            <li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/#network" className="hover:text-white">Branches & depots</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sun">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>Main warehouse: Kelaniya (sample)</li>
            <li>Trade line: 07X XXX XXXX</li>
            <li>WhatsApp orders: 07X XXX XXXX</li>
            <li>Mon–Sat · 8.00am–6.00pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-[#9fb3a6]">
          © 2026 Sooriya Solar Hub (sample brand). Demo site by Voyage. All prices, stock levels and contact details are placeholders.
        </p>
      </div>
    </footer>
  );
}
