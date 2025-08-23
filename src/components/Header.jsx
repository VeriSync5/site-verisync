import { useState } from "react"
import { Link } from "react-router"
import { Menu, X } from "lucide-react"
import Logo from "../imagem/Logo.png"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

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

          {/* Links centralizados (desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to={"/"} className="text-base font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Home</Link>
            <Link to={"/instruções"} className="text-base font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Instruções</Link>
            <Link to={"/quemsomos"} className="text-base font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Quem Somos?</Link>
            <Link to={"/produtos"} className="text-base font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Produtos</Link>
            <Link to={"/referências"} className="text-base font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Referências</Link>
            <Link to={"/jogo"} className="text-base font-medium text-white/80 hover:text-[#01f7ff] transition-colors duration-200">Jogo</Link>
          </div>

          {/* Botão Login (desktop) */}
          <button className="hidden lg:block bg-[#01f7ff] hover:bg-[#00d4dd] text-[#00040f] font-semibold px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-[#01f7ff]/25">
            Login
          </button>

          {/* Menu Hamburguer (mobile) */}
          <button
            className="lg:hidden p-2 text-[#01f7ff]"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Menu lateral (mobile) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex">
          <div className="w-64 bg-[#00040f] border-r border-white/10 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-[#01f7ff]" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link onClick={() => setIsOpen(false)} to={"/"} className="text-base text-white/80 hover:text-[#01f7ff] transition-colors">Home</Link>
              <Link onClick={() => setIsOpen(false)} to={"/instruções"} className="text-base text-white/80 hover:text-[#01f7ff] transition-colors">Instruções</Link>
              <Link onClick={() => setIsOpen(false)} to={"/quemsomos"} className="text-base text-white/80 hover:text-[#01f7ff] transition-colors">Quem Somos?</Link>
              <Link onClick={() => setIsOpen(false)} to={"/produtos"} className="text-base text-white/80 hover:text-[#01f7ff] transition-colors">Produtos</Link>
              <Link onClick={() => setIsOpen(false)} to={"/referências"} className="text-base text-white/80 hover:text-[#01f7ff] transition-colors">Referências</Link>
              <Link onClick={() => setIsOpen(false)} to={"/jogo"} className="text-base text-white/80 hover:text-[#01f7ff] transition-colors">Jogo</Link>
            </nav>
          </div>

          {/* Fundo clicável fecha o menu */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  )
}
