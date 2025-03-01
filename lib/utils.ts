import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function formatContentTitle(title: string): string {
  return title
    .replace(/-/g, " ") 
    .replace(/\b\w+/g, (word: string) =>
      word.toLowerCase() === "and" ? word : word.charAt(0).toUpperCase() + word.slice(1)
    );
}

