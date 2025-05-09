import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { Moon, Sun, X, Menu } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Início", href: "#home" },
  { title: "Sobre", href: "#about" },
  { title: "Serviços", href: "#services" },
  { title: "Galeria", href: "#gallery" },
  { title: "Depoimentos", href: "#testimonials" },
  { title: "Contato", href: "#contact" },
];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center no-underline">
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">
            BrandName
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium hover:gradient-text transition-all"
            >
              {item.title}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-muted transition-colors"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          >
            {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-lg transition-all duration-300 transform ${
          mobileNavOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-lg border-b border-border"
              onClick={() => setMobileNavOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
