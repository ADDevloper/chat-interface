
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getStylistResponse } from '../services/geminiService';

export const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "What should I wear today?",
    "Curate a date night outfit",
    "Analyze my wardrobe gaps",
    "Style my vintage jacket"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await getStylistResponse(text, messages);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response || "I'm sorry, I'm having trouble thinking of fashion advice right now.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isLanding = messages.length === 0;

  return (
    <div className="flex flex-col h-full relative">
      {/* Messages Area */}
      <div className={`flex-1 overflow-y-auto custom-scrollbar px-6 md:px-10 pb-32 pt-10 ${isLanding ? 'flex items-center justify-center' : ''}`} ref={scrollRef}>
        {isLanding ? (
          <div className="max-w-2xl w-full text-center space-y-12">
            <div className="space-y-8">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/25 blur-[60px] rounded-full transform scale-150 animate-pulse"></div>
                <div className="relative w-24 h-24 rounded-3xl bg-white shadow-2xl flex items-center justify-center border border-white/50 hero-shadow">
                  <span className="material-symbols-outlined text-primary text-5xl font-light">auto_awesome</span>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-6xl font-extrabold tracking-tight text-slate-900 font-display">Hello, Style Icon.</h2>
                <p className="text-slate-400 font-medium text-lg max-w-md mx-auto leading-relaxed">I've analyzed your closet. What are we styling today?</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {quickPrompts.map((prompt) => (
                <button 
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  className="glass-chip px-6 py-5 rounded-2xl text-[15px] font-semibold text-slate-700 hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-8">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-3xl px-6 py-4 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-white border border-slate-100 text-slate-700'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-3xl px-6 py-4 shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 pointer-events-none">
        <div className="max-w-4xl mx-auto pointer-events-auto">
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/40 rounded-[3rem] blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center bg-white border border-slate-100 rounded-3xl p-3 pl-8 shadow-2xl shadow-slate-200/50 transition-all focus-within:ring-4 ring-primary/5">
              <div className="pr-4 flex items-center">
                <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">attach_file</span>
              </div>
              <input 
                className="flex-1 bg-transparent border-none focus:ring-0 text-lg py-4 placeholder:text-slate-300 font-medium" 
                placeholder="Ask your stylist anything..." 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              />
              <button 
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isLoading}
                className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30 hover:bg-indigo-700 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:translate-y-0 disabled:hover:bg-primary"
              >
                <span className="material-symbols-outlined text-2xl">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
