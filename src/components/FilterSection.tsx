
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FilterSectionProps {
  selectedTechnique: string;
  selectedYear: string;
  selectedPriceRange: string;
  selectedCollection: string;
  onTechniqueChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onPriceRangeChange: (value: string) => void;
  onCollectionChange: (value: string) => void;
  onClearFilters: () => void;
}

const FilterSection = ({
  selectedTechnique,
  selectedYear,
  selectedPriceRange,
  selectedCollection,
  onTechniqueChange,
  onYearChange,
  onPriceRangeChange,
  onCollectionChange,
  onClearFilters
}: FilterSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-warm-gray-200 mb-8">
      <h3 className="font-serif text-lg font-semibold mb-4 text-warm-gray-900">
        Filtrar obras
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-warm-gray-700 mb-2">
            Técnica
          </label>
          <Select value={selectedTechnique} onValueChange={onTechniqueChange}>
            <SelectTrigger>
              <SelectValue placeholder="Todas as técnicas" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-warm-gray-200">
              <SelectItem value="all">Todas as técnicas</SelectItem>
              <SelectItem value="Óleo sobre tela">Óleo sobre tela</SelectItem>
              <SelectItem value="Acrílico sobre tela">Acrílico sobre tela</SelectItem>
              <SelectItem value="Aquarela">Aquarela</SelectItem>
              <SelectItem value="Técnica mista">Técnica mista</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-warm-gray-700 mb-2">
            Ano
          </label>
          <Select value={selectedYear} onValueChange={onYearChange}>
            <SelectTrigger>
              <SelectValue placeholder="Todos os anos" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-warm-gray-200">
              <SelectItem value="all">Todos os anos</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-warm-gray-700 mb-2">
            Faixa de preço
          </label>
          <Select value={selectedPriceRange} onValueChange={onPriceRangeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Todas as faixas" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-warm-gray-200">
              <SelectItem value="all">Todas as faixas</SelectItem>
              <SelectItem value="0-2000">Até R$ 2.000</SelectItem>
              <SelectItem value="2000-5000">R$ 2.000 - R$ 5.000</SelectItem>
              <SelectItem value="5000-10000">R$ 5.000 - R$ 10.000</SelectItem>
              <SelectItem value="10000+">Acima de R$ 10.000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-warm-gray-700 mb-2">
            Coleção
          </label>
          <Select value={selectedCollection} onValueChange={onCollectionChange}>
            <SelectTrigger>
              <SelectValue placeholder="Todas as coleções" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-warm-gray-200">
              <SelectItem value="all">Todas as coleções</SelectItem>
              <SelectItem value="Sertão e Silêncio">Sertão e Silêncio</SelectItem>
              <SelectItem value="Paisagens Urbanas">Paisagens Urbanas</SelectItem>
              <SelectItem value="Retratos">Retratos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        variant="outline" 
        onClick={onClearFilters}
        className="text-warm-gray-600 border-warm-gray-300 hover:bg-warm-gray-50"
      >
        Limpar filtros
      </Button>
    </div>
  );
};

export default FilterSection;
