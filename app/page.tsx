"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PoliciesSection } from "@/components/policies-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PoliticianProfilePage() {
  const [politicianData, setPoliticianData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      const { data, error } = await supabase
        .from("politician_info")
        .select("*")
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("데이터 로드 실패:", error.message);
      } else {
        // [중요] 여기서 브라우저 콘솔(F12)에 데이터가 찍힙니다.
        console.log("DB에서 가져온 데이터:", data); 
        setPoliticianData(data);
      }
      setLoading(false);
    }

    getProfile();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">데이터를 불러오는 중...</div>;

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        name={politicianData?.name} 
        imageUrl={politicianData?.image_url} 
        district={politicianData?.district}
      />
      
      <AboutSection />
      <PoliciesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}