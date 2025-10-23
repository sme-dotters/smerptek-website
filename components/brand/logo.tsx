export function Logo({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Radial gradient for vortex effect */}
        <radialGradient id="vortex-gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ff00e5" stopOpacity="1" />
          <stop offset="40%" stopColor="#ff6b00" stopOpacity="1" />
          <stop offset="70%" stopColor="#00d4ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Stronger glow for center */}
        <filter id="strong-glow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer ring */}
      <circle cx="100" cy="100" r="90" stroke="url(#vortex-gradient)" strokeWidth="3" fill="none" opacity="0.3" />

      {/* Middle ring */}
      <circle cx="100" cy="100" r="70" stroke="url(#vortex-gradient)" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Spiral vortex paths */}
      <g filter="url(#glow)">
        {/* Outer spiral arms */}
        <path
          d="M 100 10 Q 150 30 170 80 Q 180 130 150 170 Q 100 190 50 170 Q 20 130 30 80 Q 50 30 100 10"
          stroke="#00d4ff"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 100 20 Q 140 35 160 75 Q 170 120 145 160 Q 100 180 55 160 Q 30 120 40 75 Q 60 35 100 20"
          stroke="#ff00e5"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 100 30 Q 130 40 150 70 Q 160 110 140 150 Q 100 170 60 150 Q 40 110 50 70 Q 70 40 100 30"
          stroke="#a855f7"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
      </g>

      {/* Center vortex core */}
      <g filter="url(#strong-glow)">
        <circle cx="100" cy="100" r="35" fill="url(#vortex-gradient)" opacity="0.9" />
        <circle cx="100" cy="100" r="25" fill="#00d4ff" opacity="0.8" />
        <circle cx="100" cy="100" r="15" fill="#ff00e5" opacity="0.9" />
        <circle cx="100" cy="100" r="8" fill="#ffffff" opacity="1" />
      </g>

      {/* Energy particles */}
      <circle cx="100" cy="40" r="3" fill="#00d4ff" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="100" r="3" fill="#ff00e5" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="160" r="3" fill="#a855f7" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="100" r="3" fill="#ff6b00" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function LogoMark({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="mark-gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#ff00e5" />
          <stop offset="60%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#mark-gradient)" opacity="0.9" />
      <circle cx="50" cy="50" r="30" fill="#00d4ff" opacity="0.8" />
      <circle cx="50" cy="50" r="15" fill="#ff00e5" opacity="0.9" />
      <circle cx="50" cy="50" r="6" fill="#ffffff" />
    </svg>
  );
}
