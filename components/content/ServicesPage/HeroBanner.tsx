export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/media/ittihad-banner-services1.jpg')",
        filter: "brightness(80%)", 
      }}
    ></div>
    <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
  
    <div className="relative z-20 max-w-3xl mx-auto px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
      <p className="text-lg md:text-xl text-white/90 leading-relaxed">
        Welcome to Premier Interior Care, where gaming meets luxury. Whether you're here to dominate in esports, 
        stream your gameplay, or just unwind with friends, we've got you covered.
      </p>
    </div>
  </section>
  )
}

