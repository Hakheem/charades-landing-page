import Link from 'next/link';

export default function Navbar() {
  return (
    <nav id="home" className="w-full sticky top-0 z-50 bg-white border-b-4 border-zine-ink flex justify-between items-center px-6 py-5">
      {/* Brand Logo */}
      <Link href="#home" className="font-display-xl text-2xl text-zine-ink border-2 border-zine-ink px-3 py-1 cursor-pointer hover:bg-zinc-100 transition-colors">
        VAIBUU
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10">
        {[
          { name: 'How It Works', href: '/#how-it-works' },
          { name: 'Game Modes', href: '/#game-modes' },
          { name: 'Leaderboard', href: '/#leaderboard' },
          { name: 'Categories', href: '/#categories' },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-utility-mono text-sm uppercase tracking-wider text-zine-ink hover:text-matatu-pink transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Primary Call-to-Action */}
      <button className="bg-primary-container text-white font-utility-mono text-sm px-6 py-3 border-2 border-zine-ink shadow-[4px_4px_0px_0px_rgba(20,17,15,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200">
        START PLAYING
      </button>
    </nav>
  );
}
