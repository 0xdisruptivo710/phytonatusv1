interface AnimatedHoneycombProps {
  id?: string
  className?: string
  animate?: boolean
}

export function AnimatedHoneycomb({
  id = "honeycomb",
  className = "absolute inset-0 size-full opacity-[0.03]",
  animate = true,
}: AnimatedHoneycombProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2)"
        >
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            style={
              animate
                ? { strokeDasharray: 400, animation: "honeycomb-draw 3s ease forwards" }
                : undefined
            }
          />
          <path
            d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            style={
              animate
                ? { strokeDasharray: 400, animation: "honeycomb-draw 3s ease 0.5s forwards" }
                : undefined
            }
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
