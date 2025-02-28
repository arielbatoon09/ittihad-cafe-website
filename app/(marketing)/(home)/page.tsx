import HeroBanner from "@/components/HomePage/HeroBanner";
import WhyChoose from "@/components/HomePage/WhyChoose";
import Services from "@/components/HomePage/Services";
import GamingHub from "@/components/HomePage/GamingHub";
import Testimonial from "@/components/HomePage/Testimonial";
import FAQ from "@/components/common/FAQ";
import Banner from "@/components/HomePage/Banner";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 mt-20">
      <HeroBanner />
      <WhyChoose />
      <Services />
      <GamingHub />
      <Testimonial />
      <FAQ />
      <Banner />
    </main>
  );
}
