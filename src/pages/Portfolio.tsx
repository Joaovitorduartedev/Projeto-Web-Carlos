
import Header from "@/components/Header";
import ArtworkCard from "@/components/ArtworkCard";
import { useArtworks } from "@/hooks/useArtworks";

const Portfolio = () => {
  const { data: allArtworks = [], isLoading, error } = useArtworks();
  
  
  const soldArtworks = allArtworks.filter(artwork => artwork.sold);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="flex items-center justify-center py-16">
          <p className="text-lg text-warm-gray-600">Carregando portfólio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="flex items-center justify-center py-16">
          <p className="text-lg text-red-600">Erro ao carregar portfólio. Tente novamente.</p>
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
            Portfólio de Obras Vendidas
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto mb-8">
            Um registro do legado artístico de Carlos Ventura através das obras 
            que encontraram novos lares, espalhando a beleza da arte piauiense 
            pelo Brasil e além.
          </p>

         
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-sm border border-warm-gray-200 p-6">
              <h3 className="font-serif text-3xl font-bold text-art-primary mb-2">
                {soldArtworks.length}
              </h3>
              <p className="text-warm-gray-700 font-medium">
                Obras Vendidas
              </p>
            </div>
          </div>
        </div>

      
        <div className="bg-gradient-to-r from-art-secondary to-art-accent rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-warm-gray-900 mb-4">
              Obras em Novos Lares
            </h2>
            <p className="text-warm-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Estas obras já encontraram seus colecionadores e agora fazem parte de acervos 
              particulares. Elas representam momentos importantes da trajetória artística de 
              Carlos Ventura e continuam espalhando a beleza da arte piauiense.
            </p>
          </div>
        </div>

        
        {soldArtworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {soldArtworks.map((artwork, index) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-warm-gray-600 text-lg">
              Nenhuma obra vendida ainda.
            </p>
          </div>
        )}

        
        <div className="bg-white rounded-lg shadow-sm border border-warm-gray-200 p-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-warm-gray-900 mb-4">
              Interessado em Adquirir uma Obra?
            </h2>
            <p className="text-warm-gray-700 mb-6 max-w-2xl mx-auto">
              Carlos Ventura continua criando novas obras. Se você tem interesse em 
              adquirir uma peça ou fazer uma encomenda personalizada, entre em contato 
              para conhecer as obras disponíveis.
            </p>
            <div className="space-y-2 text-warm-gray-600">
              <p><strong>E-mail:</strong> contato@carlosventura.art</p>
              <p><strong>Telefone:</strong> (86) 99999-9999</p>
              <p><strong>Atelier:</strong> Teresina - PI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
