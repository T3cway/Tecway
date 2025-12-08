"use client";

import WorkCard from "@/components/WorkCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import { useRouter } from "next/navigation";

const Work = () => {
  const router = useRouter();
  const projects = getAllProjects();
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects
    .filter((p) => p.id !== featuredProject.id)
    .slice(0, 2);

  const handleAllClick = () => {
    router.push("/projects");
  };
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
            onClick={handleAllClick}
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
              title={featuredProject.title}
              date={featuredProject.date}
              image={featuredProject.images?.[0] || featuredProject.image}
              featured={featuredProject.featured}
              slug={featuredProject.slug}
              className="h-full"
            />
          </div>

          {/* Regular Work Items - Right Column */}
          <div className="grid gap-6">
            {otherProjects.map((project) => (
              <WorkCard
                key={project.id}
                title={project.title}
                date={project.date}
                image={project.images?.[0] || project.image}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
