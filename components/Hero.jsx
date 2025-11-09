import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">

        {/* CAPSULE TEXT */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-orange-500 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-sm text-white">
            Cutting-Edge Digital Solutions
          </span>
        </div>

        {/* HEADING */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight">
          Fuel Your Growth With{" "}
          <span className="block">Next-Gen Technology</span>
        </h1>

        {/* SUBHEADING */}
        <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
          From intelligent automation to custom web, mobile, and digital
          experiences — we help businesses unlock new levels of productivity,
          efficiency, and growth
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
    </section>
  );
};

export default Hero;
