"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FadeUp = ({ children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);

// ----------------- ALL CONTENT -----------------
const DEPLOYMENT_MODELS = [
  {
    title: "New installations",
    desc: "Purpose-built sensor-enabled nodes for modern deployments in any environment.",
  },
  {
    title: "Retrofit upgrades (optional)",
    desc: "Replace legacy coin meters while preserving poles and electrical backups where available.",
  },
  {
    title: "OEM embedded integrations",
    desc: "Embed ParkBlockX™ into existing OEM hardware to create recurring software revenue.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Platform-first, hardware-agnostic",
    desc:
      "ParkBlockX™ is a licensed software platform that runs across multiple hardware form factors—purpose-built nodes, OEM integrations, retrofit upgrades, and custom enclosures—without locking operators into a single design.",
    img: "/how.png",
    badges: ["Software-defined", "Hardware-agnostic", "Licensable platform"],
  },
  {
    n: "02",
    title: "Multiple deployment paths",
    desc:
      "Deploy greenfield smart nodes, upgrade legacy infrastructure via retrofit, or embed directly into OEM hardware—mixing models across a city or portfolio as needed.",
    img: "/how1.jpg",
    badges: ["New installs", "Retrofit option", "OEM embedded"],
  },
  {
    n: "03",
    title: "Plug-and-play when needed",
    desc:
      "Standalone nodes can be provisioned and deployed rapidly. Once powered, they auto-register, authenticate securely, and begin operating—ideal for fast rollouts.",
    img: "/how2.png",
    badges: ["Provisioned rollout", "Auto-registration", "Fast deployment"],
  },
  {
    n: "04",
    title: "Autonomous detection & occupancy intelligence",
    desc:
      "Multi-sensor detection and edge intelligence enable real-time presence, duration, and utilization signals—reducing reliance on manual workflows.",
    img: "/how3.jpg",
    badges: ["Multi-sensor", "Edge intelligence", "Real-time occupancy"],
  },
  {
    n: "05",
    title: "Dynamic pricing & policy control",
    desc:
      "Pricing is continuously optimized using real-time and predictive signals while allowing operator policies, constraints, and governance rules to remain in control.",
    img: "/how4.jpg",
    badges: ["Demand-based", "Event-aware", "Policy constraints"],
  },
  {
    n: "06",
    title: "Machine-to-machine authorization & settlement",
    desc:
      "Vehicles communicate directly with parking infrastructure using secure protocols to authorize and settle sessions automatically—reducing user friction.",
    img: "/how5.png",
    badges: ["NFC", "Bluetooth LE", "DSRC / V2X"],
  },
  {
    n: "07",
    title: "Multi-rail payments by default",
    desc:
      "Support modern payment rails: cards & mobile wallets, blockchain settlement, stablecoins (USDC, RLUSD), crypto assets, and CBDC-ready integration patterns.",
    img: "/how6.png",
    badges: ["Fiat", "Stablecoins", "XRPL settlement", "CBDC-ready"],
  },
  {
    n: "08",
    title: "Secure, auditable records",
    desc:
      "Parking events, payments, and enforcement actions are stored in tamper-resistant formats and audit trails for transparency, compliance, and dispute reduction.",
    img: "/how7.png",
    badges: ["Tamper-resistant", "Audit trails", "Compliance-ready"],
  },
  {
    n: "09",
    title: "Always-on connectivity",
    desc:
      "Connectivity is treated as a core system layer: cellular + Wi-Fi + satellite-class options, automatic failover, and offline caching with synchronization.",
    img: "/how8.png",
    badges: ["LTE/5G/6G", "Satellite-ready", "Failover + offline sync"],
  },
  {
    n: "10",
    title: "Unified management at any scale",
    desc:
      "Manage all deployments—regardless of form factor—through a unified operational layer for pricing, utilization, enforcement, revenue, and analytics.",
    img: "/how9.png",
    badges: ["Unified analytics", "Policy control", "Scales globally"],
  },
];

// ----------------- PAGE COMPONENT -----------------
export default function HowItWorksPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen">
      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0C1324] via-[#0B1120] to-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
              How It Works
            </span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              One platform.{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Many forms.
              </span>{" "}
              Built to adapt.
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl">
              ParkBlockX™ is a software-defined parking infrastructure platform designed to run across multiple
              hardware form factors and deployment environments—new installations, OEM integrations, and retrofit upgrades—
              without forcing a single design path.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a className="btn btnPrimary" href="#steps">See the workflow</a>
              <a className="btn" href="#models">Deployment models</a>
              <a className="btn" href="#contact">Strategic inquiries</a>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="badge">Licensing-first platform</span>
              <span className="badge">Hardware-agnostic</span>
              <span className="badge">Multi-rail payments</span>
              <span className="badge">Satellite-ready connectivity</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[2px] my-8 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* DEPLOYMENT MODELS */}
      <section id="models" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28">
        <FadeUp>
          <div className="text-center mb-12">
            <div className="kicker">Deployment models</div>
            <h2 className="h2 mt-2">Choose the physical form factor that fits your ecosystem</h2>
            <p className="p mt-4 max-w-3xl mx-auto">
              ParkBlockX™ supports greenfield, retrofit, and OEM embedded approaches. Cities and operators can mix models
              across zones, portfolios, and regions—without changing the underlying platform.
            </p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEPLOYMENT_MODELS.map((m) => (
            <FadeUp key={m.title}>
              <div className="bg-[#151B2E] rounded-2xl border border-white/5 p-6 hover:border-cyan-500/30 transition-all">
                <div className="font-bold text-white mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                  {m.title}
                </div>
                <p className="text-gray-400">{m.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[2px] my-8 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

      {/* STEPS */}
      <section id="steps" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28">
        <div className="text-center mb-12">
          <div className="kicker">Workflow</div>
          <h2 className="h2 mt-2">From deployment to settlement—end-to-end</h2>
          <p className="p mt-4 max-w-3xl mx-auto">
            Below is a practical view of how ParkBlockX™ operates in the real world, independent of the specific meter shape or OEM housing.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {STEPS.map((s, idx) => (
            <FadeUp key={s.n} delay={idx * 0.05}>
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all bg-[#151B2E]">
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image src={s.img} alt={s.title} fill  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs tracking-widest text-white">
                    {s.n}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {s.badges.map((b) => (
                      <span key={b} className="px-3 py-1 bg-[#0B1120]/40 text-sm rounded-full border border-white/10 text-gray-300">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
            // <FadeUp key={useCase.title} delay={idx * 0.1}>
            //     <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all bg-[#151B2E]">
            //       <div className="relative w-full aspect-video overflow-hidden">
            //         <img 
            //           src={useCase.image}
            //           alt={useCase.title}
            //           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            //         />
            //         <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] via-[#0B1120]/50 to-transparent" />
            //       </div>
            //       <div className="p-6 sm:p-8">
            //         <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{useCase.title}</h3>
            //         <p className="text-sm sm:text-base text-gray-400">{useCase.desc}</p>
            //       </div>
            //     </div>
            //   </FadeUp>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[2px] my-8 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      {/* CTA / STRATEGIC INQUIRIES */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28">
        <div className="bg-[#151B2E] rounded-3xl border border-white/10 p-10 md:p-16 text-center">
          <div className="mb-6">
            <div className="kicker">Strategic inquiries</div>
            <h2 className="h2 mt-2">Request the licensing packet</h2>
            <p className="p mt-4 max-w-3xl mx-auto">
              ParkBlockX™ is available for strategic licensing and platform partnerships. If you’re an OEM, operator, payment network,
              or connectivity provider, we can align on an integration-ready structure.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a className="btn btnPrimary" href="mailto:info@novaxquantum.com?subject=ParkBlockX%20Licensing%20Inquiry">
              Email NOVA X QUANTUM
            </a>
            <a className="btn" href="#steps">Back to workflow</a>
          </div>
          <div className="text-gray-400 mt-4 text-sm">
            NOVA X QUANTUM Inc. • Birmingham, Alabama, USA
          </div>
        </div>
      </section>
    </div>
  );
}
