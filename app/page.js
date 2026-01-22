import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Fotter";
import { getFAQPageSchema, getHowToSchema } from "@/lib/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tecway.dev';

// FAQ data - matching FAQSection component
const faqs = [
  {
    id: "1",
    question: "What services do you offer?",
    answer: "Tecway, based in Khartoum, Sudan, offers comprehensive technology services including: mobile application development for iOS and Android using Flutter, React Native, Swift, and Kotlin; web application development using modern frameworks like React, Next.js, and Node.js; custom ERP (Enterprise Resource Planning) systems tailored to streamline business operations, manage resources, and optimize workflows; AI-powered and rule-based chatbot solutions for customer support and business automation; custom software systems for specific business needs; and complete UI/UX design services including wireframes, prototyping, branding, and design systems. We serve clients across multiple industries including healthcare, finance, e-commerce, logistics, education, startups, and enterprise systems.",
  },
  {
    id: "2",
    question: "Which industries do you work with?",
    answer: "Tecway works with diverse industries including healthcare (telemedicine platforms, medical record systems, appointment management), finance (banking applications, payment systems, financial management tools), e-commerce (online stores, marketplace platforms, inventory management), logistics (fleet management systems, supply chain solutions, delivery tracking), education (learning management systems, educational platforms, student information systems), startups (MVP development, scalable applications, rapid prototyping), and enterprise systems (large-scale business applications, ERP systems, custom enterprise solutions). We have experience building solutions for clients in over 20 countries, from bold startups to top corporations.",
  },
  {
    id: "3",
    question: "How much does it cost to build a mobile app or website?",
    answer: "Pricing for mobile apps and websites varies significantly based on project scope, features, complexity, technology stack, and timeline. Simple websites typically range from $2,000-$10,000, while complex web applications can cost $10,000-$50,000 or more. Mobile apps generally start at $5,000 for basic applications and can reach $50,000+ for feature-rich, enterprise-level applications. Custom ERP systems and complex software solutions are priced based on modules, integrations, and scalability requirements. We provide a free consultation to understand your needs and send a detailed, transparent quote based on your specific requirements. All pricing includes development, testing, and initial deployment.",
  },
  {
    id: "4",
    question: "How long will it take to build my project?",
    answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-6 weeks from start to launch. Mobile applications generally require 1-3 months for development, testing, and App Store/Play Store submission. Custom ERP systems and complex software solutions may take 3-6 months or longer depending on modules, integrations, and customization requirements. Our development process includes: requirement analysis (1-2 weeks), UI/UX design (2-4 weeks for complex projects), development phase (varies by project), testing and quality assurance (1-2 weeks), and deployment (1 week). We provide a detailed timeline after the initial requirement analysis phase, and we maintain regular communication throughout the project to keep you informed of progress.",
  },
  {
    id: "5",
    question: "Do you offer UI/UX design only?",
    answer: "Yes. We offer standalone UI/UX services including wireframes, prototyping, branding, and full design systems.",
  },
  {
    id: "6",
    question: "Will you maintain and update my app or website after launch?",
    answer: "Yes. We provide ongoing maintenance, updates, bug fixes, and feature extensions.",
  },
  {
    id: "7",
    question: "Do you use Flutter, React, or native development?",
    answer: "We offer Flutter, React Native, Swift, Kotlin, and web frameworks (React, Next.js, Vue, Laravel, Node.js, etc.). We choose the best stack for your needs.",
  },
  {
    id: "8",
    question: "Can you integrate third-party APIs or AI systems like ChatGPT/Gemini?",
    answer: "Yes, absolutely. Tecway has extensive experience integrating various third-party services and APIs. We integrate AI models including OpenAI's ChatGPT, Google's Gemini, and other machine learning APIs for intelligent features, chatbots, and automation. We also integrate payment gateways (Stripe, PayPal, local payment processors), CRM systems (Salesforce, HubSpot, custom CRMs), existing ERP systems, social media APIs, cloud services (AWS, Google Cloud, Azure), analytics platforms, and custom APIs. Our team ensures secure, reliable integrations that enhance your application's functionality while maintaining data security and compliance standards.",
  },
  {
    id: "9",
    question: "Do you provide hosting and deployment?",
    answer: "Yes, Tecway provides comprehensive hosting and deployment services. We handle cloud hosting on platforms including AWS (Amazon Web Services), Supabase, Firebase, Vercel, and other cloud providers. Our services include backend infrastructure setup, database configuration, server management, CI/CD (Continuous Integration/Continuous Deployment) pipeline setup for automated deployments, SSL certificate installation, domain configuration, security implementation (firewalls, encryption, access controls), monitoring and logging setup, backup and disaster recovery solutions, and performance optimization. We ensure your application is deployed securely and efficiently, with ongoing support for infrastructure management.",
  },
  {
    id: "10",
    question: "Will my app/project be scalable?",
    answer: "Yes. We use scalable architectures (microservices, serverless, modular design) to support growth.",
  },
  {
    id: "11",
    question: "Do you sign NDAs and provide source code?",
    answer: "Yes. NDAs, full privacy, and complete source-code ownership are part of all our contracts.",
  },
  {
    id: "12",
    question: "Do you support Arabic/English or multi-language apps?",
    answer: "Yes. We build fully multilingual and RTL-friendly apps and websites.",
  },
  {
    id: "13",
    question: "What is your development process?",
    answer: "Tecway follows a structured six-phase development process: 1) Requirement Analysis - We conduct detailed discussions to understand your business goals, target audience, features, and technical requirements, creating comprehensive project documentation. 2) UI/UX Design - Our design team creates wireframes, user flows, prototypes, and full visual designs ensuring intuitive user experiences. 3) Development - We develop your solution using the most appropriate technology stack (mobile/web/backend/system), following best practices and coding standards, with regular progress updates. 4) Testing - Comprehensive testing including functionality testing, performance testing, security testing, user acceptance testing, and bug fixes. 5) Deployment - We handle all aspects of deployment including hosting setup, database migration, domain configuration, and go-live support. 6) Maintenance and Support - Ongoing maintenance, updates, bug fixes, feature enhancements, and technical support to keep your system running smoothly.",
  },
  {
    id: "14",
    question: "Do you help with publishing apps to App Store and Google Play?",
    answer: "Yes, Tecway provides complete app store publishing services. We handle the entire process including: creating developer accounts (if needed), preparing app store assets (screenshots, descriptions, icons, promotional materials), optimizing app store listings for better discoverability (ASO - App Store Optimization), ensuring compliance with Apple App Store and Google Play Store guidelines and policies, submitting applications for review, managing the review process and addressing any rejection issues, setting up in-app purchases and subscriptions (if applicable), configuring app analytics and crash reporting, and providing ongoing support for app updates and new version releases. We ensure your app meets all requirements and has the best chance of approval on both platforms.",
  },
  {
    id: "15",
    question: "Can you redesign or fix an existing project?",
    answer: "Yes, we take over incomplete projects, refactor code, improve UI/UX, and enhance performance.",
  },
];

export const metadata = {
  title: "Cutting-Edge Digital Solutions",
  description: "Full-service tech agency based in Khartoum, Sudan, specializing in web applications, mobile apps, custom ERP systems, AI chatbots, and custom software solutions. Transform your business with next-gen technology.",
  openGraph: {
    title: "Tecway - Cutting-Edge Digital Solutions | Khartoum, Sudan",
    description: "Full-service tech agency based in Khartoum, Sudan, specializing in web applications, mobile apps, custom ERP systems, AI chatbots, and custom software solutions.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/Tecway.png`,
        width: 1200,
        height: 630,
        alt: "Tecway - Cutting-Edge Digital Solutions in Khartoum, Sudan",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

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
  const faqSchema = getFAQPageSchema(faqs);
  const howToSchema = getHowToSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div>
        <Hero/>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Services/>
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Process/>
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <CompareTable/>
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <BookCta/>
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Results/>
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Work/>
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <FAQSection/>
        </Suspense>
      </div>
    </>
  );
}
