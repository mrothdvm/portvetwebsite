import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Eye, Scissors, Heart, Activity, Bandage, Clock, Shield, Phone } from "lucide-react";
const UrgentCare = () => {
  const urgentCareServices = [{
    icon: Stethoscope,
    title: "Skin and ear infections",
    gradient: "from-primary/20 to-primary/10"
  }, {
    icon: Eye,
    title: "Eye infections or eye injuries",
    gradient: "from-accent/20 to-accent/10"
  }, {
    icon: Activity,
    title: "Abscesses",
    gradient: "from-destructive/20 to-destructive/10"
  }, {
    icon: Heart,
    title: "Anal gland issues",
    gradient: "from-secondary/20 to-secondary/10"
  }, {
    icon: Stethoscope,
    title: "Vomiting or diarrhea",
    gradient: "from-primary/20 to-primary/10"
  }, {
    icon: Bandage,
    title: "Wounds, lacerations",
    gradient: "from-muted/30 to-muted/20"
  }, {
    icon: Activity,
    title: "Limping",
    gradient: "from-destructive/20 to-destructive/10"
  }, {
    icon: Scissors,
    title: "Torn toe nail",
    gradient: "from-accent/20 to-accent/10"
  }, {
    icon: Shield,
    title: "And many others!",
    gradient: "from-secondary/20 to-secondary/10"
  }];
  return <section id="urgent-care" className="py-24 bg-gradient-to-br from-muted/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Clock className="text-primary w-6 h-6 mr-2" />
              <Shield className="text-secondary w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 tracking-tight">
              Beyond Regular Vet Hours?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-2xl font-heading font-semibold text-secondary mb-4">
              We Bridge the Gap So You Don't Have to Worry
            </p>
            <p className="text-xl font-heading text-foreground mb-4 font-medium">
              When it's serious but not life-threatening—we're your answer.
            </p>
            <p className="text-lg font-body text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              No more agonizing over whether to rush to the ER or wait until morning. In addition to emergency medicine, we are equipped to deal with common urgent care situations. See below for some of the more common reasons you might come in as an urgent case:
            </p>
          </div>

          {/* Mobile-optimized Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 px-4 sm:px-0">
            {urgentCareServices.map((service, index) => {
            const IconComponent = service.icon;
            return <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border border-primary/20 bg-gradient-to-br from-card to-muted/10">
                  <CardContent className="p-6 text-center">
                    <div className={`bg-gradient-to-br ${service.gradient} border border-primary/20 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-primary group-hover:text-secondary transition-colors duration-300" size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-primary group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Enhanced Quote Section */}
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 border-4 border-primary/30 shadow-2xl backdrop-blur-sm relative overflow-hidden mb-16">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
            
            <CardContent className="relative p-16 text-center">
              <div className="max-w-5xl mx-auto">
                {/* Quote Icon */}
                <div className="text-8xl text-primary/30 mb-8 leading-none">&ldquo;</div>
                
                <blockquote className="text-3xl md:text-4xl font-body italic text-foreground mb-12 leading-relaxed font-medium">
                  "When it's 2 AM and your dog is in distress, you shouldn't have to choose between waiting until morning or facing a massive ER bill. We built this place to be that middle ground—expert emergency care when you need it most, without the chaos of a big hospital."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  <cite className="text-primary font-heading font-black text-2xl not-italic">
                    Dr. David Beeh
                  </cite>
                  <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                </div>
                
                <p className="text-secondary font-body font-semibold text-lg">
                  Emergency Veterinarian | Co-Founder
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 rounded-3xl p-12 border-2 border-primary/20">
              <h3 className="text-3xl font-heading font-black text-primary mb-6">
                Have Questions About Urgent Care?
              </h3>
              <p className="text-xl font-body text-foreground mb-8 max-w-2xl mx-auto font-semibold">
                Our team is here to help you determine the best care for your pet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:424-272-7678" className="group inline-flex items-center justify-center px-12 py-6 bg-primary text-primary-foreground font-black text-xl rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-110 font-heading transform hover:-rotate-1">
                  <Phone className="mr-3" size={24} />
                  Call Us: (424) 272-7678
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default UrgentCare;