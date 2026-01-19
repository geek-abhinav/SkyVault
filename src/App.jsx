import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Cloud, Zap, Lock, Globe, Database,
  Menu, ArrowRight, Check, Server, X, Fingerprint, FileText, Activity
} from 'lucide-react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030014] text-white selection:bg-blue-500/30">

      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 border-b border-white/5 bg-white/[0.02] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Cloud size={20} className="text-white" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">SkyVault</span>
          </div>

          <div className="hidden md:flex gap-10 text-base font-medium text-white/80">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#security">Security</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-white/70 hover:text-white font-medium transition text-base">Sign In</button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black px-6 py-2.5 rounded-full text-base font-bold hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Get Started
            </button>
          </div>
          <button className="md:hidden text-white"><Menu /></button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[1.05] mb-8"
            >
              Secure cloud <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient">
                storage evolved.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-white/60 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Experience the next generation of file hosting. Military-grade encryption meets lightning-fast speeds. Your data, accessible anywhere, secure forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-lg text-white shadow-xl shadow-blue-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-lg text-white transition-all backdrop-blur-sm text-center">
                Explore Features
              </a>
            </motion.div>
          </div>

          {/* Right: New Aesthetic Visual (Floating Glass UI) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative h-[500px] w-full flex items-center justify-center perspective-1000"
          >
            {/* The Main Glass Card */}
            <div className="relative w-80 md:w-96 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-float z-20">
              {/* Header UI */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-white/40">ENCRYPTED CONNECTION</div>
              </div>

              {/* Upload Animation */}
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4 border border-white/5">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><FileText size={20} /></div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-white/10 rounded-full mb-2"></div>
                    <div className="h-2 w-16 bg-white/5 rounded-full"></div>
                  </div>
                  <Check size={16} className="text-green-400" />
                </div>

                {/* Active Upload */}
                <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4 border border-blue-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 animate-pulse"></div>
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 relative z-10"><Database size={20} /></div>
                  <div className="flex-1 relative z-10">
                    <div className="flex justify-between text-xs mb-2 text-white/70">
                      <span>Uploading Database...</span>
                      <span>84%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "84%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-green-400 text-sm font-bold bg-green-400/5 py-2 rounded-lg">
                <Shield size={16} />
                AES-256 ENCRYPTION ACTIVE
              </div>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-blue-600/30 rounded-2xl backdrop-blur-md border border-white/10 -z-10 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-600/30 rounded-full backdrop-blur-md border border-white/10 -z-10 animate-blob"></div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-32 px-6 relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Features</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Everything you need.<br />Nothing you don't.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Shield}
              title="Zero-Knowledge"
              desc="We can't see your files. Your unique key encrypts data before it leaves your device."
            />
            <FeatureCard
              icon={Zap}
              title="Hyper Speed"
              desc="Global CDN edge locations ensure your downloads saturate your bandwidth."
            />
            <FeatureCard
              icon={Activity}
              title="Real-time Collab"
              desc="Edit documents live with your team without creating conflicting versions."
            />
            <FeatureCard
              icon={Globe}
              title="Global Replication"
              desc="Data is mirrored across 3 continents instantly for disaster recovery."
              large={true}
            />
            <FeatureCard
              icon={Fingerprint}
              title="Biometric Access"
              desc="Hardware key and FaceID support integrated natively."
            />
          </div>
        </div>
      </section>

      {/* --- SECURITY SECTION --- */}
      <section id="security" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Lock size={12} /> Security First
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Unbreachable by design.</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Most clouds hold the keys to your data. We don't. SkyVault uses client-side encryption, meaning the server only ever sees gibberish code. Even if we were hacked, your data remains mathematically impossible to read.
            </p>
            <ul className="space-y-4">
              <SecurityItem text="End-to-End AES-256 Encryption" />
              <SecurityItem text="Two-Factor Authentication (YubiKey Support)" />
              <SecurityItem text="GDPR & HIPAA Compliant Infrastructure" />
              <SecurityItem text="Redundant backups to cold storage" />
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full"></div>
            <div className="relative bg-gray-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <Shield size={64} className="text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-2">Audit Log</h3>
              <div className="space-y-3 mt-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center justify-between text-sm p-3 bg-black/40 rounded-lg border border-white/5">
                    <span className="text-white/80">Login Attempt • San Francisco</span>
                    <span className="text-green-400 font-mono">AUTHORIZED</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-32 px-6 relative z-10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-4">Pricing</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Simple, transparent pricing.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard title="Starter" price="$0" desc="Perfect for personal backup." features={['10GB Storage', '1 Device', 'Standard Speed']} />
            <PricingCard title="Pro" price="$12" desc="For power users & creators." features={['2TB Storage', 'Unlimited Devices', 'Priority Support', 'File Versioning']} featured={true} onSignup={() => setIsModalOpen(true)} />
            <PricingCard title="Business" price="$49" desc="For secure team collaboration." features={['10TB Storage', 'SSO Integration', 'Admin Dashboard', '24/7 Phone Support']} />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 shadow-2xl shadow-blue-900/50">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Ready to secure your future?</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-5 bg-white text-blue-900 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-xl"
            >
              Get Started Now
            </button>
            <p className="mt-6 text-blue-200 text-sm">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-white">
            <Cloud size={24} className="text-blue-500" />
            <span>SkyVault</span>
          </div>
          <p className="text-white/40 text-sm">Designed & Developed by Abhinav Tiwari © 2026</p>
          <div className="flex gap-8 text-white/60 text-sm font-medium">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#0b0b15] border border-white/10 p-8 rounded-3xl shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white/40 hover:text-white"><X size={24} /></button>

              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-400"><Zap size={24} /></div>
                <h3 className="text-2xl font-bold font-display">Start your 14-day trial</h3>
                <p className="text-white/50 text-sm mt-2">Experience the full power of SkyVault.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-blue-500/25 transition-all">
                  Create Account
                </button>
              </form>
              <p className="text-center text-xs text-white/30 mt-6">This is a demo interface for portfolio display.</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const NavLink = ({ href, children }) => (
  <a href={href} className="relative group">
    <span className="group-hover:text-white transition-colors">{children}</span>
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
  </a>
);

const FeatureCard = ({ icon: Icon, title, desc, large }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group ${large ? 'md:col-span-2' : ''}`}
  >
    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-white/60 leading-relaxed">{desc}</p>
  </motion.div>
);

const SecurityItem = ({ text }) => (
  <li className="flex items-center gap-3 text-white/80">
    <div className="p-1 rounded-full bg-green-500/20 text-green-400"><Check size={14} /></div>
    {text}
  </li>
);

const PricingCard = ({ title, price, desc, features, featured, onSignup }) => (
  <div className={`p-8 rounded-3xl border flex flex-col ${featured ? 'bg-blue-600/10 border-blue-500/50 relative' : 'bg-white/5 border-white/10'}`}>
    {featured && <div className="absolute top-0 right-0 bg-blue-500 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">MOST POPULAR</div>}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-white/50">/month</span>
    </div>
    <p className="text-white/60 text-sm mb-8 border-b border-white/10 pb-8">{desc}</p>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
          <Check size={16} className="text-blue-400" /> {f}
        </li>
      ))}
    </ul>
    <button
      onClick={onSignup}
      className={`w-full py-3 rounded-xl font-bold transition-all ${featured ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
    >
      Choose {title}
    </button>
  </div>
);

export default App;