import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Trash2, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      id: 1,
      icon: Coffee,
      value: "520 kg+",
      label: "Bã Cà Phê Tái Sử Dụng",
      description: "Được thu gom trực tiếp từ các quán đối tác và chế tác thành hạt nhựa sinh học."
    },
    {
      id: 2,
      icon: Trash2,
      value: "10,240+",
      label: "Hộp Nhựa Được Thay Thế",
      description: "Giảm thiểu lượng rác thải nhựa dùng một lần khó phân hủy ra môi trường."
    },
    {
      id: 3,
      icon: ShieldCheck,
      value: "3,250 kg+",
      label: "Khí Thải CO₂ Tiết Kiệm",
      description: "Dựa trên tính toán vòng đời LCA so với việc sản xuất bao bì nhựa tương đương."
    },
    {
      id: 4,
      icon: HelpCircle,
      value: "100%",
      label: "Nguồn Gốc Sinh Học",
      description: "Hoàn toàn tự nhiên, tự phân hủy trong điều kiện chôn lấp bình thường."
    }
  ];

  return (
    <section className="py-24 bg-dark text-background overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-[#152719] to-dark opacity-85 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold bg-secondary/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Hiệu Quả Thực Tế
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Số Liệu Tác Động
          </h2>
          <p className="text-base text-background/60 mt-4 font-light">
            Chúng tôi cam kết minh bạch mọi số liệu đo lường tác động đến môi trường từ quá trình sản xuất Eco-box.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Big Number */}
                  <div className="font-display text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-background/60 font-light leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
