"use client";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FrequentlyAsk: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FaqItem[] = [
    {
      question: "Lorem ipsum 1?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Lorem ipsum 2?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Lorem ipsum 3?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Lorem ipsum 4?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Lorem ipsum 5?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen  text-white flex justify-center items-center p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-1">
            Frequently Asked <span className="text-brand-500">Question</span>
          </h2>
          <p className="text-sm text-gray-400">
            If this question is most valuable to you? Not exactly! Feel free to
            contact us personally.
            <br /> via email through your respective tickets.
          </p>
        </div>

        <div className="space-y-4 mt-10">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-sm font-medium">{item.question}</h3>
                <span
                  className={`text-xl ${
                    openIndex !== index ? "text-brand-500" : ""
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <div className="p-4 pt-0 text-sm text-gray-400">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
