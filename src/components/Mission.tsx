import { Card, CardContent } from "@/components/ui/card";
import { Target, Sparkles } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-12 bg-gradient-to-br from-secondary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Dr. Roth Quote */}
          <Card className="bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 border-4 border-secondary/30 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-50" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
            
            <CardContent className="p-16 text-center relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-8xl text-secondary/30 mb-8 leading-none">&ldquo;</div>
                
                <blockquote className="text-3xl md:text-4xl italic text-foreground mb-12 leading-relaxed font-heading font-medium">
                  "At the end of the day, it is all about the support, guidance, and care we can provide for every person and pet that walks in the door. Everyone thinks their animal is the best, and they're all correct."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-6">
                  <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                  <cite className="text-secondary font-heading font-black text-2xl not-italic">
                    Dr. Melissa Roth
                  </cite>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
                
                <p className="text-primary font-body font-semibold text-lg mt-4">
                  Co-Founder | Emergency Veterinarian | Medical Director
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;