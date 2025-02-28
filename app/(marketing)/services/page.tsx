import Bar from "@/components/content/ServicesPage/Bar";
import ExploreArena from "@/components/content/ServicesPage/ExploreArena";
import HeroBanner from "@/components/content/ServicesPage/HeroBanner";
import InternetCafe from "@/components/content/ServicesPage/InternetCafe";
import Karaoke from "@/components/content/ServicesPage/Karaoke";


export default function Services() {
  return (
    <main className=" mt-20">
      <HeroBanner/>
    
      <InternetCafe/>
      <Bar/>
      <Karaoke/>
     
      <ExploreArena/>
    </main>
  );
}