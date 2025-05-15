import React, { useEffect, useState } from "react";
import { SectionContainer } from "./SectionContainer";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./Button";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="rounded-full p-3 bg-muted/50 text-primary">{icon}</div>
    <div>
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="text-muted-foreground">{content}</p>
    </div>
  </div>
);

export const ContactSection = () => {
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
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <SectionContainer id="contact" className="bg-background">
      <div
        className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="mb-4">Entre em Contato</h3>
        <h2 className="mb-6">Estamos Prontos para Atender Você</h2>
        <p className="text-muted-foreground leading-relaxed">
          Tem alguma pergunta ou está pronto para começar um projeto? Entre em
          contato conosco e ficaremos felizes em ajudar.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="mb-8">
            <h3 className="text-left mb-4"> Informações do Contato</h3>
            <ContactInfo
              icon={<Phone size={24} />}
              title="Telefone"
              content="(11) 99999-9999"
            />
            <ContactInfo
              icon={<Mail size={24} />}
              title="Email"
              content="contato@empresa.com"
            />
            <ContactInfo
              icon={<MapPin size={24} />}
              title="Endereço"
              content="Av. Paulista, 1000 - São Paulo, SP"
            />
          </div>

          <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976948539487!2d-46.65396708502406!3d-23.5632254846701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1604525337563!5m2!1spt-BR!2sbr"
              title="Localização da Empresa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div
          className={`bg-card p-8 rounded-lg border border-border shadow-lg transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h3 className="text-left mb-6 text-2xl">Envie uma Mensagem</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-lg font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 text-lg bg-background border border-border rounded-md"
                  placeholder="Seu Nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 text-lg bg-background border border-border rounded-md"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-lg font-medium">
                subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 text-lg bg-background border border-border rounded-md"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-medium">
                message
              </label>
              <textarea
                rows={6}
                id="message"
                className="w-full px-4 py-3 text-lg bg-background border border-border rounded-md resize-none"
                placeholder="Sua mensagem aqui..."
              ></textarea>
            </div>
            <Button size="lg" className="text-lg py-4" fullWidth>
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};
