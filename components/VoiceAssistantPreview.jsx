import { Mic } from "lucide-react";

const VoiceAssistantPreview = () => {
  const callers = [
    { id: 1, active: true },
    { id: 2, active: true },
    { id: 3, active: true },
    { id: 4, active: false },
  ];
  return (
    <div className="bg-secondary/50 rounded-lg p-4 border border-border space-y-2">
      {callers.map((caller) => (
        <div
          key={caller.id}
          className="flex items-center justify-between p-3 bg-background/30 rounded-lg border border-border/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-muted rounded-full"></div>
            <div>
              <div className="text-sm text-foreground font-medium">
                Potential Buyer
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${caller.active ? "bg-primary" : "bg-muted"}`}
                ></div>
                Incoming call
              </div>
            </div>
          </div>
          <Mic
            className={`h-4 w-4 ${caller.active ? "text-foreground" : "text-muted"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default VoiceAssistantPreview;
