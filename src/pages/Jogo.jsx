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
                <div className="bg-white rounded-lg overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-0">
                        {/* Left side - Large image placeholder */}
                        <div className="md:col-span-2">
                            <div className="bg-[#d9d9d9] h-96 flex items-center justify-center">
                                <img
                                    src={Capajogo}
                                    alt="Game preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right side content */}
                        <div className="flex flex-col">
                            {/* Top section - Capa */}
                            <div className="bg-[#d9d9d9] h-48 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">Capa</span>
                            </div>

                            {/* Bottom section - Game info */}
                            <div className="bg-white p-6 flex-1">
                                <h2 className="text-[#0a0f24] text-2xl font-bold mb-4">Nome Jogo</h2>
                                <p className="text-[#0a0f24] leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <div className="pt-16">
                {/* Footer com altura fixa */}
                <footer className="px-6 lg:px-12 border-t border-gray-800 h-28 flex items-center">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">

                        {/* Logo no footer */}
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
