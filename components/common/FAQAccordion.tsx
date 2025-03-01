"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IFAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: IFAQ[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-0"
      className="space-y-4 mt-10"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-zinc-900 rounded-lg border border-zinc-700"
        >
          <AccordionTrigger className="p-4 text-base font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="p-4 text-base text-gray-400 bg-zinc-800 rounded-b-lg">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
