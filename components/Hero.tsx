"use client";

import Link from "next/link";
import Image from "next/image";
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

export default function Hero() {
  return (
    <div className="bg-[#0B1120] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 md:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <FadeUp>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                 Next Generation Parking Technology
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
                Smart Parking
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
                Transform cities with intelligent parking systems powered by blockchain, AI, and satellite connectivity
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105">
                    Get Started →
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 transition-all hover:border-white/20">
                    Get Demo
                  </button>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Hero Image/Mockup */}
          <FadeUp delay={0.4}>
            <div className="relative max-w-6xl mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent blur-3xl" />
              
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
                <img 
                  src="/ParkBlockX Hero.jpg" 
                  alt="Smart Parking Dashboard"
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
              </div>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.5}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">100+ Cities Ready</div>
                <div className="text-gray-500 text-xs sm:text-sm">Municipal-grade deployment framework</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">Millions of Spaces Supported</div>
                <div className="text-gray-500 text-xs sm:text-sm">Elastic node-based architecture</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">24/7 Deterministic Uptime</div>
                <div className="text-gray-500 text-xs sm:text-sm">Autonomous operations, no downtime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">Multi-Currency Settlement</div>
                <div className="text-gray-500 text-xs sm:text-sm">Fiat, stablecoins, on-chain rails</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mb-4">
                Platform Features
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-2">
                Built for <span className="text-blue-400">Global Scale</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
                Enterprise infrastructure that transforms parking into revenue-generating assets
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <FadeUp delay={0.1}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#151B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-blue-500/30 transition-all">
                  {/* Image */}
                  <div className="mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 bg-gradient-to-br from-blue-600/20 to-blue-800/20">
                    <img 
                      src="/Multi Currency.png" 
                      alt="Multi-Currency Payments"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Multi-Currency Payments
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                    Accept fiat, crypto, stablecoins, and CBDCs with seamless real-time settlement across all payment rails.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs">Fiat</span>
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs">Crypto</span>
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs">CBDC</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Feature 2 */}
            <FadeUp delay={0.2}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#151B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-all">
                  {/* Image */}
                  <div className="mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 bg-gradient-to-br from-purple-600/20 to-purple-800/20">
                    <img 
                      src="/AI Dynamic Pricing.png" 
                      alt="AI Dynamic Pricing"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    AI Dynamic Pricing
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                    Optimize revenue with real-time demand-based pricing and predictive analytics powered by machine learning.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs">Real-time</span>
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs">Predictive</span>
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs">ML</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Feature 3 */}
            <FadeUp delay={0.3}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#151B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-cyan-500/30 transition-all">
                  {/* Image */}
                  <div className="mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20">
                    <img 
                      src="/Satellite Connection.png" 
                      alt="Satellite Connectivity"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Satellite Connectivity
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                    Deploy anywhere with resilient connectivity. Starlink-ready infrastructure ensures zero downtime globally.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs">5G</span>
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs">Satellite</span>
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs">IoT</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="bg-[#151B2E] rounded-2xl sm:rounded-3xl border border-white/5 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left - Image */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto order-1">
                  <img 
                    src="/Blockchain.png" 
                    alt="Blockchain Technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#151B2E] lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#151B2E]" />
                </div>

                {/* Right - Content */}
                <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center order-2">
                  <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 w-fit">
                    Advanced Technology
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    <span className="text-blue-400">Blockchain-Secured</span>
                    <br />
                    Infrastructure
                  </h2>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                    Every transaction is immutably recorded on blockchain, ensuring transparency, compliance, and trust.
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#151B2E] border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Image 
                          src="/quantum.png"
                          alt="Quantum Security"
                          width={24}
                          height={24}
                          className="object-contain sm:w-8 sm:h-8"
                        />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1 text-sm sm:text-base">Quantum-Resistant Security</div>
                        <div className="text-gray-400 text-xs sm:text-sm">Future-proof cryptography protects all transactions</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#151B2E] border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Image 
                          src="/real-time.png"
                          alt="Real-Time Settlement"
                          width={24}
                          height={24}
                          className="object-contain sm:w-8 sm:h-8"
                        />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1 text-sm sm:text-base">Real-Time Settlement</div>
                        <div className="text-gray-400 text-xs sm:text-sm">Instant payment processing across all networks</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#151B2E] border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Image 
                          src="/Global.png"
                          alt="Global Interoperability"
                          width={24}
                          height={24}
                          className="object-contain sm:w-8 sm:h-8"
                        />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1 text-sm sm:text-base">Global Interoperability</div>
                        <div className="text-gray-400 text-xs sm:text-sm">Seamless integration with city infrastructure</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
              
              <div className="relative px-6 sm:px-8 py-12 sm:py-14 md:py-16 lg:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
                  Ready to Transform Your City?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                  Join forward-thinking cities deploying next-generation parking systems
                </p>
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white hover:bg-gray-100 text-blue-700 rounded-xl font-bold text-base sm:text-lg transition-all shadow-2xl hover:scale-105">
                    Get Strategic Packet →
                  </button>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}