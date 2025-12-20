import { Award, GraduationCap, Heart } from "lucide-react";

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
    <section id="sobre" className="py-24 bg-blush-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Sobre Mim
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Prazer, eu sou a Bianca
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Acredito que cada pessoa carrega uma história única, e meu papel é
            oferecer um espaço seguro e acolhedor para que você possa se
            expressar, compreender suas emoções e construir uma vida mais leve e
            significativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
