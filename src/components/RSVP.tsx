import { config } from '../config'

export default function RSVP() {
  return (
    <section id="rsvp" className="py-20 md:py-28 bg-sage-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Title */}
        <h2 className="section-title">RSVP</h2>
        <div className="w-16 h-px bg-sage-300 mx-auto mb-8" />

        {/* Description */}
        <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed">
          Please RSVP using the form below.
        </p>

        {/* RSVP Button */}
        <a
          href={config.rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg"
        >
          RSVP on Google Forms
          <svg
            className="w-5 h-5 ml-2"
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
    </section>
  )
}

