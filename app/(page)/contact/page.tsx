"use client";
import { motion } from "framer-motion";
import { useState } from "react";

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

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'acquisition',
    message: ''
  });

  const handleSubmit = () => {
    const subject = `ParkBlockX Strategic Inquiry - ${formData.interest}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Interest: ${formData.interest}

Message:
${formData.message}
    `;
    window.location.href = `mailto:info@novaxquantum.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-[#0B1120] min-h-screen">
      <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/5 via-purple-600/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <FadeUp>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
                Strategic Acquisition &{" "}
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Licensing
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto px-2">
                ParkBlockX™ is available for acquisition and long-term licensing. This platform is patent-backed, architected, and simulation-tested.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            {/* Left - Contact Form */}
            <FadeUp delay={0.1}>
              <div className="bg-[#151B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Us a Message</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0B1120] border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0B1120] border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0B1120] border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Interest Type */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">
                      Type of Inquiry *
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0B1120] border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white focus:border-blue-500 focus:outline-none transition-all"
                    >
                      <option value="acquisition">Full Acquisition</option>
                      <option value="licensing">Long-term Licensing</option>
                      <option value="partnership">Strategic Partnership</option>
                      <option value="demo">Product Demo</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0B1120] border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your interest in ParkBlockX™..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg sm:rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 text-sm sm:text-base"
                  >
                    Send Message →
                  </button>

                  <p className="text-xs sm:text-sm text-gray-500 text-center">
                    Serious inquiries only. We'll respond within 24-48 hours.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Right - Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              {/* Direct Contact */}
              <FadeUp delay={0.2}>
                <div className="bg-[#151B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl sm:text-2xl shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Direct Email</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-3">For immediate inquiries</p>
                      <a 
                        href="mailto:info@novaxquantum.com"
                        className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors font-medium break-all"
                      >
                        info@novaxquantum.com
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* What to Expect */}
              <FadeUp delay={0.3}>
                <div className="bg-[#151B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">What to Expect</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      { icon: "📋", text: "Confidential NDA process" },
                      { icon: "📊", text: "Technical documentation package" },
                      { icon: "🤝", text: "Strategic discussion call" },
                      { icon: "💼", text: "Custom licensing proposals" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-xl sm:text-2xl">{item.icon}</span>
                        <span className="text-sm sm:text-base text-gray-400 pt-0.5 sm:pt-1">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Quick Stats */}
              <FadeUp delay={0.4}>
                <div className="bg-linear-to-br from-blue-600/10 to-purple-600/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-500/20">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Platform Highlights</h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-[#0B1120]/50 rounded-lg sm:rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">Patent</div>
                      <div className="text-xs text-gray-500">Backed</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-[#0B1120]/50 rounded-lg sm:rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">Global</div>
                      <div className="text-xs text-gray-500">Ready</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-[#0B1120]/50 rounded-lg sm:rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">Multi</div>
                      <div className="text-xs text-gray-500">Currency</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-[#0B1120]/50 rounded-lg sm:rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">AI</div>
                      <div className="text-xs text-gray-500">Powered</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Bottom CTA */}
          <FadeUp delay={0.5}>
            <div className="mt-12 sm:mt-16 md:mt-20 text-center">
              <div className="inline-block bg-[#151B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">Prefer a different contact method?</p>
                <a 
                  href="mailto:info@novaxquantum.com?subject=ParkBlockX Strategic Inquiry"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white font-medium transition-all"
                >
                  📧 Email Us Directly
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}