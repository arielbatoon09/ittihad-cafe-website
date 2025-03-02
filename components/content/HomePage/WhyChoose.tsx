import FeatureSection from "@/components/common/FeatureSection";

export default function WhyChoose() {
  return (
    <div>
      <FeatureSection
        sectionTitle="WHY CHOOSE US?"
        sectionSubTitle="Here's Why Choose"
        title="Ittihad Internet Cafe"
        imageSrc="/media/why-us-gaming-cafe.jpg"
        imageAlt="Ittihad Internet Cafe Interior"
        subTitle="Cebu’s Ultimate Internet Cafe with Live Streaming"
        description="At Ittihad Internet Cafe, we go beyond gaming and bring your gameplay to the world. As the only internet cafe in Cebu with broadcasting capabilities, we provide the ultimate setup for streamers."
        features={[
          "Exclusive Live Streaming Stations",
          "High-Performance Gaming PCs",
          "Ultra-Fast Internet",
          "Premium Gaming Environment",
        ]}
        buttonText="Learn More"
        tagTitle=""
        imagePosition="left"
        pathname="/services/internet-cafe"
      />
    </div>
  );
}
