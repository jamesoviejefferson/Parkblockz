"use client";
import { FadeUp, Stagger, Item } from "./Motion";
import { motion } from "framer-motion";
import Image from "next/image";

const SECTIONS = [
  {
    title: "Autonomous Parking Nodes",
    desc: "Each ParkBlockX™ deployment consists of autonomous parking nodes with edge intelligence, secure execution environments, and multi-sensor detection. Nodes operate independently or as part of a distributed network, enabling real-time operation even in low-connectivity environments.",
    bullets: [
      "Ultrasonic, radar, optical, RFID, and LIDAR sensors",
      "Edge compute with secure execution environments",
      "Fault tolerance and predictive maintenance",
      "Urban, suburban, and remote deployment-ready",
    ],
    image: "/tech-1.jpg", // Add your image to public folder
    gradient: "from-[#37D6C7] to-[#7C5CFF]",
    color: "#37D6C7"
  },
  {
    title: "Multi-Currency Payment Infrastructure",
    desc: "ParkBlockX™ natively supports every modern payment rail, enabling global deployment and regulatory flexibility without rebuilding infrastructure.",
    bullets: [
      "Fiat: Apple Pay, Google Pay, cards",
      "Blockchain settlement via XRPL",
      "Stablecoins: USDC, RLUSD",
      "Crypto assets: XRP, ETH, MATIC",
      "CBDC-ready architecture",
    ],
    image: "/tech-2.jpg",
    gradient: "from-[#7C5CFF] to-[#3BA0FF]",
    color: "#7C5CFF"
  },
  {
    title: "Machine-to-Machine (M2M) Payments",
    desc: "Vehicles can communicate directly with parking infrastructure to authorize and settle payments automatically, eliminating apps, screens, and user friction.",
    bullets: [
      "NFC and Bluetooth Low Energy",
      "DSRC and V2X automotive protocols",
      "Embedded secure payment modules",
      "Fully autonomous authorization flows",
    ],
    image: "/tech-3.jpg",
    gradient: "from-[#3BA0FF] to-[#37D6C7]",
    color: "#3BA0FF"
  },
  {
    title: "Blockchain & Secure Records",
    desc: "All parking events, payments, and enforcement records are stored in tamper-resistant formats designed for auditability and compliance.",
    bullets: [
      "XRPL high-throughput settlement",
      "Polygon Layer-2 smart contracts",
      "Chainlink oracle coordination",
      "Immutable parking and enforcement records",
    ],
    image: "/tech-4.jpg",
    gradient: "from-[#37D6C7] to-[#3BA0FF]",
    color: "#37D6C7"
  },
  {
    title: "AI Dynamic Pricing Engine",
    desc: "Pricing is continuously optimized using real-time and predictive intelligence to maximize revenue while improving utilization.",
    bullets: [
      "Occupancy and demand-based pricing",
      "Time, location, and event awareness",
      "Historical and predictive analytics",
      "Automated rate adjustments",
    ],
    image: "/tech-5.jpg",
    gradient: "from-[#7C5CFF] to-[#37D6C7]",
    color: "#7C5CFF"
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
    image: "/tech-6.jpg",
    gradient: "from-[#3BA0FF] to-[#7C5CFF]",
    color: "#3BA0FF"
  },
  {
    title: "Renewable & Off-Grid Power",
    desc: "Parking nodes may operate independently of the electrical grid, unlocking deployments previously considered infeasible.",
    bullets: [
      "Solar generation",
      "Battery storage",
      "Hybrid power systems",
      "AI-driven energy optimization",
    ],
    image: "/tech-7.jpg",
    gradient: "from-[#37D6C7] to-[#7C5CFF]",
    color: "#37D6C7"
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
    image: "/tech-8.jpg",
    gradient: "from-[#7C5CFF] to-[#3BA0FF]",
    color: "#7C5CFF"
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-250 h-250 rounded-full bg-gradient-radial from-[#7C5CFF]/20 to-transparent blur-3xl"
      />

      <div className="container relative z-10">
        {/* Header */}
        <FadeUp>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C5CFF]/10 to-[#3BA0FF]/10 border border-white/10 mb-6">
              <span className="text-xs uppercase tracking-wider text-white/70">Technology</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The infrastructure layer behind{" "}
              <span className="bg-gradient-to-r from-[#37D6C7] via-[#7C5CFF] to-[#3BA0FF] bg-clip-text text-transparent">
                autonomous parking
              </span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              A distributed infrastructure platform engineered to replace fragmented legacy parking systems with a single modular, globally deployable operating layer.
            </p>
          </div>
        </FadeUp>

        {/* Tech Stack Cards */}
        <Stagger>
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            {SECTIONS.map((section, idx) => (
              <Item key={section.title}>
                <div className="relative h-full hover:scale-[1.02] transition-all duration-300 group overflow-hidden rounded-2xl">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image 
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
                  </div>

                  {/* Hover glow effect */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${section.color}20, transparent)` }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 backdrop-blur-sm border border-white/10 rounded-2xl h-full">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-5">
                      <div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                      >
                        ⚡
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 leading-tight">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-5 text-[17px]">
                      {section.desc}
                    </p>
                    
                    {/* Bullets */}
                    <ul className="space-y-2.5">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/60 text-[15px]">
                          <span 
                            className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${section.gradient} shrink-0`}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Item>
            ))}
          </div>
        </Stagger>

        {/* Bottom CTA Section */}
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#37D6C7]/10 via-[#7C5CFF]/10 to-[#3BA0FF]/10" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            
            {/* Content */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-16 relative rounded-3xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#37D6C7]/10 to-[#7C5CFF]/10 border border-white/10 mb-6">
                    <span className="text-xs uppercase tracking-wider text-white/70">Built for scale</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Designed for{" "}
                    <span className="bg-gradient-to-r from-[#37D6C7] to-[#7C5CFF] bg-clip-text text-transparent">
                      acquisition and licensing
                    </span>
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed mb-8">
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
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-lg text-white/80">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#37D6C7]/30 via-[#7C5CFF]/30 to-[#3BA0FF]/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  
                  <div className="relative h-96 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
                    <Image 
                      src="/tech-system.jpg"
                      alt="System Architecture"
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Corner accents */}
                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#37D6C7]/50 rounded-tr-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#7C5CFF]/50 rounded-bl-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}