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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/3 -skew-x-12 translate-x-1/4" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              경기도의원 후보자
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-balance">
              <span className="text-primary">국민</span>과 함께
              <br />
              <span className="text-foreground">미래</span>를 열다
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              경험이 다르다!
              실력이 다르다!
              검증된 도의원 
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gap-2 px-8 rounded-full"
                onClick={() => scrollToSection("contact")}
              >
                <MessageCircle className="w-5 h-5" />
                의견 남기기
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 px-8 rounded-full"
                onClick={() => scrollToSection("policies")}
              >
                <Users className="w-5 h-5" />
                정책 보기
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">발의 법안</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">출석률</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15,000+</p>
                <p className="text-sm text-muted-foreground">민원 처리</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

              {/* Main image container */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                <Image
                 src={imageUrl || "/politician-profile.jpg"} //imageUrl이 없으면 기본 이미지 사용
                 alt={name|| "의원 프로필"}
                 fill
                 className="object-cover"
                 priority
                 />
              </div>

              {/* Name badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card px-8 py-4 rounded-2xl shadow-xl border border-border">
               <p className="text-2xl font-bold text-center">{name || "전자영"}</p> 
               <p className="text-sm text-muted-foreground text-center">경기도의원 후보자· {district || "구갈동 상갈동"}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">더 알아보기</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
