import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";
import { SearchConsoleVerification } from "@/components/seo/search-console";
import { initAnalytics } from "@/lib/analytics";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AnalyticsBootstrap() {
  useEffect(() => {
    initAnalytics();
  }, []);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LocalBusinessSchema />
        <SearchConsoleVerification />
        <Toaster />
        <Router />
        <CookieBanner />
        <AnalyticsBootstrap />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
