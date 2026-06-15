import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Eye, Leaf, Tag } from 'lucide-react';
import productsData from '../data/products.json';
import { getProductImage } from '../utils/imageHelper';

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // SEO setup
  useEffect(() => {
    document.title = "Bộ Sưu Tập Eco-Box | Bao Bì Sinh Học Cao Cấp";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Khám phá bộ sưu tập hộp sinh học Eco-box chế tác từ bã cà phê, xơ mướp, bã mía, vỏ trấu. Các giải pháp bao bì cao cấp, thân thiện với môi trường.";
    }
  }, []);

  const categories = [
    { id: 'All', name: 'Tất Cả' },
    { id: 'Gift Boxes', name: 'Hộp Quà Tặng' },
    { id: 'Food Packaging', name: 'Hộp Thực Phẩm' },
    { id: 'Decorative Boxes', name: 'Hộp Trang Trí' },
    { id: 'Premium Packaging', name: 'Hộp Cao Cấp' }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  const materialNameMap = {
    coffeeGrounds: 'Bã cà phê',
    coirFiber: 'Xơ dừa',
    loofahFiber: 'Xơ mướp',
    coconutGelBinder: 'Keo dừa',
    sugarcaneBagasse: 'Bã mía',
    riceHusk: 'Trấu',
    bambooPulp: 'Bột Tre',
    lotusFiber: 'Sợi sen',
    charcoal: 'Than hoạt tính',
    organicWax: 'Sáp hữu cơ',
    bioBinder: 'Keo sinh học',
    naturalResin: 'Nhựa tự nhiên'
  };

  return (
    <div className="bg-background min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/5 px-4 py-1.5 rounded-full inline-block">
            Eco-Lux Packaging
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Bộ Sưu Tập Eco-Box
          </h1>
          <p className="text-base text-dark/70 font-light max-w-xl mx-auto">
            Hòa quyện giữa thẩm mỹ sang trọng tối giản và trách nhiệm bảo vệ môi trường. Tìm giải pháp đóng gói lý tưởng cho thương hiệu của bạn.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 border-b border-border/60 pb-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-primary text-background shadow-md'
                  : 'bg-white border border-border text-dark/65 hover:bg-primary/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const imageSrc = getProductImage(product.images[0]);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={product.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-border/80 shadow-premium hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  {/* Card Image Area */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-background">
                    <img 
                      src={imageSrc} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Labels */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <span className="bg-white/90 backdrop-blur-sm border border-border/40 text-primary text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {product.category}
                      </span>
                      <span className="bg-primary/80 backdrop-blur-sm text-white text-[9px] font-semibold px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                        <Leaf className="w-3 h-3 text-secondary" />
                        <span>-{product.co2Saved}</span>
                      </span>
                    </div>

                    {/* Quick view overlay */}
                    <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link 
                        to={`/product/${product.slug}`}
                        className="bg-white text-primary p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-2 mb-6">
                      <Link to={`/product/${product.slug}`} className="block">
                        <h2 className="font-display text-lg font-bold text-primary hover:text-secondary-dark transition-colors duration-200">
                          {product.name}
                        </h2>
                      </Link>
                      <p className="text-xs text-dark/70 font-light line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Material breakdown progress bar representation */}
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      <div className="text-[10px] uppercase tracking-wider text-dark/45 font-semibold">
                        Thành Phần Nguyên Liệu:
                      </div>
                      <div className="space-y-1.5">
                        {Object.entries(product.materials).map(([mat, pct]) => {
                          const percentageNum = parseInt(pct);
                          return (
                            <div key={mat} className="space-y-0.5">
                              <div className="flex justify-between text-[10px] text-dark/85">
                                <span>{materialNameMap[mat] || mat}</span>
                                <span className="font-semibold">{pct}</span>
                              </div>
                              <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary/80 rounded-full" 
                                  style={{ width: `${percentageNum}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="pt-2 text-[10px] text-dark/45">
                        Kích thước: <span className="font-medium text-dark/80">{product.dimensions}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="border-t border-border/60 p-4 bg-background/25">
                    <Link 
                      to={`/product/${product.slug}`} 
                      className="w-full block text-center bg-primary/5 hover:bg-primary hover:text-white text-primary transition-all duration-300 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider"
                    >
                      Xem chi tiết & Hộ chiếu
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
