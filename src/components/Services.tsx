import { Brain, Users, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Terapia Individual",
      description:
        "Sessões personalizadas focadas nas suas necessidades específicas, trabalhando autoconhecimento, gestão emocional e desenvolvimento pessoal.",
    },
    {
      icon: Users,
      title: "Terapia de Casal",
      description:
        "Fortalecimento da comunicação e do vínculo afetivo, ajudando casais a superar desafios e construir relacionamentos mais saudáveis.",
    },
    {
      icon: Sparkles,
      title: "Orientação de Carreira",
      description:
        "Apoio na descoberta de propósito profissional, tomada de decisões e desenvolvimento de habilidades para sua vida profissional.",
    },
    {
      icon: MessageCircle,
      title: "Atendimento Online",
      description:
        "Sessões por videoconferência com a mesma qualidade e acolhimento do atendimento presencial, onde você estiver.",
    },
  ];

  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Como posso te ajudar
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofereço diferentes modalidades de atendimento para atender às suas
            necessidades e te ajudar a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-500"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#contato">Agende uma conversa</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
