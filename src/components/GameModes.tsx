export default function GameModes() {
  const modes = [
    { title: 'CLASSIC', desc: 'The original Kenyan vibe. No frills, just pure chaos.', icon: 'group', bgColor: 'bg-zine-ink', iconColor: 'text-white' },
    { title: 'TABOO', desc: 'Say it without saying it. Avoid the forbidden words!', icon: 'block', bgColor: 'bg-sheng-violet', iconColor: 'text-white' },
    { title: 'ONE WORD', desc: 'Economy of words. One word to rule them all.', icon: 'looks_one', bgColor: 'bg-matatu-pink', iconColor: 'text-white' },
    { title: 'REVERSE', desc: 'You act, they guess, you switch. Mind-bending stuff.', icon: 'swap_horiz', bgColor: 'bg-nairobi-lime', iconColor: 'text-zine-ink' },
    { title: 'SOUND ONLY', desc: 'Eyes closed. If you can hear it, you can guess it.', icon: 'music_note', bgColor: 'bg-zinc-800', iconColor: 'text-white' },
    { title: 'TIME ATTACK', desc: 'Beat the clock! 60 seconds of pure, high-stakes guessing.', icon: 'timer', bgColor: 'bg-zinc-500', iconColor: 'text-white' }
  ];

  return (
    <section className="flex flex-col gap-8 mt-24" id="game-modes">
      <div className="flex items-center gap-4">
        <h2 className="font-display-lg text-display-lg bg-nairobi-lime px-4 py-2 brutalist-border">GAME MODES</h2>
        <div className="h-1 flex-grow bg-zine-ink/20"></div>
      </div>

      {/* MOBILE SLIDER: Force w-full items inside the slider to mimic grid-cols-1 */}
      <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar md:hidden w-full">
        {modes.map((mode, index) => <ModeCard key={`m-${index}`} mode={mode} isMobileSlider />)}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {modes.map((mode, index) => <ModeCard key={`d-${index}`} mode={mode} />)}
      </div>
    </section>
  );
}

// Updated prop name to be explicit about mobile vs desktop layout behavior
function ModeCard({ mode, isMobileSlider }: { mode: any, isMobileSlider?: boolean }) {
  return (
    <div 
      className={`${
        isMobileSlider ? 'w-full min-w-full' : 'w-full'
      } flex-shrink-0 bg-white p-6 brutalist-border brutalist-shadow hover:translate-y-[-8px] transition-all duration-300 snap-center group cursor-pointer`}
    >
      <div className={`h-32 ${mode.bgColor} mb-6 brutalist-border flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 halftone-bg opacity-20"></div>
        <span className={`material-symbols-outlined text-[64px] ${mode.iconColor} z-10`}>{mode.icon}</span>
      </div>
      <h4 className="font-display-lg text-2xl text-zine-ink mb-2">{mode.title}</h4>
      <p className="font-utility-mono text-sm text-zinc-600 leading-relaxed">{mode.desc}</p>
    </div>
  );
}
