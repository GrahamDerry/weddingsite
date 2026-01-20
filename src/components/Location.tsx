import { config } from '../config'

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Location</h2>
          <div className="w-16 h-px bg-sage-300 mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg bg-stone-100 aspect-[4/3]">
              <iframe
                src={config.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding venue location"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Venue Details */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="bg-champagne-50 rounded-lg p-8 md:p-10 shadow-sm">
              {/* Venue Name */}
              <h3 className="text-2xl md:text-3xl font-serif text-stone-800 mb-4">
                {config.venueName}
              </h3>

              {/* Address */}
              <address className="not-italic text-stone-600 text-lg leading-relaxed mb-6">
                {config.address}
              </address>

              {/* Coordinates */}
              <p className="text-sm text-stone-400 mb-6 font-mono">
                {config.lat}, {config.lng}
              </p>

              {/* Open in Maps Link */}
              <a
                href={config.googleMapsOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Open in Google Maps
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

