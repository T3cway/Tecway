"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "1",
    question: "01. What does the membership include?",
    answer:
      "The membership gives you unlimited access to our AI tools, regular updates, priority support, and expert resources to help you achieve your business goals.",
  },
  {
    id: "2",
    question: "02. How do I get started with your services?",
    answer:
      "Getting started is easy! Simply sign up for an account, choose your membership plan, and you'll have immediate access to all our tools and resources.",
  },
  {
    id: "3",
    question: "03. Can I cancel my membership anytime?",
    answer:
      "Yes, you can cancel your membership at any time. There are no long-term commitments, and you'll retain access until the end of your billing period.",
  },
  {
    id: "4",
    question: "04. Do I need technical expertise to use your tools?",
    answer:
      "No technical expertise is required. Our tools are designed to be user-friendly and intuitive, with comprehensive guides and support available whenever you need help.",
  },
  {
    id: "5",
    question: "05. Are there additional costs?",
    answer:
      "Your membership includes everything you need. There are no hidden fees or additional costs unless you choose to upgrade to a premium tier.",
  },
  {
    id: "6",
    question: "06. How often do you release updates?",
    answer:
      "We release updates regularly, typically on a monthly basis. All updates are included in your membership at no extra cost.",
  },
];

export function FAQSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-6xl md:text-7xl font-light tracking-tight text-white">
            FAQs
          </h1>
          <p className="text-xl text-white/40 max-w-3xl mx-auto">
            Find answers to the most common questions about our services, AI
            solutions, and how we can help your business grow.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue="1"
          className="flex flex-col gap-4"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="overflow-hidden rounded-xl border border-[#7a3e1d] bg-transparent shadow-[0_4px_20px_rgba(122,62,29,0.3)]"
            >
              <AccordionTrigger className="group flex w-full items-center justify-between bg-[#0C0C0C] px-8 py-7 text-left text-lg font-normal text-white transition-all duration-300 ease-in-out hover:no-underline data-[state=open]:bg-[#0C0C0C] [&[data-state=open]>svg]:rotate-0">
                <span className="font-medium">{faq.question}</span>
                <div className="relative ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1a] transition-all duration-300 ease-in-out group-data-[state=open]:shadow-[0_0_15px_rgba(122,62,29,0.6)]">
                  <Plus className="absolute h-6 w-6 text-white transition-all duration-300 ease-in-out group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                  <Minus className="absolute h-6 w-6 text-white transition-all duration-300 ease-in-out group-data-[state=closed]:rotate-90 group-data-[state=closed]:opacity-0" />
                </div>
              </AccordionTrigger>

              <AccordionContent className="bg-[#0C0C0C] px-6 pb-6 pt-0 text-lg leading-relaxed text-gray-400 transition-all duration-300 ease-in-out">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
