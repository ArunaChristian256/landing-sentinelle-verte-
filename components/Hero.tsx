import React from 'react';
import { ChevronRight, Activity, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-dark-bg dark:to-dark-surface -z-20" />
      
      {/* Abstract Shapes/Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-[80px] -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-5 -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Système actif en RDC v2.4
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
            Sentinelle <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Verte
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
            Surveillez, détectez et protégez la biodiversité du Bassin du Congo grâce à un système intelligent de monitoring environnemental propulsé par l'IA et les données satellites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(0,194,111,0.4)] hover:shadow-[0_0_30px_rgba(0,194,111,0.6)] flex items-center justify-center gap-2">
              Découvrir le système
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center justify-center">
              Demander une démo
            </button>
          </div>

          <div className="pt-8 flex items-center gap-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Protection Virunga</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Activity className="w-5 h-5 text-primary" />
              <span>Analyse Temps Réel</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Zap className="w-5 h-5 text-primary" />
              <span>Réponse Rapide</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Sphere/Globe effect */}
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Rotating rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-dashed border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Center Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-gray-100 dark:border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop" 
                alt="Nature Tech" 
                className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
              
              {/* Floating UI Elements inside */}
              <div className="absolute bottom-10 left-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/80 font-mono">STATUS: OPTIMAL</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20"></span>
                  </div>
                </div>
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%] rounded-full relative">
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Satellites/Dots */}
            <div className="absolute top-0 right-10 p-3 bg-dark-card/90 backdrop-blur border border-gray-700 rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                    <div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider">Alerte Feu</div>
                        <div className="text-sm font-bold text-white">Zone Nyiragongo</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-20 -left-4 p-3 bg-dark-card/90 backdrop-blur border border-gray-700 rounded-lg shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider">Qualité Air</div>
                        <div className="text-sm font-bold text-white">Goma: 98 AQI</div>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;