const scheduleItems = [
  {
    timeTh: "07.00 น.",
    timeEn: "7:00 AM",
    eventTh: "พิธีทำบุญตักบาตร",
    eventEn: "Buddhist Alms-Giving Ceremony",
  },
  {
    timeTh: "08.00 น.",
    timeEn: "8:00 AM",
    eventTh: "พิธีแห่ขันหมาก",
    eventEn: "Traditional Khan Maak Parade",
  },
  {
    timeTh: "09.00 น.",
    timeEn: "9:00 AM",
    eventTh: "พิธีเจิมหน้าผาก คล้องมาลัย และสวมแหวนหมั้น",
    eventEn: "Forehead Blessing, Garland Presentation, and Ring Ceremony",
  },
  {
    timeTh: "10.00 น.",
    timeEn: "10:00 AM",
    eventTh: "พิธีเรียกขวัญ ผูกข้อมือ และอวยพรคู่บ่าวสาว",
    eventEn: "Traditional Lanna Blessing and Wrist-Tying Ceremony",
  },
  {
    timeTh: "11.30 น.",
    timeEn: "11:30 AM",
    eventTh: "ขอเชิญร่วมรับประทานอาหารกลางวัน",
    eventEn: "Lunch Reception",
  },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-champagne-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Schedule</h2>
          <div className="w-16 h-px bg-sage-300 mx-auto" />
        </div>

        <ol className="divide-y divide-sage-200/70">
          {scheduleItems.map((item) => (
            <li
              key={item.timeEn}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 py-7 md:py-9"
            >
              <div className="text-center md:text-right md:pr-10 lg:pr-14">
                <p className="font-serif italic text-sage-700 text-base md:text-lg mb-2 tracking-wide">
                  {item.timeTh}
                </p>
                <p className="font-serif text-stone-800 text-lg md:text-xl leading-relaxed">
                  {item.eventTh}
                </p>
              </div>

              <div className="text-center md:text-left md:border-l md:border-sage-200/70 md:pl-10 lg:pl-14">
                <p className="font-serif italic text-sage-700 text-base md:text-lg mb-2 tracking-wide">
                  {item.timeEn}
                </p>
                <p className="font-serif text-stone-800 text-lg md:text-xl leading-relaxed">
                  {item.eventEn}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
