import Card from "@/components/common/Card";
import BannerCard from "@/components/common/BannerCard";


const Services = () => {
    const services = [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          ),
          title: "Premium Gaming Cafe",
          description:
            "Play like a pro with high-performance gaming PCs, ultra-fast internet, and an optimized setup for both casual and competitive gamers.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          ),
          title: "Personalized Streaming Hub",
          description:
            "Aspiring streamer or content creator? Our dedicated streaming setup includes high-quality cameras, professional mics, and studio lighting.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          ),
          title: "Snack Bar & Billiard Lounge",
          description:
            "Recharge with a selection of delicious snacks and free coffee. Challenge your friends to a game of billiards while you take a break from gaming.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
          ),
          title: "Billiards & Karaoke Lounge",
          description:
            "Step away from the screen and enjoy some fun with friends. Play a round of billiards or belt out your favorite songs in our karaoke lounge.",
        },
      ];
  return (
    <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">
              WHAT WE OFFER
            </p>
            <h2 className="text-white text-3xl font-bold mb-2">
              Services That Take Your
            </h2>
            <h3 className="text-brand-400 text-3xl font-bold">
              Gaming Experience to the Next Level
            </h3>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {services.slice(0, 3).map((service, index) => (
              <Card key={index}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10  rounded-full flex items-center justify-center mr-3"   style={{ backgroundImage: `url('/media/ring-ittihad-cafe.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    {service.icon}
                  </div>
                  <h4 className="font-bold">{service.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10  rounded-full flex items-center justify-center mr-3"   style={{ backgroundImage: `url('/media/ring-ittihad-cafe.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  {services[3].icon}
                </div>
                <h4 className="font-bold">{services[3].title}</h4>
              </div>
              <p className="text-gray-400 text-sm">{services[3].description}</p>
            </Card>

            {/* Ultimate Destination Banner */}
            <BannerCard
              title="The Ultimate Destination for Gamers"
              description="Whether you're a hardcore competitor, a casual player, or a content creator, Ittihad Internet Cafe is your go-to hub for gaming entertainment and community!"
              buttonText="Explore Our Services"
              backgroundImage="/media/banner-background1.jpg"
            />
          </div>
        </div>
      </section>

  )
}

export default Services