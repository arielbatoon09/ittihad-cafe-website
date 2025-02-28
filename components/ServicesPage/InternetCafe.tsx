import FeatureSection from "../common/FeatureSection"

export default function InternetCafe(){
  return (
    <FeatureSection
    sectionTitle="OUR SERVICES"
    sectionSubTitle="Experience Premium Gaming & Leisure"
    title="<span className='text-white'>Only at</span> Ittihad Internet Cafe"
    imageSrc="/media/ittihad-feature-services1.jpg"
    imageAlt="High-Performance Gaming & Live Streaming"
    subTitle="High-Performance Gaming & Live Streaming"
    description="Step into an elite gaming experience with top-tier PCs, ultra-fast internet, and ergonomic setups. Whether you're a hardcore gamer or a casual player, enjoy smooth, lag-free gameplay in a premium environment."
    features={[
      "High-end gaming PCs with responsive peripherals",
      "Ultra-fast internet for seamless online play",
      "Comfortable setups designed for extended sessions",
      "Live Streaming stations equipped with professional gear for content creators",
    ]}
    buttonText="Learn More"
    tagTitle="Internet Cafe"
    imagePosition="left"
  />

  )
}

