import Carousel from "@/components/content/ServicesPage/Carousel";
import ExploreArena from "@/components/common/ExploreArena";
import FAQ from "@/components/common/FAQ";
import IttihadMembership from "@/components/content/ServicesPage/IttihadMemberShip";
import ContactPage from "@/components/content/ServicesPage/Contact";

export default function Page({ params }: { params: { name: string } }) {
  return (
    <>
    <Carousel name={params.name}/>
    <IttihadMembership name={params.name}/>
    <ContactPage/>
    <FAQ/>
    <ExploreArena/>
    </>
  );
}