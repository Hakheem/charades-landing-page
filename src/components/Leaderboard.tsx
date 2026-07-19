export default function Leaderboard() {
  const ranks = [
    { rank: '#1', name: 'SQUAD_WAKANDA', points: '9,420 PTS', highlight: true },
    { rank: '#2', name: 'NAIROBI_NINJAS', points: '8,105 PTS', highlight: false },
    { rank: '#3', name: 'BODA_BOYS', points: '7,890 PTS', highlight: false }
  ];

  return (
    <section 
      id="leaderboard" 
      // Added mx-4 on mobile to prevent the rotated container borders from clipping off-screen
      className="bg-zine-ink text-white p-6 sm:p-8 md:p-12 brutalist-shadow mt-16 mx-4 md:mx-0 relative rotate-p-2 overflow-hidden border-4 border-zine-ink"
    >
      <div className="absolute inset-0 halftone-bg opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      {/* Header Container: Stack on mobile, side-by-side on desktop */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 rounded-full bg-nairobi-lime animate-pulse-dot flex-shrink-0"></div>
          <h2 className="font-display-xl text-2xl sm:text-3xl md:text-display-xl text-nairobi-lime tracking-tight">
            LIVE LEADERBOARD
          </h2>
        </div>
        
        {/* Full-width button on mobile for easy tapping */}
        <button className="w-full md:w-auto bg-white text-zine-ink font-utility-mono text-utility-mono px-6 py-3 brutalist-button hover:bg-nairobi-lime transition-colors text-center text-sm md:text-base">
          VOTE FOR NEW WORDS
        </button>
      </div>

      {/* Row Container: Slightly smaller text on mobile to ensure everything fits */}
      <div className="relative z-10 space-y-4 font-utility-mono text-utility-mono text-sm sm:text-base md:text-lg">
        {ranks.map((item, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center border-b-2 border-dashed border-gray-600 pb-4 gap-4"
          >
            {/* Left side: Rank & Name */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <span className={`text-xl md:text-2xl w-8 flex-shrink-0 ${item.highlight ? 'text-nairobi-lime' : 'text-gray-400'}`}>
                {item.rank}
              </span>
              {/* Truncated text to prevent long team names from breaking the UI */}
              <span className={`font-bold truncate ${item.highlight ? 'text-nairobi-lime text-base sm:text-lg md:text-xl' : 'text-white'}`}>
                {item.name}
              </span>
            </div>

            {/* Right side: Points */}
            <span className={`flex-shrink-0 text-xs sm:text-sm md:text-base ${item.highlight ? 'bg-matatu-pink px-3 py-1 rounded text-white brutalist-border' : 'text-gray-300'}`}>
              {item.points}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

