export default function Leaderboard() {
  const ranks = [
    { rank: '#1', name: 'SQUAD_WAKANDA', points: '9,420 PTS', highlight: true },
    { rank: '#2', name: 'NAIROBI_NINJAS', points: '8,105 PTS', highlight: false },
    { rank: '#3', name: 'BODA_BOYS', points: '7,890 PTS', highlight: false }
  ];

  return (
    <section className="bg-zine-ink text-white p-8 md:p-12 brutalist-shadow mt-16 relative rotate-p-2 overflow-hidden border-4 border-zine-ink">
      <div className="absolute inset-0 halftone-bg opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 rounded-full bg-nairobi-lime animate-pulse-dot"></div>
          <h2 className="font-display-xl text-display-xl text-nairobi-lime">LIVE LEADERBOARD</h2>
        </div>
        <button className="bg-white text-zine-ink font-utility-mono text-utility-mono px-6 py-3 brutalist-button hover:bg-nairobi-lime transition-colors">
          VOTE FOR NEW WORDS
        </button>
      </div>
      <div className="relative z-10 space-y-4 font-utility-mono text-utility-mono text-lg">
        {ranks.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b-2 border-dashed border-gray-600 pb-4">
            <div className="flex items-center gap-4">
              <span className={item.highlight ? 'text-nairobi-lime text-2xl w-8' : 'text-gray-400 text-2xl w-8'}>{item.rank}</span>
              <span className={item.highlight ? 'font-bold text-xl' : 'font-bold'}>{item.name}</span>
            </div>
            <span className={item.highlight ? 'bg-matatu-pink px-3 py-1 rounded text-white brutalist-border' : ''}>{item.points}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

