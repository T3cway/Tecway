"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Smile, BookOpen, Monitor, Infinity, Rocket } from "lucide-react";
import CalendlyModal from "./CalendlyModal";

const BookCta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const CALENDLY_URL = "https://calendly.com/mohammedaliedriis/project-discussion";

  return (
    <div id="book-call" className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 via-transparent to-transparent blur-3xl" />
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-orange-500/30 to-transparent blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl space-y-8 text-center">
          {/* Hero heading */}
          <div className="space-y-4">
            <h1 className="text-5xl font-normal tracking-tight text-white md:text-6xl lg:text-7xl">
              Book A Free Call Now
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-400 md:text-lg">
              One plan. Full access. Get expert AI support without the
              complexity — just simple, scalable membership.
            </p>
          </div>

          {/* Booking card */}
          <Card className="border-none bg-[#0C0C0D] p-8 backdrop-blur-sm">
            <div className="space-y-8">
              {/* Card title and button */}
              <div className="space-y-6">
                <h2 className="text-left text-2xl font-normal text-white">
                  Book A Call
                </h2>
                <div className="flex justify-center">
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-5 text-base font-normal rounded-lg"
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/20" />

              {/* What's included section */}
              <div className="space-y-6 text-left">
                <h3 className="text-base font-normal text-white">
                  What's Included ?
                </h3>

                <div className="space-y-5">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                      <Smile className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm text-gray-300">
                      A full session tailored to your business
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm text-gray-300">
                      Strategy and solution ideas from our senior team
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                      <Monitor className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm text-gray-300">
                      Real insights, not generic advice
                    </p>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                      <Infinity className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm text-gray-300">
                      Transparent discussion on timeline, and cost
                    </p>
                  </div>

                  {/* Feature 5 */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                      <Rocket className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm text-gray-300">
                      Clear next steps to move your project forward
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <CalendlyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        url={CALENDLY_URL}
      />
    </div>
  );
};

export default BookCta;
