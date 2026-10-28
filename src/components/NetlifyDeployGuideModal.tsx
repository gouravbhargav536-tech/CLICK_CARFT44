import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Terminal, Globe, Shield } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-slate-200">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center font-bold text-lg">
            N
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-white">
              Netlify Hosting & Deployment Guide
            </h3>
            <p className="text-xs text-slate-400">
              Complete step-by-step guide for ClickCraft Digital Agency
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300">
          {/* Method 1: Git Integration (Recommended) */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
            <h4 className="font-bold text-white flex items-center gap-2 text-sm">
              <Terminal className="w-4 h-4 text-orange-400" />
              Method 1: Connect via GitHub (Automatic CI/CD)
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300 pl-1">
              <li>Push this codebase to your GitHub or GitLab repository.</li>
              <li>Log in to <span className="text-teal-400 font-semibold">Netlify.com</span> and click <strong>"Add new site" → "Import an existing project"</strong>.</li>
              <li>Choose GitHub and select your repository.</li>
              <li>
                Set the build settings:
                <div className="my-2 p-2.5 bg-slate-900 rounded-lg font-mono text-[11px] text-slate-200 border border-slate-800">
                  Build command: <span className="text-orange-400">npm run build</span><br />
                  Publish directory: <span className="text-teal-400">dist</span>
                </div>
              </li>
              <li>Click <strong>"Deploy Site"</strong> — Netlify will build and deploy your site in ~45 seconds!</li>
            </ol>
          </div>

          {/* Method 2: Manual Drag & Drop */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
            <h4 className="font-bold text-white flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-blue-400" />
              Method 2: One-Click Manual Drop
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300 pl-1">
              <li>Run <code className="text-orange-400 bg-slate-900 px-1 py-0.5 rounded">npm run build</code> locally in your terminal.</li>
              <li>This produces the output folder named <code className="text-teal-400 bg-slate-900 px-1 py-0.5 rounded">dist</code>.</li>
              <li>Go to Netlify dashboard, open <strong>"Sites"</strong>, and drag-and-drop the <strong>dist</strong> folder directly onto the upload zone.</li>
            </ol>
          </div>

          {/* Netlify Forms Note */}
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
            <h4 className="font-bold text-emerald-300 flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-emerald-400" />
              Netlify Forms & WhatsApp Setup
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              The Lead Generation form is already pre-configured with <code className="text-emerald-400 font-mono">data-netlify="true"</code> and a bot-field honeypot in <code className="font-mono text-slate-200">index.html</code>. Once deployed on Netlify, submissions will automatically appear in your <strong>Netlify Forms Dashboard</strong> and can send instant email/Slack notifications!
            </p>
          </div>

          {/* netlify.toml snippet */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-slate-300">netlify.toml (Recommended Config)</span>
              <button
                type="button"
                onClick={() => copyText(netlifyToml, 'toml')}
                className="flex items-center gap-1 text-[11px] text-teal-400 hover:text-teal-300 cursor-pointer"
              >
                {copiedSection === 'toml' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSection === 'toml' ? 'Copied' : 'Copy netlify.toml'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-950 rounded-xl text-[11px] font-mono text-slate-300 overflow-x-auto border border-slate-800">
              {netlifyToml}
            </pre>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
