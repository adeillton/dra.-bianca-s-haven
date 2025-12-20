import { Award, GraduationCap, Heart, Sparkles } from "lucide-react";
import biancaPhoto from "@/assets/bianca-photo.png";
import abstractPink from "@/assets/abstract-pink-1.jpg";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formação Especializada",
      description: "Graduação em Psicologia com especializações em saúde mental e bem-estar emocional",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Abordagem acolhedora e empática, respeitando a individualidade de cada pessoa",
    },
    {
      icon: Award,
      title: "Experiência Clínica",
      description: "Anos de experiência ajudando pessoas a encontrar equilíbrio e qualidade de vida",
    },
  ];

  return (
    <section id="sobre" className="py-28 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light via-secondary/50 to-accent/30" />
      
      {/* Decorative background image */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${abstractPink})` }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-transparent to-blush-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blush/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary" />
          <Sparkles className="text-primary w-5 h-5" />
          <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary" />
        </div>
        <span className="text-primary font-semibold text-sm tracking-[0.3em] uppercase mb-4 block text-center">
          Sobre Mim
        </span>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          {/* Image Side */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-blush/30 to-accent/20 rounded-3xl transform rotate-3" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg-pink">
                <img
                  src={biancaPhoto}
                  alt="Dra. Bianca de Melo"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 shadow-glow border border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blush flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">+500</p>
                    <p className="text-sm text-muted-foreground">Vidas transformadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Prazer, eu sou a{" "}
              <span className="text-gradient">Bianca</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Acredito que cada pessoa carrega uma história única, e meu papel é
              oferecer um espaço seguro e acolhedor para que você possa se
              expressar, compreender suas emoções e construir uma vida mais leve e
              significativa.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Minha abordagem é baseada na escuta ativa e no respeito à sua individualidade,
              criando um ambiente de confiança onde o crescimento pessoal acontece naturalmente.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-blush-dark transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
