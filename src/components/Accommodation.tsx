const accommodationByLocation = [
  {
    location: "Chiang Mai",
    stays: [
      {
        name: "Vdara Resort and Spa (Vdara Pool Resort Spa Chiang Mai)",
        mapsUrl: "https://maps.app.goo.gl/LRDrTCKXZiCkENNh7?g_st=ic",
      },
      {
        name: "Pimlada Hotel (โรงแรมพิมพ์ลดา)",
        mapsUrl: "https://maps.app.goo.gl/i4E5bTPMDe2pc15r5?g_st=ic",
      },
    ],
  },
  {
    location: "Bo Kaew",
    stays: [
      {
        name: "ร้านอาหารพรสุดา / Pornsuda Restaurant",
        phone: "081-960-7453",
        mapsUrl: "https://maps.app.goo.gl/HyYQpjSg7AWBeBsg6?g_st=ic",
      },
      {
        name: "Karin Homestay",
        contact: "ก้อย (Koi)",
        phone: "08-5719-9607",
        mapsUrl: "https://maps.app.goo.gl/xXjMKaxiMG7VdSuD6?g_st=ic",
      },
    ],
  },
]

export default function Accommodation() {
  return (
    <section id="accommodation" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="section-title text-center">Accommodation</h2>
        <div className="w-16 h-px bg-sage-300 mx-auto mb-12" />

        <div className="space-y-8">
          {accommodationByLocation.map((group) => (
            <div
              key={group.location}
              className="bg-champagne-50 rounded-lg p-6 md:p-8 shadow-sm border border-champagne-100"
            >
              <h3 className="text-xl md:text-2xl font-serif text-stone-700 mb-4">
                {group.location}
              </h3>
              <ul className="space-y-4">
                {group.stays.map((stay) => (
                  <li key={stay.name} className="text-stone-600">
                    <p className="text-base md:text-lg">{stay.name}</p>
                    {"contact" in stay && stay.contact && (
                      <p className="text-sm md:text-base text-stone-500">
                        Contact: {stay.contact}
                      </p>
                    )}
                    {"phone" in stay && stay.phone && (
                      <a
                        href={`tel:${stay.phone.replace(/[^0-9+]/g, "")}`}
                        className="block text-sage-700 hover:text-sage-800 underline underline-offset-4 transition-colors"
                      >
                        {stay.phone}
                      </a>
                    )}
                    <a
                      href={stay.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-700 hover:text-sage-800 underline underline-offset-4 transition-colors"
                    >
                      Google Maps
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-600 mt-10">
          Contact Graham if you have any questions.
        </p>
      </div>
    </section>
  )
}

