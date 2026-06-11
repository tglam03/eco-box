import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Leaf, ShieldCheck, RefreshCw, Layers, Compass, QrCode } from 'lucide-react';
import productsData from '../data/products.json';
import { getProductImage } from '../utils/imageHelper';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = productsData.find(p => p.slug === slug);

  // Redirect if product not found
  useEffect(() => {
    if (!product) {
      navigate('/collection');
    }
  }, [product, navigate]);

  // SEO setup
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Chi Tiết Sản Phẩm Eco-Box`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.content = `${product.name} - ${product.description}. Kích thước ${product.dimensions}. Sản xuất bền vững từ các phế phẩm nông nghiệp với hộ chiếu số riêng biệt.`;
      }
    }
  }, [product]);

  if (!product) return null;

  const imageSrc = getProductImage(product.images[0]);
  const relatedProducts = productsData
    .filter(p => p.slug !== slug && p.category === product.category)
    .slice(0, 3);

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
        
        {/* Back Link */}
        <Link to="/collection" className="inline-flex items-center space-x-2 text-primary hover:text-secondary-dark transition-colors duration-200 text-sm font-semibold uppercase tracking-wider mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Bộ sưu tập</span>
        </Link>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Side: Sticky Product Image */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-[32px] overflow-hidden border border-border/80 shadow-premium"
            >
              <img 
                src={imageSrc} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm border border-border/40 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                {product.category}
              </span>
            </motion.div>
          </div>

          {/* Right Side: Product Details */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Title & Description */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/5 px-4.5 py-1.5 rounded-full inline-block">
                Sản Phẩm Đã Được Xác Minh ESG
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight font-display">
                {product.name}
              </h1>
              <p className="text-base text-dark/70 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 border-y border-border/60 py-6">
              <div className="text-center space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-dark/45 font-semibold block">Kích thước</span>
                <span className="text-sm font-bold text-primary">{product.dimensions}</span>
              </div>
              <div className="text-center space-y-1 border-x border-border/60">
                <span className="text-[10px] uppercase tracking-wider text-dark/45 font-semibold block">Dấu chân Carbon</span>
                <span className="text-sm font-bold text-emerald-600">-{product.co2Saved}</span>
              </div>
              <div className="text-center space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-dark/45 font-semibold block">Phân hủy hoàn toàn</span>
                <span className="text-sm font-bold text-primary">60-90 Ngày</span>
              </div>
            </div>

            {/* Materials Breakdown */}
            <div className="space-y-4 bg-white p-6.5 rounded-3xl border border-border/80 shadow-sm">
              <h3 className="font-display text-lg font-bold text-primary flex items-center space-x-2">
                <Layers className="w-5 h-5" />
                <span>Thành phần nguyên liệu</span>
              </h3>
              <div className="space-y-3.5">
                {Object.entries(product.materials).map(([mat, pct]) => {
                  const percentageNum = parseInt(pct);
                  return (
                    <div key={mat} className="space-y-1">
                      <div className="flex justify-between text-xs text-dark/85 font-medium">
                        <span>{materialNameMap[mat] || mat}</span>
                        <span>{pct}</span>
                      </div>
                      <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${percentageNum}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Product Features */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-primary flex items-center space-x-2">
                <Compass className="w-5 h-5" />
                <span>Đặc tính vượt trội</span>
              </h3>
              <ul className="space-y-3">
                {product.features.map((feat, index) => (
                  <li key={index} className="flex items-start space-x-3 text-sm text-dark/80 font-light">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reuse Ideas */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-primary flex items-center space-x-2">
                <RefreshCw className="w-5 h-5" />
                <span>Ý tưởng tái sử dụng (One Box - Multiple Lives)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.reuseIdeas.map((idea, index) => (
                  <div key={index} className="bg-white border border-border/80 rounded-2xl p-5.5 space-y-2">
                    <h4 className="font-display font-bold text-sm text-primary">🌿 {idea.title}</h4>
                    <p className="text-xs text-dark/65 font-light leading-relaxed">{idea.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Passport Preview CTA */}
            <div className="bg-primary text-background rounded-3xl p-6.5 flex justify-between items-center space-x-4">
              <div className="space-y-1">
                <h4 className="font-display font-bold text-base text-white">Xem Thử Hộ Chiếu Số</h4>
                <p className="text-xs text-background/70 font-light">
                  Mỗi hộp thật sẽ có một mã định danh số duy nhất đi kèm.
                </p>
              </div>
              <Link to={`/passport/${product.id}`} className="shrink-0">
                <button className="bg-secondary text-dark hover:bg-white transition-colors duration-300 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-md">
                  <QrCode className="w-4 h-4" />
                  <span>Mở Hộ Chiếu</span>
                </button>
              </Link>
            </div>

          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border/60 pt-20">
            <h2 className="text-2xl font-bold text-primary font-display mb-10">Sản phẩm tương tự</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => {
                const img = getProductImage(p.images[0]);
                return (
                  <div key={p.slug} className="bg-white rounded-3xl overflow-hidden border border-border/85 shadow-premium group">
                    <Link to={`/product/${p.slug}`}>
                      <div className="aspect-[4/3] overflow-hidden bg-background">
                        <img 
                          src={img} 
                          alt={p.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-lg font-bold text-primary group-hover:text-secondary-dark transition-colors duration-200">
                          {p.name}
                        </h3>
                        <p className="text-xs text-dark/65 line-clamp-2 mt-1.5 font-light">
                          {p.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
