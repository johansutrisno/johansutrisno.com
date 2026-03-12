"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Badge, Tag } from '@/components/Badge';
import { ExternalLink, Github, Layers } from 'lucide-react';

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
              A curated selection of my work, ranging from large-scale mobile migrations to open source contributions.
            </p>
          </div>
          <div className="flex gap-4">
             <Badge variant="glass">5 Featured Projects</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-surface border border-border rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-300"
            >
              {/* Project Image Placeholder / Decorative background */}
              <div className="h-48 bg-surface-2 relative overflow-hidden flex items-center justify-center border-b border-border">
                <div className="absolute inset-0 opacity-10 dot-grid group-hover:opacity-20 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                   <Layers size={40} className="text-accent/40 group-hover:text-accent transition-colors duration-500" />
                   <span className="text-[10px] font-mono tracking-widest text-muted uppercase">Mobile Product</span>
                </div>
                
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                
                <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                
                <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 mt-auto">
                   {project.github && (
                     <a href={project.github} className="text-muted hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium">
                        <Github size={18} /> Source
                     </a>
                   )}
                   {project.link && (
                     <a href={project.link} className="text-muted hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium">
                        <ExternalLink size={18} /> Live Demo
                     </a>
                   )}
                   {!project.github && !project.link && project.featured && (
                     <span className="text-xs font-bold text-accent-light bg-accent-dim px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Sparkles size={12} /> Case Study Coming Soon
                     </span>
                   )}
                </div>
              </div>
            </motion.div>
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

// Sparkles icon for the case study badge
import { Sparkles } from 'lucide-react';
