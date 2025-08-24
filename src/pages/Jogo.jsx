import { Header } from "../components/Header"
import Logo from "../imagem/Logo.png"
import Capajogo from "../imagem/Capajogo.png"

export function Jogo() {
    return (
        <div className="min-h-screen bg-[#00040f] text-white">
            {/* Header Navigation */}
            <Header />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-24 pt-45">
                {/* Container principal só no desktop */}
                <div className="md:bg-white md:rounded-lg md:overflow-hidden">
                    {/* Grid para desktop, flex empilhado no mobile */}
                    <div className="grid md:grid-cols-3 gap-0 gap-y-6 md:gap-0">
                        {/* Imagem principal */}
                        <div className="md:col-span-2">
                            <div className="bg-[#d9d9d9] h-80 sm:h-96 flex items-center justify-center rounded-lg md:rounded-none overflow-hidden">
                                <img
                                    src={Capajogo}
                                    alt="Game preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Card com capa + info */}
                        <div
                            className="
                                flex flex-col
                                bg-white
                                rounded-xl shadow-md md:rounded-none md:shadow-none
                                max-w-sm w-full mx-auto md:max-w-none
                            "
                        >
                            {/* Capa */}
                            <div className="bg-[#d9d9d9] h-32 sm:h-36 md:h-48 flex items-center justify-center rounded-t-xl md:rounded-none">
                                <span className="text-white text-2xl font-bold">Capa</span>
                            </div>

                            {/* Informações */}
                            <div className="p-5 sm:p-6">
                                <h2 className="text-[#0a0f24] text-2xl font-bold mb-3">Nome Jogo</h2>
                                <p className="text-[#0a0f24] leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer original sem mudanças */}
            <div className="pt-16">
                <footer className="px-6 lg:px-12 border-t border-gray-800 py-4 lg:py-0">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">

                        <div className="flex items-center gap-2">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-28 lg:h-28 w-auto object-contain"
                            />
                        </div>

                        <p className="text-gray-400 text-sm mt-4 md:mt-0 text-center md:text-left">
                            Todos os direitos reservados © 2025.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
