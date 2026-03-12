"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Badge } from '@/components/Badge';

const posts = [
  {
    title: "Flutter Architecture: Beyond the Basics",
    excerpt: "Exploring deep patterns in BLoC, Riverpod, and Cubit for enterprise-scale mobile applications.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["Flutter", "Architecture"],
    slug: "flutter-architecture-patterns"
  },
  {
    title: "Mobile Migration Lessons: RN to Flutter",
    excerpt: "What I learned leading the migration of a 20K+ DAU app from React Native to moving fully into the Flutter ecosystem.",
    date: "February 28, 2024",
    readTime: "12 min read",
    tags: ["Migration", "Case Study"],
    slug: "mobile-migration-lessons"
  },
  {
    title: "The Future of AI in Mobile Development",
    excerpt: "How generative AI is changing the way we build and interact with mobile applications in 2024.",
    date: "January 14, 2024",
    readTime: "6 min read",
    tags: ["AI", "Innovation"],
    slug: "ai-integration-mobile"
  }
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog<span className="text-accent">.</span></h1>
              <p className="text-muted text-lg max-w-xl">
                 Sharing my thoughts on mobile engineering, product leadership, and my experiences in the startup world.
              </p>
           </div>
           <BookOpen size={48} className="text-accent/20 hidden md:block" />
        </div>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 bg-surface border border-border rounded-3xl group-hover:border-accent/30 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-bold text-muted uppercase tracking-widest">
                   <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                   <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                   <div className="flex gap-2 ml-auto">
                      {post.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                   </div>
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                   {post.title}
                </h2>
                
                <p className="text-muted leading-relaxed mb-6 max-w-2xl">
                   {post.excerpt}
                </p>

                <button 
                   className="text-foreground font-bold flex items-center gap-2 group/btn"
                   onClick={() => alert('Post coming soon!')}
                >
                   Read Article 
                   <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform text-accent" />
                </button>
              </div>
              
              {/* Decorative side accent */}
              <div className="absolute left-[-2px] top-8 bottom-8 w-[4px] bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>

        {/* Newsletter / Stay in touch */}
        <div className="mt-24 p-12 bg-surface-2 border border-border rounded-[40px] flex flex-col md:flex-row items-center gap-8 justify-between">
           <div>
              <h3 className="text-xl font-bold mb-2">Want to stay updated?</h3>
              <p className="text-muted text-sm">I occasionally send out technical deep dives and career advice.</p>
           </div>
           <div className="flex w-full md:w-auto gap-2">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent w-full md:w-64"
              />
              <button className="bg-foreground text-background px-6 py-3 rounded-xl font-bold hover:bg-accent hover:text-white transition-all whitespace-nowrap">
                 Subscribe
              </button>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
