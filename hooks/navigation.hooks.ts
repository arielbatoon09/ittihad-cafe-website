import { usePathname } from "next/navigation";

export function useNvagationItems() {
  const pathname = usePathname();

  return [
    { href: "/", label: "Home", isActive: pathname === "/" },
    {
      href: "/about-us",
      label: "About Us",
      isActive: pathname === "/about-us",
    },
    {
      href: "/services",
      label: "Services",
      isActive: pathname === "/services",
    },
    {
      href: "/tournaments",
      label: "Tournaments",
      isActive: pathname === "/tournaments",
    },
  ];
}
