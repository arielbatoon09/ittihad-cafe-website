import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BannerCardProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  className?: string;
  textSize?: string;
  imageSize?: string;
}

export const highlightText = (text: string): string => {
  const regex = new RegExp(
    `<span className='text-brand-500'>(.*?)<\/span>`,
    "g"
  );
  return text.replace(regex, `<span class='text-brand-500'>$1</span>`);
};

const BannerCard: React.FC<BannerCardProps> = ({
  title,
  description,
  buttonText,
  backgroundImage,
  className = "",
  textSize = "",
  imageSize = "",
}) => {
  return (
    <Card
      className={`col-span-2 overflow-hidden bg-zinc-800 border-zinc-70 relative border-none h-full ${className}`}
    >
      <div
        className={`absolute inset-0 z-0 ${imageSize}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
      />
      <CardContent className="relative z-10 px-6 py-[26px] h-full flex flex-col">
        <div className="md:flex justify-between items-center ">
          <CardTitle
            className={`${textSize} font-bold mb-2 text-white`}
            dangerouslySetInnerHTML={{ __html: highlightText(title) }}
          />

          <Button className="px-8 bg-gradient-to-r from-brand-500 to-brand-900 text-white">
            {buttonText}
          </Button>
        </div>
        <CardDescription
          className="text-gray-200 mt-[32px]"
          dangerouslySetInnerHTML={{ __html: highlightText(description) }}
        />
      </CardContent>
    </Card>
  );
};
export default BannerCard;
