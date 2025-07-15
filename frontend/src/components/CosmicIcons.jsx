import React from 'react';

// Cosmic Icon System - Consistent line-style SVG icons
// Easy to swap: just replace the SVG content in each icon function

const CosmicIcons = {
  // Corporate/Business Icons
  corporate: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01" />
      <path d="M9 12v.01" />
      <path d="M9 15v.01" />
      <path d="M9 18v.01" />
    </svg>
  ),

  // Product/Technology Icons  
  product: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),

  // Healthcare/Medical Icons
  healthcare: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z" />
      <path d="M12 5L8 21l4-7 4 7-4-16" />
    </svg>
  ),

  // Knowledge/Fact Icons
  fact: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
    </svg>
  ),

  // Analytics/Data Icons
  analytics: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 6-6" />
      <circle cx="11" cy="12" r="1" />
      <circle cx="15" cy="8" r="1" />
      <circle cx="21" cy="6" r="1" />
    </svg>
  ),

  // Innovation/Ideas Icons
  innovation: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
      <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3" />
      <path d="M12 3c0 1 1 3 3 3s3-2 3-3-1-3-3-3-3 2-3 3" />
    </svg>
  ),

  // Security/Protection Icons
  security: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),

  // Communication/Network Icons
  communication: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z" />
    </svg>
  ),

  // Education/Learning Icons
  education: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  ),

  // Default cosmic icon for unknown categories
  cosmic: (size = 24, className = '') => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
    </svg>
  )
};

// Helper function to get icon by category with consistent styling
export const getCosmicIcon = (category, size = 32, className = '') => {
  const baseClasses = `text-cyan-400 drop-shadow-lg`;
  const finalClasses = `${baseClasses} ${className}`;
  
  const iconFunction = CosmicIcons[category] || CosmicIcons.cosmic;
  return iconFunction(size, finalClasses);
};

// Helper component for easy icon usage
export const CosmicIcon = ({ 
  category = 'cosmic', 
  size = 32, 
  className = '',
  containerClassName = '',
  showGlow = true 
}) => {
  return (
    <div className={`flex items-center justify-center ${containerClassName}`}>
      <div className={`${showGlow ? 'filter drop-shadow-glow' : ''}`}>
        {getCosmicIcon(category, size, className)}
      </div>
    </div>
  );
};

export default CosmicIcons;