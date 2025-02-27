import { Button } from "../ui/button";

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

const BannerCard: React.FC<BannerProps> = ({
  title,
  description,
  buttonText,
  backgroundImage,
}) => {
  return (
    <div
      className="col-span-1 md:col-span-2 overflow-hidden relative bg-cover bg-center rounded-lg bg-[#1A1A1A]"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute  p-6 flex justify-between">
        <div className="flex flex-col gap-[18px]">
          <h4 className="font-bold text-xl mb-2 text-white">{title}</h4>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
        </div>
        <div className="text-center">
          <Button className="px-8 bg-gradient-to-r from-brand-500 to-brand-900 text-white">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
