import Bar from "@/components/ServicesPage/Bar";
import ExploreArena from "@/components/ServicesPage/ExploreArena";
import HeroBanner from "@/components/ServicesPage/HeroBanner";
import InternetCafe from "@/components/ServicesPage/InternetCafe";
import Karaoke from "@/components/ServicesPage/Karaoke";


export default function Services() {
  return (
    <main className=" mt-20">
      <HeroBanner/>
      <div className="max-w-screen-xl mx-auto px-6">
      <InternetCafe/>
      <Bar/>
      <Karaoke/>
      </div>
      <ExploreArena/>
    </main>
  );
}