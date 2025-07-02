import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Cricket Exchange</h1>
              <Badge className="bg-gradient-ai text-white text-xs">
                AI-Powered
              </Badge>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="font-medium">
              Live Matches
            </Button>
            <Button variant="ghost" className="font-medium">
              Predictions
            </Button>
            <Button variant="ghost" className="font-medium">
              Statistics
            </Button>
            <Button variant="ghost" className="font-medium">
              Fantasy
            </Button>
            <Button variant="ghost" className="font-medium">
              Community
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button className="bg-gradient-primary border-0" size="sm">
              Get Premium
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}