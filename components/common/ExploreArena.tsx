import { Button } from "@/components/ui/button";

import Image from "next/image";
import BannerCard from "./BannerCard";
export default function ExploreArena() {
  const bannerData = {
    title: "Join the Arena. Invest Today.",
    description:
      "This is your chance to be part of a high-demand, rapidly growing market. Invest in a future-proof venture that blends premium <br/> entertainment with lucrative opportunities.",
    buttonText: "Join Our Arena",
    backgroundImage: "/media/banner-background2.jpg",
    imageSize: "w-[200px] h-[200px]",
    className: "bg-transparent",
    setOpacity: "true",
  };

  return (
    <section className="relative  w-full flex items-center bg-black py-24">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/media/ittihad-banner-services2.jpg')",

          filter: "brightness(80%)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-20 container mx-auto gap-[12px] flex flex-col  md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3 px-6 ">
            <div className="bg-black/80 rounded-lg inline-block">
              <Image
                src="/media/ittihad_cafe_logo-services.jpg"
                alt="Seahorse Logo"
                width={270}
                height={270}
                className="w-[270px] h-[270px] object-cover "
              />
            </div>
          </div>

          <div className="w-full text-left px-6 md:px-0">
            <div className="mb-6">
              <Button className="flex items-center gap-[12px] text-[#FFFFFF] text-[16px] bg-[#F4BC3B1A] hover:bg-[#F4BC3B1A] p-6 rounded-full w-auto">
                <span>Join, Play, and Invest</span>
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Be Part of the Future of Gaming & Entertainment
            </h1>
            <p className="text-white/80">
              The most sophisticated gaming destination in the region, offering
              premium services for gaming pros, esports aspirants, and casual
              gamers. With state-of-the-art services and expert staff,
              experience the next level in gaming excellence.
            </p>
          </div>
        </div>
        <div className="px-6 mt-[40px]">
          <BannerCard {...bannerData} />
        </div>
      </div>
    </section>
  );
}
