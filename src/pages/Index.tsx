
import { useState } from "react";
import Header from "@/components/Header";
import ArtworkCard from "@/components/ArtworkCard";
import FilterSection from "@/components/FilterSection";
import { useArtworks } from "@/hooks/useArtworks";

const Index = () => {
  const { data: artworks = [], isLoading, error } = useArtworks();
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
    if (selectedCollection !== "all" && artwork.collections?.name !== selectedCollection) return false;
    
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="flex items-center justify-center py-16">
          <p className="text-lg text-warm-gray-600">Carregando obras...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="flex items-center justify-center py-16">
          <p className="text-lg text-red-600">Erro ao carregar obras. Tente novamente.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-gray-50">
      <Header />
      
     
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
                  <ArtworkCard 
                    artwork={{
                      id: artwork.id,
                      title: artwork.title,
                      image: artwork.image_url,
                      technique: artwork.technique,
                      dimensions: artwork.dimensions,
                      year: artwork.year,
                      description: artwork.description,
                      price: artwork.price,
                      sold: artwork.sold,
                      collection: artwork.collections?.name
                    }} 
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
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
