import Link from "next/link";
import {
  ArrowRight, CheckCircle, Briefcase, Globe, Users,
  ChevronRight, Target, TrendingUp, GraduationCap, Building2,
} from "lucide-react";

export default function ProgrammesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-10 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mb-5 mx-auto w-fit">
            <Building2 className="w-4 h-4" /> Training Programmes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 font-playfair">
            Our Training Experience &{" "}
            <span className="text-gold">Our Programme Experience</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            T21 Academy Nigeria has delivered structured training across national government programmes, institutional partnerships, and sector-specific cohorts, with ongoing support to help graduates find work after completing their training.
          </p>
        </div>
      </section>

      {/* Government Programmes */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto w-fit">
              <Target className="w-4 h-4" /> Programme Delivery
            </div>
            <h2 className="section-title mx-auto">
              Government & National Programme Experience
            </h2>
            <p className="section-subtitle mx-auto text-center">
              T21 Academy has been selected to deliver multiple national workforce and digital skills programmes across Nigeria.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "3MTT (3 Million Technical Talent)",
                ministry: "Federal Ministry of Communications & Digital Economy",
                description: "T21 Academy participated in the Federal Government's 3MTT initiative to develop 3 million technical talent across Nigeria. We delivered structured digital skills training across multiple cohorts.",
                delivered: ["Digital skills training", "Technical talent development", "Programme coordination", "Trainee assessment"],
              },
              {
                title: "Deep Tech Training Programme",
                ministry: "Government Technology Initiative",
                description: "Delivery of advanced technology training covering AI, engineering, and emerging technology skills for the Nigerian workforce and youth population.",
                delivered: ["AI & Engineering training", "Advanced technology curriculum", "Cohort management", "Certification pathways"],
              },
              {
                title: "TVET: Technical and Vocational Education",
                ministry: "Federal Ministry of Education",
                description: "Support for the Technical and Vocational Education and Training reform agenda, delivering structured vocational and technical skills training aligned to national standards.",
                delivered: ["Vocational skills training", "Technical education delivery", "Curriculum alignment", "Trainer development"],
              },
              {
                title: "NIPSS Leadership Programme",
                ministry: "National Institute for Policy and Strategic Studies",
                description: "Partnership with NIPSS to deliver digital and institutional capacity building programmes for senior government officials and public sector leaders.",
                delivered: ["Senior leadership training", "Digital capacity building", "Institutional systems", "Policy and governance"],
              },
              {
                title: "Creative Media Programmes",
                ministry: "Creative Economy & Digital Skills",
                description: "Structured training in digital creative skills, media production, content creation, and design for the Nigerian creative economy.",
                delivered: ["Graphic design training", "Video production", "Content creation", "Digital media skills"],
              },
              {
                title: "World Bank IDEAS Project",
                ministry: "Federal Government / World Bank Partnership",
                description: "Engagement with World Bank-supported education and institutional development initiatives to improve training infrastructure and outcomes.",
                delivered: ["Institutional development", "Training systems improvement", "Capacity building", "Education programme support"],
              },
            ].map((prog) => (
              <div key={prog.title} className="glass-card">
                <h3 className="font-bold text-white mb-1 font-playfair text-sm">{prog.title}</h3>
                <p className="text-primary-gold text-xs mb-3">{prog.ministry}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{prog.description}</p>
                <ul className="space-y-1.5">
                  {prog.delivered.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-primary-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Deployment */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <div className="badge mb-4">
                <TrendingUp className="w-4 h-4" /> Employment and Placement
              </div>
              <h2 className="section-title">
                From Training to{" "}
                <span className="text-gold">Real Opportunities</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Training alone is not enough. T21 Academy actively supports graduates in finding employment, accessing remote work, and gaining project-based experience after completing their training.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Briefcase,
                    title: "Job Placement Pathways",
                    desc: "We maintain active relationships with employers across the private sector, NGOs, and government agencies to place trained graduates directly into roles.",
                  },
                  {
                    icon: Globe,
                    title: "Remote Work Opportunities",
                    desc: "Through our BPO and outsourcing network, trained candidates can access remote work contracts with international companies without needing to relocate.",
                  },
                  {
                    icon: Building2,
                    title: "BPO and Outsourcing Work",
                    desc: "T21 operates a business process outsourcing model where trained graduates handle back-office, customer support, and digital operations for clients.",
                  },
                  {
                    icon: Target,
                    title: "Project-Based Experience",
                    desc: "Candidates work on real client projects during training and post-training, building a verifiable portfolio of work and professional experience.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="glass-card">
                <h4 className="text-white font-bold mb-4 font-playfair flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-gold" /> Deployment Track Record
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: "5,000+", label: "Trained Professionals" },
                    { stat: "20+", label: "Government Engagements" },
                    { stat: "6+", label: "Training Sectors" },
                    { stat: "3+", label: "National Programmes" },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="metric-number text-2xl">{m.stat}</div>
                      <p className="text-gray-400 text-xs mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card">
                <h4 className="text-white font-bold mb-4 font-playfair">UK Integration</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  T21 Academy Nigeria is integrated with T21&apos;s UK operations. This creates
                  international pathways for trained Nigerian candidates, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "UK-aligned certification training",
                    "Healthcare administration pathways (NHS-connected)",
                    "Remote work with UK-based clients",
                    "International workforce pipeline access",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="w-4 h-4 text-primary-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <Link href="/apply" className="btn-gold inline-flex items-center gap-2 w-full justify-center">
                  Join Our Next Cohort <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 font-playfair">
            Government Agency or Institutional Partner?
          </h2>
          <p className="text-gray-400 mb-6">
            If you are looking to commission workforce training programmes, T21 Academy has the
            infrastructure, credentials, and experience to deliver at scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/partners" className="btn-gold inline-flex items-center gap-2">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-gold-outline">
              <GraduationCap className="w-4 h-4 inline mr-1" /> Request a Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
