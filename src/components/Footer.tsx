import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Globe, MapPin, Heart, Shield, Clock, Instagram, Music, Facebook, Phone, Navigation, Stethoscope, Siren, Award, BadgeCheck, HelpCircle, ChevronRight } from "lucide-react";
const Footer = () => {
  return <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden" itemScope itemType="https://schema.org/VeterinaryCare" data-emergency-available="true" data-pets-accepted="dogs,cats" data-service-type="emergency,urgent-care">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Brand Banner */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-primary-foreground/20">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">After hours Emergency Veterinary Care for your Loved Ones</span>
                <Heart className="w-5 h-5 text-red-400" />
              </div>
            </div>

            {/* Emergency CTA Banner */}
            <div className="mb-12">
              <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-400/40 backdrop-blur-sm">
                <CardContent className="p-6 bg-orange-500 rounded-md">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-red-500/30 rounded-full">
                        <Siren className="w-8 h-8 text-red-200 animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Is This An Emergency?</h3>
                        <p className="text-sm text-white/80">We're here for your pet when every second counts</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg">
                        <a href="tel:+14242727678" itemProp="telephone">
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now: (424) 272-7678
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                        <a href="https://www.google.com/maps/place/400+N+Avalon+Blvd,+Wilmington,+CA+90744" target="_blank" rel="noopener noreferrer">
                          <Navigation className="w-5 h-5 mr-2" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-8 mb-12">
              {/* Logo and About */}
              <div className="lg:col-span-2" itemScope itemType="https://schema.org/Organization">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img src="/lovable-uploads/80a3b760-b809-46c5-bb7c-3e07eb4623ee.png" alt="Port of LA Animal Emergency Room - Emergency veterinary hospital logo serving Wilmington and South Bay communities" className="h-16 w-auto filter drop-shadow-lg" itemProp="logo" loading="lazy" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" itemProp="name">Port of LA Animal ER</h3>
                    <p className="text-primary-foreground/70 text-sm" itemProp="slogan">Where Every Pet Matters</p>
                  </div>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed max-w-md" itemProp="description">
                  Wilmington's/Port of LA trusted emergency veterinary hospital. When your pet needs immediate care, we're here with the expertise and compassion your family deserves.
                </p>
                
                {/* Trust Badges */}
                <div className="grid grid-cols-1 gap-2 mt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <BadgeCheck className="w-4 h-4 text-secondary" />
                    <span className="text-primary-foreground/80 font-medium">Doctor-Owned & Operated</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span className="text-primary-foreground/80 font-medium">Transparent Pricing - No Corporate Markup</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-secondary" />
                  Quick Links
                </h3>
                <nav className="space-y-2" aria-label="Footer Navigation">
                  <a href="/" className="block p-2 rounded-lg hover:bg-primary-foreground/10 transition-all duration-200 text-sm font-medium">
                    Emergency Vet Wilmington CA
                  </a>
                  
                  <a href="/#founders" className="block p-2 rounded-lg hover:bg-primary-foreground/10 transition-all duration-200 text-sm font-medium">
                    Meet Our Veterinarians
                  </a>
                  <a href="/meet-and-greet" className="block p-2 rounded-lg hover:bg-primary-foreground/10 transition-all duration-200 text-sm font-medium">
                    Schedule Meet & Greet
                  </a>
                  <a href="/brochure" className="block p-2 rounded-lg hover:bg-primary-foreground/10 transition-all duration-200 text-sm font-medium">
                    Download Our Brochure
                  </a>
                </nav>
              </div>

              {/* Medical Services */}
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-secondary" />
                  Medical Services
                </h3>
                <ul className="space-y-2 text-sm" itemScope itemType="https://schema.org/MedicalBusiness">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-primary-foreground/80">Emergency Surgery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-primary-foreground/80">Critical Care & Monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-primary-foreground/80">Toxin Ingestion Treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-primary-foreground/80">Trauma & Accident Care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-primary-foreground/80">After-Hours Urgent Care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-primary-foreground/80">Quality of Life Consultation</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div itemScope itemType="https://schema.org/ContactPoint">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-secondary" />
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <a href="tel:+14242727678" className="flex items-center gap-3 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-105" itemProp="telephone" aria-label="Call Port of LA Animal ER Emergency Hotline">
                      <Phone className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-sm font-medium">(424) 272-7678</span>
                    </a>
                  </div>
                  <div className="group">
                    <a href="mailto:hello@port.vet" className="flex items-center gap-3 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-105" itemProp="email" aria-label="Email Port of LA Animal ER">
                      <Mail className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-sm font-medium">hello@port.vet</span>
                    </a>
                  </div>
                  <div className="group">
                    <a href="https://www.port.vet" className="flex items-center gap-3 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-105" itemProp="url" aria-label="Visit Port of LA Animal ER Website">
                      <Globe className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-sm font-medium">www.port.vet</span>
                    </a>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary-foreground/5" itemScope itemType="https://schema.org/PostalAddress">
                    <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-medium" itemProp="streetAddress">400 N Avalon Blvd</div>
                      <div className="text-primary-foreground/70">
                        <span itemProp="addressLocality">Wilmington</span>, <span itemProp="addressRegion">CA</span> <span itemProp="postalCode">90744</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  Connect
                </h3>
                <div className="space-y-3">
                  <a href="https://www.facebook.com/people/Port-of-Los-Angeles-Animal-ER/61580063932746/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-200 hover:scale-105" aria-label="Visit our Facebook page - Opens in new window">
                    <Facebook className="w-5 h-5 text-blue-200" aria-hidden="true" />
                    <div>
                      <div className="text-sm font-medium text-blue-200">Facebook</div>
                      <div className="text-xs text-blue-300/70">Follow us for updates</div>
                    </div>
                  </a>
                  <a href="https://instagram.com/portoflaanimaler" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 hover:from-pink-500/30 hover:to-purple-600/30 transition-all duration-200 hover:scale-105" aria-label="Follow us on Instagram @portoflaanimaler - Opens in new window">
                    <Instagram className="w-5 h-5 text-pink-200" aria-hidden="true" />
                    <div>
                      <div className="text-sm font-medium text-pink-200">Instagram</div>
                      <div className="text-xs text-pink-300/70">@portoflaanimaler</div>
                    </div>
                  </a>
                  <a href="https://tiktok.com/@portoflaanimal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-600/20 border border-purple-400/30 hover:from-purple-500/30 hover:to-indigo-600/30 transition-all duration-200 hover:scale-105" aria-label="Watch us on TikTok @portoflaanimal - Opens in new window">
                    <Music className="w-5 h-5 text-purple-200" aria-hidden="true" />
                    <div>
                      <div className="text-sm font-medium text-purple-200">TikTok</div>
                      <div className="text-xs text-purple-300/70">@portoflaanimal</div>
                    </div>
                  </a>
                  <a href="https://www.pinterest.com/portoflaanimaler/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-red-500/20 to-pink-600/20 border border-red-400/30 hover:from-red-500/30 hover:to-pink-600/30 transition-all duration-200 hover:scale-105" aria-label="Find us on Pinterest - Opens in new window">
                    <div className="w-5 h-5 text-red-200 flex items-center justify-center font-bold text-xs" aria-hidden="true">P</div>
                    <div>
                      <div className="text-sm font-medium text-red-200">Pinterest</div>
                      <div className="text-xs text-red-300/70">Pet care tips & info</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  Legal
                </h3>
                <div className="space-y-3">
                  <a href="/privacy-policy" className="block p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-105">
                    <div className="text-sm font-medium">Privacy Policy</div>
                    <div className="text-xs text-primary-foreground/70">Data protection & cookies</div>
                  </a>
                  <a href="/terms-of-service" className="block p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-105">
                    <div className="text-sm font-medium">Terms of Service</div>
                    <div className="text-xs text-primary-foreground/70">Emergency care terms</div>
                  </a>
                  <div className="p-3 rounded-lg bg-primary-foreground/5">
                    <div className="text-sm font-medium">Medical Disclaimer</div>
                    <div className="text-xs text-primary-foreground/70">Emergency services only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas - Local SEO */}
            <div className="mb-12" itemScope itemType="https://schema.org/Service">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                Serving the Greater Port of LA Area
              </h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Emergency veterinary care for pets throughout the South Bay and Harbor communities
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                {["Wilmington", "San Pedro", "Long Beach", "Carson", "Harbor City", "Torrance", "Gardena", "Lomita", "Compton", "Signal Hill", "Rancho Palos Verdes", "Redondo Beach", "Manhattan Beach", "El Segundo", "Hawthorne", "Inglewood"].map(city => <span key={city} className="text-xs px-3 py-2 bg-primary-foreground/5 rounded-lg hover:bg-primary-foreground/10 transition-all text-center" itemProp="areaServed">
                    {city}
                  </span>)}
              </div>
            </div>

            {/* FAQ Section with Schema */}
            <div className="mb-12" itemScope itemType="https://schema.org/FAQPage">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-secondary" />
                Quick Answers
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary-foreground/5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-sm mb-2" itemProp="name">How do I know if my pet needs emergency care?</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-xs text-primary-foreground/80" itemProp="text">
                      Seek immediate care for difficulty breathing, severe bleeding, seizures, unconsciousness, toxin ingestion, or any life-threatening situation. Trust your instincts - if you're worried, call us at (424) 272-7678.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary-foreground/5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-sm mb-2" itemProp="name">What are your emergency hours?</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-xs text-primary-foreground/80" itemProp="text">
                      We're open 6 PM to 8 AM, Monday and Wednesday-Sunday. Currently closed Tuesdays. We're working toward extended availability.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary-foreground/5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-sm mb-2" itemProp="name">Where is Port of LA Animal ER located?</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-xs text-primary-foreground/80" itemProp="text">
                      We're at 400 N Avalon Blvd, Wilmington, CA 90744, right across from Maya's Mexican Restaurant. Easy access from Wilmington, San Pedro, Long Beach, Carson, and surrounding areas.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary-foreground/5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-sm mb-2" itemProp="name">Do you accept walk-ins for emergencies?</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-xs text-primary-foreground/80" itemProp="text">
                      Yes! Emergency cases are seen immediately. For urgent but non-life-threatening cases, we recommend calling ahead at (424) 272-7678 so we can prepare for your arrival.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary-foreground/5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-sm mb-2" itemProp="name">What makes you different from corporate emergency vets?</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-xs text-primary-foreground/80" itemProp="text">
                      We're doctor-owned and operated by Dr. David Beeh and Dr. Melissa Roth, each with over 10 years of emergency veterinary experience. No corporate pressure means transparent pricing and personalized care from doctors who live in the community we serve.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary-foreground/5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-sm mb-2" itemProp="name">Do you treat both dogs and cats?</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-xs text-primary-foreground/80" itemProp="text">
                      Yes, we provide emergency veterinary care for both dogs and cats. Call us if you're unsure whether we can help your specific pet.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary-foreground/5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-sm mb-2" itemProp="name">What forms of payment do you accept?</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-xs text-primary-foreground/80" itemProp="text">
                      We accept all major credit cards, debit cards, cash, and pet insurance. Payment is expected at time of service.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary-foreground/5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 className="font-semibold text-sm mb-2" itemProp="name">Are you open 24/7?</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-xs text-primary-foreground/80" itemProp="text">
                      We specialize in after-hours emergency care. Please call ahead to confirm availability and current operating hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <Card className="bg-white/95 border border-white/30 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-800 mb-2 font-medium">
                      <strong className="text-primary">Important Notice:</strong> Port of LA Animal ER specializes in Emergency and Urgent Care. We can also offer our services in matters of quality of life and saying goodbye to your loved ones. If you are unsure if we are able to help you, please call to speak with one of our compassionate and skilled support staff.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-600">
                        © 2025 Port of LA Animal ER. All rights reserved.
                      </p>
                      <p className="text-xs text-gray-600">
                        Licensed Veterinary Emergency Hospital • CA License #XXXX
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;