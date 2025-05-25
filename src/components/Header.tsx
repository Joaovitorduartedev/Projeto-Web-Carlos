
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm border-b border-warm-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {}
          <Link to="/" className="text-2xl font-serif font-bold text-art-primary hover:text-art-primary/80 transition-colors">
            Carlos Ventura
          </Link>

          {}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-warm-gray-700 hover:text-art-primary transition-colors font-medium">
              Galeria
            </Link>
            <Link to="/institucional" className="text-warm-gray-700 hover:text-art-primary transition-colors font-medium">
              Institucional
            </Link>
            <Link to="/colecoes" className="text-warm-gray-700 hover:text-art-primary transition-colors font-medium">
              Coleções
            </Link>
            <Link to="/portfolio" className="text-warm-gray-700 hover:text-art-primary transition-colors font-medium">
              Portfólio
            </Link>
          </nav>

          {}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-warm-gray-600 hover:text-art-primary hover:bg-warm-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {}
        {isMenuOpen && (
          <div className="md:hidden border-t border-warm-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-warm-gray-700 hover:text-art-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </Link>
              <Link 
                to="/institucional" 
                className="text-warm-gray-700 hover:text-art-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Institucional
              </Link>
              <Link 
                to="/colecoes" 
                className="text-warm-gray-700 hover:text-art-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Coleções
              </Link>
              <Link 
                to="/portfolio" 
                className="text-warm-gray-700 hover:text-art-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfólio
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
