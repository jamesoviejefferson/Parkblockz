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

export default function Buyers() {
  const buyerProfiles = [
    {
      title: "Parking OEMs & Meter Manufacturers",
      desc: "Provides a modern software stack that replaces fragmented firmware, legacy backends, and single-rail payment systems.",
      detail: "Enables OEMs to transition from hardware-centric sales to recurring software licensing and platform revenue.",
      icon: "🏭",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      stats: ["Software-first", "Recurring revenue", "Global scale"]
    },
    {
      title: "Global Parking Operators",
      desc: "Delivers unified visibility across pricing, utilization, enforcement, and revenue — including remote and non-traditional locations.",
      detail: "Reduces operational overhead while increasing yield per space through dynamic pricing.",
      icon: "🌍",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      stats: ["Unified platform", "AI optimization", "Remote capable"]
    },
    {
      title: "Payment Networks & Fintech Platforms",
      desc: "Extends multi-rail payments into physical infrastructure with programmable settlement and compliance.",
      detail: "Positions parking as a high-frequency, real-world transaction surface for fiat, stablecoins, and future CBDCs.",
      icon: "💎",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      stats: ["Multi-currency", "Real-time", "CBDC-ready"]
    },
    {
      title: "Telecom & Satellite Providers",
      desc: "Creates recurring demand for connectivity in locations historically unreachable by terrestrial networks.",
      detail: "Transforms parking infrastructure into distributed, always-on edge endpoints.",
      icon: "🛰️",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      stats: ["Edge computing", "IoT endpoints", "5G/Satellite"]
    }
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen">
      <section id="buyers" className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/5 via-transparent to-purple-600/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <FadeUp>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                Strategic Acquisition Targets
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Acquisition Rationale
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-4">
                ParkBlockX™ was designed to integrate cleanly into existing parking, payments, and infrastructure ecosystems.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed max-w-4xl mx-auto">
                The platform represents a converged software layer that consolidates detection, payments, pricing, enforcement, connectivity, and energy into a single, licensable architecture.
              </p>
            </div>
          </FadeUp>

          {/* Buyer Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {buyerProfiles.map((buyer, idx) => (
              <FadeUp key={buyer.title} delay={idx * 0.1}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative bg-[#151B2E] rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={buyer.image}
                        alt={buyer.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#151B2E] via-[#151B2E]/50 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-6">
                        <div className="w-16 h-16 rounded-xl bg-[#151B2E] border border-white/10 flex items-center justify-center text-3xl shadow-xl">
                          {buyer.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                        {buyer.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {buyer.desc}
                      </p>
                      
                      <div className="mb-6 pl-4 border-l-2 border-blue-500/30">
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {buyer.detail}
                        </p>
                      </div>

                      {/* Stats Tags */}
                      <div className="flex flex-wrap gap-2">
                        {buyer.stats.map((stat, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Strategic Summary Card */}
          <FadeUp delay={0.3}>
            <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
              
              <div className="relative bg-[#151B2E] border border-white/10 p-12 md:p-16">
                <div className="text-center max-w-3xl mx-auto">
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0] 
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-6xl mb-8 inline-block"
                  >
                    🎯
                  </motion.div>
                  
                  {/* Heading */}
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Strategic Value Summary
                  </h3>
                  
                  {/* Content */}
                  <div className="space-y-6">
                    <p className="text-2xl text-gray-300 leading-relaxed font-light">
                      ParkBlockX™ is not a point solution.
                    </p>
                    
                    <p className="text-lg text-gray-400 leading-relaxed">
                      It is a platform-level asset designed for acquisition or long-term licensing by organizations seeking to modernize parking infrastructure at scale.
                    </p>
                    
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-lg text-gray-400 leading-relaxed">
                        The system is <span className="text-white font-semibold">software-complete, simulation-tested, patent-pending</span>, and structured for rapid integration into existing product lines and service offerings.
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="grid md:grid-cols-3 gap-4 mt-12">
                    {[
                      { icon: "✅", text: "Software-Complete", color: "blue" },
                      { icon: "✅", text: "Simulation-Tested", color: "purple" },
                      { icon: "✅", text: "Patent-Pending", color: "cyan" }
                    ].map((item, i) => (
                      <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <div className="text-sm font-semibold text-white">{item.text}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-12">
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105">
                      Schedule Strategic Discussion
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Additional Value Props */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <FadeUp delay={0.4}>
              <div className="bg-[#151B2E] rounded-2xl p-10 border border-white/5 hover:border-purple-500/30 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">💼</div>
                <h3 className="text-2xl font-bold text-white mb-4">Flexible Acquisition Models</h3>
                <p className="text-gray-400 leading-relaxed">
                  Full acquisition, long-term licensing, or strategic partnership arrangements tailored to your organization's needs.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.5}>
              <div className="bg-[#151B2E] rounded-2xl p-10 border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Rapid Integration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Modular architecture designed for seamless integration into existing product lines and infrastructure ecosystems.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}