"use client";

import {
  Cpu,
  Building2,
  GraduationCap,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const policies = [
  {
    icon: Cpu,
    title: "AI 산업 육성",
    description:
      "글로벌 AI 경쟁력 강화를 위한 인재 양성 및 R&D 투자 확대. AI 스타트업 생태계 조성.",
    progress: 75,
    tags: ["기술", "경제"],
  },
  {
    icon: Building2,
    title: "청년 주거 안정",
    description:
      "청년층을 위한 공공임대주택 공급 확대 및 전월세 지원금 상향. 주거 사다리 복원.",
    progress: 60,
    tags: ["청년", "주거"],
  },
  {
    icon: GraduationCap,
    title: "교육 혁신",
    description:
      "미래 인재 양성을 위한 교육 시스템 개편. 디지털 리터러시 교육 의무화.",
    progress: 45,
    tags: ["교육", "미래"],
  },
  {
    icon: Leaf,
    title: "탄소중립 추진",
    description:
      "2050 탄소중립 실현을 위한 친환경 에너지 전환 및 녹색 일자리 창출.",
    progress: 30,
    tags: ["환경", "에너지"],
  },
  {
    icon: ShieldCheck,
    title: "디지털 안전망",
    description:
      "사이버 보안 강화 및 개인정보 보호법 개정. 디지털 취약계층 지원 확대.",
    progress: 55,
    tags: ["보안", "복지"],
  },
  {
    icon: Users,
    title: "지역 균형 발전",
    description:
      "수도권 집중 해소를 위한 지방 분권 강화 및 지역 특화 산업 육성.",
    progress: 40,
    tags: ["지역", "균형"],
  },
];

export function PoliciesSection() {
  return (
    <section id="policies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            정책
          </span>
          <h2 className="text-4xl font-bold mb-4 text-balance">
            <span className="text-primary">6대 핵심 공약</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            국민과의 약속, 반드시 지키겠습니다.
            투명하게 진행 상황을 공개합니다.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl mb-5 group-hover:scale-110 transition-transform">
                  <policy.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{policy.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {policy.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {policy.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">
                      진행률
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {policy.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${policy.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
