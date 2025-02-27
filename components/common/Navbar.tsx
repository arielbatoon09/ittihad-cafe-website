"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigationStore } from "@/store/navgation.store";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useNvagationItems } from "@/hooks/navigation.hooks";

// Scroll Toggle
const useScrollDetection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}

// Mobile Menu
const MobileMenu = () => {
  const { isMenuOpen } = useNavigationStore();
  const menuItems = useNvagationItems();

  return (
    <div
      className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background border-b border-gray-500 fixed w-full px-6",
        isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="flex flex-col space-y-4 py-6">
        {menuItems.map(({ href, label, isActive }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              isActive
                ? "bg-secondary-brand border border-gray-800 py-2 px-4 rounded-md text-brand-500"
                : "text-white hover:bg-secondary-brand border border-transparent hover:border-gray-800 py-2 px-4 rounded-md"
            )}
          >
            {label}
          </Link>
        ))}
        <div className="pt-4 px-4">
          <Button className="px-8 bg-gradient-to-r from-brand-500 to-brand-900 text-white w-full">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main Navbar
export function Navbar() {
  const { isMenuOpen, toggleMenu } = useNavigationStore();
  const isScrolled = useScrollDetection();
  const menuItems = useNvagationItems();

  return (
    <header>
      <nav
        className={cn(
          "border-gray-700 h-20 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background-950/80 backdrop-blur-sm" : "bg-background",
          !isMenuOpen && "border-b"
        )}
      >
        <div className="lg:max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4">
              <Image src="/media/ittihad_cafe_logo.png" height={60} width={60} alt="Text" />
              <h1 className="flex flex-col text-[#F8D906] font-bold text-2xl">
                Ittihad
                <span className="font-normal text-white text-base">Internet Cafe</span>
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map(({ href, label, isActive }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    isActive
                      ? "bg-secondary-brand border border-gray-800 py-2 px-4 rounded-md text-brand-500"
                      : "text-white hover:bg-secondary-brand border border-transparent hover:border-gray-800 py-2 px-4 rounded-md"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button className="px-8 bg-gradient-to-r from-brand-500 to-brand-900 text-white">
                Contact Us
              </Button>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-brand transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu />
    </header>
  );
}
