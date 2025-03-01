// app/membership/internet-cafe/page.tsx
import Membership from "@/components/common/MemberShip";

export default function IttihadMembership({ pathname }: { pathname: string }) {
  let membershipData;

  if (pathname === "internet-cafe") {
    membershipData = {
      description:
        "Join our elite gaming network at Wildcard Cafe! Exclusive benefits for high-performance gamers, access to unique gaming stations, and streaming sessions at your convenience.",
      features: [
        "High-speed fiber internet for lag-free gaming",
        "High-Performance Gaming PCs",
        "Live Streaming Studios",
        "Esports Mode Setup",
        "Exclusive Membership Perks",
      ],
      hourlyPricing: [
        { label: "Standard", price: "$8/hour" },
        { label: "Premium", price: "$5/hour" },
        { label: "Pro", price: "$3/hour" },
      ],
      membershipPricing: [
        { label: "Standard", price: "$39.99" },
        { label: "Premium", price: "$79.99" },
        { label: "Pro", price: "$129.99" },
      ],
    };
  } else if (pathname === "snack-bar-and-biliards") {
    membershipData = {
      description:
        "Enjoy a relaxing time at our Snack Bar and Billiards area! Perfect for casual gamers and social gatherings.",
      features: [
        "Comfortable seating and lounge areas",
        "Snacks and beverages included",
        "Dedicated billiards tables",
        "Exclusive discounts on food and drinks",
      ],
      hourlyPricing: [
        { label: "Standard", price: "$10/hour" },
        { label: "Premium", price: "$7/hour" },
        { label: "Pro", price: "$5/hour" },
      ],
      membershipPricing: [
        { label: "Standard", price: "$49.99" },
        { label: "Premium", price: "$89.99" },
        { label: "Pro", price: "$149.99" },
      ],
    };
  } 
  else if(pathname=="karaoke-and-rooftop-billiards"){
    membershipData = {
      description:
        "Enjoy a relaxing time at our Snack Bar and Billiards area! Perfect for casual gamers and social gatherings.",
      features: [
        "Comfortable seating and lounge areas",
        "Snacks and beverages included",
        "Dedicated billiards tables",
        "Exclusive discounts on food and drinks",
      ],
      hourlyPricing: [
        { label: "Standard", price: "$10/hour" },
        { label: "Premium", price: "$7/hour" },
        { label: "Pro", price: "$5/hour" },
      ],
      membershipPricing: [
        { label: "Standard", price: "$49.99" },
        { label: "Premium", price: "$89.99" },
        { label: "Pro", price: "$149.99" },
      ],
    };
  }else {
    membershipData = {
      description: "Membership details not available.",
      features: [],
      hourlyPricing: [],
      membershipPricing: [],
    };
  }
  return (
    <Membership
      description={membershipData.description}
      features={membershipData.features}
      hourlyPricing={membershipData.hourlyPricing}
      membershipPricing={membershipData.membershipPricing}
    />
  );
}
