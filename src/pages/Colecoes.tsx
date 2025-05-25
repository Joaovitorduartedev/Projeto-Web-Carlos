
import { useState } from "react";
import Header from "@/components/Header";
import ArtworkCard from "@/components/ArtworkCard";
import { Button } from "@/components/ui/button";

const collections = {
  "Sertão e Silêncio": {
    description: "Uma jornada contemplativa pelas vastas extensões do sertão piauiense, onde o silêncio fala mais alto que palavras. Esta coleção captura a essência da terra natal do artista, celebrando a beleza austera e poética do cerrado.",
    artworks: [
      {
        id: 1,
        title: "Silêncio do Sertão",
        image: "photo-1470071459604-3b5ec3a7fe05",
        technique: "Óleo sobre tela",
        dimensions: "80cm x 60cm",
        year: 2024,
        description: "Uma reflexão poética sobre a vastidão e tranquilidade do sertão piauiense.",
        price: "R$ 3.500,00",
        collection: "Sertão e Silêncio"
      },
      {
        id: 3,
        title: "Memórias do Rio",
        image: "photo-1504893524553-b855bce32c67",
        technique: "Aquarela",
        dimensions: "50cm x 40cm",
        year: 2023,
        description: "Inspirada nas margens do Rio Parnaíba, celebrando os recursos hídricos piauienses.",
        price: "R$ 1.800,00",
        collection: "Sertão e Silêncio"
      },
      {
        id: 6,
        title: "Luz da Tarde",
        image: "photo-1500673922987-e212871fec22",
        technique: "Óleo sobre tela",
        dimensions: "70cm x 50cm",
        year: 2022,
        description: "A magia da luz dourada do fim de tarde no cerrado piauiense.",
        price: "R$ 3.200,00",
        collection: "Sertão e Silêncio"
      }
    ]
  },
  "Paisagens Urbanas": {
    description: "Um diálogo visual entre tradição e modernidade, explorando como as cidades brasileiras conservam suas raízes enquanto abraçam o futuro. Cada obra desta coleção é um estudo sobre identidade cultural urbana.",
    artworks: [
      {
        id: 2,
        title: "Amanhecer Urbano",
        image: "photo-1488972685288-c3fd157d7c7a",
        technique: "Acrílico sobre tela",
        dimensions: "100cm x 70cm",
        year: 2024,
        description: "A dualidade entre o moderno e o tradicional nas cidades brasileiras.",
        price: "R$ 4.200,00",
        collection: "Paisagens Urbanas"
      },
      {
        id: 5,
        title: "Geometria do Concreto",
        image: "photo-1449157291145-7efd050a4d0e",
        technique: "Técnica mista",
        dimensions: "90cm x 90cm",
        year: 2024,
        description: "Investigação sobre formas arquitetônicas modernas e o espaço urbano.",
        price: "R$ 5.500,00",
        collection: "Paisagens Urbanas"
      }
    ]
  },
  "Retratos": {
    description: "Estudos profundos sobre a alma humana, especialmente celebrando a força e beleza do povo nordestino. Cada retrato conta uma história única, capturando não apenas a aparência, mas a essência de cada pessoa.",
    artworks: []
  }
};

const Colecoes = () => {
  const [selectedCollection, setSelectedCollection] = useState("Sertão e Silêncio");

  return (
    <div className="min-h-screen bg-warm-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-warm-gray-900 mb-6">
            Coleções Temáticas
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto">
            Explore as diferentes fases e temas da obra de Carlos Ventura, 
            organizadas em coleções que revelam sua evolução artística e 
            diversidade de interesses.
          </p>
        </div>

        {/* Navegação das Coleções */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(collections).map((collectionName) => (
            <Button
              key={collectionName}
              variant={selectedCollection === collectionName ? "default" : "outline"}
              onClick={() => setSelectedCollection(collectionName)}
              className={`px-6 py-3 text-lg ${
                selectedCollection === collectionName
                  ? "bg-art-primary hover:bg-art-primary/90 text-white"
                  : "text-warm-gray-700 border-warm-gray-300 hover:bg-warm-gray-100"
              }`}
            >
              {collectionName}
            </Button>
          ))}
        </div>

        {/* Descrição da Coleção Selecionada */}
        <div className="bg-white rounded-lg shadow-sm border border-warm-gray-200 p-8 mb-12">
          <h2 className="font-serif text-2xl font-semibold text-warm-gray-900 mb-4">
            {selectedCollection}
          </h2>
          <p className="text-warm-gray-700 text-lg leading-relaxed">
            {collections[selectedCollection as keyof typeof collections].description}
          </p>
        </div>

        {/* Obras da Coleção */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections[selectedCollection as keyof typeof collections].artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ArtworkCard artwork={artwork} />
            </div>
          ))}
        </div>

        {/* Estatísticas da Coleção */}
        <div className="mt-16 bg-gradient-to-r from-art-secondary to-art-accent rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="font-serif text-3xl font-bold text-warm-gray-900 mb-2">
                {collections[selectedCollection as keyof typeof collections].artworks.length}
              </h3>
              <p className="text-warm-gray-700 font-medium">
                Obras na Coleção
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-bold text-warm-gray-900 mb-2">
                {collections[selectedCollection as keyof typeof collections].artworks.length}
              </h3>
              <p className="text-warm-gray-700 font-medium">
                Disponíveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colecoes;
