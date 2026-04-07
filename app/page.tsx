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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="max-w-4xl">
            <div className="badge mb-5">
              <GraduationCap className="w-4 h-4" />
              T21 Academy Nigeria &bull; Authorised Certiport Examination Centre
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <p className="text-primary-gold text-sm font-semibold tracking-wider uppercase">
                Part of T21 Global Group
              </p>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <p className="text-gray-400 text-xs tracking-wide uppercase">
                UK &amp; Nigeria Operations &bull; Liverpool &bull; Abuja &bull; Ekiti
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-playfair">
              Train, Get Certified, and{" "}
              <span className="text-gold">Find Real Work</span>{" "}
              Across Nigeria and Internationally
            </h1>
            <p className="text-lg text-gray-300 mb-3 leading-relaxed max-w-3xl">
              T21 Academy Nigeria delivers practical digital, technical, and professional training programmes to prepare people for employment, remote work, and international opportunities.
            </p>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed border-l-2 border-primary-gold/40 pl-4 max-w-2xl">
              We have physical training centres in Abuja and Ekiti, a proven record of delivering government programmes, and we are an authorised Certiport examination centre.
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
              "Physical Training Centres in Abuja and Ekiti",
              "UK Operations (Liverpool) and Nigeria",
              "TQUK Registered Training Provider",
              "NHS-Aligned Healthcare Training",
              "Job Placement and Employment Support",
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
                About{" "}
                <span className="text-gold">T21 Academy Nigeria</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  T21 Academy Nigeria is the training and development arm of{" "}
                  <strong className="text-primary-gold">T21 Global Group</strong>. All our training is practical and hands-on. Learners work on real tasks and real tools from day one.
                </p>
                <p>
                  Students build working systems, complete live projects, and finish with a portfolio of documented work they can show to employers.
                </p>
                <p>
                  We offer both <strong className="text-white">physical training</strong> at our fully equipped centres in Abuja and
                  Ekiti, and <strong className="text-white">virtual/online training</strong> for candidates across Nigeria and beyond.
                </p>
                <p>
                  As an <strong className="text-white">Authorised Certiport Examination Centre</strong>, candidates train and
                  sit internationally recognised exams on-site. Delivered {" "}
                  <strong className="text-white">3MTT</strong>, <strong className="text-white">DeepTech</strong>, and{" "}
                  <strong className="text-white">TVET</strong> with government-validated outcomes.
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
                { icon: Laptop, title: "Practical and Hands-On", desc: "Every session is practical. Students work on real systems, use real tools, and solve real problems throughout the programme." },
                { icon: Monitor, title: "Physical & Virtual Training", desc: "Train at our physical centres in Abuja or Ekiti, or join virtually from anywhere in Nigeria and beyond." },
                { icon: Award, title: "Certiport Exam Centre", desc: "Train and sit internationally recognised Certiport exams on-site. MOS, IC3, Adobe, Python Institute and more." },
                { icon: Briefcase, title: "Work References & Portfolio", desc: "Graduate with real projects, documented work experience, and references to support your job applications." },
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

      {/* UK CONNECTION */}
      <section className="py-10 bg-neutral-950 border-y border-primary-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Our UK Connection</p>
              <h3 className="text-lg font-bold text-white font-playfair mb-1">
                T21 Academy Nigeria is part of <span className="text-gold">T21 Global Group</span>
              </h3>
              <p className="text-gray-400 text-sm max-w-xl">
                Our parent group operates in the United Kingdom from Liverpool. This gives our Nigerian graduates access to
                internationally recognised certifications, UK-aligned training standards, and international employment pathways.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 flex-shrink-0">
              {[
                { label: "TQUK Registered Centre", sub: "UK Awarding Body" },
                { label: "NHS-Aligned Training", sub: "Healthcare Administration" },
                { label: "Certiport Authorised", sub: "International Exams" },
                { label: "Liverpool, UK Office", sub: "64 Upper Parliament St" },
              ].map((item) => (
                <div key={item.label} className="glass-card !p-3 text-center min-w-[130px]">
                  <p className="text-white font-semibold text-xs">{item.label}</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE TRAIN */}
      <section className="py-16 bg-black border-y border-primary-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="badge mb-4 mx-auto w-fit">
              <Laptop className="w-4 h-4" /> How We Train
            </div>
            <h2 className="section-title mx-auto">
              How We{" "}
              <span className="text-gold">Deliver Training</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Every programme at T21 Academy is practical. Students use the same tools, systems, and working methods used in real jobs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              {
                icon: Monitor,
                title: "Real System Building",
                desc: "Students build working systems throughout their training, such as websites, databases, and dashboards, using the tools employers actually use.",
              },
              {
                icon: Shield,
                title: "Simulation & Live Environments",
                desc: "Students work in environments that reflect real workplaces, using live tools and cloud platforms throughout their training.",
              },
              {
                icon: Users,
                title: "Team Projects & Collaboration",
                desc: "Students work in teams on real tasks, practise professional communication, and build the skills employers look for.",
              },
              {
                icon: Briefcase,
                title: "Portfolio & Work References",
                desc: "Graduate with documented project work, a professional portfolio, and references from T21 Academy to support job applications.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card text-center">
                <div className="w-12 h-12 rounded-full bg-primary-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-gold" />
                </div>
                <h4 className="font-bold text-white mb-2 font-playfair text-sm">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="glass-card max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold mb-3 font-playfair flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary-gold" /> Physical Training
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Train in person at our fully equipped centres in <strong className="text-white">Abuja (CBD)</strong> and{" "}
                  <strong className="text-white">Ado-Ekiti</strong>. Access 100+ laptops, 24/7 power, and high-speed internet
                  in a structured, supervised environment.
                </p>
                <ul className="space-y-1">
                  {["Supervised lab sessions", "Face-to-face facilitation", "On-site Certiport exams", "Peer learning environment"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-primary-gold flex-shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3 font-playfair flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary-gold" /> Virtual / Online Training
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Join training remotely from anywhere in Nigeria or internationally. Live sessions, structured modules,
                  and the same practical outcomes, without needing to relocate.
                </p>
                <ul className="space-y-1">
                  {["Live virtual sessions", "Remote access to course materials", "Online project submissions", "Virtual team collaboration"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-primary-gold flex-shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
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
              A clear, step-by-step process from application through to employment.
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
                { step: "05", icon: Briefcase, title: "Find Work", desc: "Get support accessing jobs, remote work, freelancing, BPO placements, or government programme roles." },
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
              Apply Now <ArrowRight className="w-4 h-4" />
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
              Our Training Facilities
            </h2>
            <p className="section-subtitle mx-auto text-center">
              T21 Academy has physical training centres with the equipment and facilities needed to run structured programmes properly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Laptop, title: "100+ Laptops & Devices", desc: "Fully equipped computer lab with 100+ laptops available for hands-on training sessions." },
              { icon: Zap, title: "24/7 Electricity", desc: "Uninterrupted power supply ensuring training is never disrupted by power outages." },
              { icon: Wifi, title: "High-Speed Internet", desc: "Stable, high-speed internet connection supporting online tools, cloud platforms, and remote collaboration." },
              { icon: Building2, title: "Training Centres", desc: "Dedicated training facilities in Abuja (CBD) and Ado-Ekiti, with the capacity to expand to additional locations." },
              { icon: Users, title: "Qualified Trainers & Support", desc: "Experienced facilitators, technical support staff, and programme coordinators." },
              { icon: Monitor, title: "Structured Classrooms", desc: "Classrooms set up for structured learning with timetabled sessions, assessments, and progress tracking." },
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
                Where We{" "}
                <span className="text-gold">Deliver Training</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                T21 Academy is not limited to one location. We deliver training across Nigeria and have the capacity to run programmes in multiple states and through government partnerships.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Training Across Nigeria",
                    items: ["Programmes delivered across Nigerian states", "Government and institutional training", "State-level partnership delivery"],
                  },
                  {
                    title: "On-Site and Mobile Training",
                    items: ["Portable training setups available", "On-site delivery at client locations", "Community and campus programmes"],
                  },
                  {
                    title: "International Reach",
                    items: ["Programmes extending into other African countries", "Delivery through international partnerships", "Internationally recognised certifications"],
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
                    { city: "Abuja Office", role: "National Office and Government Programmes", address: "Plot No 70, Kebbi House, Suite D5, 3rd Floor, Kur Mohammed Way, CBD, Abuja, FCT" },
                    { city: "Ekiti Office", role: "Training Centre", address: "68 Lino Building, Opposite Crunchies, Similoluwa, Ado-Ekiti, Ekiti State" },
                    { city: "UK Office", role: "International Office", address: "64 Upper Parliament Street, Liverpool, L8 7LF, United Kingdom" },
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
              Local Training,{" "}
              <span className="text-gold">International Opportunities</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              T21 Academy trains people for employment in Nigeria and for international remote work opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Briefcase, title: "Local Employment", desc: "Placement into Nigerian companies, government agencies, and institutions." },
              { icon: Globe, title: "Remote Work", desc: "Remote employment with international companies through our BPO and outsourcing partnerships." },
              { icon: TrendingUp, title: "Digital Economy", desc: "Freelancing, digital services, and online platform income opportunities." },
              { icon: Star, title: "International Connections", desc: "Links to UK programmes, international employers, and opportunities beyond Nigeria." },
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
            <h2 className="section-title mx-auto">Our Track Record</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { stat: "5,000+", label: "Professionals Trained", sub: "Across multiple cohorts and programmes" },
              { stat: "20+", label: "Government Engagements", sub: "Federal and state level partnerships" },
              { stat: "3+", label: "National Programmes", sub: "3MTT, DeepTech, TVET delivered" },
              { stat: "6+", label: "Training Areas", sub: "Tech, healthcare, creative, administration and more" },
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
                T21 Academy delivers training programmes across Nigeria and Africa. We work with government agencies, NGOs, and development organisations to design and run structured training programmes.
              </p>
              <ul className="space-y-2 mb-6">
                {["100+ laptop training capacity", "Proven national programme delivery", "Multi-location delivery", "Government-validated track record"].map((i) => (
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
                {["Hire trained candidates directly", "Access our remote working graduates", "Outsource operations through our BPO network", "Commission tailored training for your organisation"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-primary-gold flex-shrink-0" />{i}
                  </li>
                ))}
              </ul>
              <Link href="/partners#employers" className="btn-gold text-sm !py-2 inline-flex items-center gap-2">
                Find Out More <ArrowRight className="w-4 h-4" />
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
            Ready to Get Started with{" "}
            <span className="text-gold">T21 Academy Nigeria?</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Whether you are looking to train, get certified, find work, or work with us as a partner, get in touch and our team will help you take the next step.
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
