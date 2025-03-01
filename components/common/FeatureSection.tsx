import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckMark, CheckIcon } from "@/public/icons/icons";
import Link from "next/link";

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
  tagTitle:string;
  imagePosition:string;
  pathname:string;
}
export const highlightText = (text: string): string => {
  const regex = new RegExp(
    `<span className='text-white'>(.*?)<\/span>`,
    "g"
  );
  return text.replace(regex, `<span class='text-white'>$1</span>`);
};
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
  tagTitle,
  imagePosition,
  pathname
}) => {
  return (
    <section className="bg-black text-white py-16 max-w-screen-xl mx-auto px-6">
      <div className="container mx-auto">
      {sectionTitle && (<>
        <p className="text-gray-400 uppercase text-center tracking-wider text-sm mb-2">
          {sectionTitle}
        </p>
      </>)}
      {sectionSubTitle && title && (<>
        <div className="text-center mb-8 py-6">
          <h3 className="text-white text-2xl font-medium mb-2">
            {sectionSubTitle}
          </h3>
          <h2 className="text-brand-500 text-3xl font-bold" dangerouslySetInnerHTML={{__html: highlightText(title)}}/>
        </div>
      </>)}
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`relative overflow-hidden rounded-lg ${imagePosition !== 'left' ? 'md:order-last' : ''}`}>
            <Image
              src={imageSrc}
              width={500}
              height={500}
              alt={imageAlt}
              className="w-full md:min-h-[500px] object-cover"
            />
          </div>

          <div>
            {tagTitle && (<>
              <div className="mb-6">
            <Button className="flex items-center gap-[12px] text-[#FFFFFF] text-[16px] bg-[#F4BC3B1A] hover:bg-[#F4BC3B1A] p-6 rounded-full w-auto">
              <CheckIcon />
              <span>{tagTitle}</span>
            </Button>
          </div>
            </>)}
         
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
            <Button asChild className="px-8 bg-gradient-to-r mt-8 from-brand-500 to-brand-900 text-white">
            <Link href={pathname}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
