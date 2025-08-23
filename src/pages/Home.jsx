import { Header } from "../components/Header"
import Logo from "../imagem/Logo.png"
import Fotohome2 from "../imagem/Fotohome2.png"
import "./Home.css"
import "@fontsource/poppins/400.css";
import { Shield, Flame, Phone, Camera } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
    return (
        <div className="min-h-screen bg-[#00040f] text-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 lg:pt-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">

                    {/* Texto */}
                    <div className="space-y-6 text-left lg:text-left">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-left lg:text-left">
                            <span className="block whitespace-nowrap">
                                Segurança residencial
                            </span>
                            <span className="block whitespace-nowrap">
                                à prova do <span className="text-[#01f7ff]">futuro.</span>
                            </span>
                        </h1>
                        <p className="text-base text-gray-300 font-poppins text-left lg:text-left">
                            Soluções inteligentes de monitoramento e proteção residencial, para
                            garantir a sua segurança e da sua família 24 horas por dia.
                        </p>
                    </div>

                    {/* Imagem do herói */}
                    <div className="flex justify-end mr-24">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1], // só pulso
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="drop-shadow-[0_0_25px_#01f7ff]" // glow neon fixo
                        >
                            <Camera className="w-60 h-60 text-[#01f7ff]" />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Estatísticas */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8 text-center pt-20">
                    <div className="space-y-2">
                        <div className="text-4xl lg:text-4xl font-bold">1,200+</div>
                        <div className="text-[#01f7ff] text-sm">Lares Protegidos</div>
                    </div>
                    <div className="space-y-2 border-l border-r border-gray-700 md:px-8">
                        <div className="text-4xl lg:text-4xl font-bold">350+</div>
                        <div className="text-[#01f7ff] text-sm">Ocorrências evitadas</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl lg:text-4xl font-bold">7s</div>
                        <div className="text-[#01f7ff] text-sm">Tempo médio de resposta</div>
                    </div>
                </div>
            </section>

            {/* Funcionalidades */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start pt-16">
                    <div className="space-y-6 text-left lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-left lg:text-left">
                            Você vive sua vida, nós
                            <br />
                            protegemos sua casa.
                        </h2>
                        <p className="text-base text-gray-300 max-w-md text-left lg:text-left">
                            Oferecemos soluções inteligentes em segurança, que vão além do
                            monitoramento convencional.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-4 p-4 rounded-xl bg-white/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#01f7ff]">
                            <div className="w-12 h-12 bg-[#01f7ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Shield className="w-6 h-6 text-[#01f7ff]" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Sistema anti-invasão</h3>
                                <p className="text-gray-300">
                                    Detecta qualquer tentativa de invasão imediatamente.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-white/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#01f7ff]">
                            <div className="w-12 h-12 bg-[#01f7ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Flame className="w-6 h-6 text-[#01f7ff]" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Detecção de incêndio</h3>
                                <p className="text-gray-300">
                                    Alerta instantâneo em caso de fumaça ou fogo.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-white/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#01f7ff]">
                            <div className="w-12 h-12 bg-[#01f7ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-[#01f7ff]" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">
                                    Comunicação via telefone e SMS
                                </h3>
                                <p className="text-gray-300">
                                    Em caso de alerta, você recebe notificações em tempo real.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Texto */}
                    <div className="space-y-6 flex flex-col items-start lg:items-end order-1 lg:order-2">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-left lg:text-right">
                            Segurança é essencial.<br />
                            Proteja o que você ama agora!
                        </h2>
                        <button className="bg-[#01f7ff] text-[#00040f] hover:bg-[#01f7ff]/90 rounded-xl px-6 py-3 text-base font-semibold self-center lg:self-end shadow-lg">
                            Instale o App
                        </button>
                    </div>

                    {/* Imagem do cadeado */}
                    <div className="flex justify-center order-2 lg:order-1">
                        <img
                            src={Fotohome2}
                            alt="Cadeado segurança"
                            className="max-w-[450px] w-full h-auto"
                        />
                    </div>

                </div>
            </section>


            {/* Footer */}
            <div className="pt-16">
                <footer className="px-6 lg:px-12 border-t border-gray-800 h-28 flex items-center">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">

                        <div className="flex items-center gap-2">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-28 w-auto object-contain"
                            />
                        </div>

                        <p className="text-gray-400 text-sm">
                            Todos os direitos reservados © 2025.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
