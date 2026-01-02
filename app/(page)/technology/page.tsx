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
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
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
      icon: "💰",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
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
      icon: "🚗",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
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
      icon: "⛓️",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
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
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
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
      icon: "📡",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
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
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
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
      icon: "🔐",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
      color: "purple"
    },
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen">
      <section id="technology" className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-purple-600/5 via-transparent to-blue-600/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <FadeUp>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                Technology Stack
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                The infrastructure layer behind{" "}
                <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  autonomous parking
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
                A distributed infrastructure platform engineered to replace fragmented legacy parking systems with a single modular, globally deployable operating layer.
              </p>
            </div>
          </FadeUp>

          {/* Tech Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {techSections.map((section, idx) => (
              <FadeUp key={section.title} delay={idx * 0.05}>
                <div className="group relative h-full">
                  <div className={`absolute inset-0 bg-linear-to-br from-${section.color}-600/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="relative bg-[#151B2E] rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all h-full flex flex-col">
                    {/* Image Header */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#151B2E] via-[#151B2E]/70 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-6">
                        <div className="w-14 h-14 rounded-xl bg-[#151B2E] border border-white/10 flex items-center justify-center text-3xl shadow-xl">
                          {section.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                        {section.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {section.desc}
                      </p>
                      
                      {/* Bullets */}
                      <ul className="space-y-2.5 mt-auto">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-500 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
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
            <div className="bg-[#151B2E] rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Content */}
                <div className="p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                  <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 w-fit">
                    Built for Scale
                  </span>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Designed for{" "}
                    <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      acquisition and licensing
                    </span>
                  </h3>
                  
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    ParkBlockX™ was engineered from inception as a platform asset — modular, auditable, and easy to integrate into existing OEM, municipal, payment, and smart-city ecosystems.
                  </p>

                  {/* Feature list */}
                  <div className="space-y-4">
                    {[
                      { icon: "✅", text: "Patent-backed technology stack" },
                      { icon: "✅", text: "Production-ready architecture" },
                      { icon: "✅", text: "Global deployment capable" },
                      { icon: "✅", text: "Enterprise integration ready" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg">
                          {item.icon}
                        </div>
                        <span className="text-lg text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-10">
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105">
                      Request Technical Documentation →
                    </button>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="relative h-125 lg:h-auto order-1 lg:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                    alt="System Architecture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#151B2E] via-[#151B2E]/80 to-transparent lg:from-transparent lg:via-transparent lg:to-[#151B2E]" />
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Additional Stats */}
          <FadeUp delay={0.4}>
            <div className="grid md:grid-cols-4 gap-6 mt-20">
              {[
                { icon: "⚡", value: "< 100ms", label: "Response Time" },
                { icon: "🌍", value: "Global", label: "Deployment Ready" },
                { icon: "🔒", value: "99.99%", label: "Uptime SLA" },
                { icon: "♾️", value: "Infinite", label: "Scalability" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#151B2E] rounded-xl p-6 border border-white/5 text-center hover:border-blue-500/30 transition-all">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}