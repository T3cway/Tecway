"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "1",
    question: "What services do you offer?",
    answer:
      "We build mobile applications, websites, custom software systems, chatbot solutions (AI-powered and rule-based), and provide full UI/UX design services.",
  },
  {
    id: "2",
    question: "Which industries do you work with?",
    answer:
      "We work across multiple industries including healthcare, finance, e-commerce, logistics, education, startups, and enterprise systems.",
  },
  {
    id: "3",
    question: "How much does it cost to build a mobile app or website?",
    answer:
      "Pricing depends on the project scope, features, complexity, and timeline. We provide a free consultation and send a detailed quote based on your requirements.",
  },
  {
    id: "4",
    question: "How long will it take to build my project?",
    answer:
      "Most websites take 2–6 weeks, mobile apps 1–3 months, and complex systems may take longer. A timeline is shared after requirement analysis.",
  },
  {
    id: "5",
    question: "Do you offer UI/UX design only?",
    answer:
      "Yes. We offer standalone UI/UX services including wireframes, prototyping, branding, and full design systems.",
  },
  {
    id: "6",
    question: "Will you maintain and update my app or website after launch?",
    answer:
      "Yes. We provide ongoing maintenance, updates, bug fixes, and feature extensions.",
  },
  {
    id: "7",
    question: "Do you use Flutter, React, or native development?",
    answer:
      "We offer Flutter, React Native, Swift, Kotlin, and web frameworks (React, Next.js, Vue, Laravel, Node.js, etc.). We choose the best stack for your needs.",
  },
  {
    id: "8",
    question: "Can you integrate third-party APIs or AI systems like ChatGPT/Gemini?",
    answer:
      "Absolutely. We integrate AI models, payment gateways, CRM systems, ERPs, and custom APIs.",
  },
  {
    id: "9",
    question: "Do you provide hosting and deployment?",
    answer:
      "Yes, we handle cloud hosting (AWS, Supabase, Firebase, Vercel), backend setup, CI/CD pipelines, and security.",
  },
  {
    id: "10",
    question: "Will my app/project be scalable?",
    answer:
      "Yes. We use scalable architectures (microservices, serverless, modular design) to support growth.",
  },
  {
    id: "11",
    question: "Do you sign NDAs and provide source code?",
    answer:
      "Yes. NDAs, full privacy, and complete source-code ownership are part of all our contracts.",
  },
  {
    id: "12",
    question: "Do you support Arabic/English or multi-language apps?",
    answer:
      "Yes. We build fully multilingual and RTL-friendly apps and websites.",
  },
  {
    id: "13",
    question: "What is your development process?",
    answer:
      "1. Requirement analysis\n2. UI/UX design\n3. Development (mobile/web/backend/system)\n4. Testing\n5. Deployment\n6. Maintenance and support",
  },
  {
    id: "14",
    question: "Do you help with publishing apps to App Store and Google Play?",
    answer:
      "Yes, we handle publishing, optimization, and compliance.",
  },
  {
    id: "15",
    question: "Can you redesign or fix an existing project?",
    answer:
      "Yes, we take over incomplete projects, refactor code, improve UI/UX, and enhance performance.",
  },
];

function FAQSection() {
  return (
    <section id="faqs" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-orange-500/60 mr-3" />
            <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white">
              FAQs
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our services and how we can help your business grow.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-5"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="group overflow-hidden rounded-xl border border-zinc-800 bg-[#0C0C0D] shadow-lg transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)]"
            >
              {/* Accent bar */}
              <div className="h-0.5 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-300" />
              
              <AccordionTrigger className="group flex w-full items-center justify-between bg-[#0C0C0D] px-8 py-6 text-left transition-all duration-300 ease-in-out hover:no-underline hover:bg-zinc-900/30 data-[state=open]:bg-zinc-900/20">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-sm font-mono text-zinc-500 mt-1 min-w-[2rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-normal text-white group-hover:text-orange-400/90 transition-colors duration-200">
                    {faq.question}
                  </span>
                </div>
                <div className="relative ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 transition-all duration-300 ease-in-out group-hover:border-orange-500/50 group-data-[state=open]:bg-orange-500/10 group-data-[state=open]:border-orange-500/50">
                  <ChevronDown className="h-5 w-5 text-zinc-400 transition-all duration-300 ease-in-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-orange-400 group-hover:text-orange-400/70" />
                </div>
              </AccordionTrigger>

              <AccordionContent className="bg-[#0C0C0D] px-8 pb-6 pt-0 text-base leading-relaxed text-gray-300 transition-all duration-300 ease-in-out whitespace-pre-line border-t border-zinc-800/50">
                <div className="pt-4 pl-12">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
