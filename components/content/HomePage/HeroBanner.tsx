import { cn } from "@/lib/utils";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { ButtonV2 } from "@/components/magicui/interactive-hover-button";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden h-auto bg-[linear-gradient(111deg,rgba(1,1,1,1)_34%,rgba(74,66,15,1)_80%,rgba(78,69,16,1)_54%,rgba(242,216,49,1)_100%)]">
      <div className="h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full items-center relative">
          {/* Left Content */}
          <div className="lg:max-w-2xl ml-auto px-6 lg:pl-14 lg:pr-20 space-y-6 pt-34 lg:pt-0 text-center lg:text-left">
            <div
              className={cn(
                "inline-block group rounded-full border bg-transparent text-sm text-white transition-all ease-in"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white">
                <span>✨ Only in Cebu, City</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white">
              The First Luxury Gaming Cafe in Cebu
            </h1>
            <p className="text-gray-300">
              Enjoy high-performance PCs, ultra-fast internet, tasty snacks, billiards, and karaoke all in one place. Compete, relax, or just have fun with us.
            </p>
            <div className="flex items-center flex-wrap lg:flex-nowrap gap-4">
              <ButtonV2 className="w-full lg:w-auto">Get Direction</ButtonV2>
              <ButtonV2 variant="secondary" className="w-full lg:w-auto">Explore Services</ButtonV2>
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
}
