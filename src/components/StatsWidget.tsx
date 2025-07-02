import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StatsWidgetProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon?: string;
  highlight?: boolean;
}

export function StatsWidget({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  icon,
  highlight = false
}: StatsWidgetProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-success";
      case "down": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up": return "↗";
      case "down": return "↘";
      default: return "→";
    }
  };

  return (
    <Card className={`p-4 ${highlight ? 'bg-gradient-primary text-primary-foreground shadow-premium' : 'bg-card'} 
                     hover:shadow-elevation transition-all duration-300 animate-slide-up`}>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className={`text-sm font-medium ${highlight ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
            {title}
          </h4>
          {icon && (
            <span className="text-lg">{icon}</span>
          )}
        </div>
        
        <div className="space-y-1">
          <div className={`text-2xl font-bold ${highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
            {value}
          </div>
          
          {subtitle && (
            <div className={`text-sm ${highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              {subtitle}
            </div>
          )}
          
          {trend && trendValue && (
            <div className="flex items-center gap-1">
              <span className={getTrendColor()}>
                {getTrendIcon()}
              </span>
              <span className={`text-sm ${getTrendColor()}`}>
                {trendValue}
              </span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}