import { useEffect, useState } from "react";
import { SectionContainer } from "./SectionContainer";
import { User } from "lucide-react";

interface Testimonial {
  name: string;
  position: string;
  comment: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Silva",
    position: "CEO, Tech Solutions",
    comment:
      "Graças ao trabalho excepcional desta equipe, nossa empresa aumentou o engajamento online em 200%. Altamente recomendado para qualquer negócio que queira crescer!",
  },
  {
    name: "Ana Ferreira",
    position: "Proprietária, Café Sereno",
    comment:
      "Transformaram completamente nosso negócio. O atendimento foi personalizado e os resultados superaram todas as nossas expectativas. Estamos muito satisfeitos.",
  },
  {
    name: "Roberto Mendes",
    position: "Gerente, Loja Magnética",
    comment:
      "Profissionais dedicados que realmente se importam com o sucesso do cliente. As estratégias implementadas fizeram uma diferença significativa em nossas vendas",
  },
];

export const TestimonialSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("testimonials");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <SectionContainer id="testimonials" className="bg-muted/30">
      <div
        className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="mb-4">Depoimentos</h3>
        <h2 className="mb-6">O Que Nossos Clientes Dizem</h2>
        <p className="text-muted-foreground leading-relaxed">
          A satisfação dos nossos clientes é nossa maior recompensa. Confira o
          que eles têm a dizer sobre nossas soluções e serviços.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-card rounded-lg p-6 shadow-md border border-border relative transition-all duration-700 delay-${
              index * 200
            } ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute -top-4 left-6 text-5xl text-muted-foreground opacity-20">
              "
            </div>

            <div className="min-h-32 mb-8">
              <p className="italic text-muted-foreground leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4 shrink-0">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User size={20} className="text-muted-foreground" />
                )}
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
