import { useState, useEffect } from "react";
import logoCircular from "@/assets/logo-circular.png";

const LoadingIntro = ({ onFinished }: { onFinished: () => void }) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    // Enter phase already active
    const holdTimer = setTimeout(() => setPhase("hold"), 100);
    const exitTimer = setTimeout(() => setPhase("exit"), 2200);
    const doneTimer = setTimeout(() => onFinished(), 3000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(135deg, hsl(350 60% 96%) 0%, hsl(350 55% 92%) 40%, hsl(350 50% 88%) 100%)",
      }}
    >
      {/* Decorative floating blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blush/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: "0.5s" }} />

      {/* Petals animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full opacity-40"
            style={{
              background: `hsl(350 ${50 + i * 5}% ${65 + i * 4}%)`,
              left: `${15 + i * 14}%`,
              top: "-10px",
              animation: `petal-fall ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Logo container */}
      <div
        className={`relative transition-all duration-1000 ease-out ${
          phase === "enter"
            ? "scale-75 opacity-0 translate-y-4"
            : "scale-100 opacity-100 translate-y-0"
        }`}
      >
        {/* Glow ring behind logo */}
        <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-blush/25 to-primary/15 rounded-full blur-xl animate-pulse-soft" />

        {/* Logo */}
        <img
          src={logoCircular}
          alt="Dra. Bianca de Melo"
          className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
        />
      </div>

      {/* Loading dots */}
      <div
        className={`flex items-center gap-2 mt-10 transition-all duration-700 delay-500 ${
          phase === "enter" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/50"
            style={{
              animation: "loading-dot 1.4s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes petal-fall {
          0% {
            transform: translateY(-10px) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh) rotate(360deg) scale(0.4);
            opacity: 0;
          }
        }
        @keyframes loading-dot {
          0%, 80%, 100% {
            transform: scale(0.6);
            opacity: 0.3;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingIntro;
