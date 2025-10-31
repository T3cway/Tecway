import BookCta from "@/components/BookCta";
import CompareTable from "@/components/CompareTable";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Process/>
      <CompareTable/>
      <BookCta/>
      <Results/>
      <Team/>
      <Work/>
    </div>
  );
}
