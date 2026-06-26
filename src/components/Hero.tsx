import { Button } from "@/components/ui/button";
import { MapPin, AlertTriangle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

// Import the seamless hero image
import portLaCompleteScene from "@/assets/port-la-complete-scene.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEmergencyCheck = () => {
    const element = document.getElementById('emergency-check');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hyperrealistic Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Single seamless Port of LA hero image - Optimized for LCP */}
        <img 
          src={portLaCompleteScene}
          alt="Port of Los Angeles waterfront at sunset with emergency veterinary hospital"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
          
          loading="eager"
        />
        
        {/* Subtle floating light particles */}
        <div 
          className="absolute top-1/3 left-10 w-2 h-2 bg-yellow-300/30 rounded-full blur-sm"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            animation: 'float 4s ease-in-out infinite'
          }}
          aria-hidden="true"
        />
        <div 
          className="absolute top-1/2 right-20 w-3 h-3 bg-orange-300/30 rounded-full blur-sm"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            animation: 'floatSlow 6s ease-in-out infinite'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main Content - Static, no parallax */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/80a3b760-b809-46c5-bb7c-3e07eb4623ee.png" 
              alt="Port of LA Animal Emergency Room - After-hours emergency and urgent care veterinary hospital for dogs and cats in Wilmington, California with doctor-owned compassionate service" 
              className="h-32 w-auto mx-auto mb-6 transition-all duration-300"
              style={{
                animation: 'logoGlow 4s ease-in-out infinite, float 8s ease-in-out infinite'
              }}
              loading="eager"
            />
          </div>

          {/* Emotionally-driven Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 relative drop-shadow-lg px-4 sm:px-0 text-center leading-tight">
            When Every Second Counts, We're Here for Your Pet
          </h1>

          {/* Benefit-focused Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl font-body text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed backdrop-blur-md bg-black/20 rounded-lg p-4 sm:p-6 shadow-xl mx-4 sm:mx-auto">
            Locally grown, doctor-owned animal emergency medicine. Compassionate, top notch care because that's what all of those lucky enough to have pets deserve.
          </p>

          {/* Mobile-optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0">
            <a 
              href="tel:424-272-7678"
              className="inline-flex items-center justify-center text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-destructive text-destructive-foreground font-bold rounded-lg w-full sm:w-auto"
              aria-label="Call emergency line at 424-272-7678"
            >
              <Phone className="mr-2" size={18} aria-hidden="true" />
              Call Now: (424) 272-7678
            </a>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToEmergencyCheck}
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-md bg-white/90 text-primary border-white/30 hover:bg-white hover:text-primary w-full sm:w-auto"
              aria-label="Check if your pet needs emergency care"
            >
              <AlertTriangle className="mr-2" size={18} aria-hidden="true" />
              Is This an Emergency?
            </Button>
          </div>

          {/* Mobile-optimized Address */}
          <div className="flex items-center justify-center text-white/90 backdrop-blur-md bg-black/20 rounded-full px-3 sm:px-4 py-2 inline-flex shadow-lg mx-4 sm:mx-auto">
            <MapPin size={14} className="mr-2 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-center">400 N Avalon Blvd, Wilmington, CA 90744</span>
          </div>

          {/* Mobile-optimized Coming Soon Badge */}
          <div className="mt-6 sm:mt-8">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 sm:px-6 py-2 rounded-full font-bold text-sm shadow-xl backdrop-blur-sm">
              🎉 Now Open!
            </span>
          </div>
        </div>
      </div>

      {/* Professional vignette for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default Hero;