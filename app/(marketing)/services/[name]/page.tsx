import Carousel from "@/components/content/ServicesPage/Carousel";
import ExploreArena from "@/components/common/ExploreArena";
import FAQ from "@/components/common/FAQ";
import IttihadMembership from "@/components/content/ServicesPage/IttihadMemberShip";
import ContactPage from "@/components/content/ServicesPage/Contact";

export default async function Page({ params }: { params: { name: string } }) {
  const { name } = await params;

  return (
    <>
      <Carousel name={name} />
      <IttihadMembership name={name} />
      <ContactPage />
      <FAQ />
      <ExploreArena />
    </>
  );
}