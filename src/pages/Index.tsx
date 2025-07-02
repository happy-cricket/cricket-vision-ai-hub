import { Navbar } from "@/components/Navbar";
import { LiveMatchCard } from "@/components/LiveMatchCard";
import { PredictionCard } from "@/components/PredictionCard";
import { StatsWidget } from "@/components/StatsWidget";
import { QuickActions } from "@/components/QuickActions";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // Mock data for demonstration
  const liveMatches = [
    {
      team1: "India",
      team2: "Australia",
      team1Score: "234/4 (45.2)",
      team2Score: "180/8 (50)",
      currentOver: "45.2",
      winProbability: 72,
      momentum: "team1" as const,
      isLive: true,
      venue: "Melbourne Cricket Ground",
      format: "ODI"
    },
    {
      team1: "England",
      team2: "Pakistan",
      team1Score: "156/3 (18.4)",
      team2Score: "142/7 (20)",
      currentOver: "18.4",
      winProbability: 68,
      momentum: "team1" as const,
      isLive: true,
      venue: "Lord's Cricket Ground",
      format: "T20"
    }
  ];

  const predictions = [
    {
      title: "Next Wicket Prediction",
      description: "AI predicts wicket within next 3 overs",
      confidence: 84,
      aiInsight: "Current partnership showing signs of pressure. Bowler's line and length creating opportunities.",
      category: "over" as const,
      timeRemaining: "2 mins"
    },
    {
      title: "Match Winner",
      description: "India vs Australia final outcome",
      confidence: 76,
      aiInsight: "India's strong middle order and current run rate give them significant advantage despite Australia's bowling attack.",
      category: "match" as const
    },
    {
      title: "Player Performance",
      description: "Kohli to score 50+ runs",
      confidence: 68,
      aiInsight: "Historical data shows strong performance against this bowling attack. Current form and pitch conditions favor aggressive batting.",
      category: "player" as const,
      timeRemaining: "Live"
    }
  ];

  const stats = [
    {
      title: "Live Matches",
      value: "12",
      subtitle: "Across all formats",
      trend: "up" as const,
      trendValue: "+3 today",
      icon: "🏏"
    },
    {
      title: "AI Accuracy",
      value: "87.3%",
      subtitle: "Last 30 days",
      trend: "up" as const,
      trendValue: "+2.1%",
      icon: "🎯",
      highlight: true
    },
    {
      title: "Active Users",
      value: "2.4M",
      subtitle: "Online now",
      trend: "up" as const,
      trendValue: "+12%",
      icon: "👥"
    },
    {
      title: "Predictions Made",
      value: "45.2K",
      subtitle: "Today",
      trend: "neutral" as const,
      trendValue: "Steady",
      icon: "🔮"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-ai text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            AI-Powered Cricket Intelligence
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            The Future of
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Cricket Analytics</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience cricket like never before with real-time AI predictions, 
            advanced statistics, and an interactive community of passionate fans.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <QuickActions />
        </div>

        {/* Stats Overview */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Live Statistics</h2>
            <Badge className="bg-gradient-ai text-white">
              Real-time
            </Badge>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatsWidget key={stat.title} {...stat} />
            ))}
          </div>
        </div>

        {/* Live Matches */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Live Matches</h2>
            <Badge className="bg-destructive text-destructive-foreground animate-pulse">
              {liveMatches.length} Live
            </Badge>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {liveMatches.map((match, index) => (
              <LiveMatchCard key={index} {...match} />
            ))}
          </div>
        </div>

        {/* AI Predictions */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">AI Predictions</h2>
            <Badge className="bg-gradient-ai text-white shadow-ai">
              Powered by ML
            </Badge>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {predictions.map((prediction, index) => (
              <PredictionCard key={index} {...prediction} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
