export default function Features() {
    const features = [
        {
            icon: "🇰🇪",
            title: "Kenyan Vibes",
            description: "Categories inspired by Kenyan culture, from matatu lingo to nyama choma joints"
        },
        {
            icon: "⏱️",
            title: "Quick Rounds",
            description: "Fast-paced 60-second rounds to keep the energy high and everyone engaged"
        },
        {
            icon: "👥",
            title: "Team Play",
            description: "Split into teams and compete to see who knows their Sheng and Kenyan references best"
        },
        {
            icon: "🎯",
            title: "Multiple Categories",
            description: "From 'Matatu Phrases' to 'Kenyan Celebrities' - there's something for everyone"
        }
    ];

    return (
        <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-white mb-4">
                    Why Play Sheng Charades?
                </h2>
                <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
                    The perfect game for Kenyan Gen Zs and Millennials who want to test their pop culture knowledge
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-700"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

