import Link from "next/link";
import {
  ArrowRight, Code2, Shield, Palette,
  HeartPulse, GraduationCap, ChevronRight, Briefcase, Globe, PhoneCall,
  BarChart3, Layout,
} from "lucide-react";

const pathways = [
  {
    icon: Code2,
    title: "Software & AI Engineering",
    description: "Build software applications and work with artificial intelligence tools. From programming fundamentals to deploying real-world applications using modern frameworks and AI integration.",
    skills: ["Python Programming", "AI & Machine Learning basics", "APIs & Backend Development", "Version Control (Git)", "Cloud Deployment", "Automation & Scripting", "AI Tools Integration"],
    outcomes: ["Junior Software Developer", "AI Tools Developer", "Backend Developer", "Freelance Engineer", "Remote Tech Roles"],
    duration: "3 – 6 months",
    cert: "Python Institute PCEP, Certiport IC3",
  },
  {
    icon: Layout,
    title: "Full Stack Web Development",
    description: "Build complete websites and web applications from front to back. Learn to create professional, responsive websites and web apps used by real businesses and clients.",
    skills: ["HTML, CSS & JavaScript", "React & Next.js", "Node.js & Express", "Databases (SQL / MongoDB)", "REST APIs", "Version Control (Git)", "Responsive Design & Tailwind CSS"],
    outcomes: ["Front-End Developer", "Full Stack Developer", "Freelance Web Developer", "Web Designer", "Remote Developer Roles"],
    duration: "3 – 5 months",
    cert: "Certiport IC3, MOS (Web tools)",
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    description: "Learn to collect, clean, analyse, and visualise data to drive business and government decisions. Work with real datasets using industry-standard tools and techniques.",
    skills: ["Microsoft Excel (Advanced)", "Power BI & Data Visualisation", "SQL & Databases", "Python for Data Science", "Statistical Analysis", "Machine Learning basics", "Google Analytics"],
    outcomes: ["Data Analyst", "Data Scientist (Junior)", "Business Intelligence Analyst", "Government Data Officer", "Remote Analytics Roles"],
    duration: "2 – 4 months",
    cert: "Certiport MOS Excel, IC3 Digital Literacy",
  },
  {
    icon: Shield,
    title: "Cybersecurity & IT Support",
    description: "Build the skills to protect digital systems, detect threats, and manage IT infrastructure. Covers both foundational IT support and specialised cybersecurity operations.",
    skills: ["Network Security Fundamentals", "Ethical Hacking Concepts", "IT Support & Troubleshooting", "Windows & Linux Administration", "Security Operations", "Risk Assessment", "Cyber Incident Response"],
    outcomes: ["IT Support Technician", "SOC Analyst (Junior)", "Network Administrator", "Cybersecurity Analyst", "Remote IT Support"],
    duration: "3 – 5 months",
    cert: "Certiport IC3, CompTIA-aligned preparation",
  },
  {
    icon: Globe,
    title: "Virtual Assistance & Remote Work",
    description: "Prepare for international remote work as a professional virtual assistant. Train in the tools, systems, and communication skills used by remote teams and businesses worldwide.",
    skills: ["Email & Calendar Management", "Google Workspace & Microsoft Office", "Project Management Tools (Asana, Trello)", "Professional Communication", "Zoom / Teams Operations", "Client Relationship Management", "Remote Work Best Practices"],
    outcomes: ["Virtual Assistant", "Executive Assistant (remote)", "Remote Operations Assistant", "Freelance VA", "Online Administrative Support"],
    duration: "6 – 10 weeks",
    cert: "Certiport MOS, IC3 Digital Literacy",
  },
  {
    icon: PhoneCall,
    title: "Customer Service & BPO",
    description: "Build professional customer service skills for call centres, BPO operations, and remote support roles. Train for local and international customer-facing positions.",
    skills: ["Customer Communication & Etiquette", "CRM Tools (Zendesk, Freshdesk)", "Call Handling & Complaint Resolution", "Email & Chat Support", "Sales Support Basics", "Data Entry & Records", "English for Professional Communication"],
    outcomes: ["Customer Service Representative", "BPO Operator", "Call Centre Agent", "Remote Support Agent", "Outsourced Customer Service Staff"],
    duration: "6 – 10 weeks",
    cert: "Certiport MOS, IC3 Digital Literacy",
  },
  {
    icon: Palette,
    title: "Digital Creative & Media",
    description: "Develop professional skills in graphic design, video production, content creation, and digital marketing. Build a portfolio and work for local and international clients.",
    skills: ["Adobe Photoshop & Illustrator", "Video Editing (Premiere / DaVinci)", "Social Media Management", "Content Strategy", "Brand Identity Design", "Digital Marketing & SEO", "Canva for Business"],
    outcomes: ["Graphic Designer", "Content Creator", "Social Media Manager", "Video Editor", "Freelance Creative", "Digital Marketing Specialist"],
    duration: "2 – 4 months",
    cert: "Certiport Adobe Certified Professional",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Administration",
    description: "Build operational and administrative skills for healthcare environments. Connected to T21's UK healthcare delivery operations, opening pathways into NHS-aligned training and international healthcare roles.",
    skills: ["Medical Records & Documentation", "Patient Administration Systems", "Health Data Management", "Clinical Coding Fundamentals", "NHS Systems Awareness", "RTT & Pathway Concepts", "Hospital Administration"],
    outcomes: ["Hospital Administrator", "Medical Records Officer", "Health Data Clerk", "Clinical Coding Trainee", "International Healthcare Admin Roles (UK pathway)"],
    duration: "3 – 5 months",
    cert: "T21 Healthcare Administration Certificate, UK Academy Alignment",
  },
];

export default function PathwaysPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mb-5 mx-auto w-fit">
            <GraduationCap className="w-4 h-4" /> Career Pathways
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 font-playfair">
            Training Pathways at{" "}
            <span className="text-gold">T21 Academy Nigeria</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Eight training pathways covering digital, technical, and professional skills, each designed to lead to employment, remote work, freelancing, or further certification.
          </p>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {pathways.map((pathway, idx) => (
            <div key={pathway.title} className="glass-card !hover:transform-none">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center flex-shrink-0">
                      <pathway.icon className="w-6 h-6 text-primary-gold" />
                    </div>
                    <span className="text-primary-gold text-xs font-semibold">Pathway {String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-playfair">{pathway.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{pathway.description}</p>
                  <div className="space-y-1 mb-4">
                    <p className="text-xs text-gray-500 font-semibold uppercase">Duration</p>
                    <p className="text-sm text-white">{pathway.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Certification</p>
                    <p className="text-xs text-primary-gold">{pathway.cert}</p>
                  </div>
                </div>

                {/* Middle — Skills */}
                <div>
                  <h4 className="text-white font-semibold text-sm mb-3">Skills Covered</h4>
                  <ul className="space-y-2">
                    {pathway.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-primary-gold flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — Outcomes */}
                <div>
                  <h4 className="text-white font-semibold text-sm mb-3">
                    <Briefcase className="w-4 h-4 inline mr-1 text-primary-gold" />
                    Career Outcomes
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {pathway.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-gold flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/apply"
                    className="btn-gold text-sm !py-2 !px-5 inline-flex items-center gap-2 w-full justify-center"
                  >
                    Apply for This Pathway <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 font-playfair">
            Not Sure Which Pathway to Choose?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us and our team will help match you to the right pathway based on your background,
            interests, and career goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="btn-gold inline-flex items-center gap-2">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-gold-outline">
              Speak to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
