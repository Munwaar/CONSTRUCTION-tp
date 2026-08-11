import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] px-4">
      <Card className="w-full max-w-lg border border-white/10 bg-[#111111]/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-[#D4AF37]" />
            </div>
          </div>

          <h1 className="font-[Poppins] text-4xl font-bold text-white mb-2">404</h1>

          <h2 className="font-[Poppins] text-xl font-semibold text-white/80 mb-4">
            Page Not Found
          </h2>

          <p className="font-[Manrope] text-white/50 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#050505] px-6 py-2.5 rounded-lg transition-all duration-200 font-[Manrope] font-medium"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
