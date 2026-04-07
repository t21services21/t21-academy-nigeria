import Link from "next/link";
import {
  Award, CheckCircle, ArrowRight, Shield, BookOpen,
  Monitor, Users, ChevronRight, GraduationCap, Star,
} from "lucide-react";

const exams = [
  {
    category: "Microsoft Office Specialist (MOS)",
    description: "The internationally recognised standard for Microsoft Office proficiency. Confirms practical skills across the Microsoft Office suite.",
    available: ["MOS Word (Associate & Expert)", "MOS Excel (Associate & Expert)", "MOS PowerPoint (Associate)", "MOS Outlook (Associate)", "MOS Access (Associate)", "Microsoft Office Specialist Master"],
  },
  {
    category: "IC3 Digital Literacy",
    description: "An internationally recognised certification for foundational digital skills. Accepted by employers and educational institutions worldwide.",
    available: ["IC3 GS6 Computing Fundamentals", "IC3 GS6 Key Applications", "IC3 GS6 Living Online", "IC3 Digital Literacy Certification (full)"],
  },
  {
    category: "Python Institute",
    description: "Internationally recognised Python programming certifications, from entry-level to associate level.",
    available: ["PCEP — Certified Entry-Level Python Programmer", "PCAP — Certified Associate in Python Programming"],
  },
  {
    category: "Adobe Certified Professional",
    description: "Internationally recognised certification for Adobe creative software used in design, media, and marketing.",
    available: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe InDesign", "Adobe Animate"],
  },
  {
    category: "Autodesk Certified User",
    description: "Certification validating skills in Autodesk design and engineering software.",
    available: ["AutoCAD Certified User", "Autodesk Fusion 360"],
  },
  {
    category: "Entrepreneurship & Small Business (ESB)",
    description: "Certiport's certification for entrepreneurship, business planning, and small business operations.",
    available: ["ESB Certified Entrepreneur", "Business concepts, planning, and launch fundamentals"],
  },
];

export default function CertiportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-10 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/8 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mb-5 mx-auto w-fit">
            <Award className="w-4 h-4" /> Certiport Examination Centre
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 font-playfair">
            T21 Academy Nigeria is an{" "}
            <span className="text-gold">Authorised Certiport Examination Centre</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-6">
            You can sit internationally recognised Certiport certification exams directly at our centre. We train you and then you can take the exam on-site, all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="certiport-badge">Authorised Certiport Testing Centre</span>
            <span className="badge text-xs"><Star className="w-3 h-3" /> Globally Recognised Credentials</span>
            <span className="badge text-xs"><Shield className="w-3 h-3" /> International Certification Standard</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="btn-gold inline-flex items-center gap-2">
              Book Your Exam <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-gold-outline">Enquire About Exams</Link>
          </div>
        </div>
      </section>

      {/* What is Certiport */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5 font-playfair">
                What is <span className="text-gold">Certiport?</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Certiport is a globally recognised certification body operating under Pearson VUE.
                  Certiport certifications are accepted by employers, universities, and institutions
                  in over 150 countries.
                </p>
                <p>
                  As an Authorised Certiport Examination Centre, T21 Academy Nigeria is officially
                  approved to administer Certiport exams in a secure, invigilated environment.
                  Candidates receive official Certiport digital certificates upon passing.
                </p>
                <p>
                  Whether you trained at T21 Academy or elsewhere — you can come to our centre
                  to sit your Certiport certification exam.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Award, title: "Globally Recognised", desc: "Certiport certifications are accepted by employers and institutions in 150+ countries." },
                { icon: Shield, title: "Secure & Invigilated", desc: "Exams administered under official Certiport testing conditions at our authorised centre." },
                { icon: Monitor, title: "Computer-Based Testing", desc: "Exams taken on computer in our fully equipped testing lab with 100+ machines." },
                { icon: GraduationCap, title: "Digital Certificate", desc: "Official digital Certiport certificate issued upon passing, shareable on LinkedIn and CVs." },
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

      {/* Available Exams */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto w-fit">
              <BookOpen className="w-4 h-4" /> Available Exams
            </div>
            <h2 className="section-title mx-auto">
              Certification Exams Available at Our Centre
            </h2>
            <p className="section-subtitle mx-auto text-center">
              We offer training AND examination across all major Certiport certification categories.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <div key={exam.category} className="glass-card">
                <h3 className="font-bold text-white mb-2 font-playfair text-sm">{exam.category}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{exam.description}</p>
                <ul className="space-y-1.5">
                  {exam.available.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-primary-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title mx-auto">How to Book Your Exam</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contact Us", desc: "Reach out via phone, email, or visit any of our offices to register your interest." },
              { step: "02", title: "Choose Your Exam", desc: "Select the Certiport certification you want to sit from our available list." },
              { step: "03", title: "Pay & Schedule", desc: "Pay the exam fee and schedule your preferred date and time at our centre." },
              { step: "04", title: "Sit & Certify", desc: "Attend on your exam day, complete your computer-based test, and receive your result." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="step-number mx-auto mb-4 w-12 h-12 text-base">{s.step}</div>
                <h4 className="font-bold text-white mb-2 font-playfair text-sm">{s.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="btn-gold inline-flex items-center gap-2">
              Book an Exam <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-gold-outline inline-flex items-center gap-2">
              <Users className="w-4 h-4" /> Speak to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Also Train */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 font-playfair">
            Want to <span className="text-gold">Train Before Your Exam?</span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Enrol in one of our structured training pathways to fully prepare for your Certiport exam.
            We train and test — all under one roof.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/pathways" className="btn-gold inline-flex items-center gap-2">
              View Training Pathways <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/apply" className="btn-gold-outline">Apply for Training</Link>
          </div>
        </div>
      </section>
    </>
  );
}
