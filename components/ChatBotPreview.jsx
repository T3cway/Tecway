import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const ChatBotPreview = () => {
  return (
    <div className="bg-secondary/50 rounded-lg p-4 border border-border space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="bg-background/50">
          <div className="w-4 h-4 mr-1.5 bg-primary/20 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          GPT 4.5
        </Badge>
        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-muted rounded-full"></div>
        </div>
      </div>

      <div className="text-foreground text-sm">Ho</div>

      <div className="flex flex-wrap gap-2 text-xs">
        <Badge variant="outline" className="font-normal">
          Proactive chat
        </Badge>
        <Badge variant="outline" className="font-normal">
          Customization
        </Badge>
        <Badge variant="outline" className="font-normal">
          Sales tracking
        </Badge>
        <Badge variant="outline" className="font-normal">
          Post purchase support
        </Badge>
      </div>

      <button className="absolute bottom-4 right-4 w-10 h-10 bg-background/50 hover:bg-background border border-border rounded-lg flex items-center justify-center transition-colors">
        <Play className="h-4 w-4 text-foreground" />
      </button>
    </div>
  );
};

export default ChatBotPreview;
