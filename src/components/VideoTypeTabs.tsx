import React, { useState } from 'react';
import { Smartphone, Video, Megaphone, Mic, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const VideoTypeTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reels' | 'ads' | 'car' | 'astrology' | 'voiceover'>('reels');

  const tabData = {
    reels: {
      title: 'Instagram Reels & YouTube Shorts Ads (9:16)',
      tagline: 'Engineered for maximum thumb-stop rate in the first 3 seconds',
      description:
        'Vertical high-energy video ads packed with fast motion cuts, dynamic Hindi text captions that pop on-beat, and a direct WhatsApp button overlay that prompts immediate viewer action.',
      benefits: [
        'Over 75% higher click-through-rate than static image ads',
        'Auto-synchronized animated bold typography in Hindi & English',
        'Direct "Click to WhatsApp" messaging hook at the 12-second mark',
      ],
      ratio: '9:16 Vertical',
      viewsStat: '+240% Average Video Completion Rate',
      sampleHook: '“रुकिए! अगर आप झुंझुनूं में अपनी कार बेचना चाहते हैं, तो यह वीडियो आपके लिए है...”',
    },
    ads: {
      title: 'High-Converting E-Commerce & Retail Product Ads',
      tagline: 'Showcase product features, customer reviews and limited-time discounts',
      description:
        'Square (1:1) and vertical (9:16) format ads tailored for jewelry, traditional sarees, electronics, and local stores. Renders photorealistic lighting with authentic festive atmosphere.',
      benefits: [
        'Highlight price drops, discount codes, and festive offers',
        'Split-screen before-and-after comparison layout',
        'Optimized for Facebook Feed, Instagram Carousel, and Stories',
      ],
      ratio: '1:1 Square & 9:16',
      viewsStat: '5.2x Verified Average ROAS',
      sampleHook: '“त्योहारों पर सबसे खास उपहार! कुंदन और सोने के आभूषणों पर सीमित 40% छूट।”',
    },
    car: {
      title: 'Specialized "Sell Old Car by Ad" Video Funnels',
      tagline: 'Sell used cars and commercial vehicles within 3-7 days without brokers',
      description:
        'Showcase vehicle exterior condition, certified odometer reading, clean interior, engine sound, and clear direct-owner pricing to genuine local buyers.',
      benefits: [
        'Hyper-targeted to buyers within 30-50 km of your city (Jhunjhunu, Sikar, Jaipur)',
        'Zero commission to dealers or brokers',
        'Incoming calls and WhatsApp inquiries sent directly to your phone',
      ],
      ratio: '9:16 Reels',
      viewsStat: '3-7 Days Average Vehicle Turnaround',
      sampleHook: '“2021 Swift VXi बिकने के लिए तैयार! डायरेक्ट ओनर डील, नो दलाली।”',
    },
    astrology: {
      title: 'Vedic Astrology & Spiritual Consultation Video Ads',
      tagline: 'Policy-compliant, high-trust client acquisition for astrologers',
      description:
        'Designed to establish genuine spiritual credibility, outline areas of guidance (career, marriage, business), and book paid consultations directly on WhatsApp.',
      benefits: [
        'Fully compliant with Meta advertising policies (no false guarantees)',
        'Pan-India and NRI (UAE, USA, Canada) audience targeting',
        'Direct consultation fee payment integration via UPI',
      ],
      ratio: '9:16 & 1:1',
      viewsStat: '120+ Monthly Paid Inquiries per Client',
      sampleHook: '“करियर और व्यापार में सही मार्गदर्शन पाएं। 25 वर्षों का वैदिक अनुभव।”',
    },
    voiceover: {
      title: 'Indian Regional AI Voiceover & Vernacular Audio Ads',
      tagline: 'Warm, natural multi-dialect audio in Hindi, Rajasthani, Gujarati, and Punjabi',
      description:
        'Say goodbye to flat, robotic foreign voices. ClickCraft voiceovers sound like a trusted local shopkeeper or confident Indian presenter talking directly to your customer.',
      benefits: [
        'Accurate pronunciation of Indian towns, business terms, and currency (लाख, करोड़, रुपये)',
        'Choose between confident male, warm female, and senior professional tones',
        'Export as standalone WhatsApp broadcast audio or synced video tracks',
      ],
      ratio: 'Audio / Multi-Sync',
      viewsStat: '15+ Indian & Global Languages Supported',
      sampleHook: '“राम-राम सा! आपणी दुकान रो प्रचार अब सीधे मोबाइल पे...” (Rajasthani Dialect)',
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="py-20 bg-slate-950/90 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            VIDEO FORMATS & AD ENGINE CAPABILITIES
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Every Video Ad Format You Need to Scale
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Tailored to capture attention in the mobile feeds where Indian consumers spend 4+ hours every day.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 max-w-full">
          <button
            type="button"
            onClick={() => setActiveTab('reels')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'reels'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Reels & Shorts Ads</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ads')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'ads'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Megaphone className="w-4 h-4" />
            <span>Retail & Product Ads</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('car')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'car'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Sell Old Car by Ad</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('astrology')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'astrology'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Astrology Ads</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('voiceover')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'voiceover'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>Regional Voiceover</span>
          </button>
        </div>

        {/* Tab Content Showcase Card */}
        <div className="mt-8 rounded-3xl p-6 sm:p-10 bg-slate-900/90 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
                {current.ratio}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2 pt-2">
                {current.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#ai-generator"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-xs font-bold text-white shadow-md hover:scale-[1.02] transition-transform"
                >
                  <span>Create This Format with AI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs font-semibold text-emerald-400">
                  {current.viewsStat}
                </span>
              </div>
            </div>

            {/* Right Column: Simulated Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-5 bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                  <span>Sample 3-Second Hook Audio & Copy</span>
                  <span className="text-orange-400 font-bold">Verified Angle</span>
                </div>
                <blockquote className="text-xs text-amber-300 font-medium italic p-3 rounded-xl bg-slate-900 border border-slate-800">
                  {current.sampleHook}
                </blockquote>
                <div className="text-[11px] text-slate-400 space-y-1">
                  <p>• Visual Hook: Instant dynamic zoom on offer headline</p>
                  <p>• Audio Hook: Energetic regional Hindi speaker</p>
                  <p>• Conversion: Instant WhatsApp lead button with pre-filled message</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
