import { Check, Star } from "lucide-react";
import { SectionContainer } from "./SectionContainer";

export const AboutSection = () => {
  return (
    <SectionContainer id="about" className="bg-background">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="aspect-video lg:aspect-square rounded-lg overflow-hidden border-8 border-white/5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                alt="Equipe trabalhando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={20}
                    fill="currentColor"
                    className="text-amber-400"
                  />
                ))}
              </div>
              <p className="font-bold mt-1">5 anos de experiência</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-left mb-3">Sobre Nossa Empresa</h3>
          <h3 className="text-left mb-6">
            Criando soluções de alta qualidade desde 2020
          </h3>
          <p className="mb-6 text-muted-foreground">
            Fundada com a missão de ajudar negócios locais a prosperarem, nossa
            empresa tem se dedicado a entregar resultados excepcionais para
            nossos clientes. Combinamos conhecimento técnico com uma abordagem
            personalizada para cada projeto.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Atendimento personalizado",
              "Equipe especializada",
              "Soluções inovadoras",
              "Suporte contínuo",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="mt-1 bg-secondary/20 p-1 rounded-full text-secondary">
                  <Check size={16} />
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <h4 className="gradient-text font-bold text-5xl">100+</h4>
              <p className="text-xl">Clientes Satisfeitos</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <h4 className="gradient-text font-bold text-4xl">100+</h4>
              <p className="text-xl">Projetos Concluídos</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <h4 className="gradient-text font-bold text-4xl">100+</h4>
              <p className="text-xl">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
