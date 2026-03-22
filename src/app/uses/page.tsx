"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Wrench, Database, Monitor } from 'lucide-react';
import { Badge } from '@/components/Badge';

export default function Uses() {
  const stack = [
    {
      category: "Languages",
      icon: <Code2 className="text-blue-400" />,
      items: ["Dart", "TypeScript", "Python", "Kotlin", "JavaScript"]
    },
    {
      category: "Frameworks",
      icon: <Cpu className="text-emerald-400" />,
      items: ["Flutter", "React", "React Native", "Astro"]
    },
    {
      category: "State Management",
      icon: <Terminal className="text-purple-400" />,
      items: ["Riverpod", "BLoC", "Cubit"]
    },
    {
      category: "Tools & Design",
      icon: <Wrench className="text-amber-400" />,
      items: ["Git", "Postman", "Figma", "Sentry"]
    },
    {
      category: "Storage",
      icon: <Database className="text-rose-400" />,
      items: ["Hive", "Firebase", "PostgreSQL", "Supabase"]
    },
    {
      category: "Workspace",
      icon: <Monitor className="text-indigo-400" />,
      items: ["VS Code", "Android Studio", "MacBook Pro", "Dell UltraSharp"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Uses<span className="text-accent">.</span></h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          A semi-comprehensive list of the tools, technologies, and hardware I use to ship great products every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stack.map((group, i) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-surface border border-border rounded-3xl hover:border-accent/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-surface-2 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  {group.icon}
                </div>
                <h2 className="text-xl font-bold">{group.category}</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <Badge key={item} variant="glass">{item}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-12 border-t border-border flex flex-col md:flex-row justify-between gap-8 items-start">
           <div className="max-w-md">
              <h3 className="text-lg font-bold mb-2">Why this stack?</h3>
              <p className="text-muted text-sm leading-relaxed">
                I'm a firm believer in using the right tool for the job. I keep my skills broad across the full stack to see the "big picture" of a product, from the first line of code to the experience in users' hands.
              </p>
           </div>
           <div className="p-6 bg-accent-dim rounded-2xl border border-accent/10">
              <p className="text-xs font-mono text-accent-light">
                // Last updated: March 2024
              </p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
