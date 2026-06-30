import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tag } from "lucide-react";

const Specials = () => {
  return (
    <>
      <Helmet>
        <title>Specials & Offers | Port of LA Animal ER</title>
        <meta name="description" content="Current specials and offers at Port of LA Animal ER in Wilmington, CA." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 text-center">
            <div className="container mx-auto max-w-3xl">
              <div className="flex justify-center mb-4">
                <Tag className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-heading font-black text-4xl md:text-5xl text-primary mb-4">
                Current Specials
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                We're committed to making quality emergency care accessible. Check back here for our latest offers.
              </p>
            </div>
          </section>

          {/* Placeholder content — replace with Melissa's specials */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg font-body">Specials and offers coming soon. Check back shortly!</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Specials;