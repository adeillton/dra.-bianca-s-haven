import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Heart, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoCircular from "@/assets/logo-circular.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(00) 00000-0000",
      href: "tel:+5500000000000",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@biancademelo.com",
      href: "mailto:contato@biancademelo.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@drabiancademelo",
      href: "https://instagram.com/drabiancademelo",
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg - Sex: 8h às 20h",
      href: null,
    },
  ];

  return (
    <section id="contato" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      
      {/* Decorative background */}
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-full opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-transparent to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blush/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary" />
            <Heart className="text-primary w-5 h-5" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <span className="text-primary font-semibold text-sm tracking-[0.3em] uppercase mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O primeiro passo para cuidar da sua saúde mental é buscar ajuda.
            Entre em contato e agende sua primeira sessão.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blush/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative bg-card rounded-2xl p-6 border border-primary/10 group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-500 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent mx-auto mb-4 flex items-center justify-center group-hover:from-primary group-hover:to-blush-dark group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-semibold text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blush to-pink-medium rounded-3xl blur-2xl opacity-30" />
            
            <div className="relative bg-gradient-to-br from-primary via-blush-dark to-rose-gold rounded-3xl p-10 text-center overflow-hidden">
              {/* Decorative patterns */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <img 
                  src={logoCircular} 
                  alt="Logo" 
                  className="w-20 h-20 mx-auto mb-6 drop-shadow-lg"
                />
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                  Pronta para dar o primeiro passo?
                </h3>
                <p className="text-primary-foreground/90 mb-8 max-w-md mx-auto">
                  Agende uma conversa inicial sem compromisso e descubra como posso te ajudar nessa jornada.
                </p>
                <Button 
                  size="xl" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
                  asChild
                >
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
