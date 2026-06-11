import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Info, Leaf, Award, Compass, RefreshCw } from 'lucide-react';

export default function PassportFeature() {
  const [activeTab, setActiveTab] = useState('material');

  const tabs = [
    {
      id: 'material',
      label: 'Nguồn Gốc Vật Liệu',
      icon: Compass,
      title: 'Truy Xuất Nguồn Gốc 100%',
      content: 'Bã cà phê hữu cơ thu gom từ các hợp tác xã liên kết ở Lâm Đồng, xơ mướp và xơ dừa từ Bến Tre. Quy trình không sử dụng phân bón hóa học hay thuốc trừ sâu.',
      metric: 'Nguồn gốc: Lâm Đồng & Bến Tre',
      badge: 'Nông nghiệp tuần hoàn'
    },
    {
      id: 'carbon',
      label: 'Dấu Chân Carbon',
      icon: Leaf,
      title: 'Giảm Thiểu Phát Thải Thực Tế',
      content: 'Mỗi sản phẩm Eco-box giúp tiết kiệm trung bình 1.25kg CO₂e so với hộp carton ép keo hóa chất và hơn 3.5kg so với khay nhựa định hình.',
      metric: 'Giảm 75% CO₂ phát thải',
      badge: 'Certified Carbon Saving'
    },
    {
      id: 'reuse',
      label: 'Hướng Dẫn Tái Chế',
      icon: RefreshCw,
      title: 'Bản Đồ Vòng Đời Thứ 2',
      content: 'Hộp có tích hợp sẵn hạt giống hoa mười giờ/sen đá bên trong thành hộp. Chỉ cần xới nhẹ đất, gieo nước và hộp sẽ tự rã thành mùn dinh dưỡng.',
      metric: 'Phân hủy 100% hữu cơ',
      badge: 'Zero Waste Guide'
    },
    {
      id: 'esg',
      label: 'Chứng Nhận ESG',
      icon: Award,
      title: 'Minh Bạch Tiêu Chuẩn Quốc Tế',
      content: 'Hồ sơ sản xuất được lưu trữ phi tập trung, đáp ứng tiêu chuẩn bền vững châu Âu. Đạt chứng chỉ an toàn tiếp xúc thực phẩm FDA (đối với dòng Food Box).',
      metric: 'Đạt chứng nhận FDA & SGS',
      badge: 'ESG Compliant'
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/5 px-4.5 py-1.5 rounded-full inline-block">
              Số Hóa Chuỗi Cung Ứng
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Trải Nghiệm <br />Hộ Chiếu Số (Digital Passport)
            </h2>
            <p className="text-base text-dark/70 font-light leading-relaxed">
              Mỗi sản phẩm Eco-box đi kèm một mã định danh số duy nhất. Chỉ với một thao tác quét QR đơn giản bằng điện thoại, khách hàng sẽ lập tức truy cập được toàn bộ dữ liệu minh bạch về sản phẩm.
            </p>

            {/* Quick interactive tabs */}
            <div className="grid grid-cols-2 gap-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center space-x-3 ${
                      isActive 
                        ? 'bg-primary text-white border-primary shadow-md' 
                        : 'bg-white text-dark/70 border-border hover:bg-primary/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <Link to="/passport/ECO-2025-0001">
                <button className="bg-primary text-background hover:bg-primary-dark transition-colors duration-300 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-premium">
                  Trải nghiệm demo hộ chiếu số
                </button>
              </Link>
            </div>
          </div>

          {/* Right Smartphone Passport Mockup Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-80 h-[580px] bg-[#141414] rounded-[48px] border-[8px] border-[#2d2d2d] shadow-2xl overflow-hidden p-4 text-white flex flex-col justify-between">
              
              {/* Phone Status Bar */}
              <div className="flex justify-between items-center px-4 pt-1 pb-3 text-[10px] text-white/50 z-10">
                <span>12:00 AM</span>
                {/* Speaker/Notch */}
                <div className="w-20 h-4 bg-[#2d2d2d] rounded-b-xl absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-1 bg-dark rounded-full" />
                </div>
                <div className="flex items-center space-x-1">
                  <span>5G</span>
                  <div className="w-5 h-2.5 border border-white/50 rounded-sm p-0.5 flex items-center"><div className="w-full h-full bg-white rounded-2xs" /></div>
                </div>
              </div>

              {/* Passport Screen Card */}
              <div className="flex-grow bg-dark rounded-[32px] border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden mt-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/5 z-0" />

                <div className="relative z-10">
                  {/* Top verified bar */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-display font-bold tracking-widest text-[11px] text-secondary">ECO-BOX</span>
                    <div className="flex items-center space-x-1 bg-primary/45 border border-primary/20 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      <span>ĐÃ XÁC MINH</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <div className="space-y-1 mb-5">
                    <span className="text-[10px] text-white/40 tracking-wider">HỘ CHIẾU SỐ</span>
                    <h3 className="text-xl font-bold font-display">Eco-Box #ECO-2025-0001</h3>
                    <p className="text-[11px] text-secondary">Dòng: Hộp Sách Cà Phê Cao Cấp</p>
                  </div>

                  {/* Tab Display Area */}
                  <AnimatePresence mode="wait">
                    {tabs.map((tab) => {
                      if (tab.id !== activeTab) return null;
                      return (
                        <motion.div
                          key={tab.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <span className="inline-block bg-secondary text-dark text-[8px] font-bold px-2 py-0.5 rounded-md mb-2">
                              {tab.badge}
                            </span>
                            <h4 className="text-xs font-bold text-white mb-1.5">{tab.title}</h4>
                            <p className="text-[11px] text-white/70 leading-relaxed font-light">
                              {tab.content}
                            </p>
                          </div>

                          <div className="bg-primary/20 border border-primary/20 rounded-2xl p-3 flex justify-between items-center">
                            <span className="text-[10px] text-white/50">Chỉ số:</span>
                            <span className="text-xs font-bold text-emerald-400">{tab.metric}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Bottom Wallet QR Details */}
                <div className="relative z-10 border-t border-white/10 pt-4 flex justify-between items-center text-[10px] text-white/50">
                  <div>
                    <p>BATCH: B-COFFEE-09</p>
                    <p className="mt-0.5">DATE: 10/05/2026</p>
                  </div>
                  <div className="bg-white p-1 rounded-lg">
                    {/* Dummy QR code using CSS representation */}
                    <div className="w-10 h-10 bg-dark grid grid-cols-3 gap-0.5 p-0.5">
                      <div className="bg-white"></div><div className="bg-dark"></div><div className="bg-white"></div>
                      <div className="bg-dark"></div><div className="bg-white"></div><div className="bg-dark"></div>
                      <div className="bg-white"></div><div className="bg-dark"></div><div className="bg-white"></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Phone home indicator */}
              <div className="w-32 h-1 bg-white/40 rounded-full mx-auto mt-2 mb-1" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
