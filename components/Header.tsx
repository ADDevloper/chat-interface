
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="h-20 flex items-center justify-between px-10 shrink-0 z-10">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
          <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
        </div>
        <div>
          <span className="text-sm font-bold tracking-tight">Fashion Assistant</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold font-display">Active Now</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors group">
          <span className="material-symbols-outlined text-slate-600 group-hover:scale-110 transition-transform">history</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors group">
          <span className="material-symbols-outlined text-slate-600 group-hover:scale-110 transition-transform">add</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm border border-slate-100 overflow-hidden hover:ring-2 ring-primary/20 transition-all">
          <img 
            alt="User Avatar" 
            className="w-full h-full rounded-full object-cover" 
            src="https://picsum.photos/seed/fashion-user/80/80"
          />
        </button>
      </div>
    </header>
  );
};
