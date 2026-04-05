import React from 'react';

export const LisaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="red-sphere" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#f43f5e" />
        <stop offset="50%" stopColor="#9f1239" />
        <stop offset="100%" stopColor="#4c0519" />
      </radialGradient>
    </defs>
    {/* Galaxy background */}
    <path d="M 30 50 C 30 20 70 20 70 50 C 70 80 40 80 40 50 C 40 30 60 30 60 50" stroke="#d4d4d8" strokeWidth="8" fill="none" strokeLinecap="round" />
    
    {/* Triangle lines */}
    <polygon points="20,75 80,75 50,20" fill="none" stroke="#9f1239" strokeWidth="6" strokeLinejoin="round" />
    <polygon points="20,75 80,75 50,20" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" />
    
    {/* Nodes */}
    <circle cx="20" cy="75" r="14" fill="url(#red-sphere)" />
    <circle cx="80" cy="75" r="14" fill="url(#red-sphere)" />
    <circle cx="50" cy="20" r="14" fill="url(#red-sphere)" />
  </svg>
);

export const NzGravityIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="nzg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e5e5e5" />
        <stop offset="30%" stopColor="#fde047" />
        <stop offset="70%" stopColor="#7dd3fc" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    {/* Stylized wave/spiral */}
    <path d="M 80 25 C 40 -5 5 30 15 65 C 25 95 65 105 85 80 C 100 60 90 30 65 30 C 40 30 30 55 45 75 C 55 85 75 80 80 65" 
          stroke="url(#nzg-grad)" strokeWidth="14" strokeLinecap="round" fill="none" />
  </svg>
);

export const OzGravIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="white-sphere" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="70%" stopColor="#d4d4d8" />
        <stop offset="100%" stopColor="#a1a1aa" />
      </radialGradient>
      <radialGradient id="black-sphere" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#52525b" />
        <stop offset="50%" stopColor="#000000" />
        <stop offset="100%" stopColor="#000000" />
      </radialGradient>
    </defs>
    {/* Back ring */}
    <path d="M 15 65 C 30 10 90 20 90 40" stroke="#e4e4e7" strokeWidth="4" fill="none" strokeLinecap="round" />
    
    {/* Black sphere */}
    <circle cx="38" cy="50" r="24" fill="url(#black-sphere)" />
    
    {/* White sphere */}
    <circle cx="62" cy="50" r="24" fill="url(#white-sphere)" />
    
    {/* Front ring */}
    <path d="M 10 70 C 30 110 100 90 95 30" stroke="#ffffff" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M 5 65 C 20 115 105 95 100 25" stroke="#d4d4d8" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);
