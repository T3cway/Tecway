"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

const Hero = () => {
  return (
    <ContainerScroll
      titleComponent={
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* CAPSULE TEXT */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-orange-500 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-sm text-white">
              Cutting-Edge Digital Solutions
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
            Fuel Your Growth With{" "}
            <span className="block">Next-Gen Technology</span>
          </h1>

          {/* SUBHEADING */}
          <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            From intelligent automation to custom web, mobile, and digital
            experiences — we help businesses unlock new levels of productivity,
            efficiency, and growth
          </p>
        </div>
      }
    >
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=720&fit=crop&q=80"
          alt="Technology and Innovation"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row items-center justify-center gap-4 z-10">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-500 cursor-pointer text-primary-foreground px-8 py-6 text-base font-medium rounded-xl group"
          >
            <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Let's get started
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-orange-600 hover:bg-orange-500 cursor-pointer text-primary-foreground px-8 py-6 text-base font-medium rounded-xl group"
          >
            <Zap className="w-5 h-5 mr-2" />
            How it works
          </Button>
        </div>
      </div>
    </ContainerScroll>
  );
};

export default Hero;
