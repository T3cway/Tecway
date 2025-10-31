
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


const ServiceCard = ({title, description, children, className = ""}) => {
  return (
    <Card
      className={`group relative overflow-hidden border-white/20 bg-[#0C0C0D] hover:border-orange-500 transition-all duration-300 ${className}`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-light text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-white/40 text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      {children && <CardContent className="pt-0">{children}</CardContent>}
    </Card>
  );
};

export default ServiceCard;
