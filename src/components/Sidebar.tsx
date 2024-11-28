import { Home, Calendar, Settings, BookMarked } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const tabs = [
    { id: 'dashboard', icon: Home, label: 'Tableau de bord' },
    { id: 'calendar', icon: Calendar, label: 'Calendrier' },
    { id: 'journal', icon: BookMarked, label: 'Journal' },
    { id: 'settings', icon: Settings, label: 'Paramètres' }
  ];

  return (
    <motion.div 
      className="w-64 bg-white shadow-lg h-screen p-4"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
    >
      <div className="mb-8">
        <h2 className="text-xl font-bold text-indigo-900">Mon Espace Fezan</h2>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {tabs.map(({ id, icon: Icon, label }) => (
            <li key={id}>
              <button
                onClick={() => onTabChange(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === id 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};