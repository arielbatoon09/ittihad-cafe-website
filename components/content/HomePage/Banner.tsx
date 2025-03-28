import BannerCard from "@/components/common/BannerCard";

export default function Banner (){
  const bannerData = {
    title:
      "Unleash the Ultimate Gaming Experience<br/> at <span className='text-brand-500'>Ittihad Internet Cafe</span>",
    description:
      "Step into the future of gaming with high-performance PCs, fast internet, and a premium lounge. Whether you're here to compete, chill,<br/> or have fun with friends, we’ve got everything you need.",
    buttonText: "Get in Touch",
    backgroundImage: "/media/banner-background2.jpg",
    imageSize: "w-[200px] h-[200px]",
    className:
      "overflow-hidden bg-zinc-800 border-zinc-70 relative border-none max-w-screen-xl mx-auto px-6",
  };

  return (
    <>
      <BannerCard {...bannerData} />
    </>
  );
};

