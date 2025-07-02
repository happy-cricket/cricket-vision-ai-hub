import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function QuickActions() {
  const actions = [
    {
      title: "Live Predictions",
      description: "AI-powered match outcomes",
      icon: "🔮",
      color: "bg-gradient-ai"
    },
    {
      title: "Fantasy Hub",
      description: "Build winning teams",
      icon: "⚡",
      color: "bg-gradient-primary"
    },
    {
      title: "Player Stats",
      description: "Deep analytics & insights",
      icon: "📊",
      color: "bg-gradient-secondary"
    },
    {
      title: "Match Center",
      description: "Live scores & commentary",
      icon: "🏏",
      color: "bg-gradient-pitch"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <Card 
          key={action.title}
          className="p-4 cursor-pointer hover:shadow-premium transition-all duration-300 group animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Button 
            variant="ghost" 
            className={`w-full h-auto p-4 ${action.color} text-white border-0 group-hover:scale-105 transition-transform`}
          >
            <div className="text-center space-y-2">
              <div className="text-2xl">{action.icon}</div>
              <div className="font-semibold">{action.title}</div>
              <div className="text-sm opacity-90">{action.description}</div>
            </div>
          </Button>
        </Card>
      ))}
    </div>
  );
}