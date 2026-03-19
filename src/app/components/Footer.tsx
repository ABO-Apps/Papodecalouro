import { motion } from "motion/react";

export function Footer() {
  const navigationLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Instagram", href: "#momentos" },
    { label: "Contato", href: "https://www.instagram.com/papodecalourocast/", external: true },
    { label: "Spotify", href: "https://open.spotify.com/show/6E9kIdG8pRufmzQ9gpitiB?si=b01f09e28453403e", external: true }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: "📷",
      url: "https://www.instagram.com/papodecalourocast/"
    },
    { 
      name: "TikTok", 
      icon: "🎵",
      url: "https://www.tiktok.com/@oqueeufaco.terceirao"
    },
    { 
      name: "Spotify", 
      icon: "🎙️",
      url: "https://open.spotify.com/show/6E9kIdG8pRufmzQ9gpitiB?si=b01f09e28453403e"
    },
    { 
      name: "YouTube", 
      icon: "▶️",
      url: "https://www.youtube.com/@ooqueeufaço"
    }
  ];

  return (
    <footer className="relative py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black mb-4">
              PAPO DE<br />
              <span className="text-[#00ff88]">CALOURO</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              O podcast que fala a sua língua e te ajuda a sobreviver na universidade.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-gray-400 hover:text-[#00ff88] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Redes Sociais</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00ff88] transition-colors"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Papo de Calouro. Todos os direitos reservados.
          </p>
          <p className="text-center text-sm text-gray-500">
            Políticas e termos podem ser adicionados quando o projeto tiver páginas dedicadas.
          </p>
        </div>
      </div>
    </footer>
  );
}
