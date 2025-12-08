"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import WorkCard from "@/components/WorkCard";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectsByCategory } from "@/lib/projects";

const categories = [
  { id: "all", label: "All", value: null },
  { id: "web", label: "Web", value: "web" },
  { id: "mobile", label: "Mobile", value: "mobile" },
  { id: "chatbot", label: "Chatbot", value: "chatbot" },
  { id: "infrastructure", label: "Infrastructure", value: "infrastructure" },
  { id: "setup", label: "Setup", value: "setup" },
  { id: "uiux", label: "UI/UX", value: "uiux" },
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");

  const filteredProjects =
    selectedCategory === "all"
      ? getAllProjects()
      : getProjectsByCategory(selectedCategory);

  const featuredProject = filteredProjects.find((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  useEffect(() => {
    if (categoryParam && categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam, selectedCategory]);

  const handleCategoryChange = (categoryValue) => {
    setSelectedCategory(categoryValue);
    if (categoryValue === "all") {
      router.push("/projects");
    } else {
      router.push(`/projects?category=${categoryValue}`);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Ambient Glow */}
      <div className="fixed right-0 top-0 h-[800px] w-[800px] bg-gradient-glow-orange opacity-50" />

      <div className="container relative mx-auto px-6 py-16 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-light tracking-tight lg:text-8xl mb-8">
            Our Projects
          </h1>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => handleCategoryChange(category.value || "all")}
                variant="outline"
                className={`
                  border-white/20 bg-transparent text-white/60 hover:text-white hover:border-orange-500/40
                  ${
                    (selectedCategory === "all" && category.value === null) ||
                    selectedCategory === category.value
                      ? "border-orange-500/60 text-orange-400 bg-orange-500/10"
                      : ""
                  }
                `}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 text-xl">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Featured Project - Takes 2 columns and 2 rows on large screens */}
            {featuredProject && (
              <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
                <WorkCard
                  title={featuredProject.title}
                  date={featuredProject.date}
                  image={featuredProject.images?.[0]}
                  featured={featuredProject.featured}
                  slug={featuredProject.slug}
                  className="h-full min-h-[600px]"
                />
              </div>
            )}

            {/* Other Projects - Responsive grid with visual variety */}
            {otherProjects.map((project, index) => {
              // When no featured project, create a more dynamic layout
              if (!featuredProject) {
                // First project spans 2 columns on large screens for emphasis
                if (index === 0) {
                  return (
                    <div key={project.id} className="md:col-span-2 lg:col-span-2">
                      <WorkCard
                        title={project.title}
                        date={project.date}
                        image={project.images?.[0]}
                        slug={project.slug}
                        className="h-full min-h-[450px]"
                      />
                    </div>
                  );
                }
                // Every 5th project after the first also spans 2 columns for variety
                if ((index - 1) % 5 === 0 && index > 0) {
                  return (
                    <div key={project.id} className="md:col-span-2 lg:col-span-2">
                      <WorkCard
                        title={project.title}
                        date={project.date}
                        image={project.images?.[0]}
                        slug={project.slug}
                        className="h-full min-h-[450px]"
                      />
                    </div>
                  );
                }
              }
              
              // Regular single-column cards
              return (
                <div key={project.id}>
                  <WorkCard
                    title={project.title}
                    date={project.date}
                    image={project.images?.[0]}
                    slug={project.slug}
                    className="h-full min-h-[400px]"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/60">Loading projects...</div>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}

