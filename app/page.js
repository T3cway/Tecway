import BookCta from "@/components/BookCta";
import CompareTable from "@/components/CompareTable";
import Footer from "@/components/Fotter";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Process/>
      <CompareTable/>
      <BookCta/>
      <Results/>
      <Work/>
    </div>
  );
}
