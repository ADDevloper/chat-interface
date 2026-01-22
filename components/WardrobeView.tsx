
import React from 'react';

const MOCK_ITEMS = [
  { id: '1', name: 'Vintage Leather Jacket', category: 'Outerwear', color: 'Brown', img: 'https://picsum.photos/seed/jacket/300/400' },
  { id: '2', name: 'Linen Summer Shirt', category: 'Tops', color: 'White', img: 'https://picsum.photos/seed/shirt/300/400' },
  { id: '3', name: 'Relaxed Chinos', category: 'Bottoms', color: 'Beige', img: 'https://picsum.photos/seed/pants/300/400' },
  { id: '4', name: 'Classic Chelsea Boots', category: 'Shoes', color: 'Black', img: 'https://picsum.photos/seed/boots/300/400' },
  { id: '5', name: 'Silk Floral Scarf', category: 'Accessories', color: 'Multi', img: 'https://picsum.photos/seed/scarf/300/400' },
  { id: '6', name: 'Denim Overshirt', category: 'Tops', color: 'Blue', img: 'https://picsum.photos/seed/denim/300/400' },
];

export const WardrobeView: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">My Wardrobe</h2>
            <p className="text-slate-400 font-medium">124 items organized and ready to wear.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">filter_list</span>
            Filters
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="aspect-[3/4] rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 hover:bg-white/50 hover:border-primary/30 transition-all cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">add</span>
            </div>
            <span className="text-sm font-bold text-slate-400 group-hover:text-primary">Add Item</span>
          </div>

          {MOCK_ITEMS.map((item) => (
            <div key={item.id} className="group relative aspect-[3/4] rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg leading-tight">{item.name}</p>
                <p className="text-white/70 text-sm">{item.category} • {item.color}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
