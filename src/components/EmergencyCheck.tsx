import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Phone, PhoneCall } from "lucide-react";
const EmergencyCheck = () => {
  const emergencySymptoms = ["Trouble breathing", "Hit by car or other trauma (inc. dog attack, fall from height, etc...)", "Seizures", "Bleeding that won't stop", "Bloat - swollen, distended belly, may be painful", "Vomiting and/or diarrhea - with or without blood", "Paralysis or weakness", "Heatstroke", "Difficulty urinating", "Collapse", "Poisoning, toxic substance ingestion, human medication ingestion", "Extreme pain", "Quality of life concerns"];
  return <section id="emergency-check" className="py-24 bg-gradient-to-br from-destructive/5 via-background to-primary/5 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-72 h-72 bg-destructive/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-destructive/20 rounded-full mb-6">
              <AlertTriangle className="text-destructive w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 tracking-tight">
              Is Your Pet in Danger?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-destructive to-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl font-heading text-secondary mb-6 font-semibold">
              Trust your instincts—you know your pet better than anyone
            </p>
          </div>

          {/* Introductory Notice */}
          <Card className="bg-gradient-to-r from-accent/5 to-secondary/5 border border-accent/20 shadow-md backdrop-blur-sm mb-6">
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="p-1.5 bg-accent/20 rounded-full mr-3 flex-shrink-0 mt-0.5">
                  <AlertTriangle className="text-accent" size={16} />
                </div>
                <div>
                  <p className="text-foreground font-body leading-relaxed text-sm">
                    When your pet is sick, injured, or maybe you're just worried they might be, we're here to help. Port of LA Animal ER provides your furry loved ones emergency-trained veterinarians and skilled veterinary technicians who are ready to provide quality and compassionate veterinary care.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Symptoms Card */}
          <Card className="border-4 border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5 shadow-2xl backdrop-blur-sm mb-8">
            <CardHeader className="bg-gradient-to-r from-destructive/20 to-destructive/10">
              <CardTitle className="flex items-center text-destructive text-3xl md:text-4xl font-heading font-black">
                <AlertTriangle className="mr-4" size={40} />
                EMERGENCY - Come Now
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-xl font-body text-foreground mb-8 font-semibold">
                If your pet shows ANY of these symptoms, this is an emergency. Don't wait—call us immediately:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {emergencySymptoms.map((symptom, index) => <div key={index} className="flex items-center p-4 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                    <AlertTriangle className="text-destructive mr-3 flex-shrink-0" size={20} />
                    <span className="font-body text-foreground text-lg">{symptom}</span>
                  </div>)}
              </div>

              <div className="bg-destructive/20 rounded-2xl p-8 border-2 border-destructive/30">
                <h3 className="text-2xl font-heading font-black text-destructive mb-4">
                  Emergency Contact
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <a href="tel:424-272-7678" className="flex items-center justify-center px-8 py-4 bg-destructive text-destructive-foreground rounded-xl hover:bg-destructive/90 transition-all duration-300 hover:scale-105 font-heading font-bold text-xl shadow-xl w-full sm:w-auto">
                    <PhoneCall className="mr-3" size={24} />
                    Call Emergency Line
                  </a>
                  <div className="text-center sm:text-left">
                    <p className="text-2xl font-heading font-black text-destructive">(424) 272-7678</p>
                    <p className="text-foreground font-body">6 PM - 8 AM (Closed Tuesdays)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 shadow-xl">
              <CardContent className="p-12">
                <h3 className="text-3xl font-heading font-black text-primary mb-6">
                  Trust Your Instincts
                </h3>
                <p className="text-xl font-body text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  You know your pet better than anyone. If something doesn't seem right, don't hesitate to call us. 
                  We're here to help you make the best decision for your furry family member.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="tel:424-272-7678" className="inline-flex items-center justify-center px-12 py-6 bg-destructive text-destructive-foreground font-black text-xl rounded-2xl shadow-2xl hover:shadow-destructive/30 transition-all duration-300 hover:scale-110 font-heading transform hover:-rotate-1">
                    <Phone className="mr-3" size={24} />
                    Emergency: (424) 272-7678
                  </a>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default EmergencyCheck;