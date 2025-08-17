import { Link } from "react-router"
import Logo from "../imagem/Logo.png"

export function Header() {
    return (
        <header>
            <nav className="fixed top-0 w-full z-50 bg-[#00040f]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to={"/"} className="flex items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </Link>

                    {/* Links centralizados */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link to={"/"} className="text-lg font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Home</Link>
                        <Link to={"/instruções"} className="text-lg font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Instruções</Link>
                        <Link to={"/quemsomos"} className="text-lg font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Quem Somos?</Link>
                        <Link to={"/produtos"} className="text-lg font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Produtos</Link>
                        <Link to={"/referências"} className="text-lg font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Referências</Link>
                        <Link to={"/jogo"} className="text-lg font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Jogo</Link>
                    </div>

                    {/* Botão Login */}
                    <button className="bg-[#01f7ff] hover:bg-[#00d4dd] text-[#00040f] font-semibold px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-[#01f7ff]/25">
                        Login
                    </button>
                </div>
            </nav>
        </header>
    )
}
