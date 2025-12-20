import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoCircular from "@/assets/logo-circular.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={logoCircular} 
              alt="Dra. Bianca de Melo - Psicóloga" 
              className="h-14 md:h-16 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-foreground/80 hover:text-primary transition-all duration-300 text-sm font-medium tracking-wide relative rounded-full hover:bg-accent/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-blush-dark text-primary-foreground rounded-full text-sm font-semibold shadow-pink hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2.5 text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent/50"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-effect shadow-lg transition-all duration-400 ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-base font-medium py-3 px-4 rounded-xl hover:bg-accent/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 py-3 text-center bg-gradient-to-r from-primary to-blush-dark text-primary-foreground rounded-full font-semibold shadow-pink"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
