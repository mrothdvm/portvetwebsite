import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmergencyCheck from "@/components/EmergencyCheck";
import WhatToExpect from "@/components/WhatToExpect";
import UrgentCare from "@/components/UrgentCare";
import Founders from "@/components/Founders";
import Mission from "@/components/Mission";
import Location from "@/components/Location";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import SkipLink from "@/components/SkipLink";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Port of LA Animal ER - Emergency & Urgent Care for Dogs & Cats | Wilmington, CA</title>
        <link rel="canonical" href="https://port.vet/" />
        <meta name="description" content="Doctor-owned emergency veterinary hospital now open in Wilmington, CA. After-hours emergency care for dogs & cats, 6 PM - 8 AM." />
      </Helmet>
      <SkipLink />
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          <Hero />
          <EmergencyCheck />
          <WhatToExpect />
          <UrgentCare />
          <Founders />
          <Mission />
          <Location />
          <EmailCapture />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </>
  );
};

export default Index;
