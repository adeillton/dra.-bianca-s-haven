import { Brain, Users, Sparkles, MessageCircle, Video, Heart, HouseIcon, HousePlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import petalsBg from "@/assets/petals-bg.jpg";
import consultorio1 from "@/assets/IMG_2677.jpg";
import consultorio2 from "@/assets/IMG_2678.jpg";

const Services = () => {
  const services = [
    {
      icon: HousePlusIcon,
      title: "Presencial em Garanhuns - PE",
      description:
        "Sessões focadas na sua necessidade, trabalhando o que for necessário para manter a sua saúde mental em dia",
      color: "from-primary to-blush-dark",
    },

    {
      icon: Video,
      title: "Atendimento Online",
      description:
        "Sessões por videoconferência com a mesma qualidade e acolhimento do atendimento presencial, onde você estiver.",
      color: "from-primary to-blush-dark",
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
          Ofereço duas modalidades de atendimento para atender às suas
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

        {/* Consultório Photos */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-base font-body italic">
              Conheça um pouquinho do meu espaço de atendimento
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Photo 1 */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 via-blush/20 to-accent/15 rounded-2xl md:rounded-3xl transform -rotate-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-soft group-hover:shadow-glow transition-shadow duration-500">
                <img
                  src={consultorio1}
                  alt="Consultório - ambiente acolhedor"
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              </div>
            </div>
            {/* Photo 2 */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-accent/15 via-blush/20 to-primary/15 rounded-2xl md:rounded-3xl transform rotate-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-soft group-hover:shadow-glow transition-shadow duration-500">
                <img
                  src={consultorio2}
                  alt="Consultório - espaço de atendimento"
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              </div>
            </div>
          </div>
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
