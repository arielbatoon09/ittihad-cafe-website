import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckMark } from "@/public/icons/icons";
import Image from "next/image";

interface MembershipProps {
  description: string;
  features: string[];
  hourlyPricing: { label: string; price: string }[];
  membershipPricing: { label: string; price: string }[];
}

export default function Membership({
  description,
  features,
  hourlyPricing,
  membershipPricing,
}: MembershipProps) {
  return (
    <div className="flex  bg-black text-white max-w-screen-xl mx-auto px-6">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col border border-zinc-800 p-6 rounded-xl">
          <Tabs defaultValue="hourly" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-zinc-900 rounded-md h-12 ">
              <TabsTrigger
                value="hourly"
                className="text-sm font-medium data-[state=active]:bg-zinc-800  rounded-md h-full"
              >
                Hourly Rate
              </TabsTrigger>
              <TabsTrigger
                value="membership"
                className="text-sm font-medium data-[state=active]:bg-zinc-800 rounded-md h-full"
              >
                Membership Fee
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hourly" className="mt-0">
              <Card className="bg-transparent border-0 mt-0">
                <CardContent className="p-4">
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-lg font-medium mb-3 text-white">
                        Description
                      </CardTitle>
                      <CardDescription className="text-sm text-zinc-400 mb-6">
                        {description}
                      </CardDescription>
                    </div>

                    <div>
                      <h2 className="text-sm text-zinc-300 mb-3">
                      Hourly Pricing
                      </h2>
                      <ul className="space-y-2">
                        {hourlyPricing.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-5 h-5 bg-brand-400 rounded-full flex items-center justify-center mr-3">
                              <CheckMark />
                            </div>
                            <span className="text-sm text-zinc-400">
                              {item.price} ({item.label})
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="membership" className="mt-0">
              <Card className="bg-transparent border-0 mt-0">
                <CardContent className="p-4">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-medium mb-3 text-white">Description</h2>
                      <p className="text-sm text-zinc-400 mb-6">
                        {description}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-sm text-zinc-300 mb-3">
                      Membership Fee (₱1,000/year)
                      </h2>
                      <ul className="space-y-2">
                        {membershipPricing.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm"
                          >
                         <div className="w-5 h-5 bg-brand-400 rounded-full flex items-center justify-center mr-3">
                              <CheckMark />
                            </div>
                            <span className="text-sm text-zinc-400">
                              {item.price} ({item.label})
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <Card className="bg-transparent p-6 border border-zinc-800">
          <CardContent >
            <h2 className="text-lg font-medium mb-4 text-white">
              Key Features and Amenities
            </h2>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 border-l border-brand-500 border-brand-500  bg-gradient-to-r from-[#0e0e02] to-brand-950 p-2.5">
                  <Image 
                  src="/media/key-feature-amenities.png"
                  width={15}
                  height={15}
                  alt="key feature amenities"
                  />
                  <p className="text-sm text-zinc-300">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
