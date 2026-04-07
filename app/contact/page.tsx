"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "general" }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-black py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mb-4 mx-auto w-fit">
            <Mail className="w-4 h-4" /> Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Get in Touch with{" "}
            <span className="text-gold">T21 Academy Nigeria</span>
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Whether you want to apply, partner, sponsor, or simply ask a question — our team is ready to respond.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left info */}
            <div className="space-y-5">
              {/* Direct contact */}
              <div className="glass-card">
                <h3 className="font-bold text-white mb-5 font-playfair">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Email</p>
                      <a href="mailto:admin@t21services.com.ng" className="text-gray-200 hover:text-primary-gold transition text-sm">
                        admin@t21services.com.ng
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-primary-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Phone</p>
                      <a href="tel:+2348163775394" className="text-gray-200 hover:text-primary-gold transition text-sm block">
                        +234 816 377 5394
                      </a>
                      <a href="tel:+2349018095124" className="text-gray-200 hover:text-primary-gold transition text-sm block">
                        +234 901 809 5124
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-primary-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Website</p>
                      <a href="https://www.t21services.com.ng" className="text-primary-gold text-sm hover:underline">
                        www.t21services.com.ng
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              {[
                {
                  city: "Abuja Office",
                  role: "Government Coordination & National HQ",
                  address: "Plot No 70, Kebbi House, Suite D5, 3rd Floor, Kur Mohammed Way, Central Business District, Abuja, Federal Capital Territory (FCT)",
                },
                {
                  city: "Ekiti Office",
                  role: "Primary Training Hub",
                  address: "68 Lino Building, Opposite Crunchies, Similoluwa, Ado-Ekiti, Ekiti State",
                },
                {
                  city: "UK Office",
                  role: "International Certification & Partnerships",
                  address: "64 Upper Parliament Street, Liverpool, L8 7LF, United Kingdom",
                },
              ].map((office) => (
                <div key={office.city} className="glass-card !py-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">{office.city}</h4>
                      <p className="text-primary-gold text-xs mb-1">{office.role}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{office.address}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="glass-card">
                <p className="text-xs text-gray-500 mb-3">Want to apply for training instead?</p>
                <Link href="/apply" className="btn-gold w-full justify-center inline-flex items-center gap-2 text-sm !py-2.5">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card">
                <h3 className="font-bold text-white mb-6 font-playfair text-lg">Send Us a Message</h3>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary-gold mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2 font-playfair">Message Sent!</h4>
                    <p className="text-gray-400 mb-6">
                      Thank you for reaching out. Our team will respond within 24 hours.
                    </p>
                    <Link href="/" className="btn-gold inline-flex items-center gap-2">
                      Back to Home <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Your Name *</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          className="w-full bg-white/5 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Email *</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handleChange}
                          className="w-full bg-white/5 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Phone</label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full bg-white/5 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Enquiry Type</label>
                        <select
                          name="subject" value={form.subject} onChange={handleChange}
                          className="w-full bg-neutral-900 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                        >
                          <option value="">Select type...</option>
                          <option value="Training enquiry">Training enquiry</option>
                          <option value="Certiport exam booking">Certiport exam booking</option>
                          <option value="Partnership / government">Partnership / government</option>
                          <option value="Sponsorship">Sponsorship</option>
                          <option value="Employer / talent access">Employer / talent access</option>
                          <option value="General enquiry">General enquiry</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Message *</label>
                      <textarea
                        name="message" required rows={5} value={form.message} onChange={handleChange}
                        className="w-full bg-white/5 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please email admin@t21services.com.ng or call +234 816 377 5394.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-gold w-full justify-center inline-flex items-center gap-2 text-base !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
