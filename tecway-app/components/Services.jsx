import ChatBotPreview from "./ChatBotPreview";
import ServiceCard from "./ServiceCard";
import VoiceAssistantPreview from "./VoiceAssistantPreview";

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
      {/* Background gradient glow */}
      {/* <div className="fixed top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,hsl(16_100%_56%/0.15),transparent_70%)] pointer-events-none"></div> */}

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Full-Service Agency
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            From automation to analytics, we turn your vision into AI solutions.
          </p>
        </section>

        {/* Services Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            
          {/* WEB APP CARD  */}
          <ServiceCard
            title="Web Applications"
            description="Build robust, scalable, and user-friendly web apps tailored to your business needs. From MVPs to full-scale platforms."
            className="md:col-span-2"
          >
            <div className="bg-white/5 rounded-lg border border-border h-48 flex items-center justify-center">
              <div className="text-white/40 text-sm">Image Placeholder</div>
            </div>
          </ServiceCard>

          {/* MOBILE APP CARD */}
          <ServiceCard
            title="Mobile Applications"
            description="Bring your ideas to life with powerful mobile apps. We design and develop scalable iOS and Android applications."
            className="md:col-span-1"
          >
            <div className="bg-white/5 rounded-lg border border-border h-48 flex items-center justify-center">
              <div className="text-white/40 text-sm">Image Placeholder</div>
            </div>
          </ServiceCard>

          {/* VOICE ASSISTANT  */}
          <ServiceCard
            title="Voice Assistants"
            description="We build smart voice solutions for effortless control, better access, and engaging user experiences."
            className="md:col-span-1"
          >
            <VoiceAssistantPreview />
          </ServiceCard>

          {/* CHATBOT CARD */}
          <ServiceCard
            title="Chatbot Development"
            description="We build custom AI chat solutions for instant support, streamlined processes, and a seamless audience experience."
            className="md:col-span-1"
          >
            <ChatBotPreview />
          </ServiceCard>

          {/* UI/UX CARD */}
          <ServiceCard
            title="UI/UX Design"
            description="Great products start with great design. We craft intuitive, beautiful, and accessible interfaces that users love."
            className="md:col-span-1"
          >
            <div className="bg-white/5 rounded-lg border border-border h-48 flex items-center justify-center">
              <div className="text-white/40 text-sm">Image Placeholder</div>
            </div>
          </ServiceCard>


        </section>
      </main>
    </div>
  );
};

export default Services;
