import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

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
    <section id="contato" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O primeiro passo para cuidar da sua saúde mental é buscar ajuda.
            Entre em contato e agende sua primeira sessão.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
