import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Archive, Layout, Leaf, Sparkles, Heart } from 'lucide-react';
import { getProductImage } from '../../utils/imageHelper';

export default function Transformation() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 0,
      title: "1. Hộp Quà Eco-box",
      subtitle: "Bao bì sang trọng ban đầu",
      icon: Box,
      image: "z7796474703571_4340f097d37c777a7046e633c975f9fa.jpg",
      description: "Nhận quà tặng của bạn trong một chiếc hộp cao cấp, mộc mạc và thơm hương cà phê tự nhiên.",
      benefit: "Thay thế hoàn toàn hộp carton/hộp nhựa thông thường, tạo điểm nhấn cao cấp cho thương hiệu."
    },
    {
      id: 1,
      title: "2. Khay Đựng Trang Sức",
      subtitle: "Vòng đời thứ hai hữu dụng",
      icon: Heart,
      image: "z7926450767969_d7b55d9b8dc2f98bbf18dd48d6cb14e5.jpg",
      description: "Sau khi mở quà, tháo dỡ các tấm ngăn để biến hộp thành khay đựng nhẫn, khuyên tai, mỹ phẩm tinh tế.",
      benefit: "Chất liệu kháng khuẩn tự nhiên giúp bảo vệ các món đồ đắt tiền của bạn khỏi ẩm mốc."
    },
    {
      id: 2,
      title: "3. Ống Đựng Bút",
      subtitle: "Bàn làm việc gọn gàng",
      icon: Layout,
      image: "z7926450765224_7b67c0591cda3db3f3874814a5c0fd76.jpg",
      description: "Với các dòng hộp tròn (Tube Box) hoặc khay trượt, bạn có thể biến chúng thành ống cắm bút hoặc cọ trang điểm.",
      benefit: "Mang lại không gian làm việc tối giản, thô mộc và đầy cảm hứng sống xanh."
    },
    {
      id: 3,
      title: "4. Chậu Cây Sinh Học",
      subtitle: "Ươm mầm xanh mới",
      icon: Sparkles,
      image: "z7796474719982_d62c3071ba66813f09194ff4bb4adfc3.jpg",
      description: "Với hạt giống đính kèm (Seed Kit), đổ đất hữu cơ trực tiếp vào hộp và bắt đầu ươm mầm sen đá hay hoa mười giờ.",
      benefit: "Thành hộp xốp giữ nước tốt và cung cấp một phần dinh dưỡng khi phân hủy nhẹ."
    },
    {
      id: 4,
      title: "5. Tự Phân Hủy Sinh Học",
      subtitle: "Trở lại với đất mẹ",
      icon: Leaf,
      image: "z7926450771985_cfcee9bd244057350ad16dfc09dcfe46.jpg",
      description: "Khi cây lớn cần chuyển ra vườn, chỉ cần đặt cả chậu Eco-box xuống đất. Hộp tự phân hủy hoàn toàn trong 60 - 90 ngày.",
      benefit: "Không tạo vi nhựa, chuyển hóa thành mùn hữu cơ nuôi dưỡng đất."
    }
  ];

  return (
    <section className="py-24 bg-dark text-background overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold bg-secondary/10 px-4.5 py-1.5 rounded-full inline-block mb-4">
            Triết Lý Sản Phẩm
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Đừng Vứt Bỏ Chiếc Hộp <br />Sau Khi Mở Quà
          </h2>
          <p className="text-base text-background/70 font-light">
            Eco-box được thiết kế với độ bền vượt trội để thực hiện sứ mệnh "Một chiếc hộp - Nhiều vòng đời", giảm thiểu tối đa rác thải ra môi trường.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Navigation (Left) */}
          <div className="lg:col-span-5 space-y-4">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-5 rounded-3xl transition-all duration-300 flex items-center space-x-5 border ${
                    isActive 
                      ? 'bg-secondary text-dark border-secondary shadow-lg scale-[1.02]' 
                      : 'bg-white/5 text-background/60 border-white/5 hover:bg-white/10 hover:text-background'
                  }`}
                >
                  <div className={`p-3.5 rounded-2xl ${isActive ? 'bg-primary text-white' : 'bg-white/10 text-secondary'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm tracking-wide">{stage.title}</h3>
                    <p className={`text-xs mt-0.5 ${isActive ? 'text-dark/80' : 'text-background/40'}`}>
                      {stage.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Morphing Visualizer (Right) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 bg-[#161616] p-4 flex flex-col justify-between shadow-2xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 p-4 flex flex-col justify-between"
                >
                  {/* Image Background inside container */}
                  <div className="relative w-full h-[65%] rounded-2xl overflow-hidden">
                    <img 
                      src={getProductImage(stages[activeStage].image)} 
                      alt={stages[activeStage].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                  </div>

                  {/* Text Description */}
                  <div className="h-[30%] pt-4 flex flex-col justify-center space-y-2">
                    <h4 className="text-lg font-bold text-secondary font-display">
                      {stages[activeStage].subtitle}
                    </h4>
                    <p className="text-sm text-background/80 font-light leading-relaxed">
                      {stages[activeStage].description}
                    </p>
                    <div className="text-xs text-secondary-light/95 italic">
                      🌿 Ưu điểm: {stages[activeStage].benefit}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
