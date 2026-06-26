import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Heart, User, Award, Music, Gamepad2 } from "lucide-react";

// Import Dr. Beeh's photo
import drBeehPhoto from "/lovable-uploads/02550c9c-0a33-452d-88f4-d5c6b8237fc3.png";
const Founders = () => {
  return <section id="founders" className="py-16 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-primary text-9xl">+</div>
        <div className="absolute top-40 right-20 text-secondary text-6xl">♥</div>
        <div className="absolute bottom-20 left-1/4 text-accent text-7xl">+</div>
        <div className="absolute bottom-40 right-1/3 text-primary text-5xl">♥</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 drop-shadow-sm">
              Meet Our Founding Veterinarians
            </h2>
            <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Doctor-owned. Ethics-driven. Built for the community. Two passionate veterinarians 
              bringing decades of expertise to the Port of LA and South Bay.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Dr. David Beeh */}
            <Card className="group relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-card to-card/80">
              <CardContent className="p-0">
                {/* Photo Section */}
                <div className="relative h-80 overflow-hidden">
                  <img src={drBeehPhoto} alt="Dr. David Beeh DVM, emergency veterinarian and co-founder of Port of LA Animal ER, with over 10 years of experience in veterinary emergency medicine" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <Stethoscope size={20} />
                      
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-heading font-bold text-primary mb-2">Dr. David Beeh</h3>
                    <p className="text-lg font-body text-secondary font-semibold">Emergency Veterinarian | Co-Founder</p>
                  </div>

                  {/* Expertise Badges */}
                  

                  {/* Quote */}
                  <blockquote className="bg-primary/5 rounded-lg p-6 mb-6 border-l-4 border-primary">
                    <p className="text-lg font-body italic text-foreground leading-relaxed mb-3">
                      "We could have opened anywhere, but we chose this community because it needed what we offer. Honest medicine, fair pricing, and doctors who actually live here. Sometimes the best business decision is just doing what's right."
                    </p>
                    <cite className="text-primary font-semibold font-body">— Dr. David Beeh</cite>
                  </blockquote>

                  {/* Personal Interests */}
                  <div className="space-y-3">
                    <h4 className="font-heading font-semibold text-lg text-primary">Beyond Medicine</h4>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Gamepad2 size={16} />
                      <span className="font-body">Avid gamer (video & tabletop games)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Heart size={16} />
                      <span className="font-body">Passionate cook & baker</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Award size={16} />
                      <span className="font-body">Hiking & camping enthusiast</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Melissa Roth */}
            <Card className="group relative overflow-hidden border-2 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-card to-card/80">
              <CardContent className="p-0">
                {/* Dr. Roth's photo */}
                <div className="relative h-80 overflow-hidden">
                  <img src="/lovable-uploads/ff1b30fe-81dc-49ab-bfd2-a339eb31c016.png" alt="Dr. Melissa Roth DVM, emergency veterinarian, medical director and co-founder of Port of LA Animal ER, with over 10 years of experience in veterinary emergency medicine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <Stethoscope size={20} />
                      
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-heading font-bold text-primary mb-2">Dr. Melissa Roth</h3>
                    <p className="text-lg font-body text-secondary font-semibold">Emergency Veterinarian | Medical Director | Co-Founder</p>
                  </div>

                  {/* Expertise Badges */}
                  

                  {/* Quote */}
                  <blockquote className="bg-secondary/5 rounded-lg p-6 mb-6 border-l-4 border-secondary">
                    <p className="text-lg font-body italic text-foreground leading-relaxed mb-3">
                      "Everyone is entitled to feeling heard and receiving ethically driven, compassionate medical care. We want to better the local community because we are part of the local community. We are incredibly honored to serve the Port of LA and surrounding communities."
                    </p>
                    <cite className="text-secondary font-semibold font-body">— Dr. Melissa Roth</cite>
                  </blockquote>

                  {/* Personal Interests */}
                  <div className="space-y-3">
                    <h4 className="font-heading font-semibold text-lg text-primary">Beyond Medicine</h4>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Music size={16} />
                      <span className="font-body">In a past life, drummer and indie record label owner</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Heart size={16} />
                      <span className="font-body">Land manatee devotee aka proud pit bull mom</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Award size={16} />
                      <span className="font-body">Passionate about community pride, activism, and quality medical care for pets and humans alike</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Combined Mission Statement */}
          <Card className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-heading font-bold text-primary mb-6">Our Shared Vision</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl font-body text-foreground leading-relaxed mb-6">
                  Between the two of them, Dr. Beeh and Dr. Roth have decades of emergency veterinary medicine experience. They share a commitment to ethical, community-focused care, in a personalized and compassionate manner. They believe passionately that everyone has the right to high-quality, accessible emergency care and they are honored to offer that to the Port of LA community and surrounding neighborhoods.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="text-primary" size={24} />
                    </div>
                    <h4 className="font-heading font-semibold text-lg text-primary mb-2">Compassionate Care</h4>
                    <p className="font-body text-muted-foreground">Every patient treated with the same love we give our own pets</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="text-secondary" size={24} />
                    </div>
                    <h4 className="font-heading font-semibold text-lg text-primary mb-2">Excellence</h4>
                    <p className="font-body text-muted-foreground">Continuous learning and improvement in everything we do</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="text-accent" size={24} />
                    </div>
                    <h4 className="font-heading font-semibold text-lg text-primary mb-2">Community</h4>
                    <p className="font-body text-muted-foreground">Locals working for locals, building trust together</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Founders;