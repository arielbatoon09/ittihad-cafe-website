import Image from "next/image";
import { Button } from "../ui/button";
import { CheckMark } from "@/public/icons/icons";

const GamingHub = () => {
  const features = [
    {
      title: "Elite Gaming Setups",
      description:
        "High-end PCs, ultra-responsive peripherals, and lighting customized for top-tier performance.",
    },
    {
      title: "Exclusive Unwind Lounge",
      description:
        "The only gaming cafe in Cebu with a dedicated relaxation area, keeping players refreshed.",
    },
    {
      title: "Live Streaming Studio",
      description:
        "Equipped for content creators to broadcast their games to viewers in real-time.",
    },
    {
      title: "Beyond Just Gaming",
      description:
        "More than screens and PCs, we've created the full immersive entertainment experience.",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className="flex flex-col justify-center gap-[12px]">
            <p className="text-gray-400 text-sm mb-2">WHAT MAKES US UNIQUE?</p>
            <h2 className="text-3xl font-bold mb-6">
              A <span className="text-brand-500">Premium Gaming Hub</span>{" "}
              Designed
              <br />
              for the Ultimate Experience
            </h2>

            <div className="space-y-6 mb-8 grid grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <CheckMark />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-500">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="flex items-center space-x-2 p-6 text-white bg-[#1A1A1A] w-fit rounded-full">
              <span>Explore Our Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-2 h-2/3 ">
            {/* Main large image */}
            <div className="col-span-3 row-span-1 relative overflow-hidden rounded-lg">
              <Image
                width={300}
                height={300}
                src="/media/gaming-hub-image1.jpg"
                alt="Premium Gaming Hub Bar Area"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                width={300}
                height={300}
                src="/media/gaming-hub-image2.jpg"
                alt="Gaming Setup"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                width={300}
                height={300}
                src="/media/gaming-hub-image3.jpg"
                alt="Billiards Table"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                width={300}
                height={300}
                src="/media/gaming-hub-image4.jpg"
                alt="Gaming Setup Close-up"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingHub;
