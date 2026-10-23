"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export default function ContactSection() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Thank you! Your message was sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again or reach out directly via email.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#f3f3f3] border-t border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
              <span>04 / Get in Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900">
              Book A Call &amp; Connect.
            </h2>
          </div>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Actively seeking Software Engineering Intern roles. Feel free to send an inquiry or message directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-zinc-100 border border-zinc-200">
                  <Mail className="w-5 h-5 text-zinc-900" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-zinc-900" />
                      <span className="font-semibold text-zinc-900">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                Direct Email
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-lg font-medium text-zinc-900 hover:text-black transition-colors font-mono"
              >
                {personal.email}
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-zinc-100 border border-zinc-200 shrink-0">
                  <MapPin className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
                    Location &amp; Work Eligibility
                  </p>
                  <p className="text-sm font-medium text-zinc-800">
                    {personal.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-zinc-100">
                <div className="p-3 rounded-2xl bg-zinc-100 border border-zinc-200 shrink-0">
                  <Sparkles className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
                    Internship Status
                  </p>
                  <p className="text-sm font-semibold text-zinc-900">
                    {personal.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 hover:text-black transition-all text-sm font-medium shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 hover:text-black transition-all text-sm font-medium shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm">
            <h3 className="text-2xl font-normal text-zinc-900 mb-2">Send a Direct Inquiry</h3>
            <p className="text-xs text-zinc-500 mb-8 font-mono">
              Powered by Next.js App Router API Route with server-side validation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Miller"
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-300 focus:border-zinc-900 focus:bg-white focus:outline-none text-sm text-zinc-900 placeholder-zinc-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-300 focus:border-zinc-900 focus:bg-white focus:outline-none text-sm text-zinc-900 placeholder-zinc-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship opportunity / Project chat"
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-300 focus:border-zinc-900 focus:bg-white focus:outline-none text-sm text-zinc-900 placeholder-zinc-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Michael, we came across your portfolio and would like to invite you for an interview..."
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-300 focus:border-zinc-900 focus:bg-white focus:outline-none text-sm text-zinc-900 placeholder-zinc-400 transition-colors resize-none"
                />
              </div>

              {/* Status alerts */}
              {status === "success" && (
                <div className="p-4 rounded-2xl bg-zinc-900 text-white text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-black text-white font-medium text-sm transition-all shadow-md disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
