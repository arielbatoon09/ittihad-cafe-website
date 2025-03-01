"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface InteractiveCarouselProps {
  cafeImages: { image: string; title: string }[];
}

export default function InteractiveCarousel({ cafeImages }: InteractiveCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const thumbnailImages = cafeImages.map((img) => img.image);

  const navigateToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < cafeImages.length) {
      setCurrentPage(pageIndex);
    }
  };

  const currentImageData = cafeImages[currentPage];
  const nextImageData = cafeImages[currentPage + 1] || null;

  return (
    <>
      {/* Thumbnail Carousel */}
      <div className="mb-4">
        <Carousel className="w-full bg-[#141414] p-2 rounded-lg">
          <CarouselContent>
            {thumbnailImages.map((img, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 md:basis-1/9 cursor-pointer"
                onClick={() => navigateToPage(index)}
              >
                <div className="p-1">
                  <div
                    className={`relative h-16 overflow-hidden rounded-sm ${
                      index === currentPage
                        ? "opacity-100 border-2 border-brand-500"
                        : "opacity-50 hover:opacity-75"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Main Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-video relative bg-zinc-800 overflow-hidden">
          {currentImageData && (
            <Image
              src={currentImageData.image}
              alt={currentImageData.title || "Service Image"}
              fill
              className="object-cover"
            />
          )}
        </div>
        {nextImageData ? (
          <div className="aspect-video relative bg-zinc-800 overflow-hidden hidden md:block">
            <Image
              src={nextImageData.image}
              alt={nextImageData.title || "Service Image"}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="aspect-video relative bg-zinc-800 overflow-hidden flex items-center justify-center hidden md:flex">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center mt-6">
        <span className="flex items-center p-3 gap-[12px] rounded-full bg-[#141414]">
          <Button
            variant="ghost"
            size="icon"
            className="text-brand-500 hover:bg-brand-900/20 border border-zinc-700 rounded-full"
            onClick={() => navigateToPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            <ArrowLeft className="text-white hover:text-brand-500" />
          </Button>
          <div className="flex justify-center gap-2">
            {cafeImages.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-4 rounded-full cursor-pointer ${
                  i === currentPage ? "bg-brand-500" : "bg-zinc-600"
                }`}
                onClick={() => navigateToPage(i)}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-brand-500 hover:bg-brand-900/20 border border-zinc-700 rounded-full"
            onClick={() => navigateToPage(currentPage + 1)}
            disabled={currentPage === cafeImages.length - 1}
          >
            <ArrowRight className="text-white hover:text-brand-500" />
          </Button>
        </span>
      </div>
    </>
  );
}