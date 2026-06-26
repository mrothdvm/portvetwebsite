import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Phone, Clock, Car } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-6">
              <MapPin className="text-primary w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 tracking-tight">
              Right in Your Neighborhood
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl font-heading text-secondary mb-6 font-semibold">
              Find us on the corner of Avalon Blvd and D. Street. We're right across the street from Wilmington's own, Maya's Mexican Restaurant.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-stretch mb-12 px-4 sm:px-0">
            {/* Mobile-optimized Address Card */}
            <Card className="border-2 sm:border-4 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/5 shadow-lg sm:shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20">
                <CardTitle className="flex items-center text-primary text-3xl font-heading font-black">
                  <MapPin className="mr-4" size={36} />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-10 space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-black text-primary mb-2">
                    400 N Avalon Blvd
                  </div>
                  <div className="text-lg sm:text-2xl font-body text-secondary font-semibold">
                    Wilmington, CA 90744
                  </div>
                </div>
                
                <div className="bg-secondary/10 rounded-2xl p-6 border-2 border-secondary/20">
                  <div className="flex items-start text-foreground mb-4">
                    <Navigation className="mr-4 mt-1 flex-shrink-0 text-secondary" size={24} />
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-2">Easy Access From:</h4>
                      <p className="font-body">Wilmington, Long Beach, San Pedro, Lomita, Torrance, and other surrounding areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-foreground">
                    <Car className="mr-4 mt-1 flex-shrink-0 text-secondary" size={24} />
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-2">Parking:</h4>
                      <p className="font-body">Ample free parking in our private parking lot or free street parking can be found on Avalon Blvd and D. Street.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="w-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6632.941343706519!2d-118.261789!3d33.7743418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd36785985e753%3A0x8e1e035143209017!2s400%20N%20Avalon%20Blvd%2C%20Wilmington%2C%20CA%2090744!5e0!3m2!1sen!2sus!4v1756263805569!5m2!1sen!2sus" 
                      width="100%" 
                      height="300" 
                      style={{border:0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl shadow-lg"
                      title="Google Maps location of Port of LA Animal ER at 400 N Avalon Blvd, Wilmington CA 90744 showing free parking and easy access from San Pedro, Long Beach, and Harbor City"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.google.com/maps/place/400+N+Avalon+Blvd,+Wilmington,+CA+90744"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-heading font-bold shadow-xl"
                    >
                      <MapPin className="mr-3" size={20} />
                      Open in Google Maps
                    </a>
                    <a
                      href="tel:424-272-7678"
                      className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/90 transition-all duration-300 hover:scale-105 font-heading font-bold shadow-xl"
                    >
                      <Phone className="mr-3" size={20} />
                      Call Us
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Hours & Contact Card */}
            <Card className="border-4 border-secondary/30 bg-gradient-to-br from-secondary/10 to-primary/5 shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-secondary/20 to-primary/20">
                <CardTitle className="flex items-center text-secondary text-3xl font-heading font-black">
                  <Clock className="mr-4" size={36} />
                  Hours & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary/20">
                  <h3 className="font-heading font-black text-2xl text-primary mb-6 text-center">
                    Emergency Hours
                  </h3>
                  <div className="space-y-3 text-center">
                    <div className="text-lg font-body text-foreground">
                      <div className="space-y-1">
                        <div><span className="font-bold">Monday:</span> 6 PM - 8 AM</div>
                        <div><span className="font-bold">Tuesday:</span> Closed</div>
                        <div><span className="font-bold">Wednesday:</span> 6 PM - 8 AM</div>
                        <div><span className="font-bold">Thursday:</span> 6 PM - 8 AM</div>
                        <div><span className="font-bold">Friday:</span> 6 PM - 8 AM</div>
                        <div><span className="font-bold">Saturday:</span> 6 PM - 8 AM</div>
                        <div><span className="font-bold">Sunday:</span> 6 PM - 8 AM</div>
                      </div>
                    </div>
                    <div className="text-sm font-body text-secondary mt-4 pt-4 border-t border-primary/20">
                      Soon, we will be able to offer 24/7 availability
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-secondary/10 rounded-2xl p-6 border-2 border-secondary/20">
                    <h4 className="font-heading font-bold text-xl text-secondary mb-4">
                      Emergency Line
                    </h4>
                    <a 
                      href="tel:424-272-7678"
                      className="text-2xl font-heading font-black text-primary hover:text-secondary transition-colors"
                    >
                      (424) 272-7678
                    </a>
                  </div>

                  <div className="bg-accent/10 rounded-2xl p-6 border-2 border-accent/20">
                    <h4 className="font-heading font-bold text-xl text-accent mb-4">
                      Email Us
                    </h4>
                    <a 
                      href="mailto:hello@port.vet"
                      className="text-xl font-body text-primary hover:text-secondary transition-colors font-semibold"
                    >
                      hello@port.vet
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Now Open Banner */}
          <Card className="bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 border-2 border-secondary/40 shadow-xl">
            <CardContent className="p-8 sm:p-12 text-center">
              <h3 className="text-3xl font-heading font-black text-primary mb-4">
                🎉 We're Now Open!
              </h3>
              <p className="text-lg font-body text-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                Wilmington's trusted doctor-owned emergency veterinary hospital is here for you. When your pet needs immediate care, we're ready with the expertise and compassion your family deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:424-272-7678"
                  className="inline-flex items-center justify-center px-6 py-3 bg-destructive text-destructive-foreground rounded-xl hover:bg-destructive/90 transition-all duration-300 hover:scale-105 font-heading font-bold shadow-lg"
                >
                  <Phone className="mr-2" size={18} />
                  Call Now: (424) 272-7678
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;