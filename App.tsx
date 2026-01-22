
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ChatView } from './components/ChatView';
import { WardrobeView } from './components/WardrobeView';
import { NavTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>(NavTab.StylistChat);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 flex flex-col relative bg-background-light">
        <Header />
        
        <div className="flex-1 overflow-hidden relative">
          {activeTab === NavTab.StylistChat && <ChatView />}
          {activeTab === NavTab.MyWardrobe && <WardrobeView />}
          {activeTab === NavTab.DailyOutfits && (
            <div className="flex items-center justify-center h-full text-slate-400 font-medium">
              Daily Outfits feature coming soon...
            </div>
          )}
          {activeTab === NavTab.Dashboard && (
            <div className="flex items-center justify-center h-full text-slate-400 font-medium">
              Dashboard feature coming soon...
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
