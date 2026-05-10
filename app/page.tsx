import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PoliciesSection } from "@/components/policies-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const revalidate = 300;

type PoliticianProfile = {
  name?: string | null;
  image_url?: string | null;
  district?: string | null;
};

async function getProfile(): Promise<PoliticianProfile | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/politician_info?select=*&limit=1`,
      {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        next: { revalidate },
      },
    );

    if (!response.ok) {
      return null;
    }

    const [profile] = (await response.json()) as PoliticianProfile[];
    return profile ?? null;
  } catch {
    return null;
  }
}

export default async function PoliticianProfilePage() {
  const politicianData = await getProfile();

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
