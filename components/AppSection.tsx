import React from 'react';
import { Smartphone, Download, ArrowRight } from 'lucide-react';

const AppSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 -z-20"></div>
      
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 md:order-1 relative flex justify-center">
          <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-10">
            {/* Top Bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-dark-bg text-white pt-10 px-6 relative">
               {/* Map Background */}
               <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center grayscale"></div>
               
               <div className="relative z-10">
                 <div className="flex justify-between items-center mb-6">
                    <span className="font-bold">Sentinelle</span>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs">SV</div>
                 </div>

                 <div className="bg-dark-card/90 backdrop-blur p-4 rounded-xl border border-gray-700 mb-4">
                    <div className="text-xs text-gray-400 mb-1">Votre Zone</div>
                    <div className="font-bold text-lg mb-2">Parc National des Virunga</div>
                    <div className="flex gap-2">
                        <span className="px-2 py-1 rounded bg-green-500/20 text-green-500 text-xs">Sûr</span>
                        <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-500 text-xs">Air: 98%</span>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <div className="bg-dark-card/80 p-3 rounded-lg flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">!</div>
                        <div className="text-sm">
                            <div className="font-bold">Alerte Feu - Volcan</div>
                            <div className="text-xs text-gray-400">Il y a 2 min</div>
                        </div>
                    </div>
                    <div className="bg-dark-card/80 p-3 rounded-lg flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</div>
                        <div className="text-sm">
                            <div className="font-bold">Patrouille drone terminée</div>
                            <div className="text-xs text-gray-400">Secteur Mikeno</div>
                        </div>
                    </div>
                 </div>
               </div>

               <button className="absolute bottom-8 left-6 right-6 bg-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-primary/30">
                  Signaler un incident
               </button>
            </div>
          </div>

          {/* Glow behind phone */}
          <div className="absolute inset-0 bg-primary/30 blur-[60px] transform scale-90 -z-10"></div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <div className="inline-block p-3 rounded-2xl bg-white dark:bg-dark-card shadow-lg mb-4">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white">
            La protection de la nature <br/>
            <span className="text-primary">dans votre poche</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Rejoignez le réseau Sentinelle en RDC. Recevez des alertes en temps réel, participez à la collecte de données et contribuez à la protection du patrimoine environnemental congolais.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                <ArrowRight className="w-3 h-3 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Notifications Instantanées</h4>
                <p className="text-sm text-gray-500">Soyez alerté immédiatement en cas de danger volcanique ou écologique.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                <ArrowRight className="w-3 h-3 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Science Participative</h4>
                <p className="text-sm text-gray-500">Prenez des photos et enrichissez la base de données de l'IA.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex gap-4">
            <button className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
              <Download size={18} />
              App Store
            </button>
            <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors dark:text-white">
              <Download size={18} />
              Google Play
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppSection;