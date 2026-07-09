export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-24 bg-white border-t-8 border-zine-ink p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="font-display-lg text-[40px] text-zine-ink rotate-m-2 border-2 border-zine-ink px-4 py-1 inline-block w-fit">
            Vaibuu
          </div>
          <p className="flex flex-col gap-1 font-utility-mono text-sm text-zinc-500">
            {currentYear} Vaibuu.
            <span>Kazi kwa vijana.</span>
          </p>
        </div>

        {/* Section Links */}
        <div className="flex flex-col gap-2">
          <h5 className="font-utility-mono font-bold text-zine-ink mb-2">EXPLORE</h5>
          {['Home', 'Game Modes', 'How to Play', 'Download'].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="font-utility-mono text-sm hover:text-sheng-violet transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-2">
          <h5 className="font-utility-mono font-bold text-zine-ink mb-2">LEGAL</h5>
          <a href="/privacy" className="font-utility-mono text-sm hover:text-sheng-violet transition-colors">Privacy Policy</a>
          <a href="/terms" className="font-utility-mono text-sm hover:text-sheng-violet transition-colors">Terms of Service</a>
        </div>

        {/* Support/Contact */}
        <div className="flex flex-col gap-2">
          <h5 className="font-utility-mono font-bold text-zine-ink mb-2">SUPPORT</h5>
          <a href="mailto:hakheem.dev@gmail.com" className="font-utility-mono text-sm hover:text-sheng-violet transition-colors">hello@vaibuu.co.ke</a>
          <a href="tel:+254769403162" className="font-utility-mono text-sm hover:text-sheng-violet transition-colors">+254 769 403 162</a>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-zine-ink/20 flex justify-center">
        <span className="font-utility-mono text-xs uppercase opacity-50">Handcrafted in Nairobi</span>
      </div>
    </footer>
  );
}

