import React from 'react';

interface RangayanLogoProps {
  className?: string;
  showTagline?: boolean;
}

export const RangayanLogo: React.FC<RangayanLogoProps> = ({ 
  className = '',
  showTagline = true 
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact 5-Leaf Pinwheel Flower Icon matching uploaded image */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full transform hover:rotate-12 transition-transform duration-500 ease-out" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Petal 1: Magenta to Purple (Top-Left) */}
            <linearGradient id="petal-grad-1" x1="20%" y1="10%" x2="60%" y2="50%">
              <stop offset="0%" stopColor="#db2777" />
              <stop offset="45%" stopColor="#c026d3" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>

            {/* Petal 2: Cyan to Deep Royal Blue (Top-Right) */}
            <linearGradient id="petal-grad-2" x1="90%" y1="15%" x2="45%" y2="55%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="55%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Petal 3: Red to Orange to Amber (Bottom-Right) */}
            <linearGradient id="petal-grad-3" x1="50%" y1="50%" x2="95%" y2="80%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>

            {/* Petal 4: Green to Lime (Bottom) */}
            <linearGradient id="petal-grad-4" x1="50%" y1="55%" x2="35%" y2="95%">
              <stop offset="0%" stopColor="#16a34a" />
              <stop offset="55%" stopColor="#65a30d" />
              <stop offset="100%" stopColor="#a3e635" />
            </linearGradient>

            {/* Petal 5: Emerald to Teal / Aqua (Left) */}
            <linearGradient id="petal-grad-5" x1="45%" y1="50%" x2="10%" y2="55%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Canonical Leaf Geometry with outer perimeter and inner vein */}
            <g id="rangayan-master-leaf">
              {/* Outer organic leaf contour with curved hooked tip */}
              <path 
                d="M 41.5 44 C 33.5 38.5, 27 28.5, 30.8 12.8 C 34.5 15.5, 43.5 25, 48.2 39.5" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Curved inner leaf vein */}
              <path 
                d="M 47 41 C 45.8 33.5, 42.2 27.2, 36.8 23" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
              />
            </g>
          </defs>

          {/* 5 Rotated Petals around center (50, 50) */}
          {/* Petal 1: Top-Left (Magenta/Purple) */}
          <use href="#rangayan-master-leaf" stroke="url(#petal-grad-1)" />

          {/* Petal 2: Top-Right (Cyan/Blue) rotated 72 deg */}
          <use href="#rangayan-master-leaf" transform="rotate(72 50 50)" stroke="url(#petal-grad-2)" />

          {/* Petal 3: Bottom-Right (Red/Orange/Yellow) rotated 144 deg */}
          <use href="#rangayan-master-leaf" transform="rotate(144 50 50)" stroke="url(#petal-grad-3)" />

          {/* Petal 4: Bottom (Green/Lime) rotated 216 deg */}
          <use href="#rangayan-master-leaf" transform="rotate(216 50 50)" stroke="url(#petal-grad-4)" />

          {/* Petal 5: Left (Teal/Aqua) rotated 288 deg */}
          <use href="#rangayan-master-leaf" transform="rotate(288 50 50)" stroke="url(#petal-grad-5)" />
        </svg>
      </div>

      {/* Typography identical to the user's uploaded banner image */}
      <div className="flex flex-col">
        <span className="text-[17px] sm:text-[19px] font-bold tracking-tight text-slate-900 leading-tight">
          Rangayan Creations Private Limited
        </span>
        {showTagline && (
          <span className="text-[10px] tracking-[0.24em] font-medium text-slate-500 uppercase mt-0.5">
            IT &nbsp;•&nbsp; NETWORKING &nbsp;•&nbsp; ENTERPRISE
          </span>
        )}
      </div>
    </div>
  );
};
