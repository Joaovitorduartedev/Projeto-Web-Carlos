
import Header from "@/components/Header";
import ArtworkCard from "@/components/ArtworkCard";

const soldArtworks = [
  {
    id: 7,
    title: "Retrato de Ana",
    image: "photo-1581091226825-a6a2a5aee158",
    technique: "Óleo sobre tela",
    dimensions: "60cm x 50cm",
    year: 2023,
    description: "Estudo sobre a força e delicadeza da mulher nordestina.",
    price: "R$ 2.800,00",
    sold: true
  },
  {
    id: 8,
    title: "Crepúsculo no Cerrado",
    image: "photo-1506905925346-21bda4d32df4",
    technique: "Acrílico sobre tela",
    dimensions: "120cm x 80cm",
    year: 2022,
    description: "As cores quentes do fim de tarde no cerrado piauiense.",
    price: "R$ 4.500,00",
    sold: true
  },
  {
    id: 9,
    title: "Mercado da Madrugada",
    image: "photo-1441986300917-64674bd600d8",
    technique: "Óleo sobre tela",
    dimensions: "90cm x 70cm",
    year: 2023,
    description: "A vida que pulsa nos mercados tradicionais de Teresina.",
    price: "R$ 3.800,00",
    sold: true
  },
  {
    id: 10,
    title: "Reflexos do Rio",
    image: "photo-1439066615861-d1af74d74000",
    technique: "Aquarela",
    dimensions: "40cm x 30cm",
    year: 2021,
    description: "As águas do Parnaíba refletindo o céu do entardecer.",
    price: "R$ 1.500,00",
    sold: true
  },
  {
    id: 11,
    title: "Festa Junina",
    image: "photo-1464207687429-7505649dae38",
    technique: "Acrílico sobre tela",
    dimensions: "100cm x 70cm",
    year: 2024,
    description: "A alegria e tradição das festas juninas piauienses.",
    price: "R$ 4.000,00",
    sold: true
  },
  {
    id: 12,
    title: "Senhora do Rosário",
    image: "photo-1594736797933-d0401ba2fe65",
    technique: "Óleo sobre tela",
    dimensions: "80cm x 60cm",
    year: 2023,
    description: "Retrato de uma devota em momento de oração.",
    price: "R$ 3.200,00",
    sold: true
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-warm-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-warm-gray-900 mb-6">
            Portfólio de Obras Vendidas
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto mb-8">
            Um registro do legado artístico de Carlos Ventura através das obras 
            que encontraram novos lares, espalhando a beleza da arte piauiense 
            pelo Brasil e além.
          </p>

          {/* Estatísticas */}
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

        {/* Aviso sobre obras vendidas */}
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

        {/* Grid de Obras Vendidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {soldArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ArtworkCard artwork={artwork} />
            </div>
          ))}
        </div>

        {/* Seção de Contato para Colecionadores */}
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
