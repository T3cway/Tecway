import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Fotter";

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
        <FAQSection/>
      </Suspense>
    </div>
  );
}
