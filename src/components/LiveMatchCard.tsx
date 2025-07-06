import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface LiveMatchProps {
  matchId: number;
  team1: string;
  team2: string;
  team1Flag: string;
  team2Flag: string;
  eventName: string;
  banner: string;
  streamLink: string;
  lastUpdated: string;
}

export function LiveMatchCard({
  matchId,
  team1,
  team2,
  team1Flag,
  team2Flag,
  eventName,
  banner,
  streamLink,
  lastUpdated
}: LiveMatchProps) {
  return (
    <Card className="p-6 bg-card hover:shadow-elevation transition-all duration-300 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Badge className="bg-gradient-primary text-primary-foreground">
            SCHEDULED
          </Badge>
          <Badge variant="outline" className="text-muted-foreground">
            {eventName}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">#{matchId}</div>
      </div>

      <div className="space-y-4">
        {/* Team Information */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={team1Flag} 
                alt={`${team1} flag`}
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".35em" font-size="12">${team1.slice(0, 2).toUpperCase()}</text></svg>`;
                }}
              />
              <span className="font-semibold text-foreground">{team1}</span>
            </div>
          </div>

          <div className="text-center py-2">
            <span className="text-2xl font-bold text-muted-foreground">VS</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={team2Flag} 
                alt={`${team2} flag`}
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".35em" font-size="12">${team2.slice(0, 2).toUpperCase()}</text></svg>`;
                }}
              />
              <span className="font-semibold text-foreground">{team2}</span>
            </div>
          </div>
        </div>

        {/* Match Status */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Last Updated</span>
            <span className="text-sm font-medium text-foreground">{lastUpdated}</span>
          </div>

          {/* Stream Link */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Stream Available</span>
            <Badge className="bg-gradient-ai text-white shadow-ai">
              FanCode
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}