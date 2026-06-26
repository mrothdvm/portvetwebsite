import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-md border-t-2 border-secondary/30 p-4 sm:hidden z-50" role="navigation" aria-label="Mobile quick actions">
      <div className="flex justify-between items-center gap-2">
        <a
          href="tel:424-272-7678"
          className="flex-1 flex items-center justify-center px-4 py-3 bg-destructive text-destructive-foreground rounded-lg font-heading font-bold text-sm shadow-lg"
          aria-label="Call emergency hotline at 424-272-7678"
        >
          <Phone size={18} className="mr-2" aria-hidden="true" />
          Emergency
        </a>
        
        <a
          href="https://maps.google.com/?q=400+N+Avalon+Blvd,+Wilmington,+CA+90744"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-heading font-bold text-sm shadow-lg"
          aria-label="Get directions to 400 N Avalon Blvd, Wilmington - Opens in new window"
        >
          <MapPin size={18} className="mr-2" aria-hidden="true" />
          Directions
        </a>
        
        <a
          href="mailto:hello@port.vet"
          className="flex-1 flex items-center justify-center px-4 py-3 bg-accent text-accent-foreground rounded-lg font-heading font-bold text-sm shadow-lg"
          aria-label="Email us at hello@port.vet"
        >
          <Mail size={18} className="mr-2" aria-hidden="true" />
          Email
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;