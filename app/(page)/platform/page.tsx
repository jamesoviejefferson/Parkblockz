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

export default function Platform() {
  const coreFeatures = [
    {
      title: "Multi-Currency Payments",
      desc: "Accept any form of payment - from traditional cards to cryptocurrency and CBDCs",
      icon: "💳",
      features: ["Apple Pay & Google Pay", "Credit/Debit Cards", "USDC & RLUSD Stablecoins", "XRP, ETH, MATIC", "CBDC-Ready Infrastructure"]
    },
    {
      title: "AI Dynamic Pricing",
      desc: "Maximize revenue with intelligent, demand-based pricing that adapts in real-time",
      icon: "🤖",
      features: ["Occupancy-based pricing", "Event awareness", "Weather integration", "Historical analytics", "Predictive modeling"]
    },
    {
      title: "Autonomous Detection",
      desc: "Multi-sensor vehicle detection with 99.9% accuracy across all conditions",
      icon: "📡",
      features: ["Ultrasonic sensors", "Radar detection", "Optical/Camera systems", "RFID tracking", "LIDAR integration"]
    },
    {
      title: "Blockchain Security",
      desc: "Immutable records and quantum-resistant security for complete transparency",
      icon: "⛓️",
      features: ["XRPL settlement", "Polygon smart contracts", "Chainlink oracles", "Tamper-proof records", "Audit-ready logs"]
    },
    {
      title: "Global Connectivity",
      desc: "Deploy anywhere with resilient connectivity including remote locations",
      icon: "🛰️",
      features: ["5G/LTE networks", "Starlink satellite", "Wi-Fi fallback", "Offline mode", "Auto-sync"]
    },
    {
      title: "M2M Payments",
      desc: "Vehicles pay automatically without apps or user interaction",
      icon: "🚗",
      features: ["NFC communication", "Bluetooth LE", "V2X protocols", "DSRC integration", "Autonomous authorization"]
    }
  ];

  const benefits = [
    {
      icon: "📈",
      title: "40% Revenue Increase",
      desc: "Dynamic pricing optimizes rates based on demand"
    },
    {
      icon: "⚡",
      title: "< 100ms Response",
      desc: "Real-time processing across all payment rails"
    },
    {
      icon: "🌍",
      title: "Global Deployment",
      desc: "Works anywhere - urban, rural, or remote"
    },
    {
      icon: "🔒",
      title: "99.99% Uptime",
      desc: "Enterprise-grade reliability and failover"
    }
  ];

  const useCases = [
    {
      title: "Smart Cities",
      desc: "Integrate with existing infrastructure",
      image: "/city-parking.jpg"
    },
    {
      title: "Remote Locations",
      desc: "Satellite connectivity enables parking anywhere",
      image: "ParkBlockX.png"
    },
    {
      title: "Event Venues",
      desc: "Dynamic pricing for high-demand periods",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
    },
    {
      title: "Commercial Fleets",
      desc: "M2M payments for autonomous operations",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/10 via-purple-600/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                Platform Overview
              </span>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                The Complete
                <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Parking Platform
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                ParkBlockX™ unifies detection, payments, pricing, enforcement, connectivity, and energy into a single, software-defined infrastructure layer
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30">
                  Request Demo →
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 transition-all">
                  Technical Docs
                </button>
              </div>
            </div>
          </FadeUp>

          {/* Platform Image */}
          <FadeUp delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/ParkBlockX Retro Fit image.png"
                alt="Platform Dashboard"
                className="w-full h-125 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] via-transparent to-transparent" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Six Core <span className="text-blue-400">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need to deploy modern parking infrastructure at scale
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, idx) => (
              <FadeUp key={feature.title} delay={idx * 0.1}>
                <div className="bg-[#151B2E] rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-all h-full">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-4xl mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.desc}</p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="bg-linear-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl border border-white/10 p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Platform Performance Metrics
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <div className="text-3xl font-bold text-white mb-2">{benefit.title}</div>
                    <div className="text-gray-400">{benefit.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for <span className="text-cyan-400">Every Scenario</span>
              </h2>
              <p className="text-xl text-gray-400">
                From urban centers to remote locations
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <FadeUp key={useCase.title} delay={idx * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] via-[#0B1120]/70 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="bg-[#151B2E] rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 w-fit">
                    System Architecture
                  </span>
                  
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Modular & <span className="text-purple-400">Scalable</span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Built on a microservices architecture that scales from single locations to global deployments
                  </p>

                  <div className="space-y-4">
                    {[
                      "Edge computing layer",
                      "Cloud orchestration",
                      "Real-time data pipeline",
                      "API-first design",
                      "Zero-trust security"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                          <span className="text-purple-400">✓</span>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-125 lg:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop"
                    alt="Architecture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#151B2E] via-[#151B2E]/80 to-transparent lg:from-transparent lg:to-[#151B2E]" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Deploy?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contact us to discuss acquisition, licensing, or partnership opportunities
              </p>
              <button className="px-10 py-5 bg-white text-blue-700 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
                Get Strategic Packet →
              </button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}