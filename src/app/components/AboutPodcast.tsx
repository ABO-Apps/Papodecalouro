import { motion } from "motion/react";

export function AboutPodcast() {
  const features = [
    {
      icon: "🎯",
      title: "Conteúdo Direto",
      description: "Sem enrolação. Informação útil para sua vida universitária"
    },
    {
      icon: "🔥",
      title: "Temas Reais",
      description: "Falamos sobre o que realmente importa para calouros"
    },
    {
      icon: "💬",
      title: "Conversa Real",
      description: "Linguagem descomplicada, como se estivéssemos tomando um café"
    },
    {
      icon: "🎓",
      title: "Dicas Práticas",
      description: "Aprenda com quem já passou (e sobreviveu) ao primeiro ano"
    }
  ];

  return (
    <section id="sobre" className="relative py-32 px-6 overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-20 right-0 w-1/3 h-96 bg-[#ff006e]/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-1/3 h-96 bg-[#00ff88]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-20 bg-[#ff006e]" />
            <span className="text-sm text-gray-400 uppercase tracking-widest">Sobre o Podcast</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            FEITO POR <span className="text-[#00ff88]">CALOUROS</span>
            <br />
            PARA <span className="text-[#ff006e]">CALOUROS</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            A gente sabe como é: você chega na universidade sem entender nada, 
            todo mundo parece saber o que tá fazendo menos você. É pra isso que 
            a gente existe.
          </p>
        </motion.div>

        {/* Grid de features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 p-8 h-full hover:border-[#00ff88]/50 transition-all duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00ff88] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-gradient-to-br from-[#ff006e]/20 to-transparent border border-[#ff006e]/30">
            <div className="text-6xl font-black text-[#ff006e] mb-2">50K+</div>
            <div className="text-gray-400 uppercase text-sm tracking-wider">Ouvintes</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-[#00ff88]/20 to-transparent border border-[#00ff88]/30">
            <div className="text-6xl font-black text-[#00ff88] mb-2">100+</div>
            <div className="text-gray-400 uppercase text-sm tracking-wider">Episódios</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-[#ffbe0b]/20 to-transparent border border-[#ffbe0b]/30">
            <div className="text-6xl font-black text-[#ffbe0b] mb-2">4.8★</div>
            <div className="text-gray-400 uppercase text-sm tracking-wider">Avaliação</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}