import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import logo from "figma:asset/3268e546acc8a2399a98cf57c103e7fa3b15e70b.png";

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <img src={logo} alt="Papo de Calouro" className="h-10 md:h-12 w-auto" />
        </motion.a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-sm font-bold uppercase tracking-wider hover:text-[#00ff88] transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("momentos")}
            className="text-sm font-bold uppercase tracking-wider hover:text-[#00ff88] transition-colors"
          >
            Instagram
          </button>
          <a
            href="https://www.instagram.com/papodecalourocast/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-wider hover:text-[#00ff88] transition-colors"
          >
            Contato
          </a>

          <motion.a
            href="https://www.instagram.com/papodecalourocast/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#ff006e] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#ff006e]/90 transition-colors"
          >
            Seguir
          </motion.a>
        </div>

        {/* Menu mobile - Hamburger */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
        </motion.button>
      </div>

      {/* Menu Mobile - Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f172a]/98 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left text-lg font-bold uppercase tracking-wider hover:text-[#00ff88] transition-colors py-3 border-b border-white/10"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("momentos")}
                className="block w-full text-left text-lg font-bold uppercase tracking-wider hover:text-[#00ff88] transition-colors py-3 border-b border-white/10"
              >
                Instagram
              </button>
              <a
                href="https://www.instagram.com/papodecalourocast/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left text-lg font-bold uppercase tracking-wider hover:text-[#00ff88] transition-colors py-3 border-b border-white/10"
              >
                Contato
              </a>
              <motion.a
                href="https://www.instagram.com/papodecalourocast/"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center px-6 py-3 bg-[#ff006e] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#ff006e]/90 transition-colors mt-4"
              >
                Seguir no Instagram
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}