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

export default function Hero() {
  return (
    <div className="bg-[#0B1120] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <FadeUp>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                🚀 Next Generation Parking Technology
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                Smart Parking
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
                Transform cities with intelligent parking systems powered by blockchain, AI, and satellite connectivity
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105">
                  Get Started →
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 transition-all hover:border-white/20">
                  Watch Demo
                </button>
              </div>
            </FadeUp>
          </div>

          {/* Hero Image/Mockup */}
          <FadeUp delay={0.4}>
            <div className="relative max-w-6xl mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent blur-3xl" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
                <img 
                  src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&h=600&fit=crop" 
                  alt="Smart Parking Dashboard"
                  className="w-full h-[500px] object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
              </div>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-500 text-sm">Cities Ready</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-500 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
                <div className="text-gray-500 text-sm">Parking Spots</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">Multi</div>
                <div className="text-gray-500 text-sm">Currency</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
                Platform Features
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Built for <span className="text-blue-400">Global Scale</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Enterprise infrastructure that transforms parking into revenue-generating assets
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <FadeUp delay={0.1}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#151B2E] rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-all">
                  {/* Image */}
                  <div className="mb-6 rounded-xl overflow-hidden h-48 bg-gradient-to-br from-blue-600/20 to-blue-800/20">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop" 
                      alt="Multi-Currency Payments"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Multi-Currency Payments
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Accept fiat, crypto, stablecoins, and CBDCs with seamless real-time settlement across all payment rails.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs">Fiat</span>
                    <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs">Crypto</span>
                    <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs">CBDC</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Feature 2 */}
            <FadeUp delay={0.2}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#151B2E] rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-all">
                  {/* Image */}
                  <div className="mb-6 rounded-xl overflow-hidden h-48 bg-gradient-to-br from-purple-600/20 to-purple-800/20">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" 
                      alt="AI Dynamic Pricing"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    AI Dynamic Pricing
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Optimize revenue with real-time demand-based pricing and predictive analytics powered by machine learning.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs">Real-time</span>
                    <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs">Predictive</span>
                    <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs">ML</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Feature 3 */}
            <FadeUp delay={0.3}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#151B2E] rounded-2xl p-8 border border-white/5 hover:border-cyan-500/30 transition-all">
                  {/* Image */}
                  <div className="mb-6 rounded-xl overflow-hidden h-48 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop" 
                      alt="Satellite Connectivity"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Satellite Connectivity
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Deploy anywhere with resilient connectivity. Starlink-ready infrastructure ensures zero downtime globally.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs">5G</span>
                    <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs">Satellite</span>
                    <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs">IoT</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="bg-[#151B2E] rounded-3xl border border-white/5 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Image */}
                <div className="relative h-[500px] lg:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop" 
                    alt="Blockchain Technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#151B2E] via-[#151B2E]/80 to-transparent lg:from-transparent lg:via-transparent lg:to-[#151B2E]" />
                </div>

                {/* Right - Content */}
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 w-fit">
                    Advanced Technology
                  </span>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    <span className="text-blue-400">Blockchain-Secured</span>
                    <br />
                    Infrastructure
                  </h2>
                  
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Every transaction is immutably recorded on blockchain, ensuring transparency, compliance, and trust.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-2xl">
                        🔐
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">Quantum-Resistant Security</div>
                        <div className="text-gray-400 text-sm">Future-proof cryptography protects all transactions</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 text-2xl">
                        ⚡
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">Real-Time Settlement</div>
                        <div className="text-gray-400 text-sm">Instant payment processing across all networks</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-2xl">
                        🌐
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">Global Interoperability</div>
                        <div className="text-gray-400 text-sm">Seamless integration with city infrastructure</div>
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
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
              
              <div className="relative px-8 py-16 lg:py-20 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your City?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Join forward-thinking cities deploying next-generation parking systems
                </p>
                <button className="px-10 py-5 bg-white hover:bg-gray-100 text-blue-700 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105">
                  Get Strategic Packet →
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}