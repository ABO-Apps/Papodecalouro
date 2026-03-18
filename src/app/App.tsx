import { Hero } from "./components/Hero";
import { AboutPodcast } from "./components/AboutPodcast";
import { FreshmanMoments } from "./components/FreshmanMoments";
import { Footer } from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white">
      {/* Navegação */}
      <FloatingNav />

      {/* Grid de fundo sutil */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Conteúdo principal */}
      <main className="relative z-10">
        <Hero />
        <AboutPodcast />
        <FreshmanMoments />
        <Footer />
      </main>
    </div>
  );
}