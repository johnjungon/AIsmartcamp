import { Facebook, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold mb-2">전자영</p>
            <p className="text-sm opacity-70">
              경기도의원 후보자 · 구갈동 상갈동 - 용인제4선거구
              </p>
            <p className="text-xs opacity-50 mt-2">
              © 2026 전자영 AI스마트캠프. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex items-center justify-center w-10 h-10 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
