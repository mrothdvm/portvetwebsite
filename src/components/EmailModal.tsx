import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface EmailModalProps {
  children: React.ReactNode;
}

const EmailModal = ({ children }: EmailModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
          source: 'email_modal_form'
        }
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Successfully Subscribed!",
          description: "You'll be the first to know when we open our doors.",
        });
        setFormData({ name: '', email: '', petType: '', supportCommunity: false, consentToContact: false });
        setIsOpen(false);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-primary">
            <Mail size={20} />
            Get Opening Alerts
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              aria-describedby="modal-email-description"
            />
            <span id="modal-email-description" className="sr-only">Enter your email address to receive opening alerts</span>
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
              id="support"
              checked={formData.supportCommunity}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, supportCommunity: checked as boolean }))}
            />
            <Label htmlFor="support" className="text-sm">
              I want to support your community work
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consentToContact}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consentToContact: checked as boolean }))}
              aria-required="true"
              aria-describedby="modal-consent-description"
            />
            <Label htmlFor="consent" className="text-sm">
              I consent to being contacted about veterinary services *
            </Label>
            <span id="modal-consent-description" className="sr-only">You must consent to being contacted to receive alerts</span>
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting || !formData.consentToContact}
            variant="secondary"
          >
            {isSubmitting ? "Subscribing..." : "Notify Me"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;