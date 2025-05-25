
import { useState } from "react";
import Header from "@/components/Header";
import ArtworkCard from "@/components/ArtworkCard";
import FilterSection from "@/components/FilterSection";

const artworks = [
  {
    id: 1,
    title: "Silêncio do Sertão",
    image: "photo-1470071459604-3b5ec3a7fe05",
    technique: "Óleo sobre tela",
    dimensions: "80cm x 60cm",
    year: 2024,
    description: "Uma reflexão poética sobre a vastidão e tranquilidade do sertão piauiense, capturando a essência da terra natal do artista.",
    price: "R$ 3.500,00",
    collection: "Sertão e Silêncio"
  },
  {
    id: 2,
    title: "Amanhecer Urbano",
    image: "photo-1488972685288-c3fd157d7c7a",
    technique: "Acrílico sobre tela",
    dimensions: "100cm x 70cm",
    year: 2024,
    description: "A dualidade entre o moderno e o tradicional nas cidades brasileiras, vista através dos olhos de quem conhece profundamente as raízes.",
    price: "R$ 4.200,00",
    collection: "Paisagens Urbanas"
  },
  {
    id: 3,
    title: "Memórias do Rio",
    image: "photo-1504893524553-b855bce32c67",
    technique: "Aquarela",
    dimensions: "50cm x 40cm",
    year: 2023,
    description: "Inspirada nas margens do Rio Parnaíba, esta obra celebra a importância dos recursos hídricos na cultura piauiense.",
    price: "R$ 1.800,00",
    collection: "Sertão e Silêncio"
  },
  {
    id: 4,
    title: "Retrato de Ana",
    image: "photo-1581091226825-a6a2a5aee158",
    technique: "Óleo sobre tela",
    dimensions: "60cm x 50cm",
    year: 2023,
    description: "Um estudo sensível sobre a força e delicadeza da mulher nordestina, retratada com toda sua dignidade e beleza.",
    price: "R$ 2.800,00",
    collection: "Retratos",
    sold: true
  },
  {
    id: 5,
    title: "Geometria do Concreto",
    image: "photo-1449157291145-7efd050a4d0e",
    technique: "Técnica mista",
    dimensions: "90cm x 90cm",
    year: 2024,
    description: "Uma investigação sobre as formas arquitetônicas modernas e sua relação com o espaço urbano contemporâneo.",
    price: "R$ 5.500,00",
    collection: "Paisagens Urbanas"
  },
  {
    id: 6,
    title: "Luz da Tarde",
    image: "photo-1500673922987-e212871fec22",
    technique: "Óleo sobre tela",
    dimensions: "70cm x 50cm",
    year: 2022,
    description: "A magia da luz dourada do fim de tarde no cerrado piauiense, momento de contemplação e paz.",
    price: "R$ 3.200,00",
    collection: "Sertão e Silêncio"
  }
];

const Index = () => {
  const [selectedTechnique, setSelectedTechnique] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedCollection, setSelectedCollection] = useState("all");

  const clearFilters = () => {
    setSelectedTechnique("all");
    setSelectedYear("all");
    setSelectedPriceRange("all");
    setSelectedCollection("all");
  };

  const filteredArtworks = artworks.filter(artwork => {
    if (selectedTechnique !== "all" && artwork.technique !== selectedTechnique) return false;
    if (selectedYear !== "all" && artwork.year.toString() !== selectedYear) return false;
    if (selectedCollection !== "all" && artwork.collection !== selectedCollection) return false;
    
    if (selectedPriceRange !== "all") {
      const price = parseFloat(artwork.price.replace(/[^\d,]/g, '').replace(',', '.'));
      switch (selectedPriceRange) {
        case "0-2000":
          if (price > 2000) return false;
          break;
        case "2000-5000":
          if (price < 2000 || price > 5000) return false;
          break;
        case "5000-10000":
          if (price < 5000 || price > 10000) return false;
          break;
        case "10000+":
          if (price < 10000) return false;
          break;
      }
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-warm-gray-50">
      <Header />
      
      {}
      <section className="bg-gradient-to-r from-art-secondary to-art-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-warm-gray-900 mb-4 animate-fade-in">
            Carlos Ventura
          </h1>
          <p className="text-xl text-warm-gray-700 mb-6 animate-fade-in animate-delay-200">
            Artista Plástico Piauiense
          </p>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto animate-fade-in animate-delay-400">
            Mais de 20 anos dedicados à arte, celebrando a beleza do Piauí e explorando 
            as conexões entre tradição e modernidade através da pintura.
          </p>
        </div>
      </section>

      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-warm-gray-900 mb-8 text-center">
            Galeria de Obras
          </h2>

          <FilterSection
            selectedTechnique={selectedTechnique}
            selectedYear={selectedYear}
            selectedPriceRange={selectedPriceRange}
            selectedCollection={selectedCollection}
            onTechniqueChange={setSelectedTechnique}
            onYearChange={setSelectedYear}
            onPriceRangeChange={setSelectedPriceRange}
            onCollectionChange={setSelectedCollection}
            onClearFilters={clearFilters}
          />

          {filteredArtworks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-warm-gray-600 text-lg">
                Nenhuma obra encontrada com os filtros selecionados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ArtworkCard artwork={artwork} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {}
      <footer className="bg-warm-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4">Carlos Ventura</h3>
          <p className="text-warm-gray-300 mb-4">
            Artista Plástico formado em Artes Visuais pela UFPI
          </p>
          <p className="text-warm-gray-400 text-sm">
            © 2024 Carlos Ventura. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
