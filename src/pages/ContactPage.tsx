import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Mail, MessageSquare, Send, CheckCircle2, ArrowLeft } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Editorial feedback / Question',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8">
      <SEOHead
        title="Contact & Editorial Inquiries — TravelHideouts"
        description="Get in touch with the editor of TravelHideouts for reader feedback, hideout suggestions, or corrections."
      />

      <div>
        <a
          href="#/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#66503E] hover:text-[#242220] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <Mail className="w-4 h-4 text-[#8C6D58]" />
          <span>Editorial Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#242220]">
          Contact TravelHideouts
        </h1>
        <p className="text-sm md:text-base text-[#574F47] leading-relaxed">
          Have a quiet sanctuary you think we should investigate? Found an update or correction for one of our guides? We'd love to hear from you.
        </p>
      </div>

      <div className="p-6 md:p-10 rounded-3xl bg-white border border-[#E9E1D2] shadow-sm">
        {submitted ? (
          <div className="text-center py-12 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EBF5EE] text-[#3C6E4D] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#242220]">
              Message Received
            </h3>
            <p className="text-sm text-[#595147] max-w-sm mx-auto">
              Thank you for writing. Our editorial team reviews every note and will get back to you if a reply is requested.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: 'Editorial feedback / Question', message: '' });
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-[#2E2A26] text-white text-xs font-semibold"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#63594D] mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Elena Rossi"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2D8C7] text-sm text-[#2E2A26] focus:outline-none focus:border-[#2E2A26]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#63594D] mb-1.5">
                Your Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2D8C7] text-sm text-[#2E2A26] focus:outline-none focus:border-[#2E2A26]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#63594D] mb-1.5">
                Topic
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2D8C7] text-sm text-[#2E2A26] focus:outline-none focus:border-[#2E2A26]"
              >
                <option value="Editorial feedback / Question">Editorial feedback / Question</option>
                <option value="Hideout Recommendation">Hideout Recommendation</option>
                <option value="Guide Correction / Update">Guide Correction / Update</option>
                <option value="Partnership / Press Inquiry">Partnership / Press Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#63594D] mb-1.5">
                Your Note
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your thoughts, recommendations, or questions with our editor..."
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2D8C7] text-sm text-[#2E2A26] focus:outline-none focus:border-[#2E2A26]"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2E2A26] text-white hover:bg-[#453F39] text-sm font-semibold transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
