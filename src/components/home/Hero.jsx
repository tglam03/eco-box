import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, QrCode, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductImage } from '../../utils/imageHelper';

export default function Hero() {
  const bgImage = getProductImage('z7796474703571_4340f097d37c777a7046e633c975f9fa.jpg');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark text-background pt-16">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Eco-Box Premium Hero" 
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/25 px-4 py-1.5 rounded-full text-secondary text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Đột phá bao bì xanh & Số hóa 2026</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white"
          >
            Mỗi Chiếc Hộp <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#cbb284]">
              Đều Có Một Câu Chuyện
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-background/80 max-w-xl font-light leading-relaxed"
          >
            Từ phế phẩm nông nghiệp như bã cà phê, xơ mướp, vỏ trấu... trở thành bao bì xa xỉ mang trong mình thông tin số của tương lai.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link 
              to="/collection"
              className="inline-flex items-center space-x-2 bg-secondary text-dark hover:bg-background hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs shadow-lg"
            >
              <span>Khám Phá Bộ Sưu Tập</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/passport/ECO-2025-0001"
              className="inline-flex items-center space-x-2 border border-background/25 hover:border-secondary hover:bg-background/5 transition-all duration-300 px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs"
            >
              <QrCode className="w-4 h-4 text-secondary" />
              <span>Xem Thông Tin Số</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Phone Mockup scanning QR */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <Link 
            to="/passport/ECO-2025-0001"
            className="cursor-pointer block relative hover:scale-[1.02] active:scale-95 transition-all duration-300 group/phone"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.4 }}
              className="relative w-64 sm:w-72 h-[500px] bg-[#0d0d0d] rounded-[40px] border-[6px] border-[#2d2d2d] shadow-2xl p-3 flex flex-col overflow-hidden"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#2d2d2d] rounded-b-2xl z-20 flex justify-center items-center">
                <div className="w-12 h-1 bg-dark rounded-full mb-1" />
              </div>
  
              {/* Phone Screen Content */}
              <div className="relative flex-grow rounded-[32px] overflow-hidden bg-dark flex flex-col items-center justify-center p-4 text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-dark/90 to-dark z-0" />
                
                {/* Target Scan Box */}
                <div className="relative z-10 w-40 h-40 border-2 border-secondary/50 rounded-2xl flex items-center justify-center p-2 mb-6 group-hover/phone:border-secondary transition-colors duration-300">
                  {/* Scanner corners */}
                  <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-4 border-l-4 border-secondary rounded-tl-md" />
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-4 border-r-4 border-secondary rounded-tr-md" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-4 border-l-4 border-secondary rounded-bl-md" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-4 border-r-4 border-secondary rounded-br-md" />
                  
                  <QrCode className="w-24 h-24 text-secondary animate-pulse" />
                  
                  {/* Laser animation */}
                  <div className="absolute left-0 right-0 h-0.5 bg-secondary shadow-[0_0_10px_#D7C4A3] top-1/2 animate-[bounce_3s_infinite]" />
                </div>
  
                {/* Scanning details */}
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Scanning...</span>
                  <h3 className="text-sm font-bold text-white tracking-wider">ECO-BOX #2025-0001</h3>
                  <p className="text-[10px] text-background/60 max-w-[180px] mx-auto leading-relaxed">
                    Đang truy xuất Thông Tin Số của hộp quà làm từ bã cà phê Lâm Đồng
                  </p>
                  <div className="pt-4">
                    <span className="inline-block bg-primary/80 border border-primary/20 text-white text-[9px] px-3.5 py-1.5 rounded-full shadow-md animate-pulse">
                      Nhấp để xem thông tin số ➜
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
      
      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
}
