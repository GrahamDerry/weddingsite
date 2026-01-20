import { config } from '../config'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-champagne-100/50 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blush-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Decorative element */}
        <div className="mb-8">
          <img 
            src="/PendantMinimal.png" 
            alt="" 
            className="w-32 h-32 mx-auto"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-stone-800 mb-4 tracking-tight">
          {config.coupleNames}
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-stone-600 mb-3 italic">
          {config.tagline}
        </p>

        {/* Location */}
        <p className="text-base sm:text-lg text-stone-500 mb-10 tracking-wide">
          {config.location}
        </p>

        {/* Decorative line */}
        <div className="w-24 h-px bg-sage-300 mx-auto mb-10" />

        {/* CTA Button */}
        <a
          href={config.rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg"
        >
          RSVP
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-stone-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

