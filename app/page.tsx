import Link from "next/link";
import {
  ArrowRight, Award, BookOpen, Briefcase, Building2, CheckCircle,
  ChevronRight, Globe, Laptop, Landmark, Monitor, Shield, Users,
  Wifi, Zap, GraduationCap, TrendingUp, MapPin, Star, Target,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-black overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(212,175,55,0.07),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="badge mb-5">
              <GraduationCap className="w-4 h-4" />
              T21 Academy Nigeria &bull; Authorised Certiport Examination Centre
            </div>
            <p className="text-primary-gold text-sm font-semibold tracking-wider uppercase mb-3">
              Part of T21 Global Group
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-playfair">
              Train, Get Certified, and{" "}
              <span className="text-gold">Access Real Opportunities</span>{" "}
              — Across Nigeria and Globally
            </h1>
            <p className="text-lg text-gray-300 mb-3 leading-relaxed max-w-3xl">
              T21 Academy Nigeria delivers structured digital, technical, and workforce training programmes designed to prepare talent for employment, remote work, and international opportunities.
            </p>
            <p className="text-sm text-gray-400 mb-3 leading-relaxed border-l-2 border-primary-gold/40 pl-4 max-w-2xl">
              Built on real infrastructure, proven government programme delivery, and international certification pathways.
            </p>
            <p className="text-sm text-primary-gold/80 mb-8 font-medium">
              Designed for scalable deployment across Nigeria and Africa.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/apply" className="btn-gold inline-flex items-center gap-2">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pathways" className="btn-gold-outline inline-flex items-center gap-2">
                Explore Career Pathways <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/partners" className="btn-gold-outline inline-flex items-center gap-2">
                Partner With Us
              </Link>
              <Link href="/partners#sponsor" className="btn-gold-outline inline-flex items-center gap-2">
                Sponsor Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="bg-neutral-950 border-y border-primary-gold/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { number: "5,000+", label: "Professionals Trained" },
              { number: "100+", label: "Laptops & Training Systems" },
              { number: "24/7", label: "Electricity & Stable Internet" },
              { number: "20+", label: "Government Engagements" },
              { number: "2", label: "Nigeria + UK Training Ecosystem" },
              { number: "Multi", label: "Location Deployment Capability" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col items-center gap-1">
                <span className="metric-number">{m.number}</span>
                <span className="text-gray-400 text-xs leading-tight text-center">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & CREDIBILITY STRIP */}
      <section className="bg-black py-8 border-b border-primary-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6 font-semibold">
            Trusted Infrastructure & Credentials
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Part of T21 Global Group",
              "Government Programme Delivery (3MTT, DeepTech, TVET)",
              "Authorised Certiport Examination Centre",
              "Physical Training Infrastructure",
              "UK + Nigeria Integrated Model",
              "Workforce Pipeline System",
            ].map((item) => (
              <span key={item} className="badge text-xs">
                <CheckCircle className="w-3 h-3" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT T21 ACADEMY */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <div className="badge mb-4">
                <Landmark className="w-4 h-4" /> About T21 Academy Nigeria
              </div>
              <h2 className="section-title">
                A Workforce Infrastructure Platform —{" "}
                <span className="text-gold">Not Just a Training Centre</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  T21 Academy Nigeria is the workforce training and development arm of{" "}
                  <strong className="text-primary-gold">T21 Global Group</strong>. It delivers structured,
                  practical, and scalable training programmes across digital, technical, and operational domains.
                </p>
                <p>
                  The Academy is built to train, certify, and deploy talent into government programmes, private sector roles,
                  remote work opportunities, and international markets.
                </p>
                <p>
                  As an <strong className="text-white">Authorised Certiport Examination Centre</strong>, candidates do not just
                  train with us — they also sit internationally recognised certification exams directly at our centre.
                  This is the complete pipeline: Train → Certify → Deploy.
                </p>
                <p>
                  We have delivered national programmes including <strong className="text-white">3MTT</strong>,{" "}
                  <strong className="text-white">DeepTech</strong>, and <strong className="text-white">TVET</strong>, with
                  proven infrastructure and government-validated delivery experience.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/pathways" className="btn-gold inline-flex items-center gap-2">
                  View Career Pathways <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/certiport" className="btn-gold-outline">Certiport Exams</Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Target, title: "Structured Training", desc: "Practical, hands-on programmes built around real job requirements and industry standards." },
                { icon: Award, title: "Certiport Certified", desc: "Sit internationally recognised exams at our authorised centre. MOS, IC3, Adobe, Python, and more." },
                { icon: TrendingUp, title: "Talent Deployment", desc: "Job placement, remote work pipelines, BPO outsourcing, and government programme deployment." },
                { icon: Globe, title: "Nigeria + International", desc: "Integrated with T21's UK operations — opening cross-border employment and certification pathways." },
              ].map((item) => (
                <div key={item.title} className="glass-card flex items-start gap-4 !py-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING JOURNEY */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge mb-4 mx-auto w-fit">
              <BookOpen className="w-4 h-4" /> The Learning Journey
            </div>
            <h2 className="section-title mx-auto">The T21 Learning Journey</h2>
            <p className="section-subtitle mx-auto text-center">
              A structured, end-to-end pathway from application to real-world deployment.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary-gold/40 to-transparent" />
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", icon: Users, title: "Apply", desc: "Submit your application online or visit any of our offices in Abuja or Ekiti." },
                { step: "02", icon: CheckCircle, title: "Get Selected", desc: "Assessment and selection based on your background, goals, and pathway of interest." },
                { step: "03", icon: Laptop, title: "Train", desc: "Hands-on, practical training with experienced facilitators in a structured environment." },
                { step: "04", icon: Award, title: "Get Certified", desc: "Sit Certiport or T21 certification exams at our authorised examination centre." },
                { step: "05", icon: Briefcase, title: "Deploy", desc: "Access jobs, BPO placements, remote work, freelancing, or government programme roles." },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center relative">
                  <div className="step-number mb-4 text-base w-12 h-12">{item.step}</div>
                  <div className="w-12 h-12 rounded-full bg-primary-gold/10 flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-primary-gold" />
                  </div>
                  <h4 className="font-bold text-white mb-2 font-playfair">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/apply" className="btn-gold inline-flex items-center gap-2">
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge mb-4 mx-auto w-fit">
              <Building2 className="w-4 h-4" /> Infrastructure
            </div>
            <h2 className="section-title mx-auto">
              Real Training Infrastructure —{" "}
              <span className="text-gold">Built for Scale</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              T21 Academy is not a virtual-only provider. We have physical, well-equipped training environments
              with the infrastructure needed to deliver at scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Laptop, title: "100+ Laptops & Devices", desc: "Fully equipped computer lab with 100+ laptops available for hands-on training sessions." },
              { icon: Zap, title: "24/7 Electricity", desc: "Uninterrupted power supply ensuring training is never disrupted by power outages." },
              { icon: Wifi, title: "High-Speed Internet", desc: "Stable, high-speed internet connection supporting online tools, cloud platforms, and remote collaboration." },
              { icon: Building2, title: "Physical Training Hubs", desc: "Dedicated training facilities in Abuja (CBD) and Ado-Ekiti, with multi-location expansion capability." },
              { icon: Users, title: "Qualified Trainers & Support", desc: "Experienced facilitators, technical support staff, and programme coordinators." },
              { icon: Monitor, title: "Structured Learning Environments", desc: "Purpose-built classrooms with structured schedules, assessments, and outcome tracking." },
            ].map((item) => (
              <div key={item.title} className="glass-card">
                <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-gold" />
                </div>
                <h4 className="font-bold text-white mb-2 font-playfair">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCALABLE DEPLOYMENT */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <div className="badge mb-4">
                <Globe className="w-4 h-4" /> Deployment Capability
              </div>
              <h2 className="section-title">
                Train Anywhere.{" "}
                <span className="text-gold">Deploy Everywhere.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                T21 Academy is not limited to a single location. Our infrastructure and delivery systems
                allow us to deploy training programmes across Nigeria and into African markets.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Nationwide Deployment",
                    items: ["Programmes across Nigerian states", "Government and institutional training", "State-level partnership delivery"],
                  },
                  {
                    title: "Mobile Training Infrastructure",
                    items: ["Portable training setups", "On-site delivery at client locations", "Community and campus deployment"],
                  },
                  {
                    title: "Pan-African Expansion",
                    items: ["Expansion capability across Africa", "Partnership-driven delivery model", "International certification pathways"],
                  },
                ].map((section) => (
                  <div key={section.title}>
                    <h4 className="text-white font-bold mb-2 font-playfair text-sm">{section.title}</h4>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                          <ChevronRight className="w-4 h-4 text-primary-gold flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-card">
                <h4 className="text-white font-bold mb-4 font-playfair flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-gold" /> Our Locations
                </h4>
                <div className="space-y-4">
                  {[
                    { city: "Abuja Office", role: "Government Coordination & National HQ", address: "Plot No 70, Kebbi House, Suite D5, 3rd Floor, Kur Mohammed Way, CBD, Abuja, FCT" },
                    { city: "Ekiti Office", role: "Primary Training Hub", address: "68 Lino Building, Opposite Crunchies, Similoluwa, Ado-Ekiti, Ekiti State" },
                    { city: "UK Office", role: "International Certification & Partnerships", address: "64 Upper Parliament Street, Liverpool, L8 7LF, United Kingdom" },
                  ].map((loc) => (
                    <div key={loc.city} className="border-l-2 border-primary-gold/30 pl-4">
                      <p className="text-white font-semibold text-sm">{loc.city}</p>
                      <p className="text-primary-gold text-xs mb-1">{loc.role}</p>
                      <p className="text-gray-400 text-xs">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL OPPORTUNITY */}
      <section className="py-12 bg-neutral-900 border-y border-primary-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title mx-auto">
              Built for Local Impact and{" "}
              <span className="text-gold">Global Opportunities</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              T21 Academy prepares learners not just for Nigeria — but for the global digital economy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Briefcase, title: "Local Employment", desc: "Placement into Nigerian companies, government agencies, and institutions." },
              { icon: Globe, title: "Remote Work", desc: "Remote jobs with international companies through our BPO and outsourcing pipeline." },
              { icon: TrendingUp, title: "Digital Economy", desc: "Freelancing, digital services, and online platform income opportunities." },
              { icon: Star, title: "Cross-Border Pathways", desc: "Connections to UK programmes, international employers, and global workforce pipelines." },
            ].map((item) => (
              <div key={item.title} className="glass-card text-center">
                <div className="w-12 h-12 rounded-full bg-primary-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-gold" />
                </div>
                <h4 className="font-bold text-white mb-2 font-playfair text-sm">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto w-fit">
              <Shield className="w-4 h-4" /> Proven Track Record
            </div>
            <h2 className="section-title mx-auto">Proven Impact at Scale</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { stat: "5,000+", label: "Professionals Trained", sub: "Across multiple cohorts and programmes" },
              { stat: "20+", label: "Government Engagements", sub: "Federal and state level partnerships" },
              { stat: "3+", label: "National Programmes", sub: "3MTT, DeepTech, TVET delivered" },
              { stat: "6+", label: "Training Sectors", sub: "Tech, healthcare, creative, BPO, and more" },
            ].map((item) => (
              <div key={item.label} className="glass-card text-center">
                <div className="metric-number text-4xl mb-2">{item.stat}</div>
                <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="glass-card max-w-4xl mx-auto">
            <h4 className="text-white font-bold mb-4 font-playfair text-center">Our Training Experience</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "3MTT Digital Skills Programme",
                "Deep Tech Training Initiative",
                "TVET National Programmes",
                "Creative Media Programmes",
                "Government Institutional Training",
                "NIPSS Leadership Programme Support",
              ].map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-primary-gold flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOR PARTNERS & FUNDERS CTA */}
      <section className="py-14 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <div className="badge mb-4">
                <Landmark className="w-4 h-4" /> For Partners & Funders
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-playfair">Partner With T21 Academy Nigeria</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                T21 Academy is built to deliver workforce training at scale across Nigeria and Africa. We offer
                infrastructure capacity, proven delivery, and a structured deployment model for government agencies,
                NGOs, and development partners.
              </p>
              <ul className="space-y-2 mb-6">
                {["100+ laptop training capacity", "Proven national programme delivery", "Scalable multi-location deployment", "Government-validated track record"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-primary-gold flex-shrink-0" />{i}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/partners#sponsor" className="btn-gold text-sm !py-2">Sponsor Training</Link>
                <Link href="/partners" className="btn-gold-outline text-sm !py-2">Partner With Us</Link>
                <Link href="/contact" className="btn-gold-outline text-sm !py-2">Request Proposal</Link>
              </div>
            </div>
            <div className="glass-card">
              <div className="badge mb-4">
                <Briefcase className="w-4 h-4" /> For Employers
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-playfair">Access Trained Talent</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Hire pre-screened, trained candidates from T21 Academy. Our graduates have completed structured
                programmes and in many cases hold Certiport-recognised certifications.
              </p>
              <ul className="space-y-2 mb-6">
                {["Hire trained candidates directly", "Access our remote workforce pipeline", "Outsource operations via our BPO network", "Partner for tailored workforce solutions"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-primary-gold flex-shrink-0" />{i}
                  </li>
                ))}
              </ul>
              <Link href="/partners#employers" className="btn-gold text-sm !py-2 inline-flex items-center gap-2">
                Access Our Talent Pool <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mb-5 mx-auto w-fit">
            <GraduationCap className="w-4 h-4" /> Start Today
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Start Your Journey with{" "}
            <span className="text-gold">T21 Academy Nigeria</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Whether you are looking to train, certify, get placed, or partner — T21 Academy Nigeria
            has the infrastructure, credentials, and track record to deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="btn-gold inline-flex items-center gap-2 text-base !px-8 !py-4">
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pathways" className="btn-gold-outline inline-flex items-center gap-2 text-base !px-8 !py-4">
              Explore Career Pathways
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
