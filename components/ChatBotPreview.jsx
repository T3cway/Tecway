import { Badge } from "@/components/ui/badge";

const ChatBotPreview = () => {
  return (
    <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-lg p-4 border border-white/10 h-48 overflow-hidden group-hover:border-orange-500/30 transition-all duration-300 flex flex-col space-y-3">
      {/* Chat header */}
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="bg-white/10 border border-white/10 text-white/80">
          <div className="w-3 h-3 mr-1.5 bg-orange-500/30 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
          GPT 4.5
        </Badge>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-green-500/60 rounded-full animate-pulse"></div>
          <span className="text-xs text-white/40">Online</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        {/* Bot message */}
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-3 h-3 bg-orange-500/60 rounded-full"></div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="bg-white/5 rounded-lg rounded-tl-none p-2 border border-white/10">
              <div className="h-2 bg-white/10 rounded w-3/4 mb-1"></div>
              <div className="h-2 bg-white/10 rounded w-1/2"></div>
            </div>
          </div>
        </div>
        
        {/* User message */}
        <div className="flex items-start gap-2 flex-row-reverse">
          <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-3 h-3 bg-orange-500/60 rounded-full"></div>
          </div>
          <div className="flex-1 space-y-1 flex items-end flex-col">
            <div className="bg-orange-500/20 rounded-lg rounded-tr-none p-2 border border-orange-500/30 max-w-[80%]">
              <div className="h-2 bg-orange-500/30 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature badges */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
        <Badge variant="outline" className="font-normal text-[10px] px-1.5 py-0.5 bg-white/5 border-white/10 text-white/60">
          Proactive chat
        </Badge>
        <Badge variant="outline" className="font-normal text-[10px] px-1.5 py-0.5 bg-white/5 border-white/10 text-white/60">
          Customization
        </Badge>
        <Badge variant="outline" className="font-normal text-[10px] px-1.5 py-0.5 bg-white/5 border-white/10 text-white/60">
          Sales tracking
        </Badge>
      </div>
    </div>
  );
};

export default ChatBotPreview;
