import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckMark } from "@/public/icons/icons";
const WhyChoose = () => {
    const features = [
        "Exclusive Live Streaming Stations",
        "High-Performance Gaming PCs",
        "Ultra-Fast Internet",
        "Premium Gaming Environment",
      ];
  return (
    <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center">WHY CHOOSE US?</h2>
          <div className="text-center mb-8 py-6">
            <h3 className="text-white text-2xl font-medium mb-2">
              Here's Why Choose
            </h3>
            <h2 className="text-brand-400 text-3xl font-bold">
              Ittihad Internet Cafe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/media/why-us-gaming-cafe.jpg"
                width={400}
                height={400}
                alt="Ittihad Internet Cafe Interior"
                className="w-full h-auto"
              />
            </div>
            {/* Right side - Content */}
            <div>
              <h3 className="text-xl font-bold mb-3">
                Cebu's Ultimate Internet Cafe with Live Streaming
              </h3>
              <p className="text-gray-400 mb-6">
                At Ittihad Internet Cafe, we go beyond gaming and bring your
                gameplay to the world. As the only internet cafe in Cebu with
                broadcasting capabilities, we provide the ultimate setup for
                streamers.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 h-5 bg-brand-400 rounded-full flex items-center justify-center mr-3">
                      <CheckMark />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="px-8 bg-gradient-to-r mt-8 from-brand-500 to-brand-900 text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

  )
}

export default WhyChoose