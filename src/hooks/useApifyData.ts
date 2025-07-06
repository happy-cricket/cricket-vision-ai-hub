import { useState, useEffect, useCallback } from 'react';

export interface ApifyMatch {
  event_category: string;
  event_name: string;
  match_id: number;
  match_name: string;
  team_1: string;
  team_1_flag: string;
  team_2: string;
  team_2_flag: string;
  banner: string;
  stream_link: string;
  total_matches: number;
  last_updated: string;
  scrapedAt: string;
}

export interface ProcessedMatch {
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

export function useApifyData() {
  const [matches, setMatches] = useState<ProcessedMatch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>("");
  const [lastFetched, setLastFetched] = useState<string>("");

  const fetchMatches = useCallback(async () => {
    if (!apiKey) {
      setError("API key not provided");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Using the dataset ID from the URL you provided
      const datasetId = 'S5ZdTHp8umVf4BVnT';
      const response = await fetch(`https://api.apify.com/v2/datasets/${datasetId}/items?clean=true&format=json`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApifyMatch[] = await response.json();
      
      // Process the data to match our component interface
      const processedMatches: ProcessedMatch[] = data.map(match => ({
        matchId: match.match_id,
        team1: match.team_1,
        team2: match.team_2,
        team1Flag: match.team_1_flag,
        team2Flag: match.team_2_flag,
        eventName: match.event_name,
        banner: match.banner,
        streamLink: match.stream_link,
        lastUpdated: match.last_updated
      }));

      setMatches(processedMatches);
      setLastFetched(new Date().toLocaleString());
    } catch (err) {
      console.error('Error fetching Apify data:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);

  const setApiKeyAndFetch = useCallback((newApiKey: string) => {
    setApiKey(newApiKey);
    if (newApiKey) {
      // Small delay to ensure state is updated
      setTimeout(() => {
        fetchMatches();
      }, 100);
    }
  }, [fetchMatches]);

  // Auto-refresh every 5 minutes when API key is set
  useEffect(() => {
    if (!apiKey) return;

    const interval = setInterval(() => {
      fetchMatches();
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [apiKey, fetchMatches]);

  return {
    matches,
    isLoading,
    error,
    lastFetched,
    setApiKey: setApiKeyAndFetch,
    refreshData: fetchMatches,
    hasApiKey: !!apiKey
  };
}