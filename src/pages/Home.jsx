import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, QrCode } from 'lucide-react';
import Hero from '../components/home/Hero';
import Timeline from '../components/home/Timeline';
import CollectionPreview from '../components/home/CollectionPreview';
import Transformation from '../components/home/Transformation';
import PassportFeature from '../components/home/PassportFeature';
import ImpactStats from '../components/home/ImpactStats';
import Partners from '../components/home/Partners';

export default function Home() {
  // SEO best practices
  useEffect(() => {
    document.title = "Eco-Box | Hộ Chiếu Số Cho Bao Bì Bền Vững & ESG";
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Eco-box là giải pháp bao bì sinh học cao cấp từ bã cà phê, xơ mướp, vỏ trấu tích hợp Hộ Chiếu Số (Digital Passport) định danh số hóa bằng mã QR, thúc đẩy mô hình tuần hoàn ESG.";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: TIMELINE (Từ rác thải đến giá trị) */}
      <Timeline />

      {/* SECTION 3: BỘ SƯU TẬP ECO-BOX */}
      <CollectionPreview />

      {/* SECTION 4: MỘT CHIẾC HỘP - NHIỀU VÒNG ĐỜI */}
      <Transformation />

      {/* SECTION 5: DIGITAL PASSPORT EXPERIENCE */}
      <PassportFeature />

      {/* SECTION 6: SỐ LIỆU TÁC ĐỘNG */}
      <ImpactStats />

      {/* SECTION 7: BRAND PARTNERS */}
      <Partners />

      {/* SECTION 8: FINAL CTA */}
      <section className="py-28 bg-dark text-background text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex justify-center items-center space-x-2 bg-secondary/15 px-4 py-1.5 rounded-full text-secondary text-xs font-bold uppercase tracking-wider"
          >
            <QrCode className="w-4 h-4 text-secondary animate-pulse" />
            <span>Chạm Vào Tương Lai Tuần Hoàn</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Bao Bì Không Chỉ Để Đóng Gói.<br />
            <span className="text-secondary">Nó Là Một Câu Chuyện Có Thể Quét.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-background/60 max-w-lg mx-auto font-light leading-relaxed"
          >
            Nâng cấp giải pháp bao bì thương hiệu của bạn ngay hôm nay với vật liệu sinh học tự nhiên và công nghệ truy xuất nguồn gốc.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a href="mailto:partner@ecobox.vn" id="btn-partner-home">
              <button className="flex items-center space-x-2 bg-secondary text-dark hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs shadow-lg">
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Liên Hệ Hợp Tác</span>
              </button>
            </a>
            <Link to="/collection" id="btn-collection-home">
              <button className="flex items-center space-x-2 border border-background/20 hover:border-secondary hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs">
                <span>Khám Phá Bộ Sưu Tập</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
