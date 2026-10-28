import React, { useState } from 'react';
import { X, Check, Copy, Terminal, Globe, Shield } from 'lucide-react';

interface NetlifyDeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetlifyDeployGuideModal: React.FC<NetlifyDeployGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const netlifyToml = `[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border-2 border-stone-200 shadow-2xl p-6 sm:p-8 text-slate-800">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-black hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center font-black text-xl shadow-sm">
            N
          </div>
          <div>
            <h3 className="text-xl font-display font-black text-black">
              Netlify Hosting & Deployment Guide
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Complete step-by-step guide for ClickCraft Digital Agency
            </p>
          </div>
        </div>

        <div className="space-y-5 text-xs sm:text-sm text-slate-700">
          {/* Method 1: Git Integration (Recommended) */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5">
            <h4 className="font-black text-black flex items-center gap-2 text-sm">
              <Terminal className="w-4 h-4 text-orange-600" />
              Method 1: Connect via GitHub (Automatic CI/CD)
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-700 pl-1 font-medium">
              <li>Push this codebase to your GitHub or GitLab repository.</li>
              <li>Log in to <span className="text-teal-700 font-bold">Netlify.com</span> and click <strong>"Add new site" → "Import an existing project"</strong>.</li>
              <li>Choose GitHub and select your repository.</li>
              <li>
                Set the build settings:
                <div className="my-2 p-3 bg-white rounded-xl font-mono text-xs text-slate-900 border border-stone-200 shadow-sm">
                  Build command: <span className="text-orange-600 font-bold">npm run build</span><br />
                  Publish directory: <span className="text-teal-700 font-bold">dist</span>
                </div>
              </li>
              <li>Click <strong>"Deploy Site"</strong> — Netlify will build and deploy your site in ~45 seconds!</li>
            </ol>
          </div>

          {/* Method 2: Manual Drag & Drop */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5">
            <h4 className="font-black text-black flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-blue-600" />
              Method 2: One-Click Manual Drop
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-700 pl-1 font-medium">
              <li>Run <code className="text-orange-600 bg-white border border-stone-200 px-1.5 py-0.5 rounded font-bold">npm run build</code> locally in your terminal.</li>
              <li>This produces the output folder named <code className="text-teal-700 bg-white border border-stone-200 px-1.5 py-0.5 rounded font-bold">dist</code>.</li>
              <li>Go to Netlify dashboard, open <strong>"Sites"</strong>, and drag-and-drop the <strong>dist</strong> folder directly onto the upload zone.</li>
            </ol>
          </div>

          {/* Netlify Forms Note */}
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
            <h4 className="font-black text-emerald-900 flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-emerald-600" />
              Netlify Forms & WhatsApp Setup
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              The Lead Generation form is already pre-configured with <code className="text-emerald-700 font-bold font-mono">data-netlify="true"</code> and a bot-field honeypot in <code className="font-mono text-slate-900">index.html</code>. Once deployed on Netlify, submissions will automatically appear in your <strong>Netlify Forms Dashboard</strong>!
            </p>
          </div>

          {/* netlify.toml snippet */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700">netlify.toml (Recommended Config)</span>
              <button
                type="button"
                onClick={() => copyText(netlifyToml, 'toml')}
                className="flex items-center gap-1 text-xs text-teal-700 hover:text-teal-900 font-bold cursor-pointer"
              >
                {copiedSection === 'toml' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSection === 'toml' ? 'Copied' : 'Copy netlify.toml'}</span>
              </button>
            </div>
            <pre className="p-3.5 bg-stone-50 rounded-2xl text-xs font-mono text-slate-800 overflow-x-auto border border-stone-200">
              {netlifyToml}
            </pre>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-black hover:bg-slate-900 text-xs font-bold text-white transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
