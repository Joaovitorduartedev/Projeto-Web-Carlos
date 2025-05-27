
import { useState } from "react";
import Header from "@/components/Header";
import ArtworkCard from "@/components/ArtworkCard";
import { Button } from "@/components/ui/button";
import { useCollections } from "@/hooks/useCollections";
import { useArtworks } from "@/hooks/useArtworks";

const Colecoes = () => {
  const { data: collections = [], isLoading: collectionsLoading } = useCollections();
  const { data: artworks = [], isLoading: artworksLoading } = useArtworks();
  const [selectedCollection, setSelectedCollection] = useState("");

  
  if (!selectedCollection && collections.length > 0) {
    setSelectedCollection(collections[0].name);
  }

  const selectedCollectionData = collections.find(c => c.name === selectedCollection);
  const collectionArtworks = artworks.filter(artwork => 
    artwork.collections?.name === selectedCollection
  );

  if (collectionsLoading || artworksLoading) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="flex items-center justify-center py-16">
          <p className="text-lg text-warm-gray-600">Carregando coleções...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

      
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {collections.map((collection) => (
            <Button
              key={collection.id}
              variant={selectedCollection === collection.name ? "default" : "outline"}
              onClick={() => setSelectedCollection(collection.name)}
              className={`px-6 py-3 text-lg ${
                selectedCollection === collection.name
                  ? "bg-art-primary hover:bg-art-primary/90 text-white"
                  : "text-warm-gray-700 border-warm-gray-300 hover:bg-warm-gray-100"
              }`}
            >
              {collection.name}
            </Button>
          ))}
        </div>

        {selectedCollectionData && (
          <>
           
            <div className="bg-white rounded-lg shadow-sm border border-warm-gray-200 p-8 mb-12">
              <h2 className="font-serif text-2xl font-semibold text-warm-gray-900 mb-4">
                {selectedCollectionData.name}
              </h2>
              <p className="text-warm-gray-700 text-lg leading-relaxed">
                {selectedCollectionData.description}
              </p>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collectionArtworks.map((artwork, index) => (
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

            
            <div className="mt-16 bg-gradient-to-r from-art-secondary to-art-accent rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-warm-gray-900 mb-2">
                    {collectionArtworks.length}
                  </h3>
                  <p className="text-warm-gray-700 font-medium">
                    Obras na Coleção
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-warm-gray-900 mb-2">
                    {collectionArtworks.filter(a => !a.sold).length}
                  </h3>
                  <p className="text-warm-gray-700 font-medium">
                    Disponíveis
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Colecoes;
