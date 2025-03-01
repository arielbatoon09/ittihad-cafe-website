import { FAQAccordion } from "@/components/common/FAQAccordion";

const FAQList = [
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

export default function FAQ() {
  return (
    <div className="min-h-screen text-white flex justify-center items-center p-4 bg-black">
      <div className="max-w-screen-lg mx-auto px-6 w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-1 text-gray-100">
            Frequently Asked <span className="text-brand-500">Questions</span>
          </h2>
          <p className="text-sm text-gray-400">
            If this question is most valuable to you? Not exactly! Feel free to
            contact us personally.
            <br /> via email through your respective tickets.
          </p>
        </div>

        <FAQAccordion items={FAQList} />
      </div>
    </div>
  );
}
