"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const WorkCard = ({
  title,
  date,
  image,
  featured = false,
  className,
  slug,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (slug) {
      router.push(`/projects/${slug}`);
    }
  };

  // Ensure image path starts with / for public folder images
  const imageSrc = image ? (image.startsWith("/") ? image : `/${image}`) : null;

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.02]",
        featured ? "shadow-glow" : "shadow-card",
        className
      )}
    >
      {/* Background Image or Gradient */}
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-700 group-hover:scale-110",
          featured ? "bg-gradient-featured" : "bg-black"
        )}
      >
        {imageSrc && !featured && (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover  opacity-80 "
          />
        )}
        {imageSrc && featured && (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover opacity-90"
          />
        )}
      </div>

      {/* Glow Effect */}
      {!featured && (
        <div className="absolute inset-0 bg-gradient-glow-red opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      {/* Content */}
      <div className="relative flex h-full min-h-[400px] flex-col justify-between p-8">
        <div className=" text-white">{date}</div>

        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-light leading-tight lg:text-4xl">
            {title}
          </h3>
          <Button
            variant="arrow"
            size="icon"
            className="h-14 w-14 shrink-0 opacity-80 bg-orange-500 hover:bg-orange-400 transition-opacity duration-300 group-hover:opacity-100"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
