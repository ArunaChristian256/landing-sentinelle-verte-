import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Bell, Search, Menu, MapPin, AlertTriangle } from 'lucide-react';

const data = [
  { name: '00:00', co2: 400, temp: 24, amt: 2400 },
  { name: '04:00', co2: 300, temp: 22, amt: 2210 },
  { name: '08:00', co2: 200, temp: 25, amt: 2290 },
  { name: '12:00', co2: 278, temp: 28, amt: 2000 },
  { name: '16:00', co2: 189, temp: 27, amt: 2181 },
  { name: '20:00', co2: 239, temp: 25, amt: 2500 },
  { name: '23:59', co2: 349, temp: 23, amt: 2100 },
];

const barData = [
  { name: 'Mikeno', incidents: 4 },
  { name: 'Nyiragongo', incidents: 2 },
  { name: 'Rutshuru', incidents: 7 },
  { name: 'Masisi', incidents: 1 },
];

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          <div className="lg:col-span-2 space-y-8">
            <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white">
              Un centre de contrôle <br/>
              <span className="text-primary">tout-en-un</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Visualisez les données en temps réel, gérez les alertes et coordonnez les équipes d'intervention depuis une interface unique et intuitive.
            </p>
            
            <ul className="space-y-4">
              {[
                "Cartographie 3D interactive",
                "Flux de données capteurs en direct",
                "Gestion des équipes sur le terrain",
                "Rapports automatisés"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Explorer le Dashboard
            </button>
          </div>

          <div className="lg:col-span-3 relative">
            {/* Abstract Glow behind */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />

            {/* Glass Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700 shadow-2xl bg-white/40 dark:bg-dark-surface/60 backdrop-blur-xl">
              
              {/* Mock Header */}
              <div className="h-14 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 bg-white/50 dark:bg-black/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <Search size={16} />
                  <Bell size={16} />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-500"></div>
                </div>
              </div>

              {/* Mock Body */}
              <div className="p-6 grid grid-cols-3 gap-6">
                
                {/* Stats Row */}
                <div className="col-span-3 grid grid-cols-3 gap-4">
                  <div className="bg-white/60 dark:bg-dark-card/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-500 uppercase font-semibold">Qualité Air (AQI)</p>
                    <div className="flex items-end gap-2 mt-1">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">42</span>
                      <span className="text-xs text-primary mb-1">Excellent</span>
                    </div>
                  </div>
                  <div className="bg-white/60 dark:bg-dark-card/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-500 uppercase font-semibold">Capteurs Actifs</p>
                    <div className="flex items-end gap-2 mt-1">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">1,204</span>
                      <span className="text-xs text-green-500 mb-1">+12%</span>
                    </div>
                  </div>
                  <div className="bg-white/60 dark:bg-dark-card/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 bg-red-500/10 text-red-500 rounded-bl-xl">
                      <AlertTriangle size={14} />
                    </div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Alertes</p>
                    <div className="flex items-end gap-2 mt-1">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">3</span>
                      <span className="text-xs text-red-500 mb-1">Critique</span>
                    </div>
                  </div>
                </div>

                {/* Main Chart Area */}
                <div className="col-span-2 bg-white/60 dark:bg-dark-card/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700 min-h-[250px] flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Analyse CO2 Temps Réel</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Live</span>
                  </div>
                  <div className="flex-grow">
                     <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient id="colorCo2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00C26F" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#00C26F" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.1} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9CA3AF'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9CA3AF'}} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '8px', color: '#fff' }}
                          itemStyle={{ color: '#00C26F' }}
                        />
                        <Area type="monotone" dataKey="co2" stroke="#00C26F" strokeWidth={2} fillOpacity={1} fill="url(#colorCo2)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Side Bar & Map Mock */}
                <div className="col-span-1 space-y-4">
                  <div className="bg-white/60 dark:bg-dark-card/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700 h-[140px] flex flex-col">
                     <h4 className="font-semibold text-xs text-gray-700 dark:text-gray-200 mb-2">Incidents par Zone</h4>
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData}>
                          <Bar dataKey="incidents" fill="#0B8A42" radius={[4, 4, 0, 0]} />
                          <XAxis dataKey="name" tick={{fontSize: 8, fill: '#9CA3AF'}} axisLine={false} tickLine={false} />
                        </BarChart>
                     </ResponsiveContainer>
                  </div>

                  <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/20 h-[94px] relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/29.2205,-1.6585,10,0,0/300x200?access_token=MY_TOKEN')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all"></div>
                     <div className="relative z-10 flex items-center gap-2">
                       <MapPin className="text-red-500 w-4 h-4 animate-bounce" />
                       <span className="text-xs font-bold text-white bg-black/50 px-2 py-1 rounded">Virunga Nord</span>
                     </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;