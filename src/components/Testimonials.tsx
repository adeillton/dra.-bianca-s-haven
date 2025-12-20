import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "A Dra. Bianca me ajudou a enxergar a vida de uma forma completamente diferente. Seu acolhimento e profissionalismo fizeram toda a diferença na minha jornada.",
      author: "M.S.",
      role: "Paciente há 2 anos",
    },
    {
      text: "Encontrei um espaço seguro para me expressar sem julgamentos. A terapia mudou minha relação comigo mesma e com as pessoas ao meu redor.",
      author: "A.C.",
      role: "Paciente há 1 ano",
    },
    {
      text: "Profissional incrível, atenciosa e muito competente. Me sinto acolhida em cada sessão e vejo evolução constante no meu autoconhecimento.",
      author: "L.P.",
      role: "Paciente há 6 meses",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-blush-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            O que dizem meus pacientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 relative"
            >
              <Quote className="w-10 h-10 text-accent mb-6" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-display font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
