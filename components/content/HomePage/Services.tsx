import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BannerCard from "../../common/BannerCard";
import { Computer, Radio, University, MicVocal } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card className="bg-transparent border border-gray-800 text-white">
      <CardHeader className="pt-6">
        <div className="flex items-center mb-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mr-3"
            style={{
              backgroundImage: `url('/media/ring-ittihad-cafe.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {icon}
          </div>
          <CardTitle className="font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Computer className="text-brand-500 size-5" />,
      title: "Premium Gaming Cafe",
      description:
        "Play like a pro with high-performance gaming PCs, ultra-fast internet, and an optimized setup for both casual and competitive gamers.",
    },
    {
      icon: <Radio className="text-brand-500 size-5" />,
      title: "Personalized Streaming Hub",
      description:
        "Aspiring streamer or content creator? Our dedicated streaming setup includes high-quality cameras, professional mics, and studio lighting.",
    },
    {
      icon: <University className="text-brand-500 size-5" />,
      title: "Snack Bar & Billiard Lounge",
      description:
        "Recharge with a selection of delicious snacks and free coffee. Challenge your friends to a game of billiards while you take a break from gaming.",
    },
    {
      icon: <MicVocal className="text-brand-500 size-5" />,
      title: "Billiards & Karaoke Lounge",
      description:
        "Step away from the screen and enjoy some fun with friends. Play a round of billiards or belt out your favorite songs in our karaoke lounge.",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">
            WHAT WE OFFER
          </p>
          <h2 className="text-white text-3xl font-bold mb-2">
            Services That Take Your
          </h2>
          <h3 className="text-brand-500 text-3xl font-bold">
            Gaming Experience to the Next Level
          </h3>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard
            icon={services[3].icon}
            title={services[3].title}
            description={services[3].description}
          />

          {/* Ultimate Destination Banner */}
          <div className="md:col-span-2">
            <BannerCard
              title="The Ultimate Destination for Gamers "
              description="Whether you're a hardcore competitor, a casual player, or a content creator, <br/> <span className='text-brand-500'>Ittihad Internet Cafe</span> is your go-to hub for gaming entertainment and<br/> community!"
              buttonText="Explore Our Services"
              backgroundImage="/media/banner-background1.jpg"
              className="overflow-hidden bg-zinc-800 border-zinc-70 relative border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
