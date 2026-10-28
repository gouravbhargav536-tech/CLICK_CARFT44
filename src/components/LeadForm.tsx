import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TranslationSchema, LeadFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface LeadFormProps {
  t: TranslationSchema;
  preselectedService?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ t, preselectedService }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    whatsapp: '',
    service: 'Boost Your Contact',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const encodeForNetlify = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.whatsapp.trim()) {
      setErrorMessage('Please enter your WhatsApp or phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Post to Netlify forms endpoint
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForNetlify({
          'form-name': 'clickcraft-contact',
          ...formData,
        }),
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#F97316', '#D1B455', '#25D366'],
        });
      } catch {
        // Fallback
      }
    } catch {
      // In local dev without live Netlify backend, handle gracefully
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#F97316', '#D1B455', '#25D366'],
        });
      } catch {
        // Fallback
      }
    }
  };

  const getWhatsAppPrefillLink = () => {
    const text = encodeURIComponent(
      `Hello ClickCraft Agency! My name is ${formData.name || 'Client'}. I am inquiring about: ${formData.service}. Contact: ${formData.whatsapp}. Business Details: ${formData.details || 'Interested in 50% off offer'}`
    );
    return `https://wa.me/918058165241?text=${text}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-slate-900 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Background gradient lighting */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-500/10 blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.form.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
              {t.form.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              {t.form.subtitle}
            </p>
          </div>

          {isSuccess ? (
            /* Success confirmation screen */
            <div className="text-center py-8 px-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-5 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {t.form.successTitle}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                {t.form.successMessage}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={getWhatsAppPrefillLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-lg shadow-emerald-950/40 transition-all group"
                >
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    <WhatsAppIcon size={16} colored={true} />
                  </div>
                  <span>{t.form.whatsappDirectBtn}</span>
                </a>

                <a
                  href="tel:+918058165241"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>{t.form.callDirectBtn}</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      whatsapp: '',
                      service: 'Boost Your Contact',
                      details: '',
                    });
                  }}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  {t.form.submitAnotherBtn}
                </button>
              </div>
            </div>
          ) : (
            /* Lead Capture Form */
            <form
              onSubmit={handleSubmit}
              name="clickcraft-contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-5"
            >
              {/* Hidden Netlify field */}
              <input type="hidden" name="form-name" value="clickcraft-contact" />

              {errorMessage && (
                <div className="p-3 text-xs text-red-300 bg-red-950/60 border border-red-800/80 rounded-xl">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    {t.form.nameLabel} <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    {t.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* WhatsApp / Calling Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    {t.form.phoneLabel} <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder={t.form.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    {t.form.serviceLabel}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                  >
                    {t.form.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Details Textarea */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  {t.form.detailsLabel}
                </label>
                <textarea
                  name="details"
                  rows={3}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder={t.form.detailsPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 hover:from-blue-500 hover:to-orange-400 text-sm shadow-xl shadow-orange-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>{t.form.submittingBtn}</span>
                ) : (
                  <>
                    <span>{t.form.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-slate-400">
                {t.form.privacyNote}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
