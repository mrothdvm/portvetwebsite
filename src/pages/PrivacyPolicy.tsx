import { Shield, Eye, Cookie, Database, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Port of LA Animal ER</title>
        <link rel="canonical" href="https://port.vet/privacy-policy/" />
        <meta name="description" content="Privacy Policy for Port of LA Animal ER. Learn how we protect your information and comply with CCPA, Google Ads, and Facebook Pixel requirements." />
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
              <Shield className="w-8 h-8 text-secondary" />
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
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
          
          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Port of LA Animal ER ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website port.vet and use our services. This policy complies with Google Ads, Facebook Ads, and California Consumer Privacy Act (CCPA) requirements.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Email addresses collected through our email capture form</li>
                    <li>Contact information when you reach out to us</li>
                    <li>Pet information if you become a client</li>
                    <li>Emergency contact details for veterinary services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring websites and search terms</li>
                    <li>Location data (general geographic area)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-primary" />
                Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">We use cookies and similar tracking technologies to enhance your experience and for advertising purposes:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">Required for website functionality and security.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">Google Analytics to understand website usage patterns.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Advertising Cookies</h4>
                    <p className="text-sm text-muted-foreground">Google Ads and Facebook Pixel for remarketing and conversion tracking.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google and Facebook Ads */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Advertising and Remarketing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Google Ads</h3>
                  <p className="text-muted-foreground mb-2">We use Google Ads services which may:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Track conversions and website interactions</li>
                    <li>Create remarketing audiences based on website visits</li>
                    <li>Show you our ads on Google and partner websites</li>
                    <li>Use demographic and interest data for ad targeting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Facebook/Meta Pixel</h3>
                  <p className="text-muted-foreground mb-2">Our Facebook Pixel helps us:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Measure the effectiveness of our advertising</li>
                    <li>Create custom audiences for ad targeting</li>
                    <li>Track conversions from Facebook and Instagram ads</li>
                    <li>Optimize ad delivery to people likely to be interested in our services</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Send emergency veterinary care updates and announcements</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground"><strong>Email Addresses:</strong> Retained until you unsubscribe or request deletion</p>
                <p className="text-muted-foreground"><strong>Website Analytics:</strong> 26 months (Google Analytics default)</p>
                <p className="text-muted-foreground"><strong>Advertising Data:</strong> Up to 2 years for remarketing purposes</p>
                <p className="text-muted-foreground"><strong>Client Records:</strong> As required by veterinary practice regulations</p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights (CCPA) */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Your Privacy Rights (CCPA)</h2>
              <p className="text-muted-foreground mb-4">California residents have the right to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Know</h4>
                  <p className="text-sm text-muted-foreground">Request information about personal data we collect, use, and share</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Delete</h4>
                  <p className="text-sm text-muted-foreground">Request deletion of your personal information</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Opt-Out</h4>
                  <p className="text-sm text-muted-foreground">Opt-out of the sale of personal information</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Non-Discrimination</h4>
                  <p className="text-sm text-muted-foreground">Equal service regardless of privacy choices</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, contact us at <a href="mailto:hello@port.vet" className="text-primary hover:underline">hello@port.vet</a>
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground"><strong>Google Analytics:</strong> Web analytics service</p>
                <p className="text-muted-foreground"><strong>Google Ads:</strong> Advertising platform and conversion tracking</p>
                <p className="text-muted-foreground"><strong>Facebook/Meta:</strong> Social media advertising and tracking</p>
                <p className="text-muted-foreground"><strong>Email Service Providers:</strong> For sending emergency updates and communications</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">Email: <a href="mailto:hello@port.vet" className="text-primary hover:underline">hello@port.vet</a></p>
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

export default PrivacyPolicy;