import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Key, RefreshCw } from "lucide-react";

interface ApiKeyInputProps {
  onApiKeySet: (apiKey: string) => void;
  onRefreshData: () => void;
  isLoading?: boolean;
  lastUpdated?: string;
}

export function ApiKeyInput({ onApiKeySet, onRefreshData, isLoading, lastUpdated }: ApiKeyInputProps) {
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [isSet, setIsSet] = useState(false);

  const handleSetApiKey = () => {
    if (apiKey.trim()) {
      onApiKeySet(apiKey.trim());
      setIsSet(true);
    }
  };

  const handleReset = () => {
    setApiKey("");
    setIsSet(false);
    onApiKeySet("");
  };

  return (
    <Card className="p-4 bg-gradient-to-r from-card to-card/80 border-border/50">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Key className="w-4 h-4 text-primary" />
          <h3 className="font-semibold text-foreground">Apify API Configuration</h3>
          {isSet && (
            <Badge className="bg-gradient-ai text-white">
              Connected
            </Badge>
          )}
        </div>

        {!isSet ? (
          <div className="space-y-3">
            <div className="relative">
              <Input
                type={showKey ? "text" : "password"}
                placeholder="Enter your Apify API key..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pr-10"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleSetApiKey}
                disabled={!apiKey.trim()}
                className="bg-gradient-primary border-0"
              >
                Connect API
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              🔒 For production, connect to Supabase to securely store API keys
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-muted-foreground">
                  API Key Set
                </Badge>
                {lastUpdated && (
                  <span className="text-sm text-muted-foreground">
                    Last updated: {lastUpdated}
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onRefreshData}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <RefreshCw className="w-4 h-4" />
                  )}
                  Refresh Data
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}