import { useState } from "react";
import { SectionContainer } from "./SectionContainer";
import { X } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  "https://images.unsplash.com/photo-1551434678-e076c223a692",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  "https://images.unsplash.com/photo-1611224885990-ab7363d7f7cc",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SectionContainer id="gallery" className="bg-background">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="mb-4">Nossa Galeria</h3>
        <h2 className="mb-6">Conhela Nossos Trabalhos</h2>
        <p className="text-muted-foreground">
          Veja alguns dos projetos e momentos que marcam nossa trajetória. Cada
          imagem conta uma história de sucesso.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={`${image}?auto=format&fit=crop&w=500&h=500&q=80`}
              alt={`Galeria imagem ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            <img
              src={`$(selectedImage)?auto=format&fit=contain&w=1200&h=800&q=90`}
              alt="Image ampliada"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </SectionContainer>
  );
};
