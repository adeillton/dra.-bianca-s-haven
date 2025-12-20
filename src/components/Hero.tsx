import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import biancaPhoto from "@/assets/bianca-photo.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blush-light/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-primary mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Heart size={16} className="fill-primary" />
              <span className="text-sm font-medium">Psicóloga Clínica</span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Cuidando da sua{" "}
              <span className="text-primary">saúde mental</span> com acolhimento
            </h1>

            <p
              className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Um espaço seguro para você se conhecer, crescer e encontrar
              equilíbrio emocional. Cada jornada é única, e estou aqui para
              caminhar ao seu lado.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contato">Agende sua consulta</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#sobre">Conheça-me</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="relative animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-60" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full" />
              
              {/* Image container */}
              <div className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={biancaPhoto}
                  alt="Dra. Bianca de Melo - Psicóloga"
                  className="w-full h-full object-cover object-top"
                />
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
