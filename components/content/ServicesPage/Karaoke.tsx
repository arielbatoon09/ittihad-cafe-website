import FeatureSection from "../../common/FeatureSection";

export default function InternetCafe() {
  return (
    <FeatureSection
      sectionTitle=""
      sectionSubTitle=""
      title=""
      imageSrc="/media/ittihad-feature-services3.jpg"
      imageAlt="Enjoy the Cebu City View"
      subTitle="Enjoy the Cebu City View"
      description="Unwind in style at our rooftop karaoke and billiards lounge, where breathtaking views of Cebu City meet entertainment. Whether you’re belting out your favorite songs or enjoying a relaxed billiards game, this is the perfect place to chill, socialize, and create unforgettable moments."
      features={[
        "Panoramic Cebu City skyline views for a scenic night out",
        "Private karaoke rooms with high-fidelity sound systems",
        "Luxury billiards tables in an open-air setting",
        "Cozy lounge seating designed for comfort and style",
        "Drinks and snacks to keep the good vibes going",
      ]}
      buttonText="Get to know"
      tagTitle="Karaoke and Rooftop Billiards"
      imagePosition="left"
      pathname="/services/karaoke-and-rooftop-billiards"
    />
  );
}
