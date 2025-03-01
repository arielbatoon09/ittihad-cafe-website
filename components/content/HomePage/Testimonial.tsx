import TestimonialCarousel from "@/components/content/HomePage/TestimonialCarousel";

export default function Testimonial() {
  const title = "What Our";
  const description =
    "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Ittihad Internet Cafe for their gaming experience.";

  return <TestimonialCarousel title={title} description={description} />;
}
