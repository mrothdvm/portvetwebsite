import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const EmailCapture = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petType: '',
    supportCommunity: false,
    consentToContact: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to get updates.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.consentToContact) {
      toast({
        title: "Consent Required",
        description: "Please consent to being contacted to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('crm-webhook', {
        body: {
          name: formData.name,
          email: formData.email,
          petType: formData.petType,
          supportCommunity: formData.supportCommunity,
          consentToContact: formData.consentToContact,
          source: 'email_capture_form'
        }
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Successfully Subscribed!",
          description: "You're now signed up for updates, pet care tips, and special offers!",
        });
        setFormData({ name: '', email: '', petType: '', supportCommunity: false, consentToContact: false });
      } else {
        throw new Error(data?.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Email submission error:', error);
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="email-capture" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center text-3xl md:text-4xl text-primary mb-2">
                <Mail className="mr-3" size={32} />
                Stay Connected
              </CardTitle>
              <p className="text-muted-foreground">
                Join our community of pet lovers! Get exclusive updates, pet care tips, and special offers delivered to your inbox.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name (Optional)</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      aria-required="true"
                      aria-describedby="email-description"
                    />
                    <span id="email-description" className="sr-only">Enter your email address to receive updates about our opening</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="petType">Pet Type</Label>
                  <Select value={formData.petType} onValueChange={(value) => setFormData(prev => ({ ...prev, petType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your pet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consentToContact}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consentToContact: checked as boolean }))}
                    aria-required="true"
                    aria-describedby="consent-description"
                  />
                  <Label htmlFor="consent" className="text-sm">
                    I consent to being contacted about veterinary services *
                  </Label>
                  <span id="consent-description" className="sr-only">You must consent to being contacted to subscribe to updates</span>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting || !formData.consentToContact}
                  variant="secondary"
                  size="lg"
                >
                  {isSubmitting ? "Subscribing..." : "Notify Me"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;