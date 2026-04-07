import Link from "next/link";
import {
  ArrowRight, CheckCircle, Briefcase, Globe, Users,
  Landmark, Building2, TrendingUp, Shield, Target, Mail, Phone,
} from "lucide-react";

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-10 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/6 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mb-5 mx-auto w-fit">
            <Landmark className="w-4 h-4" /> Partners & Funders
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 font-playfair">
            Partner With{" "}
            <span className="text-gold">T21 Academy Nigeria</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            T21 Academy delivers training programmes across Nigeria and works with governments, development organisations, NGOs, corporate sponsors, and international employers.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">
              Why Partner With T21 Academy?
            </h2>
            <p className="section-subtitle mx-auto text-center">
              We have the facilities, experience, and track record that development partners and funders need when commissioning training programmes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Building2, title: "100+ Laptop Capacity", desc: "Physical training infrastructure with over 100 laptops, 24/7 electricity, and high-speed internet at our centres." },
              { icon: Shield, title: "Proven Government Delivery", desc: "Delivered 3MTT, DeepTech, TVET, and NIPSS programmes. Trusted by federal and state government agencies." },
              { icon: Globe, title: "Multi-Location Delivery", desc: "We deliver training programmes across multiple Nigerian states and can extend into other African countries." },
              { icon: Target, title: "Certiport Authorised Centre", desc: "Officially authorised to deliver Certiport certification exams, which are internationally recognised and respected by employers worldwide." },
              { icon: TrendingUp, title: "5,000+ Trained", desc: "A documented record of training and certifying over 5,000 people across multiple sectors and programmes." },
              { icon: Users, title: "UK Operations", desc: "Connected to T21's UK operations, which opens up international certification pathways and cross-border employment opportunities for graduates." },
            ].map((item) => (
              <div key={item.title} className="glass-card">
                <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-gold" />
                </div>
                <h4 className="font-bold text-white mb-2 font-playfair text-sm">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Governments & NGOs */}
      <section id="government" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge mb-4">
                <Landmark className="w-4 h-4" /> Government & Development Organisations
              </div>
              <h2 className="section-title">
                Working with{" "}
                <span className="text-gold">Government and Public Sector</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                T21 Academy has a proven track record of working with federal and state government agencies to deliver
                large-scale workforce training programmes. We understand government procurement, reporting requirements, and
                programme governance.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Ability to deliver programmes across Nigerian states",
                  "Government-validated delivery experience (3MTT, TVET, DeepTech)",
                  "Structured reporting, assessment, and governance processes",
                  "Authorised Certiport examination centre",
                  "Experienced programme management and coordination team",
                  "Capacity to train large cohorts across multiple locations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-primary-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="glass-card">
                <p className="text-xs text-gray-500 font-semibold uppercase mb-3">Programmes Delivered</p>
                <div className="flex flex-wrap gap-2">
                  {["3MTT", "DeepTech", "TVET", "NIPSS", "World Bank IDEAS", "Creative Economy"].map((p) => (
                    <span key={p} className="badge text-xs">{p}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="glass-card">
                <h4 className="font-bold text-white mb-4 font-playfair">What We Can Deliver for You</h4>
                <div className="space-y-3">
                  {[
                    { title: "Large Cohort Training", desc: "Train 100 to 1,000+ participants across a single programme with structured coordination." },
                    { title: "State-Level Delivery", desc: "Deliver across Nigerian states using our mobile training capacity and partner network." },
                    { title: "Certification Integration", desc: "Include Certiport or T21 certification as part of your programme deliverables." },
                    { title: "Post-Training Support", desc: "Connect trained graduates into employment, BPO work, or government programme placements." },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-primary-gold/30 pl-4">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Training */}
      <section id="sponsor" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto w-fit">
              <TrendingUp className="w-4 h-4" /> Corporate & Development Sponsors
            </div>
            <h2 className="section-title mx-auto">
              Sponsor{" "}
              <span className="text-gold">Training Programmes</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Sponsoring training at T21 Academy Nigeria helps people in Nigeria gain real skills and find meaningful work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Individual Sponsorship",
                desc: "Sponsor one or more candidates through a full training pathway, covering fees, materials, and certification.",
                includes: ["Full pathway training fees", "Certiport exam coverage", "Certificate on completion", "Named sponsorship recognition"],
              },
              {
                title: "Cohort Sponsorship",
                desc: "Sponsor a full cohort of 10–50 candidates, with reporting on outcomes, placements, and certifications.",
                includes: ["10–50 candidate cohort", "Structured programme management", "Impact reporting", "Organisation branding on programme"],
              },
              {
                title: "Infrastructure Partnership",
                desc: "Contribute to expanding our training facilities by funding new laptops, equipment, or classroom development.",
                includes: ["Equipment and lab expansion", "Named infrastructure contribution", "Multi-year impact", "Recognition across our platforms"],
              },
            ].map((tier) => (
              <div key={tier.title} className="glass-card">
                <h4 className="font-bold text-white mb-2 font-playfair">{tier.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{tier.desc}</p>
                <ul className="space-y-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-primary-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 text-base !px-8 !py-4">
              Discuss Sponsorship <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section id="employers" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge mb-4">
                <Briefcase className="w-4 h-4" /> For Employers
              </div>
              <h2 className="section-title">
                Access Trained,{" "}
                <span className="text-gold">Certified Talent</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                T21 Academy graduates are trained on real tools, assessed against real standards, and in many
                cases hold Certiport-recognised international certifications. Hire directly, outsource operations,
                or build a remote workforce pipeline with us.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Users, title: "Hire Trained Candidates", desc: "Access our pool of trained, screened graduates across all six career pathways." },
                  { icon: Globe, title: "Remote Workforce", desc: "Build a remote operations team through our BPO network, with candidates who are trained, supervised, and managed by T21." },
                  { icon: Building2, title: "Outsource Operations", desc: "Outsource customer support, back-office, data entry, and digital operations to our trained teams." },
                  { icon: Target, title: "Custom Training", desc: "Commission bespoke training programmes tailored to your specific job roles and standards." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
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
            <div className="glass-card">
              <h4 className="font-bold text-white mb-5 font-playfair">Employer Enquiry</h4>
              <p className="text-gray-400 text-sm mb-5">
                Tell us what you need and our team will respond within 24 hours with a tailored proposal.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary-gold flex-shrink-0" />
                  <a href="mailto:admin@t21services.com.ng" className="text-gray-300 hover:text-primary-gold transition text-sm">
                    admin@t21services.com.ng
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary-gold flex-shrink-0" />
                  <a href="tel:+2348163775394" className="text-gray-300 hover:text-primary-gold transition text-sm">
                    +234 816 377 5394
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary-gold flex-shrink-0" />
                  <a href="tel:+2349018095124" className="text-gray-300 hover:text-primary-gold transition text-sm">
                    +234 901 809 5124
                  </a>
                </div>
              </div>
              <Link href="/contact" className="btn-gold w-full justify-center inline-flex items-center gap-2">
                Send Employer Enquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 font-playfair">
            Ready to Partner With T21 Academy Nigeria?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Whether you are a government agency, development funder, corporate sponsor, or employer, we have a partnership model that suits your needs. Contact us to discuss.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 text-base !px-8 !py-4">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-gold-outline inline-flex items-center gap-2 text-base !px-8 !py-4">
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
