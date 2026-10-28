import React, { useState } from 'react';
import {
  Sparkles,
  Sliders,
  Play,
  RotateCcw,
  Check,
  Download,
  Copy,
  Volume2,
  Share2,
  Video,
  X,
  PhoneCall,
  Flame,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface AIPromptBarProps {
  onPreselectService?: (serviceName: string) => void;
}

export const AIPromptBar: React.FC<AIPromptBarProps> = ({ onPreselectService }) => {
  const [prompt, setPrompt] = useState(
    'Sell 2021 Swift VXi in Jhunjhunu with verified buyer WhatsApp lead generation, 15-second hook'
  );
  const [model, setModel] = useState('veo-speed');
  const [voiceLanguage, setVoiceLanguage] = useState('hi-natural');
  const [duration, setDuration] = useState('15s');
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '1:1' | '16:9'>('9:16');
  const [cameraMotion, setCameraMotion] = useState('push-in');

  // Generator simulation modal state
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'script' | 'audio'>('video');
  const [copied, setCopied] = useState(false);

  const quickPrompts = [
    { label: '🚗 Sell Used Swift Car in 5 Days', prompt: 'Sell 2021 Maruti Swift VXi in Jhunjhunu with zero broker fee, verified price badge, direct WhatsApp CTA' },
    { label: '🔮 Astrologer 50% Off Consultation', prompt: 'Vedic astrology consultation ad, 25 years experience, sacred golden mandala aesthetic, Hindi voiceover hook' },
    { label: '💎 Traditional Jewellery Bridal Sale', prompt: 'Shimmering 22K Kundan gold necklace, bridal festive collection, 40% off making charges, Jaipur living luxury aesthetic' },
    { label: '🏡 Gated Township Plots Highway Launch', prompt: 'Residential villa plots 2 mins from Jhunjhunu highway, boundary wall, easy EMI, site visit appointment booking' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreviewModal(true);
    }, 900);
  };

  const handleCopyScript = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-generator" className="py-16 sm:py-20 bg-slate-950 relative border-b border-slate-900">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-blue-600/10 via-orange-500/10 to-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLICKCRAFT AI VIDEO AD MAKER · REGIONAL FIRST</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Create High-Converting Indian Video Ads in Seconds
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300">
            Powered by ClickCraft Veo-Speed 3.1 & Regional Voiceover AI. Native Hindi, Rajasthani, and Gujarati accents out-of-the-box.
          </p>
        </div>

        {/* SINGLE-ROW HIGGSFIELD-STYLE PROMPT BAR */}
        <div className="p-3 sm:p-4 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
            {/* 1. Prompt Input Box */}
            <div className="relative flex-1">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your offer: e.g. Sell 2021 Swift VXi in Jhunjhunu with zero broker fee..."
                className="w-full pl-4 pr-10 py-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
              />
              <Sparkles className="w-4 h-4 text-orange-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Controls Cluster */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Model Selector */}
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-[11px] text-slate-400">Model:</span>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="veo-speed" className="bg-slate-900">Veo-Speed 3.1</option>
                  <option value="meta-scale" className="bg-slate-900">Meta-Scale AI</option>
                  <option value="scriptcraft" className="bg-slate-900">ScriptCraft Direct</option>
                </select>
              </div>

              {/* Indian Regional Voice Selector */}
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-[11px] text-slate-400">Voice:</span>
                <select
                  value={voiceLanguage}
                  onChange={(e) => setVoiceLanguage(e.target.value)}
                  className="bg-transparent text-orange-400 font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="hi-natural" className="bg-slate-900">Hindi (Natural Warm)</option>
                  <option value="raj-marwari" className="bg-slate-900">Rajasthani (मारवाड़ी)</option>
                  <option value="gu-gujarati" className="bg-slate-900">Gujarati (ગુજરાતી)</option>
                  <option value="pa-punjabi" className="bg-slate-900">Punjabi (ਪੰਜਾਬੀ)</option>
                  <option value="en-indian" className="bg-slate-900">English (Indian Accent)</option>
                </select>
              </div>

              {/* Aspect Ratio Selector */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                {(['9:16', '1:1', '16:9'] as const).map((ratio) => (
                  <button
                    key={ratio}
                    type="button"
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                      aspectRatio === ratio
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>

              {/* Duration Selector */}
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="15s" className="bg-slate-900">15s Hook</option>
                <option value="30s" className="bg-slate-900">30s Promo</option>
                <option value="60s" className="bg-slate-900">60s Reel</option>
              </select>

              {/* Big Generate Button */}
              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 hover:from-blue-500 hover:to-orange-400 shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                {isGenerating ? (
                  <>
                    <RotateCcw className="w-4 h-4 animate-spin" />
                    <span>Rendering Creative...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Generate Ad Creative</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Prompt Starters */}
          <div className="mt-3.5 pt-3 border-t border-slate-800 flex items-center gap-2 overflow-x-auto text-[11px]">
            <span className="text-slate-400 font-semibold whitespace-nowrap shrink-0">Sample Angles:</span>
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPrompt(qp.prompt)}
                className="px-2.5 py-1 rounded-lg bg-slate-950/70 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer shrink-0"
              >
                {qp.label}
              </button>
            ))}
          </div>
        </div>

        {/* ADVANCED CAMERA & FRAME CONTROLS (Higgsfield Style) */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-300 font-medium">
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              Advanced Controls:
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px]">Camera Motion:</span>
              <button
                type="button"
                onClick={() => setCameraMotion('push-in')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border ${cameraMotion === 'push-in' ? 'bg-blue-600/20 border-blue-500 text-blue-300' : 'border-slate-800 text-slate-400'}`}
              >
                Dynamic Push-in
              </button>
              <button
                type="button"
                onClick={() => setCameraMotion('orbit')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border ${cameraMotion === 'orbit' ? 'bg-blue-600/20 border-blue-500 text-blue-300' : 'border-slate-800 text-slate-400'}`}
              >
                Product Orbit
              </button>
              <button
                type="button"
                onClick={() => setCameraMotion('hook-cut')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border ${cameraMotion === 'hook-cut' ? 'bg-blue-600/20 border-blue-500 text-blue-300' : 'border-slate-800 text-slate-400'}`}
              >
                3s Fast Hook Cut
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300 font-medium">Veo-Speed 3.1 & Regional Synth Active (60fps)</span>
          </div>
        </div>
      </div>

      {/* INTERACTIVE VIDEO GENERATOR PREVIEW MODAL */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-slate-100">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowPreviewModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/40 flex items-center justify-center font-bold">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-display font-bold text-white">
                    Generated Ad Creative Preview
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    Ready to Launch
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {aspectRatio} · {duration} · Hindi/Regional Audio · 1080p HD Ready
                </p>
              </div>
            </div>

            {/* Tab switchers */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('video')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'video'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Visual Video & Captions
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('script')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'script'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Hindi Ad Script & Angles
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('audio')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'audio'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Regional Voiceover Track
              </button>
            </div>

            {/* Tab 1: Video Simulation Player */}
            {activeTab === 'video' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 flex justify-center">
                  <div
                    className={`relative rounded-2xl overflow-hidden border-2 border-orange-500/50 shadow-2xl bg-slate-950 flex flex-col justify-between p-4 group ${
                      aspectRatio === '9:16'
                        ? 'w-[240px] h-[426px]'
                        : aspectRatio === '1:1'
                        ? 'w-[320px] h-[320px]'
                        : 'w-[420px] h-[240px]'
                    }`}
                  >
                    {/* Simulated live video background with ambient glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-900 to-orange-900/60 animate-pulse pointer-events-none" />

                    {/* Top simulated HUD */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] text-white/90">
                      <span className="bg-black/60 px-2 py-0.5 rounded font-mono">00:15 / 00:15</span>
                      <span className="bg-orange-500/80 px-2 py-0.5 rounded font-bold uppercase">Meta Ad Ready</span>
                    </div>

                    {/* Center Animated Commercial Visual Simulation */}
                    <div className="relative z-10 text-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-white shadow-lg">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                      <p className="text-xs font-bold text-white drop-shadow-md">
                        {prompt.slice(0, 48)}...
                      </p>
                    </div>

                    {/* Bottom Dynamic Subtitles & CTA Stamped Box */}
                    <div className="relative z-10 space-y-2">
                      {/* Animated Auto-Captions */}
                      <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/20 text-center">
                        <p className="text-xs font-bold text-amber-300 drop-shadow">
                          “डायरेक्ट खरीदार पायें 5 दिनों में!”
                        </p>
                        <p className="text-[10px] text-slate-200">
                          (Direct buyers in 5 days · Zero broker)
                        </p>
                      </div>

                      {/* WhatsApp Tap Button Overlay */}
                      <a
                        href="https://wa.me/918058165241"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-lg"
                      >
                        <WhatsAppIcon size={14} colored={false} />
                        <span>Send Message on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Creative Details & Actions */}
                <div className="md:col-span-6 space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-orange-400" />
                      Creative Breakdown
                    </h4>
                    <ul className="text-xs text-slate-300 space-y-1.5 pl-1">
                      <li>• <strong>Format:</strong> High-energy {aspectRatio} format designed for Instagram Reels & Facebook Feed.</li>
                      <li>• <strong>Voice Accent:</strong> {voiceLanguage === 'hi-natural' ? 'Hindi Natural Commercial' : voiceLanguage === 'raj-marwari' ? 'Rajasthani Marwari Regional' : 'Regional Dialect'}.</li>
                      <li>• <strong>Hook Retention:</strong> 3-second instant pain-point callout with zero dead air.</li>
                      <li>• <strong>Conversion Channel:</strong> Direct WhatsApp lead routing with pre-filled message.</li>
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => alert('Download package ready! In production this downloads the 1080p MP4 with synced captions.')}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white transition-all shadow-md cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download 1080p Commercial Video (MP4)</span>
                    </button>

                    <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-950/40 to-slate-950 border border-orange-500/40 space-y-2">
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-orange-400" />
                        <span className="text-xs font-bold text-white">ClickCraft "Done For You" Option</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Don’t want to run the Meta Ads yourself? Amerjeet Kumar and the ClickCraft team will set up your ad campaign, target local buyers in your city, and manage your daily budget.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setShowPreviewModal(false);
                          if (onPreselectService) onPreselectService('Grow Page-Business');
                          const contactEl = document.getElementById('contact');
                          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-lg cursor-pointer"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Hire ClickCraft Team to Run This Ad</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Script Details */}
            {activeTab === 'script' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                    <span>Generated 15-Second Direct Response Ad Script</span>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyScript(
                          `[00:00 - 00:03 HOOK] पुरानी गाड़ी बेचने की सोच रहे हैं? दलालों को भारी कमीशन देना बंद करें!\n[00:03 - 00:10 VALUE] क्लिकक्राफ्ट के साथ अपनी कार मात्र 5 दिनों में बेचें, सीधे अपने शहर के असली खरीदारों को।\n[00:10 - 00:15 CTA] अभी नीचे दिए गए व्हाट्सएप बटन पर क्लिक करें और अपनी गाड़ी की फ्री वैल्यूएशन पाएं!`
                        )
                      }
                      className="flex items-center gap-1 text-orange-400 hover:text-orange-300 cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy Script'}</span>
                    </button>
                  </div>

                  <p className="text-amber-300 font-semibold">
                    [00:00 - 00:03 HOOK]: "पुरानी गाड़ी बेचने की सोच रहे हैं? दलालों को भारी कमीशन देना बंद करें!"
                  </p>
                  <p className="text-slate-200">
                    [00:03 - 00:10 VALUE]: "क्लिकक्राफ्ट के साथ अपनी कार मात्र 5 दिनों में बेचें, सीधे अपने शहर के असली खरीदारों को। बिना किसी झंझट के तुरंत कैश।"
                  </p>
                  <p className="text-emerald-400 font-semibold">
                    [00:10 - 00:15 CTA]: "अभी नीचे दिए गए व्हाट्सएप बटन पर क्लिक करें और अपनी गाड़ी की फ्री वैल्यूएशन पाएं!"
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Regional Voiceover Track */}
            {activeTab === 'audio' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center">
                      <Volume2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Voiceover Track Preview</h4>
                      <p className="text-xs text-slate-400">Regional Voice Synth 4.0 · High Fidelity Indian Vocal Pitch</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => alert('Playing high-definition audio preview track.')}
                        className="p-2 rounded-full bg-orange-500 text-white cursor-pointer hover:bg-orange-400"
                      >
                        <Play className="w-4 h-4 fill-white" />
                      </button>
                      <span className="font-semibold text-white">Hindi Commercial Tone (Confident Male)</span>
                    </div>
                    <span className="text-slate-400 font-mono">00:15 / 00:15</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
