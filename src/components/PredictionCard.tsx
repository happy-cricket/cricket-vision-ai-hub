import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface PredictionCardProps {
  title: string;
  description: string;
  confidence: number;
  aiInsight: string;
  category: "match" | "player" | "over";
  timeRemaining?: string;
}

export function PredictionCard({
  title,
  description,
  confidence,
  aiInsight,
  category,
  timeRemaining
}: PredictionCardProps) {
  const getCategoryColor = () => {
    switch (category) {
      case "match": return "bg-primary text-primary-foreground";
      case "player": return "bg-secondary text-secondary-foreground";
      case "over": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getConfidenceColor = () => {
    if (confidence >= 80) return "text-success";
    if (confidence >= 60) return "text-warning";
    return "text-muted-foreground";
  };

  return (
    <Card className="p-5 bg-card hover:shadow-ai transition-all duration-300 animate-scale-in group">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Badge className={getCategoryColor()}>
                {category.toUpperCase()}
              </Badge>
              {timeRemaining && (
                <Badge variant="outline" className="text-muted-foreground">
                  {timeRemaining}
                </Badge>
              )}
            </div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        {/* AI Confidence */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">AI Confidence</span>
            <span className={`font-bold ${getConfidenceColor()}`}>
              {confidence}%
            </span>
          </div>
          <Progress value={confidence} className="h-2" />
        </div>

        {/* AI Insight */}
        <div className="bg-gradient-ai p-3 rounded-lg text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">AI Insight</span>
          </div>
          <p className="text-sm opacity-90">{aiInsight}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button size="sm" className="bg-gradient-primary border-0 flex-1">
            Make Prediction
          </Button>
        </div>
      </div>
    </Card>
  );
}