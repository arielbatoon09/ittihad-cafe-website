import HeroBanner from "@/components/HomePage/HeroBanner";
import WhyChoose from "@/components/HomePage/WhyChoose";
import Services from "@/components/HomePage/Services";
import GamingHub from "@/components/HomePage/GamingHub";
import Testimonial from "@/components/HomePage/Testimonial";
import FrequentlyAsk from "@/components/HomePage/FrequentlyAsk";
import Banner from "@/components/HomePage/Banner";

export default function Home() {

  return (
    <>
    <HeroBanner/>
    <WhyChoose/>
    <Services/>
    <GamingHub/>
    <Testimonial/>
    <FrequentlyAsk/>
    <Banner/>
    </>
  );
}
