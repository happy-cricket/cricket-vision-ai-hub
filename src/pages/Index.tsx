import { Navbar } from "@/components/Navbar";
import { LiveMatchCard } from "@/components/LiveMatchCard";
import { PredictionCard } from "@/components/PredictionCard";
import { StatsWidget } from "@/components/StatsWidget";
import { QuickActions } from "@/components/QuickActions";
import { ApiKeyInput } from "@/components/ApiKeyInput";
import { Badge } from "@/components/ui/badge";
import { useApifyData } from "@/hooks/useApifyData";

const Index = () => {
  const { 
    matches, 
    isLoading, 
    error, 
    lastFetched, 
    setApiKey, 
    refreshData, 
    hasApiKey 
  } = useApifyData();

  // Fallback static data when no API key is provided
  const fallbackMatches = [
    {
      matchId: 118122,
      team1: "Wild Woods Warriors",
      team2: "Hiims Hawks",
      team1Flag: "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-WWD@2x.png",
      team2Flag: "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-HHK@2x.png",
      eventName: "Chandigarh T20",
      banner: "https://www.fancode.com/skillup-uploads/cms-media/Chandigarh-T20_ols_v3.jpg",
      streamLink: "https://dai.google.com/linear/hls/event/6XWI2FtaTVmE9hp3LO3NuQ/master.m3u8",
      lastUpdated: "20-02-2025 on 1:20:45 PM 🌞"
    },
    {
      matchId: 118123,
      team1: "City Challengers",
      team2: "Talanoa Tigers",
      team1Flag: "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-CCG@2x.png",
      team2Flag: "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-TAT@2x.png",
      eventName: "Chandigarh T20",
      banner: "https://www.fancode.com/skillup-uploads/cms-media/Chandigarh-T20_old_v1.jpg",
      streamLink: "https://dai.google.com/linear/hls/event/pEZLr3cLR52v0Lb1piiIlA/master.m3u8",
      lastUpdated: "20-02-2025 on 1:20:45 PM 🌞"
    },
    {
      matchId: 110419,
      team1: "South Australia",
      team2: "Tasmania",
      team1Flag: "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-SAUS@2x.png",
      team2Flag: "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-TAS@2x.png",
      eventName: "Sheffield Shield, 2024-25",
      banner: "https://www.fancode.com/skillup-uploads/cms-media/110419_4543_SAU_TAS_fc-Web_1739782530681.jpg",
      streamLink: "https://dai.google.com/linear/hls/event/qYPRpPPWRcqVt2oBWa9ZRw/master.m3u8",
      lastUpdated: "20-02-2025 on 1:20:45 PM 🌞"
    }
  ];

  // Use real data from API if available, otherwise use fallback
  const displayMatches = hasApiKey ? matches : fallbackMatches;

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

        {/* API Configuration */}
        <div className="mb-8">
          <ApiKeyInput 
            onApiKeySet={setApiKey}
            onRefreshData={refreshData}
            isLoading={isLoading}
            lastUpdated={lastFetched}
          />
          {error && (
            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive">Error: {error}</p>
            </div>
          )}
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

        {/* Cricket Matches */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {hasApiKey ? 'Live Cricket Matches' : 'Cricket Matches'}
            </h2>
            <div className="flex items-center gap-2">
              {hasApiKey && (
                <Badge className="bg-gradient-ai text-white animate-pulse">
                  Live Data
                </Badge>
              )}
              <Badge className="bg-gradient-primary text-primary-foreground">
                {displayMatches.length} Available
              </Badge>
            </div>
          </div>
          {displayMatches.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-6">
              {displayMatches.map((match) => (
                <LiveMatchCard key={match.matchId} {...match} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              {hasApiKey ? (
                isLoading ? 'Loading matches...' : 'No matches available'
              ) : (
                'Enter your Apify API key above to load real-time cricket data'
              )}
            </div>
          )}
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
