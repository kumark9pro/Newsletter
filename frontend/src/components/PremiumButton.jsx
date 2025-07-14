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
        return 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:shadow-xl border-0';
      case 'secondary':
        return 'bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 text-slate-100 shadow-lg shadow-slate-600/20 hover:shadow-slate-500/30 border-0';
      case 'outline':
        return 'bg-transparent border-2 border-cyan-400/40 hover:border-cyan-400/60 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20';
      case 'ghost':
        return 'bg-slate-800/30 hover:bg-slate-800/50 text-slate-300 hover:text-slate-100 border border-slate-700/30 hover:border-slate-600/50 shadow-lg shadow-black/20 hover:shadow-black/30';
      case 'feedback-positive':
        return 'bg-transparent border-2 border-slate-700/30 hover:border-green-400/60 text-slate-300 hover:text-green-300 hover:bg-green-500/10 shadow-lg shadow-green-500/10 hover:shadow-green-500/20';
      case 'feedback-negative':
        return 'bg-transparent border-2 border-slate-700/30 hover:border-red-400/60 text-slate-300 hover:text-red-300 hover:bg-red-500/10 shadow-lg shadow-red-500/10 hover:shadow-red-500/20';
      default:
        return 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 border-0';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-6 py-3 text-sm font-light rounded-full';
      case 'lg':
        return 'px-12 py-6 text-lg font-light rounded-full';
      case 'xl':
        return 'px-16 py-8 text-xl font-light rounded-full';
      default:
        return 'px-10 py-5 text-base font-light rounded-full';
    }
  };

  return (
    <Button
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        transition-all duration-500 ease-out
        hover:scale-105 active:scale-95
        transform-gpu
        backdrop-blur-sm
        relative overflow-hidden
        group
        disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      
      {/* Content with subtle letter spacing */}
      <span className="relative z-10 tracking-wide uppercase text-sm font-medium">
        {children}
      </span>
    </Button>
  );
};

export default PremiumButton;