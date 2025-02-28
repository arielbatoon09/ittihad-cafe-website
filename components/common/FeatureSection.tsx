import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckMark } from "@/public/icons/icons";

interface FeatureSectionProps {
  sectionTitle: string;
  sectionSubTitle: string;
  subTitle: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  features: string[];
  buttonText: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  sectionTitle,
  sectionSubTitle,
  title,
  imageSrc,
  imageAlt,
  subTitle,
  description,
  features,
  buttonText,
}) => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto">
        <p className="text-gray-400 uppercase text-center tracking-wider text-sm mb-2">
          {sectionTitle}
        </p>
        <div className="text-center mb-8 py-6">
          <h3 className="text-white text-2xl font-medium mb-2">
            {sectionSubTitle}
          </h3>
          <h2 className="text-brand-500 text-3xl font-bold">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              width={400}
              height={400}
              alt={imageAlt}
              className="w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">{subTitle}</h3>
            <p className="text-gray-400 mb-6">{description}</p>

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
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
