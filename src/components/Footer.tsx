import { config } from '../config'

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-stone-800 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Decorative pendant */}
        <div className="mb-6">
          <img 
            src="/PendantMinimal.png" 
            alt="" 
            className="w-16 h-16 mx-auto"
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

