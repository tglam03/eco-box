import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import productsData from '../../data/products.json';
import { getProductImage } from '../../utils/imageHelper';

export default function CollectionPreview() {
  // Take first 6 products for preview
  const previewProducts = productsData.slice(0, 6);

  return (
    <section className="py-24 bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/5 px-4 py-1.5 rounded-full inline-block">
              Khám Phá Thiết Kế
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">
              Bộ Sưu Tập Eco-box
            </h2>
            <p className="text-base text-dark/70 font-light">
              Mỗi sản phẩm đều mang nét đẹp thô mộc, cấu trúc vững chãi và thiết kế thông minh để tối ưu hóa khả năng tái sử dụng.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link to="/collection" className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-bold text-sm uppercase tracking-wider group">
              <span>Xem Tất Cả</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {previewProducts.map((product, idx) => {
            const imageSrc = getProductImage(product.images[0]);
            
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="break-inside-avoid bg-white rounded-3xl overflow-hidden border border-border/50 shadow-premium hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <Link to={`/product/${product.slug}`} className="block relative overflow-hidden">
                  {/* Image */}
                  <img 
                    src={imageSrc} 
                    alt={product.name}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full border border-border/40 shadow-sm">
                    {product.category}
                  </span>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white space-y-2">
                      <span className="text-secondary text-xs font-semibold flex items-center space-x-1.5">
                        <Leaf className="w-3.5 h-3.5" />
                        <span>Tiết kiệm {product.co2Saved} CO₂</span>
                      </span>
                      <h4 className="text-xl font-bold font-display">{product.name}</h4>
                      <p className="text-xs text-background/80 font-light line-clamp-2">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center space-x-1.5 text-xs text-secondary font-bold pt-2">
                        <span>Chi tiết sản phẩm</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Footer details when not hovered (for mobile/easy view) */}
                <div className="p-6 block group-hover:bg-primary/5 transition-colors duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-display text-lg font-bold text-primary">{product.name}</h3>
                    <span className="text-xs text-dark/45 font-medium">{product.dimensions}</span>
                  </div>
                  <p className="text-xs text-dark/65 line-clamp-2 font-light mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(product.materials).map(([mat, pct]) => {
                      const matLabels = {
                        coffeeGrounds: 'Bã Cà phê',
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
                        <span key={mat} className="text-[10px] bg-background text-primary/80 border border-border/80 px-2 py-0.5 rounded-md">
                          {matLabels[mat] || mat}: {pct}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
