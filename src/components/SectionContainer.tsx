import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionContainer = ({
  id,
  className,
  children,
}: SectionContainerProps) => {
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
    const section = document.getElementById(id);
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [id]);

  return (
    <section id={id} className={cn("section-padding", className)}>
      <div
        className={` container mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
};
