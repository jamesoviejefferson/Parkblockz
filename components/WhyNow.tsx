"use client";
import { motion } from "framer-motion";

const FadeUp = ({ children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function WhyNow() {
  const cards = [
    {
      title: "Cashless is no longer optional",
      desc: "Municipal mandates, consumer behavior, and payment networks have moved decisively beyond coins and paper.",
      detail: "Infrastructure that cannot support modern, multi-rail payments becomes obsolete — not gradually, but suddenly.",
      icon: "💳",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Static pricing is economically broken",
      desc: "Fixed rates ignore demand, congestion, events, weather, and time.",
      detail: "Cities are leaving revenue on the table while worsening traffic flow. AI-driven pricing is no longer experimental — it is inevitable.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Connectivity has expanded the addressable market",
      desc: "Satellite internet removes the final deployment constraint.",
      detail: "Rural parking, tourism corridors, remote facilities, and temporary zones are now addressable — creating new revenue surfaces legacy systems were never designed to reach.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
      title: "Enforcement must be digitally defensible",
      desc: "Paper tickets and siloed databases invite disputes, administrative drag, and legal friction.",
      detail: "Immutable, verifiable digital records reduce costs, accelerate resolution, and modernize compliance.",
      icon: "⚖️",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen">
      <section id="why" className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/5 via-transparent to-blue-600/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <FadeUp>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                Why Now
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Parking is becoming{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  programmable infrastructure
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                For decades, parking systems evolved incrementally. Coins became cards. Cards became apps. But the underlying architecture never changed.
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="bg-[#151B2E] rounded-2xl p-8 border-l-4 border-cyan-500">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Today, that architecture is breaking — economically, technically, and operationally. What replaces it will not be another meter. <strong className="text-white">It will be a platform.</strong>
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {cards.map((card, idx) => (
              <FadeUp key={card.title} delay={idx * 0.1}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative bg-[#151B2E] rounded-2xl border border-white/5 overflow-hidden hover:border-cyan-500/30 transition-all h-full flex flex-col">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151B2E] via-[#151B2E]/70 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-6">
                        <div className="w-14 h-14 rounded-xl bg-[#151B2E] border border-white/10 flex items-center justify-center text-3xl shadow-xl">
                          {card.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                        {card.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {card.desc}
                      </p>
                      
                      <div className="mt-auto pt-4 border-l-2 border-cyan-500/30 pl-4">
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {card.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Closing Statement */}
          <FadeUp delay={0.3}>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-blue-600/10 to-purple-600/10" />
              
              <div className="relative bg-[#151B2E] border border-white/10 p-12 md:p-16 text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="text-6xl mb-8 inline-block"
                >
                  🚀
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  The shift is <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">structural, not cyclical</span>
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                  Parking is transitioning from hardware-centric systems to software-defined infrastructure.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Platforms that unify detection, payments, pricing, enforcement, energy, and connectivity will become the operating layer cities depend on. <strong className="text-white">ParkBlockX™ was built for that moment</strong> — not as an upgrade, but as a replacement architecture.
                </p>

                {/* CTA */}
                <div className="mt-10">
                  <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-cyan-600/30 hover:shadow-xl hover:shadow-cyan-600/40 hover:scale-105">
                    Explore the Platform →
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Timeline Visual */}
          <FadeUp delay={0.4}>
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">The Evolution of Parking</h3>
                <p className="text-gray-400">From hardware to software-defined infrastructure</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { era: "1980s-2000s", title: "Coin Meters", icon: "🪙" },
                  { era: "2000s-2010s", title: "Card Payments", icon: "💳" },
                  { era: "2010s-2020s", title: "Mobile Apps", icon: "📱" },
                  { era: "2020s+", title: "AI Platforms", icon: "🤖" }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="bg-[#151B2E] rounded-xl p-6 border border-white/5 text-center hover:border-cyan-500/30 transition-all">
                      <div className="text-sm text-cyan-400 font-medium mb-2">{item.era}</div>
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <div className="text-white font-semibold">{item.title}</div>
                    </div>
                    {i < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}