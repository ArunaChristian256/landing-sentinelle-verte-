import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ number, label, suffix = "" }: { number: string, label: string, suffix?: string }) => {
  return (
    <div className="text-center p-6 border-r last:border-r-0 border-gray-200 dark:border-gray-800">
      <div className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
        {number}<span className="text-primary">{suffix}</span>
      </div>
      <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide text-sm">{label}</p>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-gray-50 dark:bg-dark-surface border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard number="+95" suffix="%" label="Détection Précoce" />
          <StatCard number="24" suffix="/7" label="Surveillance Active" />
          <StatCard number="-40" suffix="%" label="Incidents Non Signalés" />
          <StatCard number="1.2" suffix="M" label="Hectares Protégés" />
        </div>

        <div className="mt-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
          
          <div className="space-y-12">
            {[
              { year: '2021', title: 'Lancement du Projet', desc: 'Déploiement des premiers capteurs pilotes dans le parc des Virunga.' },
              { year: '2022', title: 'Intégration IA', desc: 'Mise en ligne du réseau neuronal de détection des feux de forêt.' },
              { year: '2023', title: 'Expansion Satellite', desc: 'Partenariat avec les constellations satellites pour une couverture du Bassin du Congo.' },
              { year: '2024', title: 'Réseau Sentinelle', desc: 'Ouverture de la plateforme aux communautés locales de Goma.' },
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 text-center md:text-right">
                  <div className={`md:hidden mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary mb-4`}>
                    {item.year}
                  </div>
                  {idx % 2 === 0 && (
                    <>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
                    </>
                  )}
                </div>
                
                <div className="relative hidden md:flex items-center justify-center w-12 h-12">
                  <div className="w-4 h-4 bg-primary rounded-full z-10 ring-4 ring-white dark:ring-dark-surface"></div>
                </div>

                <div className="flex-1 text-center md:text-left">
                   {idx % 2 !== 0 && (
                    <>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
                    </>
                  )}
                   <span className={`hidden md:block font-display font-bold text-4xl text-gray-200 dark:text-gray-800 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;