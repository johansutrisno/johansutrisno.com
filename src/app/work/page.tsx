"use client";

import { motion } from 'framer-motion';
import { workExperiences } from '@/data/work';
import { Badge } from '@/components/Badge';
import { Briefcase, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Work() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Experience<span className="text-accent">.</span></h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          My professional journey building products across the full stack — from engineering scalable systems to leading cross-functional product teams.
        </p>

        <div className="relative space-y-12">
          {/* Timeline Vertical Line */}
          <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-border md:left-1/2 md:-translate-x-1/2" />

          {workExperiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:w-[45%] ${
                index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right md:items-end'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-4 border-accent z-10 md:left-1/2 md:-translate-x-1/2 md:hidden" />
              <div className="hidden md:block absolute top-1.5 w-6 h-6 rounded-full bg-background border-4 border-accent z-10 left-[-31px] md:left-auto md:right-[-31px] group-even:md:left-[-31px]" 
                   style={{ left: index % 2 === 0 ? '-31px' : 'auto', right: index % 2 === 0 ? 'auto' : '-31px' }} />

              <div className="pl-12 md:pl-0">
                <div className="flex flex-col mb-2 items-start md:items-inherit">
                  <span className="inline-flex items-center gap-2 text-accent-light font-bold text-sm tracking-widest uppercase mb-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-foreground font-medium mb-4">
                    <Briefcase size={16} className="text-muted" />
                    {exp.company}
                  </div>
                </div>

                <div className={`p-6 bg-surface border border-border rounded-3xl hover:border-accent/40 transition-all duration-300 shadow-xl shadow-black/5`}>
                  <ul className={`space-y-3 mb-6 list-none ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 group">
                        {index % 2 === 0 ? (
                            <>
                              <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-muted text-sm leading-relaxed group-hover:text-foreground transition-colors">{highlight}</span>
                            </>
                        ) : (
                            <div className="flex items-start gap-3 w-full justify-end">
                              <span className="text-muted text-sm leading-relaxed group-hover:text-foreground transition-colors md:order-1">{highlight}</span>
                              <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5 md:order-2" />
                            </div>
                        )}
                      </li>
                    ))}
                  </ul>

                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className={`flex flex-col gap-2 mb-6 p-3 bg-accent-dim rounded-xl border border-accent/10 ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                       {exp.metrics.map(metric => (
                          <span key={metric} className="text-xs font-bold text-accent-light flex items-center gap-1.5">
                             <TrendingUp size={14} /> {metric}
                          </span>
                       ))}
                    </div>
                  )}

                  <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    {exp.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
