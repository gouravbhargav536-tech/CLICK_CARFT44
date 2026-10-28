import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

const CLIENTS = [
  { name: 'Auto Heritage Sikar', type: 'Pre-Owned Cars', badge: '12 Cars Sold' },
  { name: 'Rajputana Gems & Jewels', type: 'Bridal Jewellery', badge: '5.2x ROAS' },
  { name: 'AstroVeda India', type: 'Vedic Consultations', badge: '120+ Monthly Calls' },
  { name: 'Shekhawati Traditional Sarees', type: 'Ethnic Fashion', badge: '18 Orders/Day' },
  { name: 'EduPoint Coaching Sikar', type: 'Admissions Campaign', badge: '350+ Leads' },
  { name: 'Kisan AgriMart Rajasthan', type: 'Agri Equipment', badge: 'Pan-India Reach' },
  { name: 'Thar Motors Jhunjhunu', type: 'Vehicle Resale', badge: 'Zero Broker' },
  { name: 'Jaipur Living Township', type: 'Real Estate Plots', badge: '₹4.2 Cr Pipeline' },
];

export const ClientMarquee: React.FC = () => {
  return (
    <div className="w-full py-10 bg-white border-y border-stone-200 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-orange-600" />
          <span className="text-xs uppercase font-black tracking-widest text-slate-800">
            Trusted by 250+ Businesses in Rajasthan & Worldwide
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600 font-bold">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span>Jhunjhunu · Jaipur · Delhi-NCR · Pan-India · Overseas</span>
        </div>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex shrink-0 animate-marquee items-center gap-6 py-2">
          {CLIENTS.concat(CLIENTS).map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-black transition-all shadow-sm shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-stone-300 flex items-center justify-center font-display font-black text-xs text-orange-600 shadow-sm">
                {client.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-black whitespace-nowrap">{client.name}</p>
                <div className="flex items-center gap-2 text-[10px] text-slate-600 font-semibold whitespace-nowrap">
                  <span>{client.type}</span>
                  <span>·</span>
                  <span className="text-emerald-700 font-bold">{client.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
