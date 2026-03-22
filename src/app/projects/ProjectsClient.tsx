"use client";

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { Badge } from '@/components/Badge';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects<span className="text-accent">.</span></h1>
            <p className="text-muted text-lg max-w-xl">
              A curated selection of my work, from large-scale platform migrations to open source contributions and full-stack products.
            </p>
          </div>
          <div className="flex gap-4">
             <Badge variant="glass">{projects.length} Featured Projects</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 p-12 bg-gradient-to-br from-surface to-surface-2 border border-border rounded-[40px] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
           <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
           <p className="text-muted mb-8 max-w-lg mx-auto">
             I'm always open to discussing new products, technical leadership roles, or consulting engagements.
           </p>
           <a 
             href="/contact" 
             className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-2xl hover:bg-accent-light transition-all hover:scale-105"
            >
              Start a Conversation
           </a>
        </div>
      </motion.div>
    </div>
  );
}
