import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

// max-w-screen-xl mx-auto px-6 
const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden h-auto bg-[linear-gradient(111deg,rgba(1,1,1,1)_34%,rgba(74,66,15,1)_80%,rgba(78,69,16,1)_54%,rgba(242,216,49,1)_100%)]">
      <div className="h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full items-center relative">
          {/* Left Content */}
          <div className="lg:max-w-2xl ml-auto px-6 lg:pl-14 lg:pr-20 space-y-6 pt-34 lg:pt-0 text-center lg:text-left">
            <div
              className={cn(
                "inline-block group rounded-full border bg-transparent text-sm text-white transition-all ease-in",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white">
                <span>✨ Top-Tier Gaming & Cozy Spot</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white">
              The First Luxury Gaming Cafe in Cebu
            </h1>
            <p className="text-gray-300">
              High-performance PCs, ultra-fast internet, premium snacks, billiards, and
              karaoke—all in one spot! Whether you're here to compete, chill, or just have fun, we've got you covered.
            </p>
            <div className="flex items-center flex-wrap lg:flex-nowrap gap-4">
              <Button className="w-full lg:w-auto border border-brand-500 hover:bg-brand-800 text-white px-8 rounded-full bg-[#000]">
                Explore Our Services
              </Button>
              <Button className="w-full lg:w-auto px-8 bg-gradient-to-r from-brand-500 to-brand-900 text-white">
                Book Now
              </Button>
            </div>
          </div>

          {/* Play Button - Stays Centered Regardless of Zoom */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-screen object-cover">
              <HeroVideoDialog
                className="block border-none"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="/media/hero-banner-gaming-cafe.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
