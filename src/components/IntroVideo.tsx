import React, { useState } from 'react';
import { Play, Youtube, Award, Users, BookOpen } from 'lucide-react';

export default function IntroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = "https://drive.google.com/file/d/1OIbbJUw53dOi3pwe-5NnBloTvjwqj_nQ/preview?autoplay=1";

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-650 uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full inline-flex items-center space-x-1.5 border border-blue-100">
            <Play className="h-4 w-4 text-blue-600 animate-pulse" />
            <span>Thước Phim Giới Thiệu Học Viện</span>
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            AIUNI — Kiến Tạo Tương Lai Trí Tuệ Nhân Tạo
          </h2>
          <p className="font-sans text-gray-500 text-xs sm:text-base leading-relaxed">
            Khám phá quy mô đào tạo chuẩn quốc tế, trang thiết bị học tập tối tân, và sứ mệnh đồng hành cùng thế hệ trẻ Việt Nam chinh phục công nghệ tương lai.
          </p>
        </div>

        {/* Video Embed Frame Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Video Frame Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/80 group">
              {/* Decorative dynamic neon glow ring around video card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-500 pointer-events-none" />
              
              {/* Aspect Ratio 16:9 responsive video wrapper */}
              <div className="relative aspect-video w-full">
                {isPlaying ? (
                  <iframe
                    src={embedUrl}
                    title="Video Giới thiệu Viện Công nghệ AIUNI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                ) : (
                  <div 
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 bg-slate-900 cursor-pointer flex flex-col items-center justify-center group/play overflow-hidden"
                  >
                    {/* Background decorative gradient mesh */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-indigo-950/80 group-hover/play:scale-105 transition-transform duration-700" />
                    
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* Play Button Icon */}
                    <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-blue-600 group-hover/play:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 transform group-hover/play:scale-110 transition-all duration-300">
                      <Play className="h-8 w-8 sm:h-10 sm:w-10 translate-x-0.5 fill-current" />
                    </div>

                    <div className="relative z-10 mt-6 text-center px-4">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-xs sm:text-sm tracking-wide border border-white/20 group-hover/play:bg-white/20 transition-colors">
                        Xem Thước Phim Giới Thiệu AIUNI
                      </span>
                      <p className="text-slate-400 text-xs mt-2">Nhấp để phát video ngay lập tức (Tối ưu tốc độ tải trang)</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Stats and Core Highlights Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                Vững vàng kỹ năng — Sâu rộng tri thức cùng AIUNI Group
              </h3>
              <p className="font-sans text-gray-550 text-sm leading-relaxed">
                Chúng tôi nỗ lực phổ cập kỹ năng lập trình mô hình, thấu hiểu cấu trúc Prompt chuẩn khoa học và tối ưu hiệu suất quy trình công việc thông qua những bước đi thực tiễn nhất.
              </p>
            </div>

            {/* Feature Points Grid */}
            <div className="space-y-4">
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-sm">Chương trình chuẩn Quốc tế</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Giáo trình liên tục cập nhật theo công nghệ OpenAI, Google DeepMind, Anthropic.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-sm">Đội ngũ Cố vấn giàu thực chiến</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Giảng viên và chuyên gia hàng đầu từ các tập đoàn công nghệ Đa Quốc gia.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-sm">Học liệu độc quyền & Thực hành 100%</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Truy cập bộ tài liệu đồ sộ, thực chiến trên hệ thống GPU Cloud hiệu năng cao.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

