export function EthiopianCrossPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.04] pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Repeating modern Ethiopian cross pattern in brand blue & cyan */}
      <defs>
        <pattern id="ethiopian-cross" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          {/* Central cross */}
          <rect x="17" y="5" width="6" height="30" fill="#0866F6" />
          <rect x="5" y="17" width="30" height="6" fill="#0866F6" />
          {/* Decorative corners */}
          <circle cx="10" cy="10" r="2" fill="#38BDF8" />
          <circle cx="30" cy="10" r="2" fill="#38BDF8" />
          <circle cx="10" cy="30" r="2" fill="#38BDF8" />
          <circle cx="30" cy="30" r="2" fill="#38BDF8" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#ethiopian-cross)" />
    </svg>
  );
}

export function EthiopianGeometricPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.06] pointer-events-none"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="geometric" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          {/* Geometric tessellation inspired by Ethiopian textiles */}
          <polygon points="25,0 50,12.5 50,37.5 25,50 0,37.5 0,12.5" fill="none" stroke="#0866F6" strokeWidth="0.8" />
          <circle cx="25" cy="25" r="2.5" fill="#38BDF8" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#geometric)" />
    </svg>
  );
}

export function EthiopianAccentLine() {
  return (
    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#00267B] via-[#0866F6] to-[#38BDF8]" />
  );
}
