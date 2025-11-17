"use client";

import { useParams, useRouter } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Project Not Found</h1>
          <Button
            onClick={() => router.push("/projects")}
            variant="default"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Ambient Glow */}
      <div className="fixed right-0 top-0 h-[800px] w-[800px] bg-gradient-glow-orange opacity-50" />

      <div className="container relative mx-auto px-6 py-16 lg:px-12 lg:py-24">
        {/* Back Button */}
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="mb-8 text-white/60 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {/* Hero Section */}
        <div className="mb-16">
          {project.images && project.images.length > 0 && (
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-8">
              <img
                src={project.images[0].startsWith("/") ? project.images[0] : `/${project.images[0]}`}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/60 mb-2">{project.date}</p>
              {project.client && (
                <p className="text-lg text-white/40">Client: {project.client}</p>
              )}
            </div>
            {project.featured && (
              <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg text-sm">
                Featured
              </span>
            )}
          </div>

          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {project.longDescription && (
            <p className="text-lg text-white/60 leading-relaxed max-w-3xl mb-8">
              {project.longDescription}
            </p>
          )}
        </div>

        {/* Video Section */}
         {project.video && (
          <div className="mb-16">
            <h2 className="text-2xl font-light text-white mb-6">Video</h2>
            <div className="relative w-full rounded-3xl overflow-hidden bg-black">
              <video
                controls
                className="w-full h-auto"
                poster={project.videoPoster ? (project.videoPoster.startsWith("/") ? project.videoPoster : `/${project.videoPoster}`) : undefined}
              >
                <source
                  src={project.video.startsWith("/") ? project.video : `/${project.video}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-light text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 text-white/80 rounded-lg text-sm border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        {project.category && project.category.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-light text-white mb-6">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {project.category.map((cat, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg text-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Image Gallery */}
        {project.images && project.images.length > 1 && (
          <div className="mb-16">
            <h2 className="text-2xl font-light text-white mb-6">Gallery</h2>
            {project.category && project.category.includes("mobile") ? (
              // Mobile App Screenshots - Horizontal Scroll
              <div className="relative">
                {/* Left Gradient Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                {/* Right Gradient Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
                
                <div className="overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
                  <div className="flex gap-6 min-w-max px-4">
                    {project.images.slice(1).map((image, index) => (
                      <div
                        key={index}
                        className="relative flex-shrink-0 w-[280px] h-[600px] rounded-[2.5rem] overflow-hidden bg-black border-8 border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105"
                        style={{
                          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)"
                        }}
                      >
                        {/* Phone Frame Effect */}
                        <div className="absolute inset-0 pointer-events-none z-10">
                          {/* Top Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
                          {/* Bottom Home Indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                        </div>
                        <img
                          src={image.startsWith("/") ? image : `/${image}`}
                          alt={`${project.title} - Screenshot ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Regular Gallery - Grid Layout
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-64 rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={image.startsWith("/") ? image : `/${image}`}
                      alt={`${project.title} - Image ${index + 2}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Challenges & Solutions */}
        {(project.challenges || project.solutions) && (
          <div className="mb-16">
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-light text-white mb-6">Challenges</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="text-lg text-white/60 flex items-start"
                    >
                      <span className="text-orange-500 mr-3">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && project.solutions.length > 0 && (
              <div>
                <h2 className="text-2xl font-light text-white mb-6">Solutions</h2>
                <ul className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <li
                      key={index}
                      className="text-lg text-white/60 flex items-start"
                    >
                      <span className="text-orange-500 mr-3">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <Button
            onClick={() => router.push("/projects")}
            variant="outline"
            className="border-white/20 text-white/60 hover:text-white hover:border-orange-500/40"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
}

