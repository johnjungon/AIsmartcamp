"use client";

import {
  Building2,
  Store,
  Leaf,
  Car,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const policies = [
  {
    icon: Building2,
    title: "구도심 재건축·리모델링 및 도시환경 재정비 추진",
    description:
      "수원의 최초 계획도시인 매탄동의 노후화된 주거 환경 개선을 위해 재건축과 리모델링 사업을 지원합니다.",
    tags: ["주거", "도시재생"],
  },
  {
    icon: Store,
    title: "구매탄 전통시장 활성화 및 소상공인 지원",
    description:
      "구매탄 시장 현대화 사업을 추진하고, 골목상권 소상공인과 영세 자영업자를 위한 실질적인 지원 정책을 마련합니다.",
    tags: ["전통시장", "소상공인"],
  },
  {
    icon: Leaf,
    title: "원천리천 수변공원 조성 및 주민 휴식 공간 확충",
    description:
      "지역의 소중한 자산인 원천리천을 수변공원으로 조성하여 주민들이 즐겨 찾는 쾌적한 쉼터로 만듭니다.",
    tags: ["환경", "공원"],
  },
  {
    icon: Car,
    title: "교통체계 개선을 통한 지·정체 상습지역 해소",
    description:
      "신도심 아파트 지역의 고질적인 교통 정체 문제를 해결하기 위해 스마트한 교통 체계 개선안을 도입합니다.",
    tags: ["교통", "스마트"],
  },
  {
    icon: GraduationCap,
    title: "교육 복지 강화 및 살기 좋은 공동체 문화 조성",
    description:
      "매탄동 아이들을 위한 교육 인프라를 확충하고, 주민들이 서로 소통하며 정주 의식을 높일 수 있는 '마을 만들기' 활동을 지원합니다.",
    tags: ["교육", "공동체"],
  },
  {
    icon: ShieldCheck,
    title: "공공의료 서비스 접근성 확대 및 복지 체계 강화",
    description:
      "도민의 편의를 위해 공공심야약국을 활성화하고, 저출생·고령 사회에 대응하는 종합적인 돌봄 시스템을 지역에 안착시킵니다.",
    tags: ["의료", "복지"],
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
            도민과의 약속, 반드시 지키겠습니다.
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
                <div className="flex flex-wrap gap-2">
                  {policy.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
