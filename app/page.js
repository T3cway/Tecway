import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { getFAQPageSchema } from "@/lib/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tecway.dev";

// FAQ data - matching FAQSection component
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
    question:
      "Can you integrate third-party APIs or AI systems like ChatGPT/Gemini?",
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
    answer: "Yes, we handle publishing, optimization, and compliance.",
  },
  {
    id: "15",
    question: "Can you redesign or fix an existing project?",
    answer:
      "Yes, we take over incomplete projects, refactor code, improve UI/UX, and enhance performance.",
  },
];

export const metadata = {
  title: "Cutting-Edge Digital Solutions",
  description:
    "Full-service tech agency specializing in web applications, mobile apps, AI chatbots, and custom software solutions. Transform your business with next-gen technology.",
  openGraph: {
    title: "Tecway - Cutting-Edge Digital Solutions",
    description:
      "Full-service tech agency specializing in web applications, mobile apps, AI chatbots, and custom software solutions.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/Tecway.png`,
        width: 1200,
        height: 630,
        alt: "Tecway - Cutting-Edge Digital Solutions",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// Generate FAQ schema for SEO
const faqSchema = getFAQPageSchema(faqs);

// Lazy load below-the-fold components for better performance
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Process = dynamic(() => import("@/components/Process"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const CompareTable = dynamic(() => import("@/components/CompareTable"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const BookCta = dynamic(() => import("@/components/BookCta"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Results = dynamic(() => import("@/components/Results"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Work = dynamic(() => import("@/components/Work"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div>
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Process />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <CompareTable />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <BookCta />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Results />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Work />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <FAQSection />
        </Suspense>
      </div>
    </>
  );
}
