import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Eye, Award, CheckCircle2 } from 'lucide-react';
import { getProductImage } from '../../utils/imageHelper';

export default function Partners() {
  const categories = [
    {
      title: "Mỹ Phẩm Thuần Chay",
      description: "Thương hiệu mỹ phẩm cao cấp hướng tới lối sống xanh sử dụng Eco-box đựng bộ chăm sóc da. Khách hàng quét mã để xem chứng nhận thuần chay và hướng dẫn tái sử dụng làm khay son.",
      benefit: "Tăng 45% mức độ tương tác thương hiệu.",
      image: "z7926450771985_cfcee9bd244057350ad16dfc09dcfe46.jpg"
    },
    {
      title: "Cà Phê Đặc Sản",
      description: "Đóng gói hạt cà phê Specialty chất lượng cao trong chính vỏ bọc làm từ bã cà phê tái chế. Tạo dựng câu chuyện thương hiệu tuần hoàn khép kín độc đáo.",
      benefit: "100% nguyên liệu tự nhiên đồng nhất.",
      image: "z7796474703571_4340f097d37c777a7046e633c975f9fa.jpg"
    },
    {
      title: "Nến Thơm Nghệ Thuật",
      description: "Bao bì chịu nhiệt và bảo toàn mùi hương tinh dầu tự nhiên cho các dòng nến thơm hand-made cao cấp. Đế hộp làm đế lót ly nến cách nhiệt chống cháy bàn.",
      benefit: "Bảo vệ môi trường & Tiện ích nhân đôi.",
      image: "z7796474719982_d62c3071ba66813f09194ff4bb4adfc3.jpg"
    },
    {
      title: "Quà Tặng Doanh Nghiệp",
      description: "Thay thế các mẫu hộp giấy carton hay hộp gỗ truyền thống bằng Eco-box khắc logo laser sắc nét cùng mã QR lưu trữ thông điệp tri ân số hóa từ ban lãnh đạo.",
      benefit: "Nâng tầm hình ảnh phát triển bền vững (ESG).",
      image: "z7926450760571_cb66cd39e04df051e932553cbe2bcafd.jpg"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/5 px-4.5 py-1.5 rounded-full inline-block mb-4">
            Đồng Hành Cùng Doanh Nghiệp
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">
            Giải Pháp Bao Bì Xanh
          </h2>
          <p className="text-base text-dark/70 mt-4 font-light">
            Chúng tôi cung cấp dịch vụ thiết kế, sản xuất và số hóa bao bì tùy biến cho các thương hiệu mong muốn nâng tầm giá trị ESG.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-border/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col sm:flex-row h-full group"
              >
                {/* Image Section */}
                <div className="sm:w-2/5 relative overflow-hidden aspect-[4/3] sm:aspect-auto">
                  <img 
                    src={getProductImage(cat.image)} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Text Section */}
                <div className="p-8 sm:w-3/5 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-bold text-primary">{cat.title}</h3>
                    <p className="text-xs text-dark/70 font-light leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-xs text-secondary-dark font-semibold bg-secondary/10 border border-secondary/20 px-3 py-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{cat.benefit}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Corporate Trust Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary text-background rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <div className="space-y-2 text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white font-display">Bạn muốn thiết kế Eco-box riêng?</h3>
            <p className="text-sm text-background/70 font-light max-w-xl">
              Đội ngũ thiết kế của chúng tôi sẵn sàng đồng hành cùng thương hiệu của bạn từ khâu lên ý tưởng nguyên liệu, đúc khuôn logo riêng đến tích hợp hệ thống QR Passport.
            </p>
          </div>
          <a 
            href="mailto:partner@ecobox.vn" 
            className="shrink-0 inline-flex items-center justify-center bg-secondary text-dark hover:bg-white transition-colors duration-300 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg text-center"
          >
            Liên Hệ Hợp Tác Ngay
          </a>
        </motion.div>

      </div>
    </section>
  );
}
