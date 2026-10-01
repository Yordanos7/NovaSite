export function EthiopianCrossPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-5 pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Repeating Ethiopian cross pattern */}
      <defs>
        <pattern id="ethiopian-cross" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          {/* Central cross */}
          <rect x="17" y="5" width="6" height="30" fill="#06752F" />
          <rect x="5" y="17" width="30" height="6" fill="#06752F" />
          {/* Decorative corners */}
          <circle cx="10" cy="10" r="2" fill="#F3D02D" />
          <circle cx="30" cy="10" r="2" fill="#F3D02D" />
          <circle cx="10" cy="30" r="2" fill="#F3D02D" />
          <circle cx="30" cy="30" r="2" fill="#F3D02D" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#ethiopian-cross)" />
    </svg>
  );
}

export function EthiopianGeometricPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-8 pointer-events-none"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="geometric" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          {/* Geometric tessellation inspired by Ethiopian textiles */}
          <polygon points="25,0 50,12.5 50,37.5 25,50 0,37.5 0,12.5" fill="none" stroke="#F3D02D" strokeWidth="0.5" />
          <circle cx="25" cy="25" r="3" fill="#06752F" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#geometric)" />
    </svg>
  );
}

export function EthiopianAccentLine() {
  return (
    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#EE334E] via-[#F3D02D] to-[#06752F]" />
  );
}
