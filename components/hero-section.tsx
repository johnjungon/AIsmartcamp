"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Users } from "lucide-react";

export function HeroSection({ name, imageUrl, district }: any) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 배너 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/banner-choi.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* 왼쪽은 짙은 네이비, 오른쪽으로 갈수록 반투명 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002060]/95 via-[#002060]/80 to-[#002060]/50" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 영역 */}
          <div className="space-y-8">
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              경기도의원 현직 · 수원시 제7선거구
            </div>

            {/* 메인 슬로건 */}
            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white">
              경기도민과<br />
              매탄주민의<br />
              <span className="text-yellow-400">행복지키미</span>
            </h1>

            {/* 보조 슬로건 */}
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              매탄주민의 눈으로 매탄 주민과 함께<br />
              <span className="text-white/60 text-base">매탄 1동 · 2동 · 3동 · 4동</span>
            </p>

            {/* 버튼 */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gap-2 px-8 rounded-full bg-yellow-400 hover:bg-yellow-300 text-[#002060] font-bold border-0"
                onClick={() => scrollToSection("contact")}
              >
                <MessageCircle className="w-5 h-5" />
                의견 남기기
              </Button>
              <Button
                size="lg"
                className="gap-2 px-8 rounded-full bg-yellow-400 hover:bg-yellow-300 text-[#002060] font-bold border-0"
                onClick={() => scrollToSection("policies")}
              >
                <Users className="w-5 h-5" />
                정책 보기
              </Button>
            </div>

            {/* 통계 */}
            <div className="flex gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-yellow-400">45건+</p>
                <p className="text-sm text-white/80">발의 법안</p>
                <p className="text-xs text-white/50">보건복지·장애인 정책 중심</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">95%</p>
                <p className="text-sm text-white/80">출석률</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">200회+</p>
                <p className="text-sm text-white/80">민원 처리</p>
                <p className="text-xs text-white/50">연간</p>
              </div>
            </div>
          </div>

          {/* 프로필 이미지 영역 */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* 장식 원형 글로우 */}
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl" />

              {/* 프로필 이미지 카드 */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white">
                <Image
                  src={imageUrl || "/profile-choi.png"}
                  alt={name || "최종현 의원"}
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* 이름 배지 */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-2xl border border-white/20 min-w-max">
                <p className="text-2xl font-black text-center text-[#002060]">
                  {name || "최종현"}
                </p>
                <p className="text-sm text-center text-gray-500 font-medium">
                  경기도의원 현직 · {district || "수원시 제7선거구"}
                </p>
              </div>

              {/* 번호 1 배지 */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-3xl font-black text-[#002060]">1</span>
              </div>
            </div>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-sm">더 알아보기</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
