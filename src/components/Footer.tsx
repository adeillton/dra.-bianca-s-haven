import { Heart, Instagram, Mail, Phone } from "lucide-react";
import logoCircular from "@/assets/logo-circular.png";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/drabiancademelo", label: "Instagram" },
    { icon: Mail, href: "mailto:contato@biancademelo.com", label: "Email" },
    { icon: Phone, href: "tel:+5500000000000", label: "Telefone" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="bg-gradient-to-b from-secondary/50 to-blush-light/50 py-16">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blush/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-xl scale-150" />
              <img
                src={logoCircular}
                alt="Dra. Bianca de Melo - Psicóloga"
                className="h-24 w-24 relative z-10"
              />
            </div>
            
            {/* Tagline */}
            <p className="text-muted-foreground text-lg max-w-md mb-8 font-light">
              Cuidando da sua saúde mental com acolhimento, empatia e profissionalismo.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-10">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full bg-card border border-primary/20 flex items-center justify-center text-primary hover:bg-gradient-to-br hover:from-primary hover:to-blush-dark hover:text-primary-foreground hover:border-transparent hover:scale-110 hover:shadow-pink transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />
            
            {/* Credits */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <span>Feito com</span>
              <Heart size={14} className="text-primary fill-primary animate-pulse" />
              <span>por Dra. Bianca de Melo</span>
            </div>
            
            <p className="text-muted-foreground/70 text-xs">
              CRP: 00/00000 | © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
