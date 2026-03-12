import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'glass';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'outline' }) => {
  if (variant === 'glass') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-dim text-accent-light border border-accent/20">
        {children}
      </span>
    );
  }
  
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-border text-muted">
      {children}
    </span>
  );
};

export const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold bg-surface-2 text-muted border border-border">
    {children}
  </span>
);
