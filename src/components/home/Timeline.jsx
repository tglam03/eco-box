import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Truck, Sun, Sparkles, Hammer, Box, RotateCcw } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      icon: Coffee,
      title: "Bã Cà Phê / Phế Phẩm",
      description: "Hàng tấn bã cà phê và sợi xơ dừa bị thải ra mỗi ngày từ các trang trại và quán cà phê địa phương.",
      detail: "Hơn 500kg bã cà phê được thu gom mỗi tháng, ngăn ngừa phát thải khí methane khi bị phân hủy lộ thiên."
    },
    {
      icon: Truck,
      title: "Thu Gom & Tuyển Chọn",
      description: "Mạng lưới thu gom của Eco-box tiếp nhận nguyên liệu thô từ các đối tác nông nghiệp hữu cơ uy tín.",
      detail: "Đảm bảo nguyên vật liệu không lẫn tạp chất hóa học, bảo toàn tính chất sinh học thuần khiết."
    },
    {
      icon: Sun,
      title: "Sấy Khô & Xử Lý",
      description: "Nguyên liệu được sấy khô bằng năng lượng mặt trời và nghiền mịn thành dạng bột xốp đồng nhất.",
      detail: "Quá trình sấy nhiệt độ thấp giúp lưu giữ trọn vẹn mùi thơm tự nhiên dịu nhẹ của hạt cà phê."
    },
    {
      icon: Sparkles,
      title: "Chất Kết Dính Sinh Học",
      description: "Phối trộn bột phế phẩm với chất kết dính sinh học chiết xuất hoàn toàn từ vỏ dừa và nhựa thông.",
      detail: "Đảm bảo sản phẩm cuối cùng có khả năng tự phân hủy sinh học 100% khi chôn lấp, không để lại hạt vi nhựa."
    },
    {
      icon: Hammer,
      title: "Ép Khuôn Áp Lực Cao",
      description: "Hỗn hợp được đưa vào máy ép nhiệt thủy lực công nghệ cao để tạo hình với độ chính xác tuyệt đối.",
      detail: "Lực ép lên tới 150 tấn giúp kết nối cấu trúc chắc chắn mà không cần bất kỳ phụ gia gốc dầu mỏ nào."
    },
    {
      icon: Box,
      title: "Trở Thành Eco-box",
      description: "Sản phẩm hoàn thiện có độ cứng cao, chống thấm nước nhẹ, được khắc laser mã QR truy xuất nguồn gốc.",
      detail: "Mỗi chiếc hộp trở thành một tác phẩm nghệ thuật mộc mạc mang dấu ấn độc bản của tự nhiên."
    },
    {
      icon: RotateCcw,
      title: "Tái Sử Dụng Tuần Hoàn",
      description: "Vòng đời thứ hai bắt đầu. Người dùng tái sử dụng hộp làm đồ dùng gia đình hoặc chậu cây tự tiêu.",
      detail: "Bao bì kết thúc hành trình như một chất dinh dưỡng màu mỡ trả lại cho đất mẹ, hoàn thành chu trình tuần hoàn."
    }
  ];

  return (
    <section className="py-24 bg-background text-dark overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4"
        >
          Hành Trình Tuần Hoàn
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary"
        >
          Từ Rác Thải Đến Giá Trị
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-dark/70 max-w-xl mx-auto mt-4 font-light"
        >
          Khám phá hành trình chế tác từng chiếc Eco-box từ nguồn nguyên liệu tái chế đến sản phẩm công nghệ xanh.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        {/* Central Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-border transform -translate-x-1/2 z-0" />

        <div className="space-y-16 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot/Icon Column */}
                <div className="absolute left-6 -translate-x-1/2 md:relative md:translate-x-0 md:left-auto md:mx-auto flex items-center justify-center z-10">
                  <motion.div 
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white border-4 border-background shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Content Column */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`ml-16 md:ml-0 w-full md:w-[45%] bg-white p-8 rounded-3xl border border-border/80 shadow-premium hover:shadow-premium-hover transition-shadow duration-300 ${
                    isEven ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2 justify-start md:justify-between">
                    <span className="text-secondary-dark font-display text-4xl font-bold opacity-30">0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-primary font-display">{step.title}</h3>
                  </div>
                  <p className="text-sm text-dark/80 font-light leading-relaxed mb-4">{step.description}</p>
                  <div className="bg-background/50 rounded-2xl p-3 text-xs text-primary font-medium border border-border/40 inline-block text-left">
                    💡 {step.detail}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
