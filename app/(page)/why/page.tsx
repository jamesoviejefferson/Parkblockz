"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
  const reasons = [
    {
      title: "Cashless is no longer optional",
      desc: "Municipal mandates, consumer behavior, and payment networks have moved decisively beyond coins and paper.",
      detail: "Infrastructure that cannot support modern, multi-rail payments becomes obsolete — not gradually, but suddenly.",
      icon: "/cashless.png",
      stat: "95%",
      statLabel: "Digital Payments"
    },
    {
      title: "Static pricing is economically broken",
      desc: "Fixed rates ignore demand, congestion, events, weather, and time.",
      detail: "Cities are leaving revenue on the table while worsening traffic flow. AI-driven pricing is no longer experimental — it is inevitable.",
      icon: "/Static.png",
      stat: "40%",
      statLabel: "Revenue Loss"
    },
    {
      title: "Connectivity has expanded the addressable market",
      desc: "Satellite internet removes the final deployment constraint.",
      detail: "Rural parking, tourism corridors, remote facilities, and temporary zones are now addressable — creating new revenue surfaces.",
      icon: "/Connectivity.png",
      stat: "100%",
      statLabel: "Global Coverage"
    },
    {
      title: "Enforcement must be digitally defensible",
      desc: "Paper tickets and siloed databases invite disputes, administrative drag, and legal friction.",
      detail: "Immutable, verifiable digital records reduce costs, accelerate resolution, and modernize compliance.",
      icon: "/Enforcement.png",
      stat: "70%",
      statLabel: "Cost Reduction"
    }
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen">
      <section id="why" className="py-12 md:py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-600/5 via-transparent to-cyan-600/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header with Large Typography */}
          <FadeUp>
            <div className="max-w-5xl mx-auto mb-12 md:mb-20">
              <span className="inline-block px-3 sm:px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                Why Now
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-[1.1]">
                Parking is becoming{" "}
                <span className="block mt-2 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  programmable infrastructure
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
                <div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                    For decades, parking systems evolved incrementally. Coins became cards. Cards became apps.
                  </p>
                </div>
                <div className="bg-[#151B2E] rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-cyan-500">
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                    But the underlying architecture never changed. <strong className="text-white">Today, that architecture is breaking.</strong>
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Vertical Timeline Style Cards */}
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 mb-12 md:mb-20">
            {reasons.map((reason, idx) => (
              <FadeUp key={reason.title} delay={idx * 0.15}>
                <div className="relative">
                  {/* Timeline Line */}
                  {idx < reasons.length - 1 && (
                    <div className="absolute left-10 top-24 w-0.5 h-full bg-linear-to-b from-cyan-500/50 to-transparent hidden md:block" />
                  )}
                  
                  <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                    {/* Left Side - Icon & Stat */}
                    <div className="shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-0 w-full md:w-auto">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-0 md:mb-4 relative z-10 p-2 sm:p-3">
                        <Image 
                          src={reason.icon}
                          alt={reason.title}
                          width={60}
                          height={60}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-left md:text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{reason.stat}</div>
                        <div className="text-xs text-gray-500 mt-1">{reason.statLabel}</div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 bg-[#151B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-cyan-500/30 transition-all">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        {reason.title}
                      </h3>
                      
                      <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                        {reason.desc}
                      </p>
                      
                      <div className="pt-3 sm:pt-4 border-t border-white/10">
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed italic">
                          {reason.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Large Statement Section with Image */}
          <FadeUp delay={0.5}>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 md:mb-20 max-w-6xl mx-auto">
              {/* Left - Image */}
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden order-2 lg:order-1">
                <Image 
                  src="/Ocean.png"
                  alt="Future Infrastructure"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] via-[#0B1120]/50 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                  <div className="text-xl sm:text-2xl font-bold text-white">The Future is Now</div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="text-left order-1 lg:order-2">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                  The shift is{" "}
                  <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    structural
                  </span>
                  , not cyclical
                </h3>
                
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  Parking is transitioning from hardware-centric systems to software-defined infrastructure.
                </p>
                
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 sm:mb-8">
                  Platforms that unify detection, payments, pricing, enforcement, energy, and connectivity will become the operating layer cities depend on. <strong className="text-white">ParkBlockX™ was built for that moment</strong> — not as an upgrade, but as a replacement architecture.
                </p>
                
                <Link href="/contact">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg sm:rounded-xl font-semibold transition-all shadow-lg shadow-cyan-600/30 hover:shadow-xl hover:shadow-cyan-600/40 hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                    See How It Works →
                  </button>
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Comparison Grid - Before/After */}
          <FadeUp delay={0.6}>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Before */}
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 relative shrink-0">
                    <Image 
                      src="/legal system.png"
                      alt="Legacy Systems"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-red-400">Legacy Systems</h4>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Coin-dependent infrastructure",
                    "Static, inflexible pricing",
                    "Requires grid connectivity",
                    "Paper-based enforcement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 relative shrink-0">
                    <Image 
                      src="/parkblockxTM.png"
                      alt="ParkBlockX"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-green-400">ParkBlockX™</h4>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Multi-rail digital payments",
                    "AI-powered dynamic pricing",
                    "Satellite connectivity ready",
                    "Blockchain-verified records"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}