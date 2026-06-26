import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Calendar, Heart, Shield, Stethoscope, PawPrint, Users, CheckCircle, AlertTriangle, Activity, Baby } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
const Brochure = () => {
  return <>
    <Helmet>
      <title>Brochure | Port of LA Animal ER</title>
      <link rel="canonical" href="https://port.vet/brochure/" />
      <meta name="description" content="Download our brochure to learn more about Port of LA Animal ER emergency veterinary services in Wilmington, CA." />
    </Helmet>
    <div className="min-h-screen bg-muted">
      <style>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
            box-sizing: border-box !important;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            font-family: Arial, sans-serif !important;
            -webkit-print-color-adjust: exact !important;
          }
          
          @page {
            size: 11in 8.5in;
            margin: 0;
          }
          
          .brochure-container {
            width: 100% !important;
            max-width: none !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            overflow: visible !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-only {
            display: block !important;
          }
          
          /* Unified print page sizing to avoid overflow and blank pages */
          .print-page {
            width: 11in !important;
            height: 8.5in !important;
            padding: 0.35in !important; /* safe area for most printers */
            margin: 0 !important;
            box-sizing: border-box !important;
            display: flex !important;
            flex-direction: row !important;
            gap: 0.2in !important;
            overflow: hidden !important;
            page-break-inside: avoid !important;
          }

          .print-page:not(:last-child) {
            page-break-after: always !important;
          }

          /* Keep distinct backgrounds/colors per side */
          .front-page {
            background: linear-gradient(135deg, #044756 0%, #079ACB 100%) !important;
            color: white !important;
          }

          .back-page {
            background: white !important;
            color: #262626 !important;
          }
          
          .logo-section {
            text-align: center !important;
            margin-bottom: 0.2in !important;
          }
          
          .logo-section img {
            max-width: 1.5in !important;
            height: auto !important;
            display: block !important;
            margin: 0 auto !important;
          }
          
          .doctor-photo {
            width: 1in !important;
            height: 1in !important;
            border-radius: 50% !important;
            object-fit: cover !important;
            border: 2pt solid #F5B91F !important;
            display: block !important;
            margin: 0 auto !important;
          }
          
          .qr-code {
            width: 1in !important;
            height: 1in !important;
          }
          
          h1 {
            font-size: 18pt !important;
            line-height: 1.1 !important;
            margin: 6pt 0 !important;
            font-weight: bold !important;
          }
          
          h2 {
            font-size: 14pt !important;
            line-height: 1.2 !important;
            margin: 4pt 0 !important;
            font-weight: bold !important;
          }
          
          h3 {
            font-size: 11pt !important;
            line-height: 1.2 !important;
            margin: 3pt 0 !important;
            font-weight: bold !important;
          }
          
          p, li {
            font-size: 9pt !important;
            line-height: 1.3 !important;
            margin: 1pt 0 !important;
          }
          
          .contact-large {
            font-size: 12pt !important;
            font-weight: bold !important;
          }
          
          .icon-text {
            display: flex !important;
            align-items: center !important;
            gap: 3pt !important;
            margin: 3pt 0 !important;
          }
          
          .icon-text svg {
            width: 10pt !important;
            height: 10pt !important;
            flex-shrink: 0 !important;
          }
          
          .service-item {
            display: flex !important;
            align-items: flex-start !important;
            gap: 4pt !important;
            margin: 4pt 0 !important;
            padding: 4pt !important;
            background: rgba(255, 255, 255, 0.2) !important;
            border-radius: 3pt !important;
            color: white !important;
          }
          
          .service-item svg {
            width: 12pt !important;
            height: 12pt !important;
            color: white !important;
            flex-shrink: 0 !important;
          }
          
          .emergency-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 4pt !important;
          }
          
          .urgent-grid {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 3pt !important;
          }
          
          .two-column {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0.2in !important;
          }
          
          .bg-white\/20 {
            background: rgba(255, 255, 255, 0.2) !important;
          }
          
          .bg-card {
            background: #f8fafc !important;
            color: #262626 !important;
          }
          
          .bg-primary {
            background: #044756 !important;
            color: white !important;
          }
          
          .bg-secondary {
            background: #F5B91F !important;
            color: #262626 !important;
          }
          
          .text-primary {
            color: #044756 !important;
          }
          
          .text-secondary {
            color: #F5B91F !important;
          }
          
          .rounded-lg {
            border-radius: 6pt !important;
          }
        }
        
        .brochure-container {
          max-width: 11in;
          margin: 2rem auto;
          background: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        
        .print-only {
          display: none;
        }
        
        .front-page, .back-page {
          min-height: 8.5in;
          padding: 2rem;
          display: flex;
          flex-direction: row;
          gap: 1rem;
        }
        
        .front-page {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
          color: hsl(var(--primary-foreground));
        }
        
        .back-page {
          background: hsl(var(--background));
          color: hsl(var(--foreground));
        }
        
        .logo-section {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .logo-section img {
          max-width: 200px;
          height: auto;
        }
        
        .doctor-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid hsl(var(--secondary));
        }
        
        .qr-code {
          margin: 0 auto;
        }
        
        .icon-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0.75rem 0;
        }
        
        .icon-text svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
        
        .service-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1rem 0;
          padding: 1rem;
          background: hsl(var(--card));
          border-radius: 8px;
          color: hsl(var(--card-foreground));
        }
        
        .service-item svg {
          width: 24px;
          height: 24px;
          color: hsl(var(--primary));
        }
      `}</style>
      
      <div className="brochure-container">
        <div className="no-print p-6 text-center border-b border-border">
          <Button onClick={() => window.print()} className="px-8 py-2 text-lg">
            🖨️ Print Production Brochure
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Optimized for 11" × 8.5" paper in <strong>landscape orientation</strong> • Production-ready two-sided layout
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Professional brochure with accurate hospital information
          </p>
        </div>
        
        {/* FRONT PAGE */}
        <div className="front-page print-page">
          {/* Left Column - Branding & Emergency */}
          <div className="flex-1">
            <div className="logo-section">
              <img src="/lovable-uploads/80a3b760-b809-46c5-bb7c-3e07eb4623ee.png" alt="Port of LA Animal Emergency Hospital Logo" className="mx-auto mb-4" onError={e => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjVCOTFGIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzA0NDc1NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UG9ydCBvZiBMQSBBbmltYWwgRVI8L3RleHQ+Cjwvc3ZnPgo=';
            }} />
              <h1 className="text-3xl font-bold mb-2">Port of LA Animal Emergency Hospital</h1>
              <p className="text-lg mb-2">(Port of LA Animal ER)</p>
              <p className="text-lg italic mb-4">"When Every Second Counts, We're Here for Your Pet"</p>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4 mb-6">
              <h2 className="text-xl font-bold mb-3 text-center">EMERGENCY LINE</h2>
              <div className="icon-text justify-center text-xl">
                <Phone className="w-6 h-6" />
                <span className="font-bold">(424) 272-PORT</span>
              </div>
              <p className="text-center mt-2 text-sm">Current Hours: 6 PM - 8 AM (Closed Tuesdays)</p>
              <p className="text-center text-sm">Future Goal: Working toward 24/7 availability</p>
            </div>

            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-3">Our Location</h3>
              <div className="icon-text">
                <MapPin />
                <div>
                  <p className="font-medium">400 N Avalon Blvd, Wilmington, CA 90744</p>
                  <p className="text-sm">Right across from Maya's Mexican Restaurant</p>
                  <p className="text-sm">Corner of Avalon Blvd and D Street</p>
                </div>
              </div>
              <div className="icon-text mt-3">
                <Mail />
                <span>hello@port.vet • www.port.vet</span>
              </div>
              <p className="text-sm mt-2">Service Areas: Wilmington, Long Beach, San Pedro, Lomita, Torrance, South Bay</p>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-center">TRUE EMERGENCIES - COME IMMEDIATELY</h2>
            <div className="emergency-grid mb-6">
              <div className="service-item bg-white/20 text-white">
                <AlertTriangle />
                <span>Trouble breathing</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <Heart />
                <span>Hit by car/trauma</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <Activity />
                <span>Seizures</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <Heart />
                <span>Uncontrolled bleeding</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <PawPrint />
                <span>Bloat (swollen belly)</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <Heart />
                <span>Vomiting/diarrhea w/ blood</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <Shield />
                <span>Paralysis/weakness</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <AlertTriangle />
                <span>Heatstroke</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <Heart />
                <span>Difficulty urinating</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <Activity />
                <span>Collapse</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <AlertTriangle />
                <span>Poisoning/toxic ingestion</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <Heart />
                <span>Extreme pain</span>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-3">URGENT CARE - Need Attention</h3>
            <div className="urgent-grid">
              <div className="service-item bg-white/20 text-white">
                <Stethoscope />
                <span>Skin & ear infections • Eye infections • Abscesses</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <PawPrint />
                <span>Wounds & lacerations • Limping • Torn toenails</span>
              </div>
              <div className="service-item bg-white/20 text-white">
                <Shield />
                <span>Anal gland issues • Many other conditions</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* BACK PAGE */}
        <div className="back-page print-page">
          {/* Left Column - Doctors */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-primary text-center mb-6">Meet Our Founding Veterinarians</h1>
            
            <div className="mb-6">
              <div className="text-center mb-4">
                <img src="/lovable-uploads/02550c9c-0a33-452d-88f4-d5c6b8237fc3.png" alt="Dr. David Beeh" className="doctor-photo mx-auto mb-2" onError={e => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjYwIiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNmI3MzgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EciBCZWVoPC90ZXh0Pgo8L3N2Zz4K';
              }} />
                <h3 className="text-lg font-bold text-primary">Dr. David Beeh</h3>
                <p className="text-secondary font-medium">Veterinarian | Co-Founder</p>
              </div>
              <div className="bg-card p-3 rounded-lg">
                <p className="text-sm italic mb-2">
                  "We could have opened anywhere, but we chose this community because it needed what we offer. Honest medicine, fair pricing, and doctors who actually live here."
                </p>
                <p className="text-xs">
                  <strong>Interests:</strong> Gaming enthusiast, passionate cook & baker, hiking & camping lover
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-center mb-4">
                <img src="/lovable-uploads/ff1b30fe-81dc-49ab-bfd2-a339eb31c016.png" alt="Dr. Melissa Roth" className="doctor-photo mx-auto mb-2" onError={e => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjYwIiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNmI3MzgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EciBSb3RoPC90ZXh0Pgo8L3N2Zz4K';
              }} />
                <h3 className="text-lg font-bold text-primary">Dr. Melissa Roth</h3>
                <p className="text-secondary font-medium">Veterinarian | Medical Director | Co-Founder</p>
              </div>
              <div className="bg-card p-3 rounded-lg">
                <p className="text-sm italic mb-2">
                  "Everyone is entitled to feeling heard and receiving ethically driven, compassionate medical care. We want to better the local community because we are part of it."
                </p>
                <p className="text-xs">
                  <strong>Background:</strong> Former drummer and indie record label owner, proud pit bull mom
                </p>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-lg p-4">
              <h3 className="text-lg font-bold text-center mb-2">Our Shared Vision</h3>
              <div className="text-sm space-y-1">
                <p><strong>Compassionate Care:</strong> Every pet deserves empathy and understanding</p>
                <p><strong>Excellence:</strong> Highest standards in emergency medicine</p>
                <p><strong>Community:</strong> Locally grown, doctor-owned practice</p>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Event */}
          <div className="flex-1">
            <div className="bg-primary text-primary-foreground rounded-lg p-4 mb-6">
              <h2 className="text-xl font-bold text-center mb-3">Our Mission</h2>
              <p className="text-sm text-center leading-relaxed">
                Locally grown, doctor-owned animal emergency medicine with compassionate, top-notch care. 
                We provide honest medicine, fair pricing, and doctors who actually live in the community we serve.
              </p>
            </div>

            <div className="bg-secondary text-secondary-foreground rounded-lg p-4 mb-6">
              <h2 className="text-lg font-bold text-center mb-3">Unique Value Propositions</h2>
              <div className="text-sm space-y-2">
                <div className="icon-text">
                  <CheckCircle size={14} />
                  <span><strong>Doctor-Owned:</strong> Not corporate, locally invested</span>
                </div>
                <div className="icon-text">
                  <Users size={14} />
                  <span><strong>Community-Focused:</strong> Built for local residents</span>
                </div>
                <div className="icon-text">
                  <Clock size={14} />
                  <span><strong>After-Hours Specialist:</strong> When regular vets are closed</span>
                </div>
                <div className="icon-text">
                  <Heart size={14} />
                  <span><strong>Ethical Pricing:</strong> Fair, transparent pricing</span>
                </div>
                <div className="icon-text">
                  <Stethoscope size={14} />
                  <span><strong>Expert Care:</strong> Emergency-trained veterinarians</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-4 text-center">
              <h2 className="text-lg font-bold mb-3 text-primary">Professional Meet & Greet</h2>
              <div className="icon-text justify-center mb-2">
                <Calendar size={14} />
                <span className="font-medium text-sm">We would love you to see our facility!</span>
              </div>
              <p className="text-xs mb-3">Hospital tour • Meet founding veterinarians • Q&A sessions</p>
              <div className="flex justify-center mb-2">
                <QRCodeSVG value="https://port.vet/meet-and-greet" size={60} className="qr-code" />
              </div>
              <p className="text-xs">Scan for event details</p>
              
              <div className="mt-4 pt-3 border-t border-primary/20">
                <h3 className="font-bold text-sm mb-2 text-primary">Contact Information</h3>
                <div className="text-xs space-y-1">
                  <div className="icon-text justify-center">
                    <Phone size={10} />
                    <span>(424) 272-PORT</span>
                  </div>
                  <div className="icon-text justify-center">
                    <Mail size={10} />
                    <span>hello@port.vet</span>
                  </div>
                  <p>www.port.vet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};
export default Brochure;