import { useState, useMemo } from "react";
import { Quote, Star, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import abstractPink from "@/assets/abstract-pink-1.jpg";

/**
 * Calcula a diferença entre a data de início e hoje,
 * retornando uma string como "11 meses", "1 ano", "1 ano e 3 meses" etc.
 */
function calcularTempo(startDate: Date): string {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Ajuste para o dia do mês
  if (now.getDate() < startDate.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  if (years >= 1 && months > 0) {
    return `${years} ${years === 1 ? "ano" : "anos"} e ${months} ${months === 1 ? "mês" : "meses"}`;
  }
  if (years >= 1) {
    return `${years} ${years === 1 ? "ano" : "anos"}`;
  }
  if (months === 0) {
    return "menos de 1 mês";
  }
  return `${months} ${months === 1 ? "mês" : "meses"}`;
}

const LINE_CLAMP_LIMIT = 180; // caracteres visíveis antes de truncar

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const testimonials = useMemo(() => [
    {
      text: "Bianca é uma ótima profissional, me fez me sentir acolhida e escutada, com as palavras certas e olhar gentil.",
      author: "Codinome: Maria",
      // Paciente desde abril de 2025
      startDate: new Date(2025, 3, 1),
      stars: 5,
    },
    {
      text: "Eu estava em busca de uma psicóloga que me orientasse e me auxiliasse em ter uma boa qualidade de vida. O psicólogo tem como um de seus papéis promover saúde mental e também no geral pra os seus pacientes e você faz isso muito bem. Eu costumo dizer que sem terapia seria mais difícil lidar com os acontecimentos da minha vida e muitas vezes a gente só precisa de um bom mediador entre nosso achismo de que tudo tá perdido e a virada de chave de que tudo acontece como tem que acontecer. Aprendo muito com você, Bianca e muitas das suas intervenções estão presentes na minha vida. Saio te indicando pra todo mundo kkkkkkk porque o que é bom precisa ser conhecido e alcançar mais pessoas. Obrigada por existir e por essa psicóloga excelente 🌹🩷",
      author: "Codinome: M.D",
      // Paciente desde abril de 2025
      startDate: new Date(2025, 3, 1),
      stars: 5,
    },
    {
      text: "Gostaria de agradecer pelo seu trabalho, pela escuta ativa e direcionamento. Quando eu comecei meu tratamento precisava de suporte inclusive fora dos horários das sessões e você sempre se mostrou prestativa e disponível, hoje consigo lidar com minhas questões com mais calma e eficiência graças a você. Você foi de enorme importância no meu processo de regulação e reconhecimento.",
      author: "Codinome: Jordana",
      // Paciente desde julho de 2025
      startDate: new Date(2025, 6, 1),
      stars: 5,
    },
  ], []);

  return (
    <section id="depoimentos" className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light via-secondary/60 to-accent/40" />

      {/* Background image */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${abstractPink})` }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-medium/10 to-transparent rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary" />
            <Sparkles className="text-primary w-5 h-5" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <span className="text-primary font-semibold text-sm tracking-[0.3em] uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            O que dizem <span className="text-gradient">meus pacientes</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isLong = testimonial.text.length > LINE_CLAMP_LIMIT;
            const isExpanded = expandedIndex === index;
            const displayText =
              isLong && !isExpanded
                ? testimonial.text.slice(0, LINE_CLAMP_LIMIT).trimEnd() + "…"
                : testimonial.text;

            return (
              <div
                key={index}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blush/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100" />

                <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-soft group-hover:shadow-glow transition-all duration-500 border border-primary/10 group-hover:border-primary/30 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blush flex items-center justify-center mb-6 shadow-pink flex-shrink-0">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground/85 leading-relaxed italic font-light transition-all duration-500">
                    "{displayText}"
                  </p>

                  {/* Read more/less toggle */}
                  {isLong && (
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs tracking-wide hover:text-blush-dark transition-colors duration-300 mt-3 self-start"
                    >
                      {isExpanded ? (
                        <>
                          Ler menos
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          Ler mais
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  )}

                  {/* Author */}
                  <div className="pt-6 mt-auto border-t border-border/50">
                    <p className="font-display font-semibold text-foreground text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Paciente há {calcularTempo(testimonial.startDate)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
