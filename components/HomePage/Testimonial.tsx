"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Card from "../common/Card";
import Image from "next/image";
import { Star } from "@/public/icons/icons";

interface Testimonial {
  rating: number;
  title: string;
  content: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    title: "Exceptional Service!",
    content:
      "Our experience at Ittihad Internet Cafe was amazing. The team's dedication and professionalism made every gaming session a breeze. Highly recommended!",
    name: "Wade Warren",
    role: "Streamer",
    avatar: "/api/placeholder/40/40",
  },
  {
    rating: 5,
    title: "Efficient and Reliable",
    content:
      "I was impressed by the high-quality equipment that helped us set up properly quickly and at a great price. We couldn't be happier with the results.",
    name: "Esther Howard",
    role: "Casual Player",
    avatar: "/api/placeholder/40/40",
  },
  {
    rating: 5,
    title: "Trusted Advisors",
    content:
      "The Ittihad team was instrumental in improving our gaming experience. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "Jenny Wilson",
    role: "Streamer",
    avatar: "/api/placeholder/40/40",
  },
  {
    rating: 5,
    title: "Top-Notch Equipment",
    content:
      "Gaming at Ittihad feels like playing on a professional setup. The PCs are incredibly fast, and the peripherals are top quality. Worth every penny!",
    name: "Robert Fox",
    role: "Pro Gamer",
    avatar: "/api/placeholder/40/40",
  },
  {
    rating: 5,
    title: "Amazing Atmosphere",
    content:
      "Not just great for gaming but the whole atmosphere is incredible. The lounge area and snack bar make it a complete entertainment package!",
    name: "Kristin Watson",
    role: "Regular Customer",
    avatar: "/api/placeholder/40/40",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
  });

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl font-bold mb-2">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Ittihad Internet Cafe for their
            gaming experience.
          </p>
        </div>

        <div className="navigation-wrapper relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide p-1">
                <Card className="bg-[#1A1A1A] rounded-lg p-6 h-full">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}> <Star /></span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold mb-2">{testimonial.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{testimonial.content}</p>

                  <div className="flex items-center">
                    <Image
                      src="/media/ittihad-testimonial.jpg"
                      width={50}
                      height={50}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <div className="flex justify-between mt-6">
              <div className="flex items-center space-x-1">
                <span className="text-sm text-gray-400">
                  {currentSlide + 1} of {testimonials.length}
                </span>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => instanceRef.current?.prev()}
                  disabled={currentSlide === 0}
                  className={`w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center ${
                    currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
                  }`}
                >
                  &larr;
                </button>
                <button
                  onClick={() => instanceRef.current?.next()}
                  disabled={currentSlide === testimonials.length - 1}
                  className={`w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center ${
                    currentSlide === testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
                  }`}
                >
                  &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
