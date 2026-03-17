import { useState } from "react";
import { Award, GraduationCap, Heart, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import biancaPhoto from "@/assets/bianca-photo.jpg";
import abstractPink from "@/assets/abstract-pink-1.jpg";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const highlights = [
    {
      icon: GraduationCap,
      title: "Formação Especializada",
      description:
        "Graduada em psicologia pela Universidade de Pernambuco",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description:
        "Abordagem acolhedora e empática, respeitando a individualidade de cada pessoa",
    },
    {
      icon: Award,
      title: "Experiência Clínica",
      description:
        "Anos de experiência ajudando pessoas a encontrar equilíbrio e qualidade de vida",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-24 lg:py-28 relative overflow-hidden">
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

        {/* Photo + Text side by side */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center mt-10">
          {/* Image Side */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
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
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 shadow-glow border border-primary/10 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blush flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="max-w-prose mx-auto lg:mx-0">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-5 md:mb-6">
              Olá, o que te trouxe aqui?{" "}
            </h2>

            {/* Short intro always visible */}
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-5 md:space-y-6 mb-4">
              <p>
                Antes que você me responda, permita-me me apresentar, sou pernambucana e tenho 28
                anos. Para além da psicologia, eu sou professora de inglês desde 2016. Sou apaixonada
                por rosa, amo viajar, aprender idiomas, ir para praia e ler.
              </p>

              <p>
                Formei em psicologia na UPE (Campus Garanhuns) em janeiro de 2025 e venho atuando
                na clínica desde então – apesar de já ter experiência prática antes disso com os estágios.
                Minha inspiração sempre foi a minha mãe que faleceu de câncer em 2011, em homenagem
                a ela defendi o meu tcc com tema voltado a saudade e ao luto.
              </p>
            </div>

            {/* Expandable content */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-5 md:space-y-6 mb-4">
                <p>
                  E se algum dia você já se
                  perguntou para quem é a terapia… É pra quem perdeu um ente querido, pra quem ficou sem
                  rumo depois de uma reprovação no vestibular, pra quem tem pais que não apoiam seus sonhos,
                  pra quem está em um relacionamento tóxico e não consegue sair só dele, pra quem se sente
                  sobrecarregado, pra quem resolveu mudar de curso e não sabe o que fazer, pra quem precisa
                  de ajuda para impor limites e aprender a dizer não. Psicólogo é pra quem procura um lugar de
                  escuta que seja isento de julgamentos.
                </p>

                <p>
                  Apesar de acolher inúmeras temáticas como ansiedade, depressão, relacionamentos
                  tóxicos, entre outros. O tema que tenho sido mais procurada para atender é o luto…
                </p>

                <p>
                  Uma das coisas mais bonitas que aprendi em uma supervisão sobre como acolher uma
                  mãe enlutada, é que psicólogo às vezes é pra quem só quer chorar e não tem um espaço
                  pra isso... e chora sabendo que não estará sozinha... No primeiro dia de atendimento eu
                  tinha medo de não saber o que falar, mas entendi que o meu papel naquele momento era
                  apenas ouvir e quando surgisse alguma abertura de fala apenas deixar claro que...
                  "vai doer, você perdeu alguém importante, chore - por que você precisa ser forte agora se uma
                  parte importante pra você foi embora?"
                </p>

                <p>
                  Suas emoções negativas não são negativas e os sentimentos que você não expressa,
                  voltam...
                </p>
              </div>
            </div>

            {/* Read more / Read less button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide hover:text-blush-dark transition-colors duration-300 group"
            >
              {expanded ? (
                <>
                  Ler menos
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  Continuar lendo...
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Highlight Cards - full width row below photo+text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 lg:mt-20">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/25 hover:shadow-soft transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-blush-dark group-hover:shadow-pink transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
