import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-left">BrandName</h3>
            <p className="text-muted-foreground">
              Oferecemos soluções inovadoras para empresas de todos os tamanhos,
              ajudando a transformar suas visões em realidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-left">Links Rapidos</h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Serviços", "Galeria", "Contato"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href={`#${
                        item.toLowerCase() === "início"
                          ? "home"
                          : item.toLowerCase()
                      }`}
                      className="text-muted-foreground hover:gradient-text"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-left">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Marketing Digital",
                "Consultoria",
                "E-Commerce",
                "Design Gráfico",
                "Desenvolvimento Web",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:gradient-text"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-left">Contato</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                Av. Paulista, 1000 - São Paulo, SP
              </li>
              <li className="text-muted-foreground">contato@empresa.com</li>
              <li className="text-muted-foreground">(11) 99999-9999</li>
              <li className="text-muted-foreground">
                Segunda - Sexta: 9h às 18h
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border my-8"></div>

        <div className="text-center">
          <p className="text-muted-foreground">
            @copy; {new Date().getFullYear()} BrandName. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
