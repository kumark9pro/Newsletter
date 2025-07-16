import React from 'react';
import { Button } from './ui/button';

const PremiumButton = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  disabled = false,
  onClick,
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'cosmic-button btn-cosmic-primary text-white border-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:shadow-xl';
      case 'secondary':
        return 'cosmic-button btn-cosmic-secondary text-white border-0 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:shadow-xl';
      case 'outline':
        return 'cosmic-button bg-transparent border-2 border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 hover:text-cyan-100 hover:bg-cyan-500/10 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30';
      case 'ghost':
        return 'cosmic-button bg-slate-900/20 hover:bg-slate-800/40 text-slate-300 hover:text-slate-100 border border-slate-700/20 hover:border-slate-600/40 shadow-lg shadow-black/20 hover:shadow-black/40 floating-card';
      case 'feedback-positive':
        return 'cosmic-button bg-transparent border-2 border-slate-700/30 hover:border-green-400/60 text-slate-300 hover:text-green-200 hover:bg-green-500/10 shadow-lg shadow-green-500/10 hover:shadow-green-500/30';
      case 'feedback-negative':
        return 'cosmic-button bg-transparent border-2 border-slate-700/30 hover:border-red-400/60 text-slate-300 hover:text-red-200 hover:bg-red-500/10 shadow-lg shadow-red-500/10 hover:shadow-red-500/30';
      case 'cosmic-glow':
        return 'cosmic-button bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/20 hover:border-cyan-400/50 text-cyan-100 hover:text-white backdrop-blur-md shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40';
      default:
        return 'cosmic-button btn-cosmic-primary text-white border-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-8 py-4 text-sm font-light rounded-full min-w-[120px]';
      case 'lg':
        return 'px-12 py-6 text-lg font-light rounded-full min-w-[180px]';
      case 'xl':
        return 'px-16 py-8 text-xl font-light rounded-full min-w-[220px]';
      case 'cosmic':
        return 'px-20 py-10 text-2xl font-light rounded-full min-w-[280px] tracking-wider';
      default:
        return 'px-10 py-5 text-base font-light rounded-full min-w-[150px]';
    }
  };

  return (
    <Button
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        transition-all duration-500 ease-out
        transform-gpu
        hover:scale-105
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        font-inter tracking-wide
        relative
        group
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {children}
      </span>
      
      {/* Enhanced glow effect on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-400/10 via-blue-400/5 to-purple-400/10 animate-pulse-glow" />
    </Button>
  );
};

export default PremiumButton;