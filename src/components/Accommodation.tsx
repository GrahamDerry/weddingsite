export default function Accommodation() {
  return (
    <section id="accommodation" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Title */}
        <h2 className="section-title">Accommodation</h2>
        <div className="w-16 h-px bg-sage-300 mx-auto mb-12" />

        {/* Coming Soon Card */}
        <div className="bg-champagne-50 rounded-lg p-8 md:p-12 shadow-sm border border-champagne-100">
          {/* Icon */}
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-champagne-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-serif text-stone-700 mb-4">
            Coming soon
          </h3>

          {/* Description */}
          <p className="text-stone-500 text-lg leading-relaxed">
            We'll share nearby accommodation recommendations soon.
          </p>
        </div>
      </div>
    </section>
  )
}

