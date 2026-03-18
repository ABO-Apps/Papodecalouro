import { motion } from "motion/react";
import { useEffect } from "react";

export function FreshmanMoments() {
  // Array com os links dos posts do Instagram
  const instagramPosts = [
    "https://www.instagram.com/p/DVy59q2j5e5/",
    "https://www.instagram.com/p/DVyeFJjDVwI/",
    "https://www.instagram.com/p/DUY_nokkV8k/"
  ];

  useEffect(() => {
    // Remove script existente
    const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Adiciona o script do Instagram
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Processa os embeds após carregar
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    // Se o script já estava carregado
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="momentos" className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent to-[#0a0f1a]">
      {/* Elemento decorativo */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-[#ffbe0b]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-20 bg-[#00ff88]" />
            <span className="text-sm text-gray-400 uppercase tracking-widest">Últimos Posts</span>
            <div className="h-1 w-20 bg-[#00ff88]" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
            NOS ACOMPANHE O
            <span className="block text-[#ff006e]">DIA A DIA</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Acompanhe nossos últimos conteúdos, dicas e bastidores direto do Instagram
          </p>
        </motion.div>

        {/* Grid de posts do Instagram */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instagramPosts.map((postUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex justify-center"
            >
              {/* Card wrapper com estilo */}
              <div className="relative w-full max-w-[400px]">
                {/* Instagram Embed com blockquote */}
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    margin: '0',
                    maxWidth: '400px',
                    minWidth: '280px',
                    padding: 0,
                    width: '100%'
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a
                      href={postUrl}
                      style={{
                        background: '#FFFFFF',
                        lineHeight: 0,
                        padding: 0,
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver esta publicação no Instagram
                    </a>
                  </div>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://www.instagram.com/papodecalourocast/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#ff006e] to-[#ffbe0b] text-white font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transition-all"
          >
            📷 Seguir no Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Adiciona tipo para o objeto window
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
