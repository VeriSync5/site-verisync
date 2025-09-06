import { Header } from "../components/Header"
import Logo from "../imagem/Logo.png"
import Capajogo from "../imagem/Capajogo.png"
import LogoModoClaro from "../imagem/LogoModoClaro.png"

export function Jogo() {
    return (
        <div className="min-h-screen bg-[#EFEFEF] dark:bg-[#00040f] text-[#0B1438] dark:text-white">
            {/* Header Navigation */}
            <Header />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 pt-45">

                {/* Mobile Layout */}
                <div className="flex flex-col gap-6 md:hidden">
                    {/* Imagem principal */}
                    <div className="bg-[#d9d9d9] dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg overflow-hidden">
                        <img
                            src={Capajogo}
                            alt="Game preview"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Card com capa + info */}
                    <div className="flex flex-col bg-[#0A0F24] dark:bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Capa */}
                        <div className="bg-[#d9d9d9] dark:bg-[#d9d9d9] h-32 flex items-center justify-center">
                            <span className="text-white dark:text-white text-2xl font-bold">Capa</span>
                        </div>
                        {/* Info */}
                        <div className="p-4">
                            <h2 className="text-white dark:text-[#0a0f24] text-xl font-bold mb-2">Nome Jogo</h2>
                            <p className="text-white dark:text-[#0a0f24] text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-3 gap-0 bg-[#0A0F24] dark:bg-white rounded-lg overflow-hidden">
                    {/* Imagem grande */}
                    <div className="md:col-span-2 bg-[#d9d9d9] dark:bg-[#d9d9d9] h-96 flex items-center justify-center">
                        <img
                            src={Capajogo}
                            alt="Game preview"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Lado direito */}
                    <div className="flex flex-col">
                        {/* Capa */}
                        <div className="bg-[#d9d9d9] dark:bg-[#d9d9d9] h-48 flex items-center justify-center">
                            <span className="text-white dark:text-white text-2xl font-bold">Capa</span>
                        </div>
                        {/* Info */}
                        <div className="p-6">
                            <h2 className="text-white dark:text-[#0a0f24] text-2xl font-bold mb-4">Nome Jogo</h2>
                            <p className="text-white dark:text-[#0a0f24] leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            {/* Footer */}
            <div className="pt-16">
                <footer className="px-6 lg:px-12 border-t border-[#d3cdcd] dark:border-gray-800 py-4 lg:py-0">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img
                                src={LogoModoClaro}
                                alt="Logo Modo Claro"
                                className="block dark:hidden h-28 lg:h-28 w-auto object-contain"
                            />
                            <img
                                src={Logo}
                                alt="Logo Modo Escuro"
                                className="hidden dark:block h-28 lg:h-28 w-auto object-contain"
                            />
                        </div>

                        {/* Texto */}
                        <p className="text-[#0A0F24] dark:text-gray-400 text-sm mt-4 md:mt-0 text-center md:text-left">
                            Todos os direitos reservados © 2025.
                        </p>
                    </div>
                </footer>
            </div>

        </div>
    )
}
