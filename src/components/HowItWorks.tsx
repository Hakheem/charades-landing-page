export default function HowItWorks() {
  const steps = [
    { number: '1', icon: 'comedy_mask', title: 'ACT IT OUT', description: 'Hold phone to forehead. Friends shout clues, you guess the word!', color: 'bg-matatu-pink', rotation: 'rotate-m-4' },
    { number: '2', icon: 'screen_rotation', title: 'TILT IT', description: 'Tilt down when you get it right. Tilt up to pass if you\'re stuck.', color: 'bg-sheng-violet', rotation: 'rotate-p-2' },
    { number: '3', icon: 'timer', title: 'BEAT CLOCK', description: 'Get as many words as possible before the buzzer sounds!', color: 'bg-nairobi-lime', rotation: 'rotate-m-2' }
  ];

  return (
    <section className="flex flex-col gap-12 mt-16 relative">
      <h2 className="font-display-xl text-display-xl text-center bg-white px-6 py-2 brutalist-border brutalist-shadow inline-block self-center ">
        HOW IT WORKS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-8">
        {steps.map((step, index) => (
          <div key={index} className={`bg-white p-8 brutalist-border brutalist-shadow torn-bottom ${step.rotation} ${index > 0 ? 'mt-8 md:mt-0' : ''} flex flex-col items-center text-center relative z-10`}>
            <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center brutalist-border -mt-12 mb-6 shadow-md`}>
              <span className="font-display-lg text-display-lg text-white">{step.number}</span>
            </div>
            <span className="material-symbols-outlined text-[72px] text-zine-ink mb-4">{step.icon}</span>
            <h3 className="font-display-lg text-display-lg mb-2">{step.title}</h3>
            <p className="font-body-lg text-body-lg">{step.description}</p>
          </div>
        ))}
        <svg className="absolute top-1/2 left-0 w-full h-full pointer-events-none hidden md:block z-0" style={{ minHeight: '200px' }}>
          <path d="M 30% 20% Q 45% 0% 60% 30%" fill="none" stroke="#14110F" strokeDasharray="8 8" strokeWidth="3"></path>
          <path d="M 65% 25% Q 80% 50% 90% 10%" fill="none" stroke="#14110F" strokeDasharray="8 8" strokeWidth="3"></path>
        </svg>
      </div>
    </section>
  );
}

