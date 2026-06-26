import { Shield, AlertTriangle, FileText, Heart, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Terms of Service | Port of LA Animal ER</title>
        <link rel="canonical" href="https://port.vet/terms-of-service/" />
        <meta name="description" content="Terms of Service for Port of LA Animal ER. Emergency veterinary care policies, disclaimers, and usage guidelines." />
      </Helmet>
      <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mb-6 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
            >
              ← Back to Home
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <FileText className="w-8 h-8 text-secondary" />
              <h1 className="text-3xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-primary-foreground/80">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Emergency Disclaimer */}
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-red-700">
                <AlertTriangle className="w-6 h-6" />
                Emergency Services Disclaimer
              </h2>
              <div className="space-y-3 text-red-700">
                <p className="font-semibold">⚠️ IMPORTANT: This website is for informational purposes only and does NOT constitute emergency veterinary advice.</p>
                <p>If your pet is experiencing a life-threatening emergency, call us immediately or go to the nearest emergency veterinary hospital.</p>
                <p>Our after-hours emergency services are subject to staff availability and current capacity.</p>
              </div>
            </CardContent>
          </Card>

          {/* Acceptance of Terms */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Port of LA Animal ER website (port.vet), you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our website and emergency veterinary services.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                Our Services
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">Port of LA Animal ER provides:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>After-hours emergency veterinary care</li>
                  <li>Urgent medical treatment for pets</li>
                  <li>Quality of life consultations</li>
                  <li>End-of-life care and compassionate euthanasia services</li>
                  <li>Emergency triage and stabilization</li>
                </ul>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 font-medium">
                    ⚠️ We specialize in emergency and urgent care only. For routine veterinary care, please contact your regular veterinarian.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medical Disclaimers */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Medical Disclaimers</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">No Veterinarian-Client-Patient Relationship</h3>
                  <p className="text-blue-700">Using this website does not establish a veterinarian-client-patient relationship. Actual examination of your pet is required for diagnosis and treatment recommendations.</p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Not a Substitute for Professional Care</h3>
                  <p className="text-green-700">Information on this website is not a substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice of your veterinarian.</p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Emergency Availability</h3>
                  <p className="text-purple-700">Emergency services are subject to veterinarian availability, hospital capacity, and the nature of your pet's condition.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Website Usage */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Website Usage Guidelines</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Permitted Uses</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Accessing information about our emergency services</li>
                    <li>Signing up for updates about our clinic opening</li>
                    <li>Contacting us for emergency veterinary needs</li>
                    <li>Viewing our location and contact information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Prohibited Uses</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Using the site for any unlawful purpose</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Transmitting viruses or malicious code</li>
                    <li>Interfering with the proper functioning of the website</li>
                    <li>Using automated systems to access the site</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Communications */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                Email Communications
              </h2>
              <div className="space-y-3">
                <p className="text-muted-foreground">By providing your email address, you consent to receive:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Updates about our clinic opening and services</li>
                  <li>Emergency care tips and pet health information</li>
                  <li>Service announcements and important notices</li>
                  <li>Marketing communications (you may opt-out at any time)</li>
                </ul>
                <p className="text-muted-foreground">
                  <strong>Note:</strong> Email should NOT be used for emergency communications. Call us directly for urgent pet care needs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>To the fullest extent permitted by law, Port of LA Animal ER shall not be liable for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Any indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages resulting from use or inability to use our website</li>
                  <li>Any errors or omissions in website content</li>
                  <li>Interruption of service or system downtime</li>
                </ul>
                <p className="font-semibold">
                  Our total liability shall not exceed the amount paid by you for our services, if any.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>All content on this website, including but not limited to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Text, graphics, logos, and images</li>
                  <li>Software and website design</li>
                  <li>Medical information and educational content</li>
                  <li>Trademarks and service marks</li>
                </ul>
                <p>
                  Are owned by or licensed to Port of LA Animal ER and protected by copyright and trademark laws.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service are governed by and construed in accordance with the laws of the State of California. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Los Angeles County, California.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. 
                Your continued use of our website after changes are posted constitutes acceptance of the modified terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service or our emergency veterinary services:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">Email: <a href="mailto:hello@port.vet" className="text-primary hover:underline">hello@port.vet</a></p>
                <p className="text-muted-foreground">Website: <a href="https://www.port.vet" className="text-primary hover:underline">www.port.vet</a></p>
                <p className="text-muted-foreground">Address: 400 N Avalon Blvd, Wilmington, CA 90744</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
    </>
  );
};

export default TermsOfService;