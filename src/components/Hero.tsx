import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import biancaPhoto from "@/assets/bianca.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import logoCircular from "@/assets/logo-circular.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-pink-medium/15 rounded-full blur-2xl animate-float" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-secondary border border-primary/20 mb-8 animate-fade-in shadow-soft"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">Psicóloga Clínica</span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            > 
              <span className="text-foreground">Eu não cuido de doenças,</span>
              <br />
              <span className="text-gradient">cuido de pessoas.</span>
              <br />
              <span className="text-foreground">Doenças têm sintomas e pessoas tem músicas preferidas</span>
            </h1>

            <p
              className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Um espaço seguro para que você
              compartilhe os seus anseios sem julgamentos.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contato" className="group">
                  <Heart size={18} className="group-hover:scale-110 transition-transform" />
                  Agende sua consulta
                </a>
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
              {/* Decorative rings */}
              <div className="absolute -inset-8 border-2 border-primary/20 rounded-full animate-pulse-soft" />
              <div className="absolute -inset-16 border border-accent/30 rounded-full" />
              
              {/* Floating logo */}
              <div className="absolute -top-6 -right-6 z-20 animate-float" style={{ animationDelay: '0.5s' }}>
                <img 
                  src={logoCircular} 
                  alt="Logo" 
                  className="w-20 h-20 drop-shadow-lg"
                />
              </div>

              {/* Gradient glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-blush/20 to-pink-medium/30 rounded-full blur-3xl scale-110" />
              
              {/* Main image container */}
              <div className="relative w-80 md:w-96 lg:w-[420px] aspect-square">
                {/* Circular frame with gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-blush to-pink-medium p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={biancaPhoto}
                      alt="Dra. Bianca de Melo - Psicóloga"
                      className="w-full h-full object-cover object-top scale-110"
                    />
                  </div>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full shadow-pink" />
                <div className="absolute -top-2 left-1/4 w-4 h-4 bg-blush rounded-full" />
                <div className="absolute top-1/4 -right-3 w-6 h-6 bg-accent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
