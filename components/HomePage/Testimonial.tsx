"use client";
import { Star } from "@/public/icons/icons";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      rating: 5,
      title: "Exceptional Service!",
      content:
        "Our experience at Ittihad Internet Cafe was amazing. The team's dedication and professionalism made every gaming session a breeze. Highly recommended!",
      author: "Wade Warren",
      role: "Streamer",
      avatar: "/media/ittihad-testimonial.jpg",
    },
    {
      rating: 5,
      title: "Efficient and Reliable",
      content:
        "I was impressed by the high-quality equipment that helped us set up properly quickly and at a great price. We couldn't be happier with the results.",
      author: "Esther Howard",
      role: "Casual Player",
      avatar: "/media/ittihad-testimonial.jpg",
    },
    {
      rating: 5,
      title: "Trusted Advisors",
      content:
        "The Ittihad team was instrumental in improving our gaming experience. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      author: "Jenny Wilson",
      role: "Streamer",
      avatar: "/media/ittihad-testimonial.jpg",
    },
    {
      rating: 5,
      title: "Gaming Paradise",
      content:
        "Ittihad Internet Cafe offers the perfect environment for both casual and competitive gaming. The equipment is top-notch and the staff is incredibly helpful.",
      author: "Robert Fox",
      role: "Professional Gamer",
      avatar: "/media/ittihad-testimonial.jpg",
    },
    {
      rating: 5,
      title: "Community Hub",
      content:
        "More than just a gaming cafe, Ittihad has become our community center. The tournaments they organize bring together gamers from all skill levels.",
      author: "Cameron Lee",
      role: "Tournament Participant",
      avatar: "/media/ittihad-testimonial.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl font-bold mb-2">
            What Our <span className="text-brand-400">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Ittihad Internet Cafe for their
            gaming experience.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i}>
                          <Star />
                        </div>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.avatar}
                        width={50}
                        height={50}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="font-medium text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-between items-center px-4">
            <div className="text-gray-400">
              <span className="text-sm">1 of 5</span>
            </div>
            <div className="relative">
              <CarouselPrevious className="absolute bg-zinc-800 hover:bg-zinc-700 border-zinc-700 left-[-70px]" />
              <CarouselNext className="absolute bg-zinc-800 hover:bg-zinc-700 border-zinc-700 right-[-15]" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
