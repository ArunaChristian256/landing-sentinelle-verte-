import React from 'react';
import { Leaf, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl tracking-wide text-gray-900 dark:text-white">
                SENTINELLE <span className="text-primary">VERTE</span>
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
              Technologie de pointe pour la préservation de la biodiversité. Ensemble, construisons un avenir plus vert et plus sûr grâce à l'intelligence artificielle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Plateforme</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Technologie</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nos Satellites</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Développeurs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status Système</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                contact@sentinelleverte.io
              </li>
              <li>Goma, RDC</li>
              <li>+243 973 213 460</li>
            </ul>
            <button className="mt-6 text-primary font-medium text-sm border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              Devenir Partenaire
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Sentinelle Verte. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500 font-mono">
            PROPULSÉ PAR IA & TECHNOLOGIE VERTE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;