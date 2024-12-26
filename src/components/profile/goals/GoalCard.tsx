import React from 'react';
import { cn } from '../../../utils/cn';
import { LucideIcon } from 'lucide-react';

interface GoalCardProps {
  icon: LucideIcon;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export function GoalCard({ icon: Icon, title, isSelected, onClick }: GoalCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 py-4", // Increased vertical padding
        "px-4 rounded-lg border transition-all duration-300",
        isSelected ? (
          "bg-gold-500/10 border-gold-500"
        ) : (
          "bg-dark-800/50 border-gold-500/10 hover:bg-gold-500/5"
        )
      )}
    >
      <div className={cn(
        "flex-shrink-0 p-2 rounded-lg transition-colors", // Increased padding for icon
        isSelected ? "bg-gold-500 text-dark-900" : "bg-dark-900 text-gold-500/60"
      )}>
        <Icon className="w-5 h-5" /> {/* Slightly larger icon */}
      </div>
      
      <span className={cn(
        "text-base font-medium transition-colors", // Increased font size
        isSelected ? "text-gold-500" : "text-white/60"
      )}>
        {title}
      </span>
    </button>
  );
}