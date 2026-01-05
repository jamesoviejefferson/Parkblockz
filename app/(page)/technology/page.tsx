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

export default function Technology() {
  const techSections = [
    {
      title: "Autonomous Parking Nodes",
      desc: "Each ParkBlockX™ deployment consists of autonomous parking nodes with edge intelligence, secure execution environments, and multi-sensor detection.",
      bullets: [
        "Ultrasonic, radar, optical, RFID, and LIDAR sensors",
        "Edge compute with secure execution environments",
        "Fault tolerance and predictive maintenance",
        "Urban, suburban, and remote deployment-ready",
      ],
      icon: "",
      image: "/ParkBlockX Nodes.png",
      color: "blue"
    },
    {
      title: "Multi-Currency Payment Infrastructure",
      desc: "ParkBlockX™ natively supports every modern payment rail, enabling global deployment and regulatory flexibility.",
      bullets: [
        "Fiat: Apple Pay, Google Pay, cards",
        "Blockchain settlement via XRPL",
        "Stablecoins: USDC, RLUSD",
        "Crypto assets: XRP, ETH, MATIC",
        "CBDC-ready architecture",
      ],
      icon: "",
      image: "/Multi Payment.png",
      color: "purple"
    },
    {
      title: "Machine-to-Machine (M2M) Payments",
      desc: "Vehicles communicate directly with parking infrastructure to authorize and settle payments automatically.",
      bullets: [
        "NFC and Bluetooth Low Energy",
        "DSRC and V2X automotive protocols",
        "Embedded secure payment modules",
        "Fully autonomous authorization flows",
      ],
      icon: "",
      image: "/M2M payments.png",
      color: "cyan"
    },
    {
      title: "Blockchain & Secure Records",
      desc: "All parking events, payments, and enforcement records are stored in tamper-resistant formats for auditability.",
      bullets: [
        "XRPL high-throughput settlement",
        "Polygon Layer-2 smart contracts",
        "Chainlink oracle coordination",
        "Immutable parking and enforcement records",
      ],
      icon: "",
      image: "/Blockchainn.png",
      color: "blue"
    },
    {
      title: "AI Dynamic Pricing Engine",
      desc: "Pricing is continuously optimized using real-time and predictive intelligence to maximize revenue.",
      bullets: [
        "Occupancy and demand-based pricing",
        "Time, location, and event awareness",
        "Historical and predictive analytics",
        "Automated rate adjustments",
      ],
      icon: "",
      image: "/AI Driven.png",
      color: "purple"
    },
    {
      title: "Resilient Connectivity Framework",
      desc: "Connectivity is treated as a core system layer, enabling ParkBlockX™ to function anywhere parking exists.",
      bullets: [
        "LTE, 5G, 6G, and Wi-Fi",
        "Satellite connectivity (Starlink-class)",
        "Automatic failover",
        "Offline caching and synchronization",
      ],
      icon: "",
      image: "/Satellite.png",
      color: "cyan"
    },
    {
      title: "Renewable & Off-Grid Power",
      desc: "Parking nodes may operate independently of the electrical grid, unlocking previously infeasible deployments.",
      bullets: [
        "Solar generation",
        "Battery storage",
        "Hybrid power systems",
        "AI-driven energy optimization",
      ],
      icon: "",
      image: "/PHXPower.png",
      color: "blue"
    },
    {
      title: "Quantum-Resilient Security",
      desc: "ParkBlockX™ is architected for long-term infrastructure relevance with post-quantum security readiness.",
      bullets: [
        "Quantum-resistant cryptography",
        "Encrypted IoT communications",
        "Immutable audit trails",
        "AI-driven threat detection",
      ],
      icon: "",
      image: "/Security.png",
      color: "purple"
    },
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen">
      <section id="technology" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-purple-600/5 via-transparent to-blue-600/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <FadeUp>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Technology Stack
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
                The infrastructure layer behind{" "}
                <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  autonomous parking
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto px-2">
                A distributed infrastructure platform engineered to replace fragmented legacy parking systems with a single modular, globally deployable operating layer.
              </p>
            </div>
          </FadeUp>

          {/* Tech Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {techSections.map((section, idx) => (
              <FadeUp key={section.title} delay={idx * 0.05}>
                <div className="group relative h-full">
                  <div className={`absolute inset-0 bg-linear-to-br from-${section.color}-600/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="relative bg-[#151B2E] rounded-xl sm:rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all h-full flex flex-col">
                    {/* Image Header */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img 
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#151B2E] via-[#151B2E]/70 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#151B2E] border border-white/10 flex items-center justify-center text-2xl sm:text-3xl shadow-xl">
                          {section.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        {section.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                        {section.desc}
                      </p>
                      
                      {/* Bullets */}
                      <ul className="space-y-2 sm:space-y-2.5 mt-auto">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-500 text-xs sm:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <FadeUp delay={0.3}>
            <div className="bg-[#151B2E] rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left - Content */}
                <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                  <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 w-fit">
                    Built for Scale
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Designed for{" "}
                    <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      acquisition and licensing
                    </span>
                  </h3>
                  
                  <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                    ParkBlockX™ was engineered from inception as a platform asset — modular, auditable, and easy to integrate into existing OEM, municipal, payment, and smart-city ecosystems.
                  </p>

                  {/* Feature list */}
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { icon: "/check.png", text: "Patent-backed technology stack" },
                      { icon: "/check.png", text: "Production-ready architecture" },
                      { icon: "/check.png", text: "Global deployment capable" },
                      { icon: "/check.png", text: "Enterprise integration ready" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                          <Image 
                            src={item.icon}
                            alt="check"
                            width={20}
                            height={20}
                            className="object-contain sm:w-6 sm:h-6"
                          />
                        </div>
                        <span className="text-base sm:text-lg text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 sm:mt-10">
                    <Link href="/contact">
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 text-sm sm:text-base">
                      Request Technical Documentation →
                    </button>
                    </Link>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto order-1 lg:order-2">
                  <img 
                    src="/PBXDrawing.png"
                    alt="System Architecture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#151B2E] lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-[#151B2E]" />
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Additional Stats */}
          <FadeUp delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20">
                {[
                  { icon: "/_100 ms.png", value: "< 100ms", label: "Response Time" },
                  { icon: "/Global.png", value: "Global", label: "Deployment Ready" },
                  { icon: "/99.99_.png", value: "99.99%", label: "Uptime SLA" },
                  { icon: "/infinity.png", value: "Infinite", label: "Scalability" }
                ].map((stat, i) => (
                  <div key={i} className="bg-[#151B2E] rounded-xl p-4 sm:p-6 border border-white/5 text-center hover:border-blue-500/30 transition-all">
                    <div className="mb-2 sm:mb-3 flex justify-center">
                      <Image 
                        src={stat.icon}
                        alt={stat.label}
                        width={36}
                        height={36}
                        className="object-contain sm:w-12 sm:h-12"
                      />
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
        </div>
      </section>
    </div>
  );
}