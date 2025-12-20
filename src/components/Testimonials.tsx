import { Quote, Star, Sparkles } from "lucide-react";
import abstractPink from "@/assets/abstract-pink-1.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      text: "A Dra. Bianca me ajudou a enxergar a vida de uma forma completamente diferente. Seu acolhimento e profissionalismo fizeram toda a diferença na minha jornada.",
      author: "M.S.",
      role: "Paciente há 2 anos",
      stars: 5,
    },
    {
      text: "Encontrei um espaço seguro para me expressar sem julgamentos. A terapia mudou minha relação comigo mesma e com as pessoas ao meu redor.",
      author: "A.C.",
      role: "Paciente há 1 ano",
      stars: 5,
    },
    {
      text: "Profissional incrível, atenciosa e muito competente. Me sinto acolhida em cada sessão e vejo evolução constante no meu autoconhecimento.",
      author: "L.P.",
      role: "Paciente há 6 meses",
      stars: 5,
    },
  ];

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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blush/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100" />
              
              <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-soft group-hover:shadow-glow transition-all duration-500 border border-primary/10 group-hover:border-primary/30 h-full">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blush flex items-center justify-center mb-6 shadow-pink">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground/85 leading-relaxed mb-6 italic font-light">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-6 border-t border-border/50">
                  <p className="font-display font-semibold text-foreground text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
