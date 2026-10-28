import { ModelEngine } from '../types';

export const AI_CREATIVE_MODELS: ModelEngine[] = [
  {
    id: 'clickcraft-veo-speed',
    name: 'ClickCraft Veo-Speed 3.1',
    provider: 'Fast Generation Core',
    badge: 'Flagship Video Engine',
    description:
      'Engineered for hyper-realistic commercial footage with photorealistic textures, dynamic camera motion, and vivid lighting for Indian product and retail ads.',
    aspectRatios: ['9:16', '16:9', '1:1'],
    maxDuration: '30 seconds',
    recommendedFor: 'Car ads, real estate walkthroughs, product reveals',
    iconType: 'sparkles',
  },
  {
    id: 'regional-voice-synth',
    name: 'Regional Voice Synth 4.0',
    provider: 'Indian Multi-Dialect Voiceover',
    badge: 'Native Accents',
    description:
      'Natural, conversational Indian voiceovers with real emotional emphasis in Hindi, Rajasthani, Punjabi, Gujarati, Bengali, Tamil, Telugu, and English.',
    aspectRatios: ['Audio / Sync'],
    maxDuration: '60 seconds',
    recommendedFor: 'Reels narration, WhatsApp audio ads, localized promos',
    iconType: 'mic',
  },
  {
    id: 'scriptcraft-direct-response',
    name: 'ScriptCraft Direct-Response AI',
    provider: 'High-Converting Copy Engine',
    badge: 'Trained on 5,000+ Ad Angles',
    description:
      'Generates thumb-stopping 3-second hooks, persuasive pain-point descriptions, and urgency-driven calls to action specifically tailored for tier-1 and tier-2 Indian consumers.',
    aspectRatios: ['Text / Hook'],
    maxDuration: 'Instant',
    recommendedFor: 'Offer structuring, A/B ad angles, caption generators',
    iconType: 'file-text',
  },
  {
    id: 'meta-ad-scaler',
    name: 'Meta-Scale Ad Composer',
    provider: 'Creative Asset Assembler',
    badge: 'Multi-Format Export',
    description:
      'Automatically cuts first and last frame hooks, lays over bold readable Indian vernacular captions, stamps WhatsApp buttons, and formats for Instagram Reels and Facebook Feed.',
    aspectRatios: ['9:16', '1:1', '4:5'],
    maxDuration: 'Full Reel',
    recommendedFor: 'Turnkey ready-to-run Facebook & Instagram ad creatives',
    iconType: 'layers',
  },
];
