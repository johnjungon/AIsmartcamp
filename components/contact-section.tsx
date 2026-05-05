"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Globe,
  Youtube,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "의원 사무실",
    value: "경기도 수원시 영통구 도청로 30",
    subValue: "경기도의회 1112호",
  },
  {
    icon: Phone,
    label: "전화",
    value: "031-8008-7050",
    subValue: "언제든 문의해 주세요",
  },
  {
    icon: Mail,
    label: "이메일",
    value: "ds2rjm@empal.com",
    subValue: "언제든 문의해 주세요",
  },
  {
    icon: Clock,
    label: "면담 예약",
    value: "온라인 예약 가능",
    subValue: "홈페이지에서 신청",
  },
];

const socialLinks = [
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UC1JM2qrgEZZzQNWXlPtX-Eg" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/jonghyun.choi.1422/about" },
  { icon: Globe, label: "네이버 블로그", href: "https://blog.naver.com/caravao" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            연락하기
          </span>
          <h2 className="text-4xl font-bold mb-4 text-balance">
            <span className="text-primary">도민의 목소리</span>를 듣겠습니다
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            정책 제안, 민원, 격려 등 어떤 내용이든 좋습니다.
            여러분의 소중한 의견을 기다립니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.subValue}
                  </p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">SNS 팔로우</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-secondary text-secondary-foreground rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3 shadow-lg">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    의견이 전달되었습니다
                  </h3>
                  <p className="text-muted-foreground">
                    소중한 의견 감사합니다. 빠른 시일 내에 답변드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium"
                      >
                        이름
                      </label>
                      <Input
                        id="name"
                        placeholder="홍길동"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium"
                      >
                        이메일
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      의견
                    </label>
                    <Textarea
                      id="message"
                      placeholder="정책 제안, 민원, 격려 등 자유롭게 작성해 주세요..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 gap-2 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "전송 중..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        의견 보내기
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    제출하신 개인정보는 민원 처리 목적으로만 사용되며,
                    <br />
                    처리 완료 후 안전하게 파기됩니다.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
