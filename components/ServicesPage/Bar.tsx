import FeatureSection from "../common/FeatureSection"

export default function Bar(){
  return (
    <FeatureSection
    sectionTitle=""
    sectionSubTitle=""
    title=""
    imageSrc="/media/ittihad-feature-services2.jpg"
    imageAlt="A Cozy & Luxurious Retreat"
    subTitle="A Cozy & Luxurious Retreat"
    description="Take a break from gaming and enjoy our snack bar and billiards area. Whether you’re craving a quick bite or a fun game of pool, we’ve got you covered."
    features={[
      "Tasty snacks & gourmet drinks served fresh",
      "Elegant and cozy lounge seating for relaxation",
      "Luxury billiards tables with a premium playing experience",
      "Aesthetic ambiance with warm lighting and modern décor",
      "Perfect social spot for casual meetups"
    ]}
    buttonText="Learn More"
    tagTitle="Snack Bar and Billiards"
    imagePosition="right"
  />

  )
}

