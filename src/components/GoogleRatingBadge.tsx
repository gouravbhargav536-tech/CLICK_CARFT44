import React from 'react';

interface GoogleRatingBadgeProps {
  className?: string;
  variant?: 'full' | 'compact' | 'partner';
}

export const GoogleRatingBadge: React.FC<GoogleRatingBadgeProps> = ({
  className = '',
  variant = 'full',
}) => {
  if (variant === 'partner') {
    return (
      <div className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border-2 border-stone-200 shadow-sm text-xs font-bold ${className}`}>
        {/* Google Multi-color G Vector */}
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-black text-slate-900 leading-tight">
            Google <span className="text-[#4285F4]">P</span><span className="text-[#EA4335]">a</span><span className="text-[#FBBC05]">r</span><span className="text-[#4285F4]">t</span><span className="text-[#34A853]">n</span><span className="text-[#EA4335]">e</span><span className="text-[#4285F4]">r</span>
          </span>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Certified Agency</span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm ${className}`}>
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        <span className="text-xs font-black text-slate-900">4.9</span>
        <div className="flex text-[#FBBC04] text-[10px] leading-none">★★★★★</div>
        <span className="text-[10px] font-semibold text-slate-500">Google Reviews</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border-2 border-stone-200/90 shadow-md text-xs select-none ${className}`}>
      {/* Official Google G Logo */}
      <div className="w-8 h-8 rounded-xl bg-stone-50 border border-stone-200/80 p-1.5 flex items-center justify-center shrink-0 shadow-inner">
        <svg className="w-full h-full" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
      </div>

      {/* Rating & Review Info */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-black text-sm text-slate-950">4.9</span>
          <div className="flex text-[#FBBC04] text-xs leading-none tracking-tight">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
            Verified
          </span>
        </div>
        <div className="text-[11px] font-bold text-slate-600">
          Google Customer Reviews <span className="font-medium text-slate-400">(180+ Jhunjhunu & Global)</span>
        </div>
      </div>
    </div>
  );
};
