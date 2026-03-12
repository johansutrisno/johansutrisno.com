"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Heart, Zap, Shield, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Zap className="text-amber-400" />,
      title: "Product Mindset",
      description: "I don't just write code; I build solutions that solve real business problems and user pain points."
    },
    {
      icon: <Shield className="text-emerald-400" />,
      title: "Reliable Architecture",
      description: "Scalable, maintainable, and clean code is my standard. I build for the long haul."
    },
    {
      icon: <Heart className="text-rose-400" />,
      title: "Mentorship",
      description: "Sharing knowledge and lifting fellow engineers is just as important as shipping features."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12">About Me<span className="text-accent">.</span></h1>
        
        <div className="prose prose-invert mb-16">
          <p className="text-xl text-foreground leading-relaxed font-medium mb-6">
            I'm a Senior Product Engineer with over 6 years of experience building mobile experiences that matter.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            Currently at <span className="text-foreground font-medium">Zero One Group</span>, I spend most of my time 
            architecting and leading mobile product development. I've been fortunate enough to lead the migration of platforms like 
            <span className="text-foreground font-medium"> KickAvenue</span> from React Native to Flutter, serving tens of thousands of users every day.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            My journey includes being part of the <span className="text-foreground font-medium">YC W22</span> cohort with StafBook, 
            where I learned the speed and rigor required for world-class startups. I'm also deeply committed to the Flutter ecosystem, 
            regularly contributing to open source projects like <span className="text-accent-light font-medium">AppFlowy</span>.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Sparkles size={24} className="text-accent" />
          My Core Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((v, i) => (
            <motion.div 
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-surface border border-border rounded-2xl"
            >
              <div className="mb-4">{v.icon}</div>
              <h3 className="font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="p-8 bg-accent-dim border border-accent/20 rounded-3xl mb-16 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <FileText size={80} />
           </div>
           <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Looking for the details?</h3>
              <p className="text-muted text-sm mb-6 max-w-md">
                 I've kept this page brief, but my full career history, certifications, and technical depth are documented in my CV.
              </p>
              <a 
                href="/resume-johan-sutrisno.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-bold hover:bg-accent-light transition-colors"
              >
                Download Resume <FileText size={18} />
              </a>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
              <h3 className="text-xl font-bold mb-6 italic text-accent-light">"Builder by nature."</h3>
              <p className="text-muted leading-relaxed">
                 When I'm not coding, I'm usually exploring new AI tools, mentoring junior engineers, or planning the next 
                 big product feature. I believe that engineering is as much about people and product as it is about code.
              </p>
           </div>
           <div className="bg-surface-2 border border-border rounded-2xl p-6 flex flex-col justify-center">
              <span className="text-sm uppercase tracking-widest text-muted font-bold mb-4">Location</span>
              <p className="text-lg font-medium">Jakarta, Indonesia 🇮🇩</p>
              <p className="text-sm text-muted mt-2">Working globally, based locally.</p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
