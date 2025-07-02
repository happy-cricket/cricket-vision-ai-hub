import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface LiveMatchProps {
  team1: string;
  team2: string;
  team1Score: string;
  team2Score: string;
  currentOver: string;
  winProbability: number;
  momentum: "team1" | "team2" | "neutral";
  isLive: boolean;
  venue: string;
  format: string;
}

export function LiveMatchCard({
  team1,
  team2,
  team1Score,
  team2Score,
  currentOver,
  winProbability,
  momentum,
  isLive,
  venue,
  format
}: LiveMatchProps) {
  const getMomentumColor = () => {
    switch (momentum) {
      case "team1": return "bg-primary text-primary-foreground";
      case "team2": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 bg-card hover:shadow-elevation transition-all duration-300 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {isLive && (
            <Badge className="bg-destructive text-destructive-foreground animate-pulse-glow">
              LIVE
            </Badge>
          )}
          <Badge variant="outline" className="text-muted-foreground">
            {format}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">{venue}</div>
      </div>

      <div className="space-y-4">
        {/* Team Scores */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {team1.slice(0, 2).toUpperCase()}
              </div>
              <span className="font-semibold text-foreground">{team1}</span>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-foreground">{team1Score}</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                {team2.slice(0, 2).toUpperCase()}
              </div>
              <span className="font-semibold text-foreground">{team2}</span>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-foreground">{team2Score}</div>
            </div>
          </div>
        </div>

        {/* Current Over & Status */}
        {isLive && (
          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Current Over</span>
              <span className="font-medium text-foreground">{currentOver}</span>
            </div>

            {/* Win Probability AI Indicator */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">AI Win Probability</span>
                <Badge className="bg-gradient-ai text-white shadow-ai">
                  {team1} {winProbability}%
                </Badge>
              </div>
              <Progress value={winProbability} className="h-2" />
            </div>

            {/* Momentum Indicator */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm text-muted-foreground">Momentum</span>
              <Badge className={getMomentumColor()}>
                {momentum === "team1" ? team1 : momentum === "team2" ? team2 : "Even"}
              </Badge>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}