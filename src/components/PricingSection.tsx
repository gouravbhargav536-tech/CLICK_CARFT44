import React, { useState } from 'react';
import { CREDIT_PRICING_PLANS } from '../data/pricing';
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight, PhoneCall, QrCode } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PricingSectionProps {
  onSelectDoneForYou: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectDoneForYou }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [showUPIModal, setShowUPIModal] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('Growth Pro');

  const handleOrderWhatsApp = (planName: string, price: number, credits: number) => {
    const text = encodeURIComponent(
      `Hi ClickCraft Team! I want to subscribe to the ${planName} Plan (₹${price}/mo with ${credits} Credits). Please share UPI payment details and activate my account.`
    );
    window.open(`https://wa.me/918058165241?text=${text}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            TRANSPARENT CREDIT-BASED PLANS · INR & UPI PRICING
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Simple Pricing. No Hidden Fees. Real Results.
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300">
            1 Credit generates high-resolution video frames and natural Indian voiceovers. Pay seamlessly with Google Pay, PhonePe, Paytm or UPI.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 mt-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded font-extrabold">SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {CREDIT_PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualINR : plan.monthlyINR;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.isBestValue
                    ? 'bg-gradient-to-b from-blue-950/60 via-slate-900 to-orange-950/20 border-2 border-orange-500/80 shadow-2xl shadow-orange-950/30 scale-100 lg:-translate-y-2'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.isBestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                    MOST POPULAR · BEST VALUE
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-display font-extrabold text-white">
                      {plan.name}
                    </h3>
                    <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-orange-400 font-mono text-xs font-bold">
                      {plan.credits} Credits/mo
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-display font-black text-white tabular-nums">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                        Billed annually (Includes 20% discount)
                      </p>
                    )}
                  </div>

                  {/* Video Output Metric (InVideo style) */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 mb-6 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-bold text-slate-200">
                      {plan.credits} credits = {plan.videosEstimate}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2.5 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPlanName(plan.name);
                      handleOrderWhatsApp(plan.name, price, plan.credits);
                    }}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md ${
                      plan.isBestValue
                        ? 'bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 text-white hover:scale-[1.02] shadow-orange-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPlanName(plan.name);
                      setShowUPIModal(true);
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Pay with UPI (GPay / PhonePe / Paytm)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* DONE FOR YOU AGENCY CALLOUT CARD (The ClickCraft Twist) */}
        <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-r from-blue-950/70 via-slate-900 to-orange-950/40 border-2 border-blue-500/50 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CLICKCRAFT SIGNATURE AGENCY SERVICE</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white">
                Don't Want to Create Ads Yourself? Choose "Done For You"
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Let founder <strong>Amerjeet Kumar</strong> and our performance marketing team design custom creatives, write localized scripts, setup Meta Pixel tracking, and manage your daily ad budget. You only focus on handling customer phone calls and closing sales.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 pt-2">
                <span>✓ Dedicated WhatsApp Growth Manager</span>
                <span>✓ Weekly Creative Refresh</span>
                <span>✓ Zero Technical Setup Needed</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={onSelectDoneForYou}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 shadow-xl shadow-orange-500/30 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Amerjeet (Free Strategy Call)</span>
              </button>

              <a
                href="https://wa.me/918058165241?text=Hi%20Amerjeet%20Ji,%20I%20am%20interested%20in%20your%20'Done%20For%20You'%20Meta%20Ads%20Agency%20Service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba59] transition-all cursor-pointer shadow-md"
              >
                <WhatsAppIcon size={16} colored={false} />
                <span>Chat on WhatsApp: +91 8058165241</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* UPI QR & Payment Modal */}
      {showUPIModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 text-slate-100 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white">
              Instant UPI Payment for {selectedPlanName}
            </h3>

            <p className="text-xs text-slate-300">
              Scan with any UPI app (Google Pay, PhonePe, Paytm, BHIM, Cred) or send directly to our official agency number.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <p className="text-[11px] text-slate-400">Official ClickCraft UPI Number:</p>
              <p className="text-base font-mono font-bold text-orange-400 tabular-nums">
                +91 8058165241
              </p>
              <p className="text-[11px] text-slate-400">UPI ID: 8058165241@upi</p>
              <p className="text-[11px] text-emerald-400 font-semibold">Account Name: Amerjeet Kumar / ClickCraft</p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/918058165241?text=Hi%20ClickCraft%20Team!%20I%20have%20completed%20the%20UPI%20payment%20for%20my%20plan.%20Sharing%20screenshot%20now."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md"
              >
                <WhatsAppIcon size={16} colored={false} />
                <span>Share Payment Screenshot on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setShowUPIModal(false)}
                className="py-2 text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
