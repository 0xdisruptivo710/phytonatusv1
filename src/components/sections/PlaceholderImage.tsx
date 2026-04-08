interface PlaceholderImageProps {
  label: string
  className?: string
  aspectRatio?: string
}

export function PlaceholderImage({
  label,
  className = "",
  aspectRatio = "aspect-video",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`shimmer w-full ${aspectRatio} rounded-xl flex items-center justify-center text-stone-400 text-sm font-medium border border-stone-200 ${className}`}
      style={{
        background: "linear-gradient(135deg, #F5F0E8 0%, #EDE7DD 50%, #F5F0E8 100%)",
      }}
    >
      {label}
    </div>
  )
}
