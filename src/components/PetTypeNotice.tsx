import { Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PetTypeNotice = () => {
  return (
    <Card className="bg-gradient-to-r from-accent/5 to-secondary/5 border border-accent/20 shadow-md backdrop-blur-sm mb-6">
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="p-1.5 bg-accent/20 rounded-full mr-3 flex-shrink-0 mt-0.5">
            <Info className="text-accent" size={16} />
          </div>
          <div>
            <p className="text-foreground font-body leading-relaxed text-sm">
              <span className="font-semibold text-accent">Dogs & Cats Specialists:</span> We focus exclusively on emergency and urgent care for dogs and cats of all sizes. 
              For other pets, please contact your local veterinarian for appropriate referrals.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PetTypeNotice;