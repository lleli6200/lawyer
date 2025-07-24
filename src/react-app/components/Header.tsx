import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'SST', href: '/sst' },
    { name: 'Equipe', href: '#team' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  CFL
                </h1>
                <p className="text-xs text-blue-400 uppercase tracking-wide">
                  Centro de Soluções
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-500 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/98 backdrop-blur-md rounded-lg mt-2 mb-4 p-4 shadow-xl">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white hover:text-blue-400 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-blue-400 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  )
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
