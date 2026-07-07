'use client';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-start gap-8 relative lg:items-start lg:pt-4">
      
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-6 z-10 lg:pt-10">
        <h1 className="font-display-xl text-[48px] md:text-[80px] md:leading-[0.9] text-zine-ink uppercase rotate-m-2">
          <span className="bg-nairobi-lime px-4 py-2 brutalist-border inline-block mb-4">TILT TO GUESS,</span><br/>
          <span className="text-white bg-zine-ink px-4 py-2 brutalist-border inline-block rotate-p-2">ACT IT OUT!</span>
        </h1>
        
        <p className="font-body-lg text-[18px] max-w-xl">
          The ultimate Kenyan charades game. Gather your squad, pick a category, and let the chaos begin!
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-zine-ink text-white font-utility-mono text-[16px] px-8 py-4 brutalist-button flex items-center gap-2 hover:bg-zine-ink/90 transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>android</span>
            GOOGLE PLAY
          </button>
          <button className="bg-white text-zine-ink font-utility-mono text-[16px] px-8 py-4 brutalist-button flex items-center gap-2 hover:bg-zine-ink/5 transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>apps</span>
            APP STORE
          </button>
        </div>
      </div>

      {/* Phone Mockup - Moved up with lg:-mt-8 */}
      <div className="flex-1 relative flex justify-center mt-6 md:mt-0 lg:-mt-8 items-center">
      
        <div className="relative z-10 w-[280px] h-[520px] bg-zine-ink rounded-[30px] border-8 border-zine-ink brutalist-shadow rotate-p-4 flex flex-col overflow-hidden">
          <div className="flex-1 bg-white p-4 flex flex-col relative">
            {/* Status Bar */}
            <div className="h-6 w-full flex justify-between items-center text-zine-ink mb-4">
              <span className="font-utility-mono text-xs">12:00</span>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-[16px]">signal_cellular_4_bar</span>
                <span className="material-symbols-outlined text-[16px]">battery_full</span>
              </div>
            </div>

            {/* Categories Screen */}
            <div className="flex-1 bg-zine-paper brutalist-border flex flex-col p-4 relative shadow-lg">
              <h4 className="font-display-lg text-[18px] text-center text-zine-ink uppercase mb-3">CHOOSE CATEGORY</h4>
              
              {/* Category List */}
              <div className="flex-1 space-y-2">
                {[
                  { name: 'MATATU SLANG', icon: 'directions_bus' },
                  { name: 'KENYAN CELEBS', icon: 'star' },
                  { name: 'NYAMA CHOMA', icon: 'restaurant' },
                  { name: 'SHENG PHRASES', icon: 'translate' },
                ].map((category, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-2 brutalist-border flex items-center gap-3 hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px] text-zine-ink">{category.icon}</span>
                    <span className="font-utility-mono text-[11px] text-zine-ink font-bold">{category.name}</span>
                    <span className="material-symbols-outlined text-[16px] text-zine-ink ml-auto">chevron_right</span>
                  </div>
                ))}
              </div>

              {/* Start Button */}
              <div className="mt-3 bg-matatu-pink text-white font-utility-mono text-[12px] text-center py-2 brutalist-border cursor-pointer hover:bg-matatu-pink/90 transition-colors">
                START GAME →
              </div>
            </div>

          </div>
        </div>

        {/* Hand drawn arrow */}
        <svg className="absolute -left-12 top-1/2 w-24 h-24 text-zine-ink z-20 hidden md:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewBox="0 0 100 100">
          <path d="M10,90 Q40,40 90,50 M80,30 L95,50 L80,70"></path>
        </svg>
      </div>
    </section>
  );
}
