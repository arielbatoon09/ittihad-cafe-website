import BannerCard from "@/components/common/BannerCard";

const Banner = () => {
  const bannerData = {
    title: "Unleash the Ultimate Gaming Experience at Ittihad Internet Cafe",
    description: "Step into the future of gaming with high-performance PCs, fast internet, and a premium lounge. Whether you're here to compete, chill, or have fun with friends, we’ve got everything you need.",
    buttonText: "Book Your Spot Now",
    backgroundImage: "/media/banner-background1.jpg",
  };

  return <>
  <BannerCard {...bannerData}/>
  </>;
};

export default Banner;
