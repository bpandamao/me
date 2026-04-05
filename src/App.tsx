/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Presentation, 
  Briefcase, 
  ExternalLink,
  ChevronRight,
  Search,
  Cpu,
  Users
} from "lucide-react";

import { LisaIcon, NzGravityIcon, OzGravIcon } from "./components/CustomIcons";
import profilePhoto from "../me.jpg";

const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-2">
    <Icon className="w-5 h-5 text-stone-600" />
    <h2 className="text-xl font-serif font-bold text-stone-800 tracking-tight uppercase">{title}</h2>
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

const Card = ({ children, className = "" }: CardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-200">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar / Header Info */}
        <aside className="md:w-1/3 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Profile Photo */}
            <div className="w-48 h-48 md:w-56 md:h-56 bg-stone-200 rounded-2xl mb-6 overflow-hidden border-4 border-white shadow-lg relative group">
              <img 
                src={profilePhoto}
                alt="Ruiting Mao" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-2">Ruiting Mao</h1>
            <p className="text-lg text-stone-600 font-medium mb-6">PhD Candidate in Statistics</p>
            
            <div className="space-y-3 text-sm text-stone-600 w-full">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <a href="mailto:mao744@aucklanduni.ac.nz" className="hover:text-stone-900 transition-colors underline decoration-stone-300 underline-offset-4">
                  mao744@aucklanduni.ac.nz
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <span>+64 2040081368</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>Auckland, New Zealand</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-200 w-full">
              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Bayesian Analysis", "Gravitational Waves", "Deep Learning", "Simulation-based Inference", "Model Misspecification"].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-stone-200/50 text-stone-700 text-xs rounded-full font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-200 w-full">
              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Member of:</h3>
              <div className="space-y-3">
                {[
                  { 
                    name: "NZ Gravity", 
                    description: "NZ Gravity Workshop",
                    icon: NzGravityIcon,
                    bg: "bg-stone-100/50 border-stone-200"
                  },
                  { 
                    name: "LISA Consortium", 
                    description: "LISA Consortium",
                    icon: LisaIcon,
                    bg: "bg-stone-100/50 border-stone-200"
                  },
                  { 
                    name: "OzGrav", 
                    description: "ARC Centre of Excellence",
                    icon: OzGravIcon,
                    bg: "bg-stone-100/50 border-stone-200"
                  }
                ].map((membership, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 rounded-xl ${membership.bg} border overflow-hidden shrink-0 flex items-center justify-center group-hover:border-stone-400 group-hover:shadow-sm transition-all`}>
                      <membership.icon className="w-8 h-8 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-700 group-hover:text-stone-900 transition-colors">{membership.name}</p>
                      <p className="text-[10px] text-stone-400 italic">{membership.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </aside>

        {/* Main Content Area */}
        <main className="md:w-2/3 flex flex-col gap-16">
          
          {/* Intro */}
          <div className="prose prose-stone max-w-none">
            <p className="text-xl text-stone-700 leading-relaxed italic font-serif">
              "I am a Bayesian. My PhD project focuses on Bayesian and Deep Learning strategies for data analysis in Gravitational Wave Data Analysis, specifically for complex signals with artefacts. I am also keen on simulation-based inference with model misspecification."
            </p>
          </div>

          {/* Education */}
          <section>
            <SectionHeader icon={GraduationCap} title="Education" />
            <div className="space-y-6">
              {[
                {
                  degree: "Doctor of Philosophy in Statistics",
                  institution: "University of Auckland, NZ",
                  period: "Sept 2023 – Present",
                  details: "Focusing on Bayesian analysis and gravitational wave data."
                },
                {
                  degree: "Master of Science in Statistics (1st Class Honours)",
                  institution: "University of Auckland, NZ",
                  period: "Jul 2021 – May 2023"
                },
                {
                  degree: "Master of Applied Statistics",
                  institution: "Shanghai University of Finance and Economics, China",
                  period: "Sept 2012 – Aug 2014"
                },
                {
                  degree: "Dual Bachelor's Degree in Economics & Management (Statistics)",
                  institution: "Jiangxi University of Finance and Economics, China",
                  period: "Sept 2008 – Aug 2012"
                }
              ].map((edu, idx) => (
                <Card key={idx} className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="font-bold text-stone-900">{edu.degree}</h3>
                    <p className="text-stone-600">{edu.institution}</p>
                    {edu.details && <p className="text-sm text-stone-50 text-stone-500 mt-2 italic">{edu.details}</p>}
                  </div>
                  <span className="text-xs font-mono bg-stone-100 px-2 py-1 rounded text-stone-500 whitespace-nowrap">
                    {edu.period}
                  </span>
                </Card>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section>
            <SectionHeader icon={BookOpen} title="Publications" />
            <div className="space-y-6">
              <Card>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-900 text-white px-2 py-0.5 rounded">Pre-print</span>
                  <span className="text-xs font-mono text-stone-400">2025</span>
                </div>
                <p className="text-stone-800 leading-relaxed">
                  <span className="font-bold">Mao, R.</span>, et al. (2025). Robust and scalable simulation-based inference for gravitational wave signals with gaps. 
                </p>
                <a href="https://arxiv.org/abs/2512.18290" target="_blank" className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 mt-3 transition-colors">
                  arXiv:2512.18290 <ExternalLink className="w-3 h-3" />
                </a>
              </Card>

              <Card>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded">Physical Review D</span>
                  <span className="text-xs font-mono text-stone-400">2025</span>
                </div>
                <p className="text-stone-800 leading-relaxed">
                  <span className="font-bold">Mao, R.</span>, et al. (2025). Novel stacked hybrid autoencoder for imputing LISA data gaps. <span className="italic">Physical Review D (Q1)</span>, 111, 024067.
                </p>
                <a href="https://doi.org/10.1103/PhysRevD.111.024067" target="_blank" className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 mt-3 transition-colors">
                  DOI: 10.1103/PhysRevD.111.024067 <ExternalLink className="w-3 h-3" />
                </a>
              </Card>

              <Card>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded">Physical Review D</span>
                  <span className="text-xs font-mono text-stone-400">2024</span>
                </div>
                <p className="text-stone-800 leading-relaxed">
                  <span className="font-bold">Mao, R.</span>, et al. (2024). Calibrating approximate Bayesian credible intervals of gravitational-wave parameters. <span className="italic">Physical Review D (Q1)</span>, 109, 083002.
                </p>
                <a href="https://doi.org/10.1103/PhysRevD.109.083002" target="_blank" className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 mt-3 transition-colors">
                  DOI: 10.1103/PhysRevD.109.083002 <ExternalLink className="w-3 h-3" />
                </a>
              </Card>
            </div>
          </section>

          {/* Presentations */}
          <section>
            <SectionHeader icon={Presentation} title="Presentations & Talks" />
            <div className="grid grid-cols-1 gap-4">
              {[
                { event: "Bayes on the Beach | Bayesian Statistical Conference 2026", location: "Wollongong, Australia", date: "Feb 2026", type: "Poster" },
                { event: "44th International Workshop on Bayesian Inference and Maximum Entropy Methods", location: "University of Auckland", date: "Dec 2025", type: "Talk" },
                { event: "New Zealand Statistical Association (NZSA) Conference", location: "University of Otago", date: "Dec 2025", type: "Talk" },
                { event: "15th International LISA Symposium", location: "Dublin, Ireland", date: "Jul 2024", type: "Poster" },
                { event: "NZ Gravity Workshop", location: "Multiple Locations", date: "2024 – 2025", type: "Talk" }
              ].map((talk, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border-l-2 border-stone-200 hover:border-stone-900 transition-colors group">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">{talk.type}</span>
                      <ChevronRight className="w-3 h-3 text-stone-300" />
                    </div>
                    <h4 className="font-bold text-stone-800">{talk.event}</h4>
                    <p className="text-sm text-stone-500">{talk.location}</p>
                  </div>
                  <span className="text-xs font-mono text-stone-400">{talk.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section>
            <SectionHeader icon={Award} title="Honours & Awards" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Highly commended Student Presentation, NZSA (2025)",
                "Best Presenter Award, PhD Talks Day, UoA (2025)",
                "University of Auckland Doctoral Scholarship (2023)",
                "Shanghai Excellent Graduate (2014)",
                "National Scholarship, Ministry of Education PRC (2013)",
                "Excellent Graduate, JUFE (2012)"
              ].map((award, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-100 shadow-sm">
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-sm text-stone-700">{award}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <SectionHeader icon={Briefcase} title="Experience" />
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Teaching & Research</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1 bg-stone-200 rounded-full" />
                    <div>
                      <h4 className="font-bold text-stone-900">Graduate Teaching Assistant</h4>
                      <p className="text-sm text-stone-600 mb-1">University of Auckland</p>
                      <p className="text-xs font-mono text-stone-400">Sept 2023 – Present</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-stone-200 rounded-full" />
                    <div>
                      <h4 className="font-bold text-stone-900">MSc Research Project</h4>
                      <p className="text-sm text-stone-600 mb-2">University of Auckland</p>
                      <p className="text-sm text-stone-500 italic">Developed a Bayesian nonparametric model for link functions in single-index models using a novel B-spline prior.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Industry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-bold text-stone-900">Data & Business Analyst</h4>
                    <p className="text-xs text-stone-500 mb-2">Freelance Website Operator</p>
                    <span className="text-[10px] font-mono text-stone-400">2019 – 2020</span>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-bold text-stone-900">Data Analyst</h4>
                    <p className="text-xs text-stone-500 mb-2">Meituan Inc., Shanghai</p>
                    <span className="text-[10px] font-mono text-stone-400">2018 – 2019</span>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-bold text-stone-900">Data Analyst</h4>
                    <p className="text-xs text-stone-500 mb-2">Shanghai Baixing Co. Ltd.</p>
                    <span className="text-[10px] font-mono text-stone-400">2014 – 2017</span>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-stone-200 text-center text-stone-400 text-xs">
            <p>© {new Date().getFullYear()} Ruiting Mao.</p>
          </footer>

        </main>
      </div>
    </div>
  );
}
