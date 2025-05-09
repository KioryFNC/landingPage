import React from "react";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-dark/80 to-background"
    >
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_70%_20%,var(--gradient-start),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_500px_at_30%_80%,var(--gradient-end),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-4xl mx-auto text-center p-8 rounded-lg  backdrop-blur-sm relative before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_70%)] before:blur-xl before:rounded-full before:transform before:scale-125 before:-z-10">
          <h1 className="animate-fade-in mb-6 leading-tight">
            Transforme sua visão em{" "}
            <span className="gradient-text text-5xl md:text-6xl lg:text-8xl font-bold relative">
              Realidade
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-muted-foreground leading-relaxed">
            Ajudamos a sua empresa a se destacar no mercado com soluções
            criativas e inovadoras. Comece sua jornada de sucesso hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-xl py-6"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Entre em Contato
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl py-6"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,176C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
