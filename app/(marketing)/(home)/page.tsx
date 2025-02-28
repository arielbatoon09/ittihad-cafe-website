import HeroBanner from "@/components/content/HomePage/HeroBanner";
import WhyChoose from "@/components/content/HomePage/WhyChoose";
import Services from "@/components/content/HomePage/Services";
import GamingHub from "@/components/content/HomePage/GamingHub";
import Testimonial from "@/components/content/HomePage/Testimonial";
import FAQ from "@/components/common/FAQ";
import Banner from "@/components/content/HomePage/Banner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WhyChoose />
      <Services />
      <GamingHub />
      <Testimonial />
      <FAQ />
      <Banner />
    </>
  );
}
