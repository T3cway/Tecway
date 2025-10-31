"use client";

import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Team = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const teamMembers = [
    {
      name: "Mohamed Mahmoud",
      role: "Product Manager & AI Specialist",
      image: "/person-wearing-vr-headset-on-blue-background.jpg",
      bio: "Leading product strategy and AI integration initiatives with 8+ years of experience in tech innovation.",
    },
    {
      name: "Ahmad Sapil",
      role: "Full-Stack Developer",
      image: "/person-with-vr-headset-glowing-orange-light-effect.jpg",
      bio: "Building scalable web applications with modern technologies and a passion for clean code.",
    },
    {
      name: "Mohamed Ali",
      role: "Mobile Developer",
      image: "/person-with-vr-headset-purple-orange-light-effects.jpg",
      bio: "Crafting beautiful mobile experiences for iOS and Android with a focus on performance.",
    },
    {
      name: "Sofia Martin",
      role: "Project Manager",
      image: "/person-with-vr-headset-orange-light-motion-blur.jpg",
      bio: "Orchestrating cross-functional teams to deliver exceptional products on time and within scope.",
    },
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-light text-white text-center mb-16">
          Our Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className="relative h-full flex flex-col aspect-[3/4]">
                {/* Image container */}
                <div className="absolute inset-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info container that slides up over the image */}
                <div
                  className={`absolute inset-x-0 bottom-0 bg-black p-5 transition-all duration-700 ${
                    expandedCard === index ? "top-0" : "top-auto"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-white font-medium text-lg mb-1">
                        {member.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{member.role}</p>
                    </div>

                    {/* Bio section that appears when expanded */}
                    <div
                      className={`mt-auto transition-all duration-600 ${
                        expandedCard === index
                          ? "opacity-100 translate-y-0 max-h-96 delay-300"
                          : "opacity-0 translate-y-4 max-h-0 overflow-hidden delay-0"
                      }`}
                      style={{
                        transitionTimingFunction:
                          "cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                    >
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Plus/X button */}
                  <button
                    className="absolute bottom-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300 ease-out"
                    aria-label={`View ${member.name}'s profile`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(index);
                    }}
                  >
                    <div className="relative w-4 h-4">
                      <Plus
                        className={`w-4 h-4 text-zinc-400 absolute inset-0 transition-all duration-400 ease-out ${
                          expandedCard === index
                            ? "opacity-0 rotate-90 scale-75"
                            : "opacity-100 rotate-0 scale-100"
                        }`}
                      />
                      <X
                        className={`w-4 h-4 text-zinc-400 absolute inset-0 transition-all duration-400 ease-out ${
                          expandedCard === index
                            ? "opacity-100 rotate-0 scale-100"
                            : "opacity-0 rotate-90 scale-75"
                        }`}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Team;
