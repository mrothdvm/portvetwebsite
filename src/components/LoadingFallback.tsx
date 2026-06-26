import { Loader2 } from "lucide-react";

const LoadingFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-foreground">Loading Port of LA Animal ER...</p>
      </div>
    </div>
  );
};

export default LoadingFallback;