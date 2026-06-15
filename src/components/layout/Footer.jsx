import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-background pt-20 pb-10 border-t border-secondary/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-6">
          <Link to="/" className="inline-block">
            <span className="font-display text-3xl font-extrabold tracking-wider text-background">
              ECO<span className="text-secondary font-light">-</span>BOX
            </span>
          </Link>
          <p className="text-background/60 max-w-sm text-sm leading-relaxed">
            Một chiếc hộp - Nhiều vòng đời. Chúng tôi định nghĩa lại bao bì bằng cách kết hợp phế phẩm nông nghiệp với công nghệ thông tin số (Digital Info) nhằm kiến tạo một tương lai tuần hoàn.
          </p>
          <div className="flex space-x-4 pt-2">
            <a 
              href="https://github.com/tglam03/eco-box" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/5 hover:bg-secondary/20 flex items-center justify-center text-background/80 hover:text-background transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <div className="space-y-6">
          <h4 className="font-display text-lg font-semibold tracking-wide text-secondary">Khám Phá</h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link to="/" className="text-background/60 hover:text-background transition-colors duration-200">Trang chủ</Link>
            </li>
            <li>
              <Link to="/collection" className="text-background/60 hover:text-background transition-colors duration-200">Bộ sưu tập</Link>
            </li>
            <li>
              <Link to="/impact" className="text-background/60 hover:text-background transition-colors duration-200">Tác động ESG</Link>
            </li>
            <li>
              <Link to="/passport/ECO-2025-0001" className="text-background/60 hover:text-background transition-colors duration-200">Thông tin số</Link>
            </li>
          </ul>
        </div>

        {/* Contact info & Business CTA */}
        <div className="space-y-6">
          <h4 className="font-display text-lg font-semibold tracking-wide text-secondary">Hợp Tác Doanh Nghiệp</h4>
          <ul className="space-y-3.5 text-sm text-background/60">
            <li className="flex items-start space-x-3">
              <Mail className="w-4 h-4 mt-0.5 text-secondary" />
              <span>info@ecobox.vn</span>
            </li>
            <li className="flex items-start space-x-3">
              <Phone className="w-4 h-4 mt-0.5 text-secondary" />
              <span>+84 901 234 567</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
              <span>Thủ Đức, TP. Hồ Chí Minh, Việt Nam</span>
            </li>
          </ul>
          <div className="pt-2">
            <a href="mailto:partner@ecobox.vn" className="inline-flex items-center space-x-1.5 text-secondary hover:text-background text-sm font-semibold group transition-colors duration-200">
              <span>Liên hệ phát triển bao bì</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs text-background/45 space-y-4 md:space-y-0">
        <p>© {currentYear} Eco-Box Digital Passport. Bản quyền thuộc về tglam03.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-background transition-colors duration-200">Chính sách bảo mật</a>
          <a href="#" className="hover:text-background transition-colors duration-200">Điều khoản dịch vụ</a>
          <a href="#" className="hover:text-background transition-colors duration-200">Báo cáo phát triển bền vững</a>
        </div>
      </div>
    </footer>
  );
}
