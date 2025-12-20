import { Brain, Users, Sparkles, MessageCircle, Video, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import petalsBg from "@/assets/petals-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Terapia Individual",
      description:
        "Sessões personalizadas focadas nas suas necessidades específicas, trabalhando autoconhecimento, gestão emocional e desenvolvimento pessoal.",
      color: "from-primary to-blush-dark",
    },
    {
      icon: Users,
      title: "Terapia de Casal",
      description:
        "Fortalecimento da comunicação e do vínculo afetivo, ajudando casais a superar desafios e construir relacionamentos mais saudáveis.",
      color: "from-blush to-pink-medium",
    },
    {
      icon: Sparkles,
      title: "Orientação de Carreira",
      description:
        "Apoio na descoberta de propósito profissional, tomada de decisões e desenvolvimento de habilidades para sua vida profissional.",
      color: "from-rose-gold to-primary",
    },
    {
      icon: Video,
      title: "Atendimento Online",
      description:
        "Sessões por videoconferência com a mesma qualidade e acolhimento do atendimento presencial, onde você estiver.",
      color: "from-pink-medium to-blush",
    },
  ];

  return (
    <section id="servicos" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative petals background */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${petalsBg})` }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-radial from-blush/15 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary" />
            <Heart className="text-primary w-5 h-5" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <span className="text-primary font-semibold text-sm tracking-[0.3em] uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Como posso <span className="text-gradient">te ajudar</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofereço diferentes modalidades de atendimento para atender às suas
            necessidades e te ajudar a alcançar seus objetivos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
            >
              {/* Card background with gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px] -z-10"
                style={{ backgroundImage: `linear-gradient(135deg, var(--primary), var(--blush))` }}
              />
              
              <div className="relative bg-card rounded-3xl p-8 border border-border/50 group-hover:border-transparent group-hover:shadow-glow transition-all duration-500 h-full overflow-hidden">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon with gradient */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-pink group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" asChild>
            <a href="#contato" className="group">
              <MessageCircle className="group-hover:scale-110 transition-transform" />
              Agende uma conversa
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
