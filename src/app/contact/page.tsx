"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageSquare, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch<span className="text-accent">.</span></h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          Interested in collaborating, discussing technical strategies, or just want to say hi? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-surface border border-border rounded-3xl hover:border-accent/20 transition-all group">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                 <MessageSquare size={20} className="text-accent" />
                 Connect with me
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:johansutrisno30@gmail.com" 
                  className="flex items-center gap-4 group/item"
                >
                  <div className="w-12 h-12 bg-surface-2 rounded-2xl flex items-center justify-center group-hover/item:text-accent transition-colors">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted uppercase tracking-widest">Email</p>
                    <p className="text-foreground font-medium group-hover/item:text-accent transition-colors">johansutrisno30@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/johansutrisno" 
                  target="_blank"
                  className="flex items-center gap-4 group/item"
                >
                  <div className="w-12 h-12 bg-surface-2 rounded-2xl flex items-center justify-center group-hover/item:text-accent transition-colors">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted uppercase tracking-widest">LinkedIn</p>
                    <p className="text-foreground font-medium group-hover/item:text-accent transition-colors">linkedin.com/in/johansutrisno</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/johansutrisno" 
                  target="_blank"
                  className="flex items-center gap-4 group/item"
                >
                  <div className="w-12 h-12 bg-surface-2 rounded-2xl flex items-center justify-center group-hover/item:text-accent transition-colors">
                    <Github size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted uppercase tracking-widest">GitHub</p>
                    <p className="text-foreground font-medium group-hover/item:text-accent transition-colors">github.com/johansutrisno</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-surface border border-border rounded-3xl">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <MapPin size={20} className="text-accent" />
                 Location
               </h3>
               <p className="text-muted leading-relaxed">
                 Currently based in <span className="text-foreground font-medium">Jakarta, Indonesia</span>. Available for remote work across all time zones.
               </p>
            </div>
          </div>

          {/* Right: Simple Contact Form */}
          <div className="lg:col-span-7 bg-surface border border-border rounded-[40px] p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Send size={120} />
             </div>
             
             <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-muted px-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-surface-2 border border-border rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-muted px-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-surface-2 border border-border rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors"
                      />
                   </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-sm font-bold text-muted px-1">Subject</label>
                   <input 
                     type="text" 
                     placeholder="How can I help you?"
                     className="w-full bg-surface-2 border border-border rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors"
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-muted px-1">Message</label>
                   <textarea 
                     rows={5}
                     placeholder="Tell me about your project..."
                     className="w-full bg-surface-2 border border-border rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors resize-none"
                   />
                </div>

                <button 
                  type="button"
                  className="w-full py-4 bg-accent text-white font-bold rounded-2xl hover:bg-accent-light transition-all flex items-center justify-center gap-2"
                  onClick={() => window.location.href = 'mailto:johansutrisno30@gmail.com'}
                >
                  Send Message <Send size={18} />
                </button>
             </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
