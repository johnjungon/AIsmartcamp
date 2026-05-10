/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rzcmywtdrqlixraxaakj.supabase.co', // 에러 메시지에 뜬 본인의 호스트 주소
        port: '',
        pathname: '/storage/v1/object/public/**', // 저장소 경로 허용
      },
    ],
  },
};

export default nextConfig;
