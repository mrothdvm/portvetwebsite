import { useState } from "react";
import { Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionNav = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { label: "Emergency Check", id: "emergency-check" },
    { label: "Our Doctors", id: "founders" },
    { label: "Mission", id: "mission" },
    { label: "Location", id: "location" },
    { label: "Meet & Greet", href: "/meet-and-greet" },
    { label: "Specials", href: "/specials" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b-2 border-primary/20 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo Section — clicking takes you home */}
          <a href="/" aria-label="Port of LA Animal ER — return to homepage" className="flex items-center space-x-4 group">
            <img
              src="/lovable-uploads/80a3b760-b809-46c5-bb7c-3e07eb4623ee.png"
              alt="Port of LA Animal Emergency Room logo - Emergency and urgent care for dogs and cats in Wilmington, CA"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                console.log('Header logo failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-black text-xl text-primary">Port of LA Animal ER</h1>
              <p className="font-body text-sm text-secondary">Dogs & Cats • Now Open Evenings</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            {navItems.map((item) => (
              item.href ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative h-10 flex items-center text-foreground hover:text-primary transition-colors text-sm font-heading font-semibold group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleSectionNav(item.id!)}
                  className="relative h-10 flex items-center text-foreground hover:text-primary transition-colors text-sm font-heading font-semibold group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:424-272-7678"
              className="inline-flex items-center px-4 py-2 bg-destructive text-destructive-foreground font-heading font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
              aria-label="Call emergency hotline at 424-272-7678"
            >
              <Phone size={16} className="mr-2" aria-hidden="true" />
              Emergency
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in" id="mobile-navigation">
            <nav className="mt-6 pb-6 border-t-2 border-primary/20 pt-6" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  item.href ? (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-left text-foreground hover:text-primary transition-colors py-3 px-4 hover:bg-primary/10 rounded-lg font-heading font-semibold"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => handleSectionNav(item.id!)}
                      className="text-left text-foreground hover:text-primary transition-colors py-3 px-4 hover:bg-primary/10 rounded-lg font-heading font-semibold"
                    >
                      {item.label}
                    </button>
                  )
                ))}

                <div className="pt-4 space-y-3">
                  <a
                    href="tel:424-272-7678"
                    className="flex items-center justify-center px-6 py-4 bg-destructive text-destructive-foreground font-heading font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Phone size={18} className="mr-3" />
                    Emergency Line
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;