import { AnimatePresence, motion } from "motion/react";
import { useState, type ChangeEvent, type FormEvent } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  state: "",
  city: ""
};

const gsheetsTokenRegex = /^[a-f0-9]{32}$/i;
const fieldClassName = "w-full rounded-2xl px-4 py-3 bg-white/8 border border-white/15 text-white placeholder-gray-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] focus:outline-none focus:border-[#00ff88] focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(0,255,136,0.08)] transition-all";

export function Hero() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const webhookUrl = import.meta.env.VITE_GSHEETS_WEBHOOK_URL;
    const token = import.meta.env.VITE_GSHEETS_TOKEN;
    const sheetName = import.meta.env.VITE_SHEET_NAME;

    if (!webhookUrl || !token) {
      setSubmitError("Configuração do formulário incompleta. Verifique as variáveis de ambiente.");
      setIsSubmitted(false);
      return;
    }

    if (!gsheetsTokenRegex.test(token)) {
      setSubmitError("Token do formulário inválido. Revise a configuração antes de enviar.");
      setIsSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setIsSubmitted(false);

    const payload = new URLSearchParams({
      token,
      sheet_name: sheetName || "",
      submittedAt: new Date().toISOString(),
      nome: formData.name,
      email: formData.email,
      telefone: formData.phone,
      estado: formData.state,
      cidade: formData.city
    });

    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: payload.toString()
      });

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch {
      setSubmitError("Nao foi possivel enviar agora. Tente novamente em instantes.");
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (isSubmitted) {
      setIsSubmitted(false);
    }

    if (submitError) {
      setSubmitError(null);
    }

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
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.96, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="flex min-h-[560px] flex-col items-center justify-center text-center"
                    role="status"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0], scale: [1, 1.06, 1] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                      className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-[#00ff88]/30 bg-gradient-to-br from-[#00ff88]/20 via-white/10 to-[#ffbe0b]/20 shadow-[0_0_40px_rgba(0,255,136,0.12)]"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.7, 0.35] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-2 rounded-full border border-[#00ff88]/20"
                      />
                      <span className="text-5xl">✨</span>
                    </motion.div>

                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="mb-4 inline-block rounded-full border border-[#00ff88]/30 bg-[#00ff88]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#00ff88]"
                    >
                      Cadastro Confirmado
                    </motion.span>

                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.22 }}
                      className="text-4xl font-black leading-tight text-white"
                    >
                      Obrigado por se cadastrar!
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-5 max-w-md text-base leading-relaxed text-gray-300"
                    >
                      Sua resposta foi enviada com sucesso. Agora e so ficar de olho, porque as novidades do Papo de Calouro vao chegar para voce em breve.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.38 }}
                      className="mt-8 grid w-full max-w-md grid-cols-3 gap-3"
                    >
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                        <div className="text-2xl">🎧</div>
                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-300">Podcast</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                        <div className="text-2xl">🚀</div>
                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-300">Novidades</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                        <div className="text-2xl">💚</div>
                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-300">Obrigado</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form-state"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-3xl font-black mb-2">
                        JUNTE-SE A <span className="text-[#ff006e]">NÓS</span>
                      </h3>
                      <p className="text-gray-400">
                        Cadastre-se para receber conteúdo exclusivo e ficar por dentro de tudo!
                      </p>
                    </div>

                    {submitError ? (
                      <div
                        className="mb-6 rounded-sm border border-[#ff006e]/40 bg-[#ff006e]/10 px-4 py-3 text-sm text-[#ffd0df]"
                        role="alert"
                      >
                        {submitError}
                      </div>
                    ) : null}

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
                          className={fieldClassName}
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
                          className={fieldClassName}
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
                          className={fieldClassName}
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
                            className={`${fieldClassName} appearance-none cursor-pointer`}
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
                            className={fieldClassName}
                            placeholder="Sua cidade"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-8 py-4 bg-gradient-to-r from-[#ff006e] to-[#ff6b35] text-white font-bold text-lg uppercase tracking-wide hover:shadow-xl transition-all mt-6"
                      >
                        {"{ cadastrar_agora }"}
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        Seus dados estão seguros conosco e não serão compartilhados
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
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
