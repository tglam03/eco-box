import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, PieChart, Activity, Globe, Leaf, Wind, Trash2, 
  TrendingDown, CheckCircle, ShieldCheck, Heart, Award, ArrowRight
} from 'lucide-react';
import impactData from '../data/impact.json';

export default function Impact() {
  // SEO setup
  useEffect(() => {
    document.title = "Báo Cáo Tác Động ESG | Eco-Box";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Báo cáo chỉ số ESG và đo lường tác động môi trường của Eco-box. Tìm hiểu về lượng rác thải giảm thiểu, carbon tiết kiệm và mô hình kinh tế tuần hoàn.";
    }
  }, []);

  const stats = impactData.totalStats;
  const materials = impactData.carbonSavedByMaterial;
  const monthly = impactData.monthlyReduction;
  const waste = impactData.wasteDiverted;
  const circular = impactData.circularEconomy;

  return (
    <div className="bg-background min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/5 px-4 py-1.5 rounded-full inline-block">
            Báo Cáo Bền Vững ESG
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary font-display">
            Số Liệu Tác Động Thực Tế
          </h1>
          <p className="text-base text-dark/70 font-light max-w-xl mx-auto">
            Tại Eco-box, chúng tôi đặt tính minh bạch lên hàng đầu. Đây là báo cáo thời gian thực về những đóng góp sinh học mà chúng ta cùng tạo nên.
          </p>
        </div>

        {/* Global Impact Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Bã cà phê thu gom', val: stats.coffeeGroundsReused, icon: Leaf, color: 'text-amber-700 bg-amber-50' },
            { label: 'Bao bì nhựa thay thế', val: stats.plasticReplaced, icon: Trash2, color: 'text-rose-600 bg-rose-50' },
            { label: 'Khí CO₂ giảm phát thải', val: stats.co2Reduced, icon: Wind, color: 'text-emerald-600 bg-emerald-50' },
            { label: 'Nguyên liệu sinh học', val: stats.naturalMaterials, icon: ShieldCheck, color: 'text-primary bg-primary/5' }
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-border/80 rounded-3xl p-6 flex items-center space-x-5 shadow-sm"
              >
                <div className={`p-4 rounded-2xl ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-dark/45 uppercase tracking-wider block font-semibold">{card.label}</span>
                  <span className="text-2xl font-extrabold text-primary tracking-tight font-display">{card.val}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts & Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Bar Chart: Carbon Saved By Material */}
          <div className="lg:col-span-7 bg-white border border-border/80 rounded-[32px] p-8 shadow-premium space-y-6">
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-primary flex items-center space-x-2">
                <BarChart2 className="w-5 h-5 text-secondary-dark" />
                <span>CO₂ Tiết Kiệm Theo Vật Liệu (%)</span>
              </h3>
              <p className="text-xs text-dark/45 font-light">Biểu đồ đóng góp giảm thiểu phát thải khí nhà kính của từng nguồn nguyên liệu sinh học.</p>
            </div>
            
            <div className="space-y-4 pt-4">
              {materials.map((mat) => (
                <div key={mat.material} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-dark/85">{mat.material}</span>
                    <span className="text-primary">{mat.percentage}% ({mat.kgSaved} kg)</span>
                  </div>
                  <div className="w-full h-3.5 bg-background rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${mat.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary to-secondary-dark rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Infographics: Circular Economy Progress */}
          <div className="lg:col-span-5 bg-white border border-border/80 rounded-[32px] p-8 shadow-premium flex flex-col justify-between space-y-8">
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-primary flex items-center space-x-2">
                <Activity className="w-5 h-5 text-secondary-dark" />
                <span>Kinh Tế Tuần Hoàn</span>
              </h3>
              <p className="text-xs text-dark/45 font-light">Chỉ số đo lường hiệu năng tuần hoàn dòng chảy của sản phẩm.</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-background/50 border border-border/40 rounded-2xl">
                <div>
                  <h4 className="text-xs font-bold text-primary">Tỷ Lệ Thu Hồi</h4>
                  <p className="text-[10px] text-dark/45">Tỷ lệ hộp được tái sinh vòng 2</p>
                </div>
                <span className="text-2xl font-extrabold text-primary font-display">{circular.recoveryRate}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-background/50 border border-border/40 rounded-2xl">
                <div>
                  <h4 className="text-xs font-bold text-primary">Thời Gian Phân Hủy</h4>
                  <p className="text-[10px] text-dark/45">Phân hủy hoàn toàn tự nhiên</p>
                </div>
                <span className="text-2xl font-extrabold text-primary font-display">{circular.biodegradationTime}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-background/50 border border-border/40 rounded-2xl">
                <div>
                  <h4 className="text-xs font-bold text-primary">Độ Độc Hại Tích Lũy</h4>
                  <p className="text-[10px] text-dark/45">Không để lại hạt vi nhựa</p>
                </div>
                <span className="text-2xl font-extrabold text-emerald-600 font-display">{circular.toxicChemicals}</span>
              </div>
            </div>

            <div className="pt-2 text-center text-[10px] text-dark/45 italic">
              ♻️ Đạt chứng chỉ giám sát xuất xứ rừng và sinh học bởi SGS.
            </div>
          </div>

        </div>

        {/* Life cycle visualization section */}
        <div className="bg-primary text-background rounded-[32px] p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark via-transparent to-white/5" />
          
          <div className="relative z-10 space-y-12">
            <div className="text-left space-y-2 max-w-xl">
              <span className="text-secondary text-xs font-bold uppercase tracking-widest">Quy Trình Khép Kín</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-display">Mô Phỏng Vòng Đời Hoàn Hảo</h3>
              <p className="text-sm text-background/70 font-light">
                Eco-box được phát triển để không có điểm dừng cuối cùng. Sản phẩm chuyển hóa linh hoạt từ bao bì thành vật dụng thường ngày, rồi kết thúc như chất hữu cơ bồi đắp đất đai.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-background/10">
              {[
                { step: '01', title: 'Thu Gom Phế Phẩm', desc: 'Bã cà phê, vỏ mía thô được gom từ vùng nông nghiệp và đô thị.' },
                { step: '02', title: 'Chế Tác Sạch', desc: 'Ép đúc áp lực cao không phụ gia hóa học độc hại.' },
                { step: '03', title: 'Sử Dụng & Quét Mã', desc: 'Khách hàng xem nguồn gốc và lưu hành thông tin số.' },
                { step: '04', title: 'Trồng Cây & Tự Rã', desc: 'Hộp phân hủy thành mùn nuôi dưỡng cây xanh.' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2 text-left">
                  <span className="font-display text-3xl font-extrabold text-secondary/35 block">{item.step}</span>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-background/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action for corporate partners */}
        <div className="bg-white border border-border/80 rounded-[32px] p-8 md:p-12 text-center space-y-6">
          <span className="text-xs text-primary font-bold uppercase tracking-wider block">Báo Cáo ESG Doanh Nghiệp</span>
          <h3 className="text-2xl md:text-3xl font-bold text-primary font-display max-w-xl mx-auto">
            Tích Hợp Dữ Liệu Eco-box Vào Báo Cáo Phát Triển Bền Vững Của Bạn
          </h3>
          <p className="text-sm text-dark/70 font-light max-w-lg mx-auto leading-relaxed">
            Chúng tôi cung cấp API và dữ liệu xuất kho dạng số, giúp doanh nghiệp dễ dàng đồng bộ hóa lượng CO₂ tiết kiệm được vào báo cáo ESG thường niên.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:esg-report@ecobox.vn"
              className="inline-flex items-center justify-center bg-primary text-background hover:bg-primary-dark transition-colors duration-300 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 mx-auto shadow-md text-center"
            >
              <span>Nhận Tài Liệu Hướng Dẫn</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
