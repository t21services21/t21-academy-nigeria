"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, GraduationCap, Send } from "lucide-react";

const pathways = [
  "Software & AI Engineering",
  "Full Stack Web Development",
  "Data Science & Analytics",
  "Cybersecurity & IT Support",
  "Virtual Assistance & Remote Work",
  "Customer Service & BPO",
  "Digital Creative & Media",
  "Healthcare Administration",
];

export default function ApplyPage() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", location: "", pathway: "",
    experience: "", message: "", hearAbout: "",
  });
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
        body: JSON.stringify({ ...form, type: "application" }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ fullName: "", email: "", phone: "", location: "", pathway: "", experience: "", message: "", hearAbout: "" });
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
      <section className="bg-black pt-10 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/6 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mb-4 mx-auto w-fit">
            <GraduationCap className="w-4 h-4" /> Apply Now
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Start Your Journey with{" "}
            <span className="text-gold">T21 Academy Nigeria</span>
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Fill in the form below and our team will review your application and contact you within 2 working days.
          </p>
        </div>
      </section>

      <section className="py-12 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info Panel */}
            <div className="space-y-5">
              <div className="glass-card !p-5">
                <h3 className="font-bold text-white mb-4 font-playfair">What Happens Next</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Submit Application", desc: "Complete the form with your details and pathway choice." },
                    { step: "2", title: "Team Reviews", desc: "Our team reviews your application within 2 working days." },
                    { step: "3", title: "We Contact You", desc: "We reach out via phone or email to discuss next steps." },
                    { step: "4", title: "Enrol & Begin", desc: "Complete enrolment, pay fees, and start your training journey." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <div className="step-number w-7 h-7 text-xs flex-shrink-0">{s.step}</div>
                      <div>
                        <p className="text-white font-semibold text-sm">{s.title}</p>
                        <p className="text-gray-400 text-xs">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card">
                <h4 className="font-bold text-white mb-3 font-playfair text-sm">Available Pathways</h4>
                <ul className="space-y-2">
                  {pathways.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-primary-gold flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card">
                <h4 className="font-bold text-white mb-2 font-playfair text-sm">Need Help?</h4>
                <p className="text-gray-400 text-xs mb-3">Speak to our team directly</p>
                <a href="tel:+2348163775394" className="text-primary-gold text-sm font-semibold block hover:underline">
                  +234 816 377 5394
                </a>
                <a href="tel:+2349018095124" className="text-primary-gold text-sm font-semibold block hover:underline">
                  +234 901 809 5124
                </a>
                <a href="mailto:admin@t21services.com.ng" className="text-primary-gold text-xs block mt-2 hover:underline">
                  admin@t21services.com.ng
                </a>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="glass-card">
                <h3 className="font-bold text-white mb-6 font-playfair text-lg">Application Form</h3>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary-gold mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2 font-playfair">Application Received!</h4>
                    <p className="text-gray-400 mb-6">
                      Thank you for applying. Our team will review your application and contact you within 2 working days.
                    </p>
                    <Link href="/pathways" className="btn-gold inline-flex items-center gap-2">
                      Explore Career Pathways <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Full Name *</label>
                        <input
                          type="text" name="fullName" required value={form.fullName} onChange={handleChange}
                          className="w-full bg-white/5 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Email Address *</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handleChange}
                          className="w-full bg-white/5 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Phone Number *</label>
                        <input
                          type="tel" name="phone" required value={form.phone} onChange={handleChange}
                          className="w-full bg-white/5 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Location / State *</label>
                        <input
                          type="text" name="location" required value={form.location} onChange={handleChange}
                          className="w-full bg-white/5 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                          placeholder="e.g. Abuja, Lagos, Ekiti"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Preferred Career Pathway *</label>
                      <select
                        name="pathway" required value={form.pathway} onChange={handleChange}
                        className="w-full bg-neutral-900 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                      >
                        <option value="">Select a pathway...</option>
                        {pathways.map((p) => <option key={p} value={p}>{p}</option>)}
                        <option value="Not sure yet">Not sure yet — need guidance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Current Education / Experience Level</label>
                      <select
                        name="experience" value={form.experience} onChange={handleChange}
                        className="w-full bg-neutral-900 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                      >
                        <option value="">Select level...</option>
                        <option value="Secondary school leaver">Secondary school leaver (WAEC/NECO)</option>
                        <option value="OND / HND student or graduate">OND / HND student or graduate</option>
                        <option value="University student or graduate">University student or graduate</option>
                        <option value="Working professional">Working professional looking to upskill</option>
                        <option value="Career changer">Career changer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">How Did You Hear About Us?</label>
                      <select
                        name="hearAbout" value={form.hearAbout} onChange={handleChange}
                        className="w-full bg-neutral-900 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition"
                      >
                        <option value="">Select...</option>
                        <option value="Social media">Social media</option>
                        <option value="Friend or colleague">Friend or colleague</option>
                        <option value="Government programme">Government programme</option>
                        <option value="Search engine">Search engine (Google etc.)</option>
                        <option value="T21 Consultancy website">T21 Consultancy website</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Why Do You Want to Train at T21 Academy?</label>
                      <textarea
                        name="message" rows={4} value={form.message} onChange={handleChange}
                        className="w-full bg-white/5 border border-primary-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-gold/60 transition resize-none"
                        placeholder="Tell us about your goals, what you hope to achieve, and why you want to train with us..."
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please email us directly at admin@t21services.com.ng or call +234 816 377 5394.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-gold w-full justify-center inline-flex items-center gap-2 text-base !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Submitting..." : (
                        <><Send className="w-4 h-4" /> Submit Application</>
                      )}
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree that T21 Academy Nigeria may contact you regarding your application.
                    </p>
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
