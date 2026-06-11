import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, QrCode, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Bộ Sưu Tập', path: '/collection' },
    { name: 'Tác Động ESG', path: '/impact' },
    { name: 'Hộ Chiếu Số', path: '/passport/ECO-2025-0001' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 glassmorphism shadow-md' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-display text-2xl font-bold tracking-wider text-primary">
            ECO<span className="text-secondary-dark font-light">-</span>BOX
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path === '/collection' && location.pathname.startsWith('/product'));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-primary' : 'text-dark/70 hover:text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav" 
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/passport/ECO-2025-0001">
            <button className="flex items-center space-x-2 bg-primary text-background hover:bg-primary-dark transition-all duration-300 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-premium hover:shadow-premium-hover">
              <QrCode className="w-4 h-4" />
              <span>Quét Hộ Chiếu</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border shadow-lg"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || 
                  (link.path === '/collection' && location.pathname.startsWith('/product'));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-medium tracking-wide ${
                      isActive ? 'text-primary border-l-2 border-primary pl-3' : 'text-dark/70 pl-3'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border">
                <Link to="/passport/ECO-2025-0001" className="block w-full">
                  <button className="flex items-center justify-center space-x-2 w-full bg-primary text-background hover:bg-primary-dark py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-premium">
                    <QrCode className="w-5 h-5" />
                    <span>Quét Hộ Chiếu Số</span>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
