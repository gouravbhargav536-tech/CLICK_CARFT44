import React from 'react';
import { Car, Compass, GraduationCap, Sparkles, Building, ShoppingBag, ArrowRight } from 'lucide-react';

const AUDIENCES = [
  {
    title: 'Used Car Sellers & Dealers',
    tagline: 'Sell vehicles in 3 to 7 days without middleman cuts',
    points: ['Direct WhatsApp chats with serious local car buyers', 'Certified price sticker & odometer showcase', 'Zero commission to local brokers'],
    icon: Car,
    color: 'text-orange-400',
    border: 'border-orange-500/30',
  },
  {
    title: 'Astrologers & Spiritual Guides',
    tagline: 'Book high-ticket consultation appointments across India & abroad',
    points: ['Meta policy compliant video creatives with high trust', 'Pan-India, UAE and NRI client inquiries', 'Direct fee payment setup via UPI'],
    icon: Compass,
    color: 'text-amber-400',
    border: 'border-amber-500/30',
  },
  {
    title: 'Coaching Institutes & Tutors',
    tagline: 'Fill batches for NEET, IIT-JEE, Foundation & Board Exams',
    points: ['Target parents and students in your exact city', 'Free demo class registration funnels', 'Highlight topper rank results & faculty'],
    icon: GraduationCap,
    color: 'text-blue-400',
    border: 'border-blue-500/30',
  },
  {
    title: 'Jewellers & Saree Boutiques',
    tagline: 'Drive footfall and orders for festive and bridal seasons',
    points: ['Shimmering cinematic macro shots of gold & silver', 'Making charge discount & exchange offer promos', 'Target wedding families and festival shoppers'],
    icon: Sparkles,
    color: 'text-yellow-400',
    border: 'border-yellow-500/30',
  },
  {
    title: 'Real Estate Brokers & Colonizers',
    tagline: 'Generate serious site-visit inquiries for residential plots',
    points: ['Drone-style township flythrough video ads', 'Clear pricing per square yard & highway connectivity', 'Filter out time-wasters with qualification questions'],
    icon: Building,
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
  },
  {
    title: 'Local Retailers & D2C Brands',
    tagline: 'Double weekend footfall with mega dhamaka sale ads',
    points: ['Electronics, furniture, and retail exchange offers', 'Localized Hindi & Rajasthani speech targeting your area', 'Google Maps shop direction link in WhatsApp'],
    icon: ShoppingBag,
    color: 'text-purple-400',
    border: 'border-purple-500/30',
  },
];

export const WhoIsItFor: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950/70 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            WHO BENEFITS MOST
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Built for Businesses Where Every Inbound Call Counts
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Whether you operate locally in Jhunjhunu/Rajasthan or serve clients across India, our video engine is pre-engineered for your sales model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCES.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-6 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-slate-950 border ${a.border} flex items-center justify-center ${a.color} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-1">
                    {a.title}
                  </h3>
                  <p className="text-xs text-orange-400 font-medium mb-3">
                    {a.tagline}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {a.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <a
                    href="#ai-generator"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-orange-400 transition-colors"
                  >
                    <span>Create Ad for this industry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
