import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InterestForm from "./InterestForm";

interface Artwork {
  id: number;
  title: string;
  image: string;
  technique: string;
  dimensions: string;
  year: number;
  description: string;
  price: string;
  sold?: boolean;
  collection?: string;
}

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  const [showForm, setShowForm] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-lg shadow-sm border border-warm-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
     
        <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray-100">
          <img
            src={`https://images.unsplash.com/${artwork.image}?w=600&h=450&fit=crop&crop=center`}
            alt={artwork.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {artwork.sold && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                VENDIDO
              </Badge>
            </div>
          )}
          {artwork.collection && (
            <Badge className="absolute top-3 left-3 bg-art-primary text-white">
              {artwork.collection}
            </Badge>
          )}
        </div>

        
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold text-warm-gray-900 mb-2">
            {artwork.title}
          </h3>
          
          <div className="space-y-2 mb-4 text-sm text-warm-gray-600">
            <p><span className="font-medium">Técnica:</span> {artwork.technique}</p>
            <p><span className="font-medium">Dimensões:</span> {artwork.dimensions}</p>
            <p><span className="font-medium">Ano:</span> {artwork.year}</p>
          </div>

          <p className="text-warm-gray-700 mb-4 text-sm leading-relaxed">
            {artwork.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-art-primary">
              {artwork.price}
            </span>
            
            {!artwork.sold && (
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-art-primary hover:bg-art-primary/90 text-white"
              >
                Adquirir obra
              </Button>
            )}
          </div>
        </div>
      </div>

      <InterestForm 
        artwork={artwork}
        isOpen={showForm}
        onClose={() => setShowForm(false)}
      />
    </>
  );
};

export default ArtworkCard;