
import { formatContentTitle } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import InteractiveCarousel from "@/components/common/InteractiveCarousel";

const imageSets: Record<string, { image: string; title: string }[]> = {
  "Internet Cafe": [
    { image: "/media/why-us-gaming-cafe.jpg", title: "ITTIHAD INTERNET CAFE" },
    { image: "/media/ittihad-feature-services1.jpg", title: "" },
    { image: "/media/gaming-hub-image4.jpg", title: "GAMING ZONE" },
    { image: "/media/ittihad-banner-services1.jpg", title: "VIP STATIONS" },
    { image: "/media/why-us-gaming-cafe.jpg", title: "STREAMING SETUP" },
    { image: "/media/ittihad-feature-services1.jpg", title: "REFRESHMENTS" },
    { image: "/media/gaming-hub-image4.jpg", title: "COMPETITION AREA" },
    { image: "/media/ittihad-banner-services1.jpg", title: "LOUNGE" },
    { image: "/media/why-us-gaming-cafe.jpg", title: "MEETING ROOM" },
    { image: "/media/ittihad-feature-services1.jpg", title: "TECH SUPPORT" },
  ],
  "Snack Bar and Biliards": [
    { image: "/media/why-us-gaming-cafe.jpg", title: "ITTIHAD INTERNET CAFE" },
    { image: "/media/ittihad-feature-services1.jpg", title: "" },
    { image: "/media/gaming-hub-image4.jpg", title: "GAMING ZONE" },
    { image: "/media/ittihad-banner-services1.jpg", title: "VIP STATIONS" },
    { image: "/media/why-us-gaming-cafe.jpg", title: "STREAMING SETUP" },
  ],
  "Karaoke and Rooftop Billiards":[
    { image: "/media/why-us-gaming-cafe.jpg", title: "ITTIHAD INTERNET CAFE" },
    { image: "/media/ittihad-feature-services1.jpg", title: "" },
    { image: "/media/gaming-hub-image4.jpg", title: "GAMING ZONE" },
    { image: "/media/ittihad-banner-services1.jpg", title: "VIP STATIONS" },
    { image: "/media/why-us-gaming-cafe.jpg", title: "STREAMING SETUP" },
    { image: "/media/ittihad-feature-services1.jpg", title: "REFRESHMENTS" },
    { image: "/media/gaming-hub-image4.jpg", title: "COMPETITION AREA" },
    { image: "/media/ittihad-banner-services1.jpg", title: "LOUNGE" },
    { image: "/media/why-us-gaming-cafe.jpg", title: "MEETING ROOM" },
    { image: "/media/ittihad-feature-services1.jpg", title: "TECH SUPPORT" },
  ]
};

interface CarouselProps {
  pathname: string; 
}

export default function Carousel({ pathname }: CarouselProps) {
  const formattedTitle = formatContentTitle(pathname); 

  const cafeImages = imageSets[formattedTitle] || [];

  return (
    <section className="max-w-screen-xl mx-auto px-6 bg-black text-white mt-24">
      <div className="container mx-auto py-6">
        <div className="flex items-center gap-2 text-lg">
          Our Services
          <span className="flex gap-[5px] items-center text-gray-500">
            <ChevronRight className="size-4" /> {formattedTitle}
          </span>
        </div>
      </div>
      <div className="container mx-auto pb-12">
        <Card className="bg-zinc-900 border-none rounded-lg">
          <CardContent className="p-6">
            <InteractiveCarousel cafeImages={cafeImages} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}