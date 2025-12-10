import React from 'react';
import { Flame, Wind, Trees, Radio, Users, Cpu, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: string }) => (
  <div className={`group relative p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden`}>
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-dark-surface flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all cursor-pointer">
        En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: Flame,
      title: "Détection des Feux",
      description: "Identification instantanée des départs de feu grâce à l'imagerie thermique et l'analyse satellite en temps réel.",
      delay: "0"
    },
    {
      icon: Wind,
      title: "Qualité de l'Air",
      description: "Capteurs IoT déployés pour mesurer les particules fines, le CO2 et les polluants atmosphériques.",
      delay: "100"
    },
    {
      icon: Trees,
      title: "Vision Déforestation",
      description: "Algorithmes de computer vision pour détecter les changements illégaux dans la couverture forestière.",
      delay: "200"
    },
    {
      icon: Cpu,
      title: "Prédictions IA",
      description: "Modèles prédictifs anticipant les risques écologiques basés sur l'historique et la météo.",
      delay: "300"
    },
    {
      icon: Radio,
      title: "Connexion Satellite",
      description: "Synchronisation permanente avec les constellations satellites pour une couverture globale.",
      delay: "400"
    },
    {
      icon: Users,
      title: "Réseau Communautaire",
      description: "Application permettant aux citoyens de signaler des anomalies et de valider les alertes.",
      delay: "500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-dark-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3 text-sm">Technologies Avancées</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            L'intelligence artificielle au service de la <span className="text-primary">planète</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Une suite complète d'outils technologiques interconnectés pour une surveillance environnementale sans précédent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;