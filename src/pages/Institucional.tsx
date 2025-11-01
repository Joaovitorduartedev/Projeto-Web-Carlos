
import Header from "@/components/Header";

const Institucional = () => {
  return (
    <div className="min-h-screen bg-warm-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-warm-gray-900 mb-6">
            Carlos Ventura
          </h1>
          <p className="text-xl text-warm-gray-600 mb-8">
            Artista Plástico • Piauí • Formado pela UFPI
          </p>
          
          <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=face"
              alt="Carlos Ventura"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-warm-gray-900 mb-8">
            Biografia
          </h2>
          
          <div className="prose prose-lg max-w-none text-warm-gray-700 space-y-6">
            <p>
              Carlos Ventura nasceu no coração do Piauí, estado que carrega em sua alma e expressa 
              através de suas obras. Formado em Artes Visuais pela Universidade Federal do Piauí (UFPI), 
              dedica mais de duas décadas de sua vida à pintura, consolidando-se como uma das vozes 
              mais autênticas da arte contemporânea piauiense.
            </p>
            
            <p>
              Sua trajetória artística é marcada pela profunda conexão com a terra natal. O sertão, 
              suas cores, sua gente e suas histórias são fonte inesgotável de inspiração para Carlos, 
              que traduz em suas telas a essência do Nordeste brasileiro com sensibilidade única.
            </p>
            
            <p>
              Ao longo de sua carreira, desenvolveu uma linguagem pictórica própria, transitando 
              entre técnicas tradicionais como óleo sobre tela e explorando novas possibilidades 
              com acrílico, aquarela e técnicas mistas. Suas obras refletem não apenas a paisagem 
              física do Piauí, mas também a paisagem emocional de quem vive e respira esta terra.
            </p>
          </div>
        </section>

        {}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-warm-gray-900 mb-8">
            Formação
          </h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-warm-gray-200 p-8">
            <h3 className="font-serif text-xl font-semibold text-art-primary mb-4">
              Universidade Federal do Piauí (UFPI)
            </h3>
            <p className="text-warm-gray-700 mb-2">
              <strong>Bacharelado em Artes Visuais</strong>
            </p>
            <p className="text-warm-gray-600">
              Formação sólida em técnicas pictóricas, história da arte e teoria estética, 
              com foco especial na arte brasileira e regional.
            </p>
          </div>
        </section>

        {}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-warm-gray-900 mb-8">
            Marcos da Carreira
          </h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-24 flex-shrink-0">
                <span className="inline-block bg-art-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  2024
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-warm-gray-900 mb-2">
                  Lançamento da Coleção "Sertão e Silêncio"
                </h3>
                <p className="text-warm-gray-700">
                  Exposição individual com 15 obras que celebram a tranquilidade e majestade 
                  do sertão piauiense, consolidando sua maturidade artística.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-24 flex-shrink-0">
                <span className="inline-block bg-art-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  2023
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-warm-gray-900 mb-2">
                  Prêmio Destaque Cultural do Piauí
                </h3>
                <p className="text-warm-gray-700">
                  Reconhecimento oficial pela contribuição significativa à cultura piauiense 
                  através de suas obras e exposições.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-24 flex-shrink-0">
                <span className="inline-block bg-art-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  2022
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-warm-gray-900 mb-2">
                  Exposição "Paisagens Urbanas"
                </h3>
                <p className="text-warm-gray-700">
                  Primeira grande exposição na capital, explorando o contraste entre 
                  tradição e modernidade nas cidades nordestinas.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-24 flex-shrink-0">
                <span className="inline-block bg-art-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  2020
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-warm-gray-900 mb-2">
                  20 Anos de Carreira Artística
                </h3>
                <p className="text-warm-gray-700">
                  Celebração de duas décadas dedicadas à arte, com exposição retrospectiva 
                  reunindo suas principais obras.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-24 flex-shrink-0">
                <span className="inline-block bg-art-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  2005
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-warm-gray-900 mb-2">
                  Primeira Exposição Individual
                </h3>
                <p className="text-warm-gray-700">
                  Marco inicial da carreira profissional, apresentando suas primeiras 
                  obras inspiradas na cultura piauiense.
                </p>
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-warm-gray-900 mb-8">
            Filosofia Artística
          </h2>
          
          <div className="bg-gradient-to-r from-art-secondary to-art-accent rounded-lg p-8">
            <blockquote className="text-lg text-warm-gray-800 italic font-medium text-center">
              "Minha arte nasce da terra que me criou. Cada pincelada carrega a memória 
              do sertão, cada cor ecoa os tons do cerrado piauiense. Pinto não apenas 
              paisagens, mas sentimentos; não apenas formas, mas histórias que precisam 
              ser contadas e preservadas para as futuras gerações."
            </blockquote>
            <cite className="block text-center mt-4 text-warm-gray-700 font-semibold">
              — Carlos Ventura
            </cite>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default Institucional;
