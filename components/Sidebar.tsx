
import React from 'react';
import { NavTab } from '../types';

interface SidebarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { name: NavTab.StylistChat, icon: 'forum' },
    { name: NavTab.MyWardrobe, icon: 'checkroom' },
    { name: NavTab.DailyOutfits, icon: 'calendar_today' },
    { name: NavTab.Dashboard, icon: 'dashboard' },
  ];

  return (
    <aside className="w-72 border-r border-slate-200 bg-white/80 backdrop-blur-xl flex flex-col z-10">
      <div className="p-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl">auto_awesome</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight font-display">CLOSET</h1>
        </div>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <span className="material-symbols-outlined">side_navigation</span>
        </button>
      </div>

      <nav className="flex-1 px-6 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onTabChange(item.name)}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-apple transition-all duration-200 ${
              activeTab === item.name
                ? 'bg-[rgba(115,34,195,0.08)] text-primary font-semibold'
                : 'text-slate-500 hover:bg-slate-100/50'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.name}
          </button>
        ))}
      </nav>

      {/* Pro Plan card removed as requested */}
    </aside>
  );
};
