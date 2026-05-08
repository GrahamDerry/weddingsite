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
        name: "Bo Kaeo Legend",
        mapsUrl: "https://maps.app.goo.gl/GayMSSU1GeRwLC6j8?g_st=ic",
      },
      {
        name: "Yellow Mango House (บ่านมะม่วงหลวง)",
        mapsUrl: "https://maps.app.goo.gl/cLsvq94QZyF14Wqu8?g_st=ic",
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

