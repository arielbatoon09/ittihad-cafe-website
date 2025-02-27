import { PlayButtonIcon, CheckIcon } from "@/public/icons/icons";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
const HeroBanner = () => {
 
  return (
    <section className="max-w-screen-xl mx-auto px-6 mt-20">
        <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[40px] bg-[linear-gradient(111deg,rgba(1,1,1,1)_34%,rgba(74,66,15,1)_53%,rgba(78,69,16,1)_54%,rgba(242,216,49,1)_100%)] w-full">
          <div className="flex flex-col justify-center py-8">
            <div className="mb-6">
              <Button className="flex items-center gap-[12px] text-[#FFFFFF] text-[16px] bg-[#F4BC3B1A] p-6 rounded-full w-auto">
                <CheckIcon />
                <span> Top-Tier Gaming & Cozy Spot!</span>
              </Button>
            </div>

            <h2 className="text-[40px] font-bold mb-4">
              The First Luxury Gaming
              <br />
              Cafe in Cebu
            </h2>

            <p className="text-gray-400 mb-8 ">
              High-performance PCs, ultra-fast internet, premium snacks, sofas,
              and karaoke—all in one spot! Whether you're here to compete,
              chill, or just have fun, we've got you covered!
            </p>

            <div className="flex space-x-4">
              <Button className="border border-brand-500 text-white px-8 rounded-full bg-[#000]">
                Explore Our Services
              </Button>
              <Button className="px-8 bg-gradient-to-r from-brand-500 to-brand-900 text-white">
                Book Now
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute  md:left-[-30px] top-1/2 -translate-y-1/2 z-20">
              <PlayButtonIcon />
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full h-full relative">
              <Image
                src="/media/hero-banner-gaming-cafe.jpg"
                alt="Ittihad Gaming Cafe Interior"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroBanner