import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Clock, CreditCard, Heart, Stethoscope, FileText } from "lucide-react";

const WhatToExpect = () => {
  const expectationItems = [
    {
      icon: ClipboardList,
      title: "What to Bring",
      description: "Your pet's medical records (if available), list of current medications, and a brief history of the problem. Don't worry if you don't have everything—we'll take great care of your pet either way."
    },
    {
      icon: Stethoscope,
      title: "When You Arrive",
      description: "A team member will greet you immediately to assess your pet's condition. Critical cases are seen first, while stable patients are triaged based on urgency."
    },
    {
      icon: Clock,
      title: "Wait Times",
      description: "Emergency care is prioritized by severity, not arrival time. We'll keep you informed throughout your visit and provide updates on your pet's status."
    },
    {
      icon: CreditCard,
      title: "Payment & Estimates",
      description: "We provide upfront cost estimates before treatment begins. We accept all major credit cards and offer payment plans through CareCredit, Scratchpay, and Cherry."
    },
    {
      icon: FileText,
      title: "After Your Visit",
      description: "You'll receive detailed discharge instructions and we'll send records to your regular vet. Our team is available for follow-up questions during operating hours."
    },
    {
      icon: Heart,
      title: "Our Promise",
      description: "Every pet receives the same compassionate, high-quality care we'd want for our own animals. You're never just a number here—you're family."
    }
  ];

  return (
    <section id="what-to-expect" className="py-16 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-6">
              <ClipboardList className="text-primary w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
              What to Expect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              We know emergencies are stressful. Here's what happens when you bring your pet to us—so you can focus on what matters most.
            </p>
          </div>

          {/* Expectation Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectationItems.map((item, index) => (
              <Card 
                key={index}
                className="border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Reassurance Note */}
          <div className="mt-12 text-center">
            <Card className="inline-block border-2 border-secondary/30 bg-secondary/5 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <p className="text-lg font-body text-foreground max-w-2xl">
                  <span className="font-heading font-bold text-secondary">No appointment needed.</span>{" "}
                  Just come in—we're ready for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
