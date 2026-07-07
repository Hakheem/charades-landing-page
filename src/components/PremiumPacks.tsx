'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PremiumPacks() {
  const packs = [
    { 
      title: 'GEN Z KENYA', 
      subtitle: 'Slang, memes, vibes.', 
      icon: 'GEN Z', 
      color: 'bg-sheng-violet', 
      rotation: 'rotate-m-4',
      image: '/images/genz-kenya.jpg'
    },
    { 
      title: 'TIKTOK TRENDS', 
      subtitle: 'Dances, sounds, drama.', 
      icon: 'music_video', 
      color: 'bg-sheng-violet', 
      rotation: 'rotate-p-2', 
      boxColor: 'bg-nairobi-lime',
      image: '/images/tiktok-trends.jpg'
    },
    { 
      title: 'NAIROBI NIGHTS', 
      subtitle: 'Clubs, drinks, strictly 18+', 
      icon: 'nightlife', 
      color: 'bg-sheng-violet', 
      rotation: 'rotate-m-2', 
      boxColor: 'bg-matatu-pink',
      image: '/images/nairobi-nights.jpg'
    }
  ];

  return (
    <section className="mt-24 mb-16 relative">
      <div className="text-center mb-12">
        <h2 className="font-display-xl text-display-xl inline-block bg-matatu-pink text-white px-6 py-2 brutalist-border rotate-m-2">
          UNLOCK MORE CHAOS
        </h2>
        <p className="font-body-lg text-body-lg mt-4 max-w-2xl mx-auto bg-white p-2 brutalist-border inline-block rotate-p-2">
          Premium packs updated weekly with the latest trends.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packs.map((pack, index) => {
          const [imageError, setImageError] = useState(false);

          return (
            <div key={index} className={`${pack.color} p-6 brutalist-border brutalist-shadow ${pack.rotation} ${index > 0 ? 'mt-8 md:mt-0' : ''} flex flex-col items-center text-center relative text-white group cursor-not-allowed hover:scale-105 transition-transform`}>
              <div className="absolute -top-4 -right-4 bg-zine-ink text-nairobi-lime p-2 rounded-full brutalist-border z-20">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              </div>
              <div className={`w-full h-32 ${pack.boxColor || 'bg-white'} brutalist-border mb-4 overflow-hidden relative`}>
                <div className="absolute inset-0 halftone-bg opacity-30"></div>
                
                {/* Try to load image, fallback to icon/text if not available */}
                {pack.image && !imageError ? (
                  <Image 
                    src={pack.image} 
                    alt={pack.title}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : null}
                
                {/* Fallback content (shown when image is missing or fails to load) */}
                {(imageError || !pack.image) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {pack.icon && pack.icon.length <= 5 ? (
                      <span className="font-display-xl text-display-xl text-zine-ink opacity-20 w-full">{pack.icon}</span>
                    ) : (
                      <span className="material-symbols-outlined text-[80px] text-zine-ink opacity-30">{pack.icon}</span>
                    )}
                  </div>
                )}
              </div>
              <h3 className="font-display-lg text-display-lg text-nairobi-lime mb-2">{pack.title}</h3>
              <p className="font-utility-mono text-sm opacity-80">{pack.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

