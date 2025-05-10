import { Globe, ShoppingCart, Users } from "lucide-react";
import React from "react";
import { SectionContainer } from "./SectionContainer";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-gradient-to-br from-accent/5 to-secondary/5 border border-border">
    <div className="rounded-full w-16 h-16 flex items-center justify-center mb-4 gradient-text bg-muted">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: "Consultoria",
      description:
        "Aumente a visibilidade da sua marca online com estratégias personalizadas de marketing digital para conquistar mais clientes.",
    },
    {
      icon: <Users size={32} />,
      title: "Consultoria",
      description:
        "Receba orientação especializada para melhorar processos, aumentar a eficiência e impulsionar o crescimento do seu negócio.",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "E-Commerce",
      description:
        "Desenvolva sua loja online com soluções completas para vender seus produtos e serviços na internet.",
    },
  ];

  return (
    <SectionContainer id="services" className="bg-muted/30">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="mb-4">O Que Oferecemos</h3>
        <h2 className="mb-6">Serviços de Alta Qualidade para o seu Negócio</h2>
        <p className="text-muted-foreground">
          Fornecemos soluções completas e personalizadas para atender às
          necessidades específicas da sua empresa, ajudando você a alcançar
          resultados excepcionais.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
