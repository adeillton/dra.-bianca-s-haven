import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blush-light/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Dra. Bianca de Melo - Psicóloga"
            className="h-12 mb-6"
          />
          <p className="text-muted-foreground text-sm max-w-md mb-6">
            Cuidando da sua saúde mental com acolhimento, empatia e profissionalismo.
          </p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Feito com</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>por Dra. Bianca de Melo</span>
          </div>
          <p className="text-muted-foreground text-xs mt-4">
            CRP: 00/00000 | © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
