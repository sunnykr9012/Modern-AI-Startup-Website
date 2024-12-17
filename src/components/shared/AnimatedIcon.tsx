import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  Icon: LucideIcon;
  size?: number;
  className?: string;
}

export default function AnimatedIcon({ Icon, size = 24, className = '' }: AnimatedIconProps) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <Icon 
        size={size}
        className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
      />
    </div>
  );
}