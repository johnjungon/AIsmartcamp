"use client";

import { GraduationCap, Briefcase, Award, Heart, CheckCircle2, Users2, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// 1. 주요 경력 데이터를 나열 방식으로 변경 (타임라인 제거)
const careers = [
  {
    title: "경기도의원",
    description: "현직",
    icon: Briefcase,
    current: true, // 현직 표시용
  },
  {
    title: "더불어민주당 경기도당 대변인",
    description: "현직",
    icon: Briefcase,
  },
  {
    title: "성지고등학교 운영위원장",
    description: "현직",
    icon: Users2,
  },
  {
    title: "용인시의원",
    description: "전직",
    icon: Building2,
  },
  {
    title: "신갈고등학교 운영위원장",
    description: "전직",
    icon: Users2,
  },
];

const values = [
  {
    icon: Heart,
    title: "국민 중심",
    description: "모든 정책의 중심에는 국민이 있습니다.",
  },
  {
    icon: Award,
    title: "현장 우선",
    description: "답은 항상 현장에 있다는 믿음으로 발로 뜁니다.",
  },
  {
    icon: Briefcase,
    title: "실용 정치",
    description: "이념보다 민생, 실질적인 변화를 만들어냅니다.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            소개
          </span>
          <h2 className="text-4xl font-bold mb-4 text-balance">
            현장의 목소리를
            <br />
            <span className="text-primary">정책으로 실현합니다</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Career List (Timeline 대신 나열 방식) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">주요 경력</h3>
            <div className="grid gap-4">
              {careers.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-5 p-5 rounded-2xl border transition-all ${
                    item.current 
                    ? "bg-primary/5 border-primary/20 shadow-sm" 
                    : "bg-background border-border"
                  }`}
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 ${
                    item.current ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold flex items-center gap-2">
                      {item.title}
                      {item.current && (
                        <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Present</span>
                      )}
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values & Quote */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">핵심 가치</h3>
            <div className="grid gap-4">
              {values.map((value, index) => (
                <Card key={index} className="border-none bg-background/50 shadow-none">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="mt-1 text-primary">
                      <value.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote (전자영 의원님 스타일로 수정) */}
            <blockquote className="mt-8 p-8 bg-primary/5 rounded-3xl border-none relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <p className="text-xl font-medium text-foreground leading-relaxed">
                &quot;정치는 거창한 담론이 아니라, <br/>
                주민의 평범한 일상을 지키는 일입니다.&quot;
              </p>
              <cite className="block mt-4 text-sm font-bold text-primary not-italic">
                — 경기도의원 전자영
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}