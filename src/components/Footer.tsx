import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface/30 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Johan Sutrisno</h3>
          <p className="text-muted text-sm max-w-xs">
            Senior Product Engineer crafting end-to-end products from idea to impact.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="mailto:johansutrisno30@gmail.com" className="text-muted hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://github.com/johansutrisno" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/johansutrisno" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
        
        <div className="text-muted text-xs">
          © {new Date().getFullYear()} Johan Sutrisno. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
