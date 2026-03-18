import { motion } from "motion/react";
import { useState } from "react";

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você pode adicionar a lógica de envio
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const brazilianStates = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
    "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Formas geométricas */}
        <motion.div
          className="absolute top-20 right-[10%] w-32 h-32 border-4 border-[#00ff88] opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 left-[15%] w-24 h-24 bg-[#ff006e] opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-[30%] left-[8%] w-16 h-16 border-2 border-[#ffbe0b] opacity-20 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tag pequena */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-[#00ff88]/20 border border-[#00ff88] text-[#00ff88] text-sm font-bold uppercase tracking-wider">
                Podcast Universitário
              </span>
            </motion.div>

            {/* Título principal */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black leading-none"
              >
                PAPO DE
                <span className="block text-[#00ff88] relative">
                  CALOURO
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 400 20">
                    <path d="M0,10 Q100,0 200,10 T400,10" stroke="#ff006e" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-lg"
              >
                O podcast que fala a língua de quem tá começando a jornada universitária
              </motion.p>
            </div>

            {/* Plataformas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-4"
            >
              <span className="text-sm text-gray-400 uppercase tracking-wider">Disponível em:</span>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#1DB954] rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">S</span>
                </div>
                <div className="w-8 h-8 bg-[#F037A5] rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">A</span>
                </div>
                <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">Y</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10">
              <div className="mb-6">
                <h3 className="text-3xl font-black mb-2">
                  JUNTE-SE A <span className="text-[#ff006e]">NÓS</span>
                </h3>
                <p className="text-gray-400">
                  Cadastre-se para receber conteúdo exclusivo e ficar por dentro de tudo!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-300">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-300">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-300">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* Estado e Cidade */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-300">
                      Estado
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:outline-none focus:border-[#00ff88] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0f172a]">UF</option>
                      {brazilianStates.map(state => (
                        <option key={state} value={state} className="bg-[#0f172a]">
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-300">
                      Cidade
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#ff006e] to-[#ff6b35] text-white font-bold text-lg uppercase tracking-wide hover:shadow-xl transition-all mt-6"
                >
                  Cadastrar Agora
                </motion.button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Seus dados estão seguros conosco e não serão compartilhados
                </p>
              </form>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ffbe0b] opacity-20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-[#00ff88] opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}