import { config } from '../config'
import couplePhoto from '/couple-photo.png'

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-stone-800 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Photo */}
        <div className="mb-8">
          <img
            src={couplePhoto}
            alt="Graham and Mint at a lantern festival"
            className="mx-auto w-full max-w-md rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Message */}
        <p className="text-lg md:text-xl font-serif italic text-stone-400 mb-8">
          {config.footerMessage}
        </p>

        {/* Couple names */}
        <p className="text-sm text-stone-500 tracking-widest uppercase">
          {config.coupleNames}
        </p>
      </div>
    </footer>
  )
}

