import { useState, useContext } from "react"
import { Link } from "react-router"
import { Menu, Home, BookOpen, Users, Package, FileText, Gamepad2, Sun, Moon } from "lucide-react"
import Logo from "../imagem/Logo.png"
import LogoModoClaro from "../imagem/LogoModoClaro.png"

import { ThemeContext } from "../context/ThemeContext"

export function Header() {
  const { theme, toggle } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <nav className="fixed top-0 w-full z-50 bg-[#EFEFEF]/80 dark:bg-[#00040f]/80 backdrop-blur-md border-b border-[#dfdcdc] dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            {theme === "dark" ? (
              <img
                src={Logo}
                alt="Logo Modo Escuro"
                className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <img
                src={LogoModoClaro}
                alt="Logo Modo Claro"
                className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            )}
          </Link>

          {/* Links Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to={"/"} className="text-base font-medium text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-colors">Home</Link>
            <Link to={"/instruções"} className="text-base font-medium text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-colors">Instruções</Link>
            <Link to={"/quemsomos"} className="text-base font-medium text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-colors">Quem Somos?</Link>
            <Link to={"/produtos"} className="text-base font-medium text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-colors">Produtos</Link>
            <Link to={"/referências"} className="text-base font-medium text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-colors">Referências</Link>
            <Link to={"/jogo"} className="text-base font-medium text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-colors">Jogo</Link>
          </div>

          {/* Botão Modo Claro/Escuro Desktop */}
          <button
            onClick={toggle}
            className="cursor-pointer hidden lg:flex items-center justify-center gap-2 bg-[#01f7ff] hover:bg-[#00d4dd] text-[#00040f] font-semibold px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-[#01f7ff]/25"
          >
            {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>

          {/* Botão Hamburguer Mobile */}
          <button
            className="lg:hidden p-2 bg-[#01f7ff] rounded-full"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6 text-[#00040f]" />
          </button>
        </div>
      </nav>

      {/* Menu lateral Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#EFEFEF]/80 dark:bg-black/80 backdrop-blur-sm flex">
          <div className="w-72 bg-[#EFEFEF] dark:bg-[#00040f] border-r border-white/10 p-6 flex flex-col justify-between">

            {/* Topo - Modo Claro/Escuro */}
            <div className="flex justify-end mb-8">
              <button
                onClick={toggle}
                className="p-3 rounded-full bg-[#01f7ff] hover:bg-[#00d4dd] transition shadow-lg"
              >
                {theme === "dark" ? (
                  <Sun className="w-6 h-6 text-black" />
                ) : (
                  <Moon className="w-6 h-6 text-black" />
                )}
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-10">
              <Link onClick={() => setIsOpen(false)} to={"/"} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#d3cdcd] dark:bg-white/5 hover:bg-[#01f7ff]/20 text-lg text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-all">
                <Home size={22} /> Home
              </Link>
              <Link onClick={() => setIsOpen(false)} to={"/instruções"} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#d3cdcd] dark:bg-white/5 hover:bg-[#01f7ff]/20 text-lg text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-all">
                <BookOpen size={22} /> Instruções
              </Link>
              <Link onClick={() => setIsOpen(false)} to={"/quemsomos"} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#d3cdcd] dark:bg-white/5 hover:bg-[#01f7ff]/20 text-lg text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-all">
                <Users size={22} /> Quem Somos?
              </Link>
              <Link onClick={() => setIsOpen(false)} to={"/produtos"} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#d3cdcd] dark:bg-white/5 hover:bg-[#01f7ff]/20 text-lg text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-all">
                <Package size={22} /> Produtos
              </Link>
              <Link onClick={() => setIsOpen(false)} to={"/referências"} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#d3cdcd] dark:bg-white/5 hover:bg-[#01f7ff]/20 text-lg text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-all">
                <FileText size={22} /> Referências
              </Link>
              <Link onClick={() => setIsOpen(false)} to={"/jogo"} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#d3cdcd] dark:bg-white/5 hover:bg-[#01f7ff]/20 text-lg text-[#0B1438] dark:text-white/80 hover:text-[#01f7ff] transition-all">
                <Gamepad2 size={22} /> Jogo
              </Link>
            </nav>

            {/* Botão Fechar */}
            <div className="mt-10">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#01f7ff] hover:bg-[#00d4dd] text-[#00040f] font-semibold py-3 rounded-full transition-all duration-200 shadow-md"
              >
                Fechar
              </button>
            </div>
          </div>

          {/* Fundo clicável fecha o menu */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  )
}
