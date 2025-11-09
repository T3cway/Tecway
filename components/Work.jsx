import WorkCard from "@/components/WorkCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Work = () => {
  const works = [
    {
      id: 1,
      title: "Shaheen AI",
      date: "Jan 25, 2025",
      featured: true,
      image: "retro.png",
    },
    {
      id: 2,
      title: "Why AI Agencies Need High-Converting Websites",
      date: "Jan 6, 2025",
      image: "microchip.png",
    },
    {
      id: 3,
      title: "Trust in AI: What SaaS Brands Teach Us",
      date: "Jan 1, 2025",
      image: "modern-setup.png",
    },
  ];
  return (
    <div className="min-h-screen bg-black">
      {/* Ambient Glow */}
      <div className="fixed right-0 top-0 h-[800px] w-[800px] bg-gradient-glow-orange opacity-50" />

      <div className="container relative mx-auto px-6 py-16 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between">
          <h1 className="text-6xl font-light tracking-tight lg:text-8xl">
            Our Work
          </h1>
          <Button
            variant="default"
            size="lg"
            className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-5 text-base font-normal rounded-lg"
          >
            All
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Work Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured Work - Left Column */}
          <div className="lg:row-span-2">
            <WorkCard
              title={works[0].title}
              date={works[0].date}
              image={works[0].image}
              featured={works[0].featured}
              className="h-full"
            />
          </div>

          {/* Regular Work Items - Right Column */}
          <div className="grid gap-6">
            {works.slice(1).map((work) => (
              <WorkCard
                key={work.id}
                title={work.title}
                date={work.date}
                image={work.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
