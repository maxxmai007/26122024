import React from 'react';
import { cn } from '../../utils/cn';

interface ProfileSectionProps {
  id: string;
  title: string;
  isActive: boolean;
  children: React.ReactNode;
}

export function ProfileSection({ id, title, isActive, children }: ProfileSectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "h-full min-h-[360px]", // Fixed minimum height for consistency
        "p-6 rounded-lg border",
        "transition-all duration-500",
        isActive ? "bg-dark-800/50 border-gold-500/20" : "bg-dark-900/50 border-gold-500/10"
      )}
    >
      <h3 className={cn(
        "text-xl font-medium mb-6", // Increased bottom margin for spacing
        "transition-colors duration-300",
        isActive ? "text-white" : "text-white/60"
      )}>
        {title}
      </h3>

      <div className="h-[calc(100%-3.5rem)]"> {/* Subtract header height */}
        {children}
      </div>
    </section>
  );
}