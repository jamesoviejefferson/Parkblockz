"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      desc: "Accept any form of payment - from traditional cards to cryptocurrency and Stablecoins",
      icon: "/multi-current payment.png",
      features: ["Apple Pay & Google Pay", "Credit/Debit Cards", "USDC & RLUSD Stablecoins", "XRP, ETH, MATIC", "CBDC-Ready Infrastructure"]
    },
    {
      title: "AI Dynamic Pricing",
      desc: "Maximize revenue with intelligent, demand-based pricing that adapts in real-time",
      icon: "/AI Dynamic Pricing copy.png",
      features: ["Occupancy-based pricing", "Event awareness", "Weather integration", "Historical analytics", "Predictive modeling"]
    },
    {
      title: "Autonomous Detection",
      desc: "Multi-sensor vehicle detection with 99.9% accuracy across all conditions",
      icon: "/Autonomous Detect.png",
      features: ["Ultrasonic sensors", "Radar detection", "Optical/Camera systems", "RFID tracking", "LIDAR integration"]
    },
    {
      title: "Blockchain Security",
      desc: "Immutable records and quantum-resistant security for complete transparency",
      icon: "/Blockchain Secure.png",
      features: ["XRPL settlement", "Polygon smart contracts", "Chainlink oracles", "Tamper-proof records", "Audit-ready logs"]
    },
    {
      title: "Global Connectivity",
      desc: "Deploy anywhere with resilient connectivity including remote locations",
      icon: "/Global Connect.png",
      features: ["5G/6G/LTE networks", "Starlink satellite", "Wi-Fi fallback", "Offline mode", "Auto-sync"]
    },
    {
      title: "M2M Payments",
      desc: "Vehicles pay automatically without apps or user interaction",
      icon: "/M2M Pay.png",
      features: ["NFC communication", "Bluetooth LE", "V2X protocols", "DSRC integration", "Autonomous authorization"]
    }
  ];

  const benefits = [
    {
      icon: "/40_ Revenue.png",
      title: "40% Revenue Increase",
      desc: "Dynamic pricing optimizes rates based on demand"
    },
    {
      icon: "/_100 ms.png",
      title: "< 100ms Response",
      desc: "Real-time processing across all payment rails"
    },
    {
      icon: "/Global Deploy.png",
      title: "Global Deployment",
      desc: "Works anywhere - urban, rural, or remote"
    },
    {
      icon: "/99.99_.png",
      title: "99.99% Uptime",
      desc: "Enterprise-grade reliability and failover"
    }
  ];

  const useCases = [
    {
      title: "Smart Cities",
      desc: "Integrate with existing infrastructure",
      image: "/ParkBlockX.png"
    },
    {
      title: "Remote Locations",
      desc: "Satellite connectivity enables parking anywhere",
      image: "/city-parking.jpg"
    },
    {
      title: "Event Venues",
      desc: "Dynamic pricing for high-demand periods",
      image: "/event-venue.jpg"
    },
    {
      title: "M2M payments",
      desc: "For autonomous operations",
      image: "/m2m.jpg"
    }
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/10 via-purple-600/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeUp>
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Platform Overview
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
                The Complete
                <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Parking Platform
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2">
                ParkBlockX™ unifies detection, payments, pricing, enforcement, connectivity, and energy into a single, software-defined infrastructure layer
              </p>
              <div className="flex justify-center px-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30">
                    Request Demo →
                  </button>
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Platform Image */}
          <FadeUp delay={0.2}>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/ParkBlockX Retro Fit image.png"
                alt="Platform Dashboard"
                className="w-full h-64 sm:h-80 md:h-96 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] via-transparent to-transparent" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
                Six Core <span className="text-blue-400">Capabilities</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
                Everything you need to deploy modern parking infrastructure at scale
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreFeatures.map((feature, idx) => (
              <FadeUp key={feature.title} delay={idx * 0.1}>
                <div className="bg-[#151B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-blue-500/30 transition-all h-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 sm:mb-6 p-2">
                    <Image 
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="object-contain sm:w-12 sm:h-12"
                    />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">{feature.desc}</p>
                  
                  <ul className="space-y-1.5 sm:space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-500">
                        <span className="text-blue-400 mt-0.5 sm:mt-1">✓</span>
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
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="bg-linear-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-2xl sm:rounded-3xl border border-white/10 p-8 sm:p-10 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12 px-2">
                Platform Performance Metrics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <Image 
                        src={benefit.icon}
                        alt={benefit.title}
                        width={48}
                        height={48}
                        className="object-contain sm:w-16 sm:h-16"
                      />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{benefit.title}</div>
                    <div className="text-sm sm:text-base text-gray-400">{benefit.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
                Built for <span className="text-cyan-400">Every Scenario</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 px-2">
                From urban centers to remote locations
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {useCases.map((useCase, idx) => (
              <FadeUp key={useCase.title} delay={idx * 0.1}>
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img 
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] via-[#0B1120]/70 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{useCase.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{useCase.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="bg-[#151B2E] rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                  <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 w-fit">
                    System Architecture
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
                    Modular & <span className="text-purple-400">Scalable</span>
                  </h2>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                    Built on a microservices architecture that scales from single locations to global deployments
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Edge computing layer",
                      "Cloud orchestration",
                      "Real-time data pipeline",
                      "API-first design",
                      "Zero-trust security"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                          <span className="text-purple-400 text-sm sm:text-base">✓</span>
                        </div>
                        <span className="text-sm sm:text-base text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto order-1 lg:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop"
                    alt="Architecture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#151B2E] lg:bg-linear-to-r lg:from-transparent lg:to-[#151B2E]" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
                Ready to Deploy?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Contact us to discuss acquisition, licensing, or partnership opportunities
              </p>
              <Link href="/contact">
              <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-700 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all hover:scale-105">
                Get Strategic Packet →
              </button>
                </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}