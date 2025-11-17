"use client";

import { cn } from "@/lib/utils";

export function BentoGrid({ items = [], onClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick && onClick(item)}
          className={cn(
            "group relative p-6 rounded-xl overflow-hidden transition-all duration-300",
            "border border-white/10 bg-[#0C0C0D]",
            "hover:shadow-[0_2px_12px_rgba(251,146,60,0.1)]",
            "hover:border-orange-500/40",
            "hover:-translate-y-0.5 will-change-transform",
            "flex flex-col",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            onClick && "cursor-pointer",
            {
              "shadow-[0_2px_12px_rgba(251,146,60,0.1)] -translate-y-0.5 border-orange-500/40":
                item.hasPersistentHover,
            }
          )}
        >
          <div
            className={`absolute inset-0 ${
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-300`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 group-hover:bg-orange-500/20 transition-all duration-300">
                {item.icon}
              </div>
              {item.status && (
                <span
                  className={cn(
                    "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                    "bg-white/10 text-white/60",
                    "transition-colors duration-300 group-hover:bg-orange-500/20 group-hover:text-orange-300"
                  )}
                >
                  {item.status}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-white tracking-tight text-[15px]">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs text-white/40 font-normal">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm text-white/50 leading-snug font-[425]">
                {item.description}
              </p>
            </div>

            {/* Preview component slot */}
            {item.preview && (
              <div className="mt-4 flex-1">
                {item.preview}
              </div>
            )}

            <div className="flex items-center justify-between mt-auto pt-4">
              {item.tags && item.tags.length > 0 && (
                <div className="flex items-center space-x-2 text-xs text-white/40">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-orange-500/20 hover:text-orange-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              <span className="text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.cta || "Explore →"}
              </span>
            </div>
          </div>

          <div
            className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-orange-500/20 to-transparent ${
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-300`}
          />
        </div>
      ))}
    </div>
  );
}

