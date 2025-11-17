
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


const ServiceCard = ({title, description, children, className = ""}) => {
  return (
    <Card
      className={`group relative overflow-hidden border-white/20 bg-[#0C0C0D] hover:border-orange-500/40 transition-all duration-300 ${className}`}
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300 pointer-events-none"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-2xl font-light text-white group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-white/40 text-base leading-relaxed group-hover:text-white/50 transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      {children && <CardContent className="pt-0 relative z-10">{children}</CardContent>}
    </Card>
  );
};

export default ServiceCard;
