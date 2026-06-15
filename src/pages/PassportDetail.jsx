import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Calendar, Hash, MapPin, Leaf, CheckCircle2, 
  HelpCircle, QrCode, ArrowRight, Play, Eye, Sparkles, Compass, AlertCircle
} from 'lucide-react';
import productsData from '../data/products.json';
import { getProductImage } from '../utils/imageHelper';

export default function PassportDetail() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState('specs');
  const [arSimulated, setArSimulated] = useState(false);

  // Find product by matching ID or fallback to the first one
  const product = productsData.find(
    p => p.id === id || p.passportData.id === id || p.passportData.id === `ECO-${id}`
  ) || productsData[0];

  // SEO setup
  useEffect(() => {
    document.title = `Hộ Chiếu Số #${product.passportData.id} | Eco-Box ESG`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = `Xem hộ chiếu số số hóa minh bạch cho Eco-Box #${product.passportData.id}. Toàn bộ thông tin vật liệu, hành trình sản xuất và chỉ số bảo vệ môi trường.`;
    }
  }, [product]);

  const pData = product.passportData;
  const imageSrc = getProductImage(product.images[0]);

  const materialNameMap = {
    coffeeGrounds: 'Bã cà phê hữu cơ',
    coirFiber: 'Xơ dừa chất lượng',
    loofahFiber: 'Xơ mướp tự nhiên',
    coconutGelBinder: 'Chất liên kết keo dừa',
    sugarcaneBagasse: 'Bã mía hữu cơ',
    riceHusk: 'Trấu xay mịn',
    bambooPulp: 'Bột giấy tre già',
    lotusFiber: 'Sợi sen thanh khiết',
    charcoal: 'Than hoạt tính',
    organicWax: 'Sáp hữu cơ bảo vệ',
    bioBinder: 'Keo liên kết sinh học',
    naturalResin: 'Nhựa thông tự nhiên'
  };

  return (
    <div className="bg-background min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Welcome Header */}
        <div className="mb-12 text-left space-y-3">
          <div className="flex items-center space-x-2 text-primary">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-xs uppercase font-bold tracking-widest">Hộ Chiếu Số Xác Minh</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary font-display">
            Xin chào. Bạn đang cầm trên tay Eco-box <span className="text-secondary-dark font-extrabold">#{pData.id}</span>
          </h1>
          <p className="text-sm text-dark/65 font-light">
            Vui lòng xem toàn bộ thông tin nguồn gốc, nhật ký chế tác và các hướng dẫn tái sinh hộp bên dưới.
          </p>
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: APPLE WALLET STYLE DIGITAL CARD */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              className="relative w-full max-w-sm mx-auto bg-gradient-to-br from-primary via-primary-dark to-[#162d1b] rounded-3xl text-white shadow-2xl p-6 border border-white/10 overflow-hidden flex flex-col justify-between min-h-[580px]"
            >
              {/* Premium texture overlay */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0" />
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-secondary/10 rounded-full blur-2xl z-0" />
              
              {/* Card Top */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-display text-sm font-bold tracking-wider text-secondary">ECO-BOX ID PASS</span>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ĐÃ XÁC MINH</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/5 shadow-md">
                    <img 
                      src={imageSrc} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block">Tên sản phẩm</span>
                    <h3 className="text-xl font-bold font-display text-white">{product.name}</h3>
                  </div>
                </div>
              </div>

              {/* Card Meta & Barcode */}
              <div className="relative z-10 space-y-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-white/40 block text-[9px] uppercase tracking-wider">Ngày sản xuất</span>
                    <span className="font-medium text-white/95">{pData.productionDate}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[9px] uppercase tracking-wider">Mã Lô Hàng</span>
                    <span className="font-medium text-white/95">{pData.batchNumber}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[9px] uppercase tracking-wider">Nguồn Vật Liệu</span>
                    <span className="font-medium text-white/95">{pData.materialSource}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[9px] uppercase tracking-wider">Tiết Kiệm CO₂</span>
                    <span className="font-bold text-emerald-400">{pData.co2Savings}</span>
                  </div>
                </div>

                {/* Dummy Barcode/QR */}
                <div className="flex flex-col items-center pt-2">
                  <div className="w-full h-11 bg-white/95 rounded-lg flex items-center justify-around px-4">
                    {/* Barcode lines using CSS */}
                    <div className="flex w-full h-7 items-center space-x-0.5 justify-center bg-transparent">
                      <div className="w-1 h-full bg-dark"></div><div className="w-[2px] h-full bg-dark"></div><div className="w-[3px] h-full bg-dark"></div>
                      <div className="w-[1px] h-full bg-dark"></div><div className="w-1.5 h-full bg-dark"></div><div className="w-[1px] h-full bg-dark"></div>
                      <div className="w-0.5 h-full bg-dark"></div><div className="w-[2px] h-full bg-dark"></div><div className="w-1 h-full bg-dark"></div>
                      <div className="w-[3px] h-full bg-dark"></div><div className="w-0.5 h-full bg-dark"></div><div className="w-[2px] h-full bg-dark"></div>
                      <div className="w-1 h-full bg-dark"></div><div className="w-[2px] h-full bg-dark"></div><div className="w-1.5 h-full bg-dark"></div>
                    </div>
                  </div>
                  <span className="text-[8px] text-white/30 tracking-widest mt-1.5 font-mono">ID: {product.id}</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* RIGHT: TABS AND INFORMATION DETAILS */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Navigation Tabs */}
            <div className="flex border-b border-border/80 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth">
              {[
                { id: 'specs', label: 'Thông Số & Nguồn Gốc' },
                { id: 'journey', label: 'Hành Trình Chế Tác' },
                { id: 'ar', label: 'Hướng Dẫn AR (3D)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`pb-4 px-6 text-sm font-semibold tracking-wide border-b-2 transition-all duration-200 shrink-0 ${
                    activeSection === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-dark/45 hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENTS */}
            <div className="min-h-[350px]">
              
              {/* Tab 1: Specs & Materials */}
              {activeSection === 'specs' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white p-6 rounded-3xl border border-border/80 space-y-4">
                    <h3 className="text-lg font-bold text-primary font-display">Lời Cảm Ơn Từ Eco-Box</h3>
                    <p className="text-sm text-dark/75 leading-relaxed italic font-light">
                      "{pData.brandMessage}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-border/80 space-y-4">
                      <h3 className="text-base font-bold text-primary font-display flex items-center space-x-2">
                        <Leaf className="w-4 h-4 text-emerald-600" />
                        <span>Nguyên Liệu Phối Trộn</span>
                      </h3>
                      <div className="space-y-3">
                        {Object.entries(product.materials).map(([mat, pct]) => (
                          <div key={mat} className="flex justify-between items-center text-xs">
                            <span className="text-dark/70 font-light">{materialNameMap[mat] || mat}</span>
                            <span className="font-semibold text-primary">{pct}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-border/80 space-y-4">
                      <h3 className="text-base font-bold text-primary font-display flex items-center space-x-2">
                        <Compass className="w-4 h-4 text-secondary-dark" />
                        <span>Nguồn Nguyên Liệu</span>
                      </h3>
                      <div className="space-y-2 text-xs text-dark/80 font-light leading-relaxed">
                        <p>📍 <strong>Nguồn thu gom:</strong> {pData.materialSource}</p>
                        <p>🌱 <strong>Tiêu chuẩn:</strong> Thu gom phế phẩm nông nghiệp tuần hoàn, không phát thải hóa chất.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Manufacturing Journey */}
              {activeSection === 'journey' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="relative pl-8 space-y-8">
                    {/* Vertical journey line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />
                    
                    {pData.timeline.map((item, idx) => (
                      <div key={idx} className="relative space-y-1">
                        {/* Dot indicator */}
                        <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                        
                        <div className="flex justify-between items-center">
                          <h4 className="text-sm font-bold text-primary">{item.stage}</h4>
                          <span className="text-[10px] bg-secondary/15 text-secondary-dark font-bold px-2 py-0.5 rounded-md">{item.date}</span>
                        </div>
                        <p className="text-xs text-dark/45 font-medium">{item.location}</p>
                      </div>
                    ))}
                  </div>

                  {/* Production Video placeholder */}
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/80 shadow-md bg-dark flex items-center justify-center group">
                    <div className="absolute inset-0 bg-primary/20 opacity-70" />
                    {/* Visual dummy background representing factory */}
                    <div className="text-center relative z-10 space-y-3">
                      <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer">
                        <Play className="w-6 h-6 fill-primary ml-1" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider block">Xem Video Quá Trình Ép Nhiệt</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: AR Experience Coming Soon */}
              {activeSection === 'ar' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white p-6 rounded-3xl border border-border/80 space-y-4">
                    <div className="flex items-center space-x-2 text-primary">
                      <Sparkles className="w-5 h-5 text-secondary-dark" />
                      <h3 className="text-lg font-bold font-display">Mô Phỏng Trực Quan AR</h3>
                    </div>
                    <p className="text-xs text-dark/70 font-light leading-relaxed">
                      Tính năng này cho phép bạn hướng camera điện thoại vào chiếc Eco-box để xem mô hình 3D tương tác của các ý tưởng tái chế ngay lập tức.
                    </p>
                  </div>

                  {/* Interactive Mock AR Camera View */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/85 bg-black/95 flex flex-col items-center justify-center p-6 text-center">
                    
                    <AnimatePresence mode="wait">
                      {!arSimulated ? (
                        <motion.div 
                          key="ar-start"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4 text-center z-10"
                        >
                          <div className="w-14 h-14 bg-secondary/15 rounded-full flex items-center justify-center text-secondary mx-auto">
                            <Eye className="w-6 h-6" />
                          </div>
                          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Mô phỏng trải nghiệm camera AR</h4>
                          <p className="text-xs text-white/50 max-w-xs mx-auto leading-relaxed">
                            Bật mô phỏng để xem cách điện thoại của bạn quét và định hình các ý tưởng tái sinh hộp.
                          </p>
                          <button 
                            onClick={() => setArSimulated(true)}
                            className="bg-secondary text-dark px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors duration-200"
                          >
                            Bật Trình Mô Phỏng
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="ar-simulating"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex flex-col justify-between p-6 z-10"
                        >
                          {/* Top UI */}
                          <div className="flex justify-between items-center text-[10px] text-white/60">
                            <span className="flex items-center space-x-1"><div className="w-2 h-2 rounded-full bg-red-500 animate-ping" /> <span>REC AR VIEW</span></span>
                            <span>Mức khớp: 98%</span>
                          </div>

                          {/* Center Target Box */}
                          <div className="w-48 h-36 border-2 border-dashed border-emerald-400 rounded-xl mx-auto flex items-center justify-center">
                            <div className="text-center space-y-1">
                              <span className="text-[10px] text-emerald-400 font-bold tracking-widest block">3D MOCKUP ALIGNED</span>
                              <span className="text-xs text-white font-medium">Chậu Cây Trà Xanh 🌿</span>
                            </div>
                          </div>

                          {/* Bottom UI */}
                          <div className="space-y-2">
                            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold py-2 px-4 rounded-xl flex items-center justify-center space-x-1">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>ĐÃ HIỂN THỊ MÔ HÌNH 3D (TẠI CHỖ)</span>
                            </div>
                            <button 
                              onClick={() => setArSimulated(false)}
                              className="text-white/60 hover:text-white text-[10px] font-semibold underline block mx-auto"
                            >
                              Tắt mô phỏng
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Camera scan lines grid */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                    
                    {/* Coming Soon overlay */}
                    <div className="absolute top-4 right-4 bg-secondary text-dark text-[9px] font-bold px-2 py-0.5 rounded-md flex items-center space-x-1 z-20 shadow-md">
                      <AlertCircle className="w-3 h-3" />
                      <span>COMING SOON</span>
                    </div>

                  </div>
                </motion.div>
              )}

            </div>

            {/* GIVE THIS BOX A SECOND LIFE - CTA */}
            <div className="bg-white border border-border/80 rounded-[32px] p-8 shadow-premium space-y-6">
              <div className="space-y-2">
                <span className="text-xs text-primary font-bold uppercase tracking-wider block">Hãy tái sinh hộp</span>
                <h3 className="text-2xl font-bold text-primary font-display">Biến Chiếc Hộp Này Thành Chậu Cây Sinh Học</h3>
                <p className="text-sm text-dark/70 font-light leading-relaxed">
                  Chúng tôi khuyến khích bạn sử dụng bộ Seed Kit đính kèm cùng hộp. Sau khi cây phát triển mạnh, bạn có thể chôn trực tiếp chiếc hộp xuống đất để nó phân hủy tự nhiên, nuôi dưỡng bộ rễ cây.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="mailto:ar-guide@ecobox.vn"
                  className="inline-flex items-center justify-center bg-primary text-background hover:bg-primary-dark transition-all duration-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md h-11 w-full sm:w-auto text-center"
                >
                  Nhận hạt giống miễn phí
                </a>
                <Link 
                  to="/collection"
                  className="inline-flex items-center justify-center border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-primary h-11 w-full sm:w-auto text-center"
                >
                  Khám phá bộ sản phẩm khác
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
