import { Header } from "../components/Header"
import Logo from "../imagem/Logo.png"
import LogoModoClaro from "../imagem/LogoModoClaro.png"

export function Referencias() {
    return (
        <div className="min-h-screen bg-[#EFEFEF] dark:bg-[#00040f] text-[#0B1438] dark:text-white">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 md:px-8 py-16 pt-50">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <h1 className="text-5xl md:text-5xl font-bold text-[#0B1438] dark:text-white mb-16 md:mb-16">Referências</h1>

                    {/* Articles Grid */}
<div className="grid md:grid-cols-2 gap-20 md:gap-12 mb-16 pt-16">

{/* Artigo 1 */}
<div className="text-center">
  <h2 className="text-3xl md:text-3xl font-bold mb-4">
    Artigo <span className="text-[#01f7ff]">1</span>:
  </h2>
  <a
    href="https://submissoesrevistarcmos.com.br/index.php/rcmos/article/view/310"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0A0F24] dark:text-gray-300 text-base hover:text-[#01f7ff]"
  >
    https://submissoesrevistarcmos.com.br/
  </a>
</div>

                        {/* Artigo 2 */}
  <div className="text-center">
    <h2 className="text-3xl md:text-3xl font-bold mb-4">
      Artigo <span className="text-[#01f7ff]">2</span>:
    </h2>
    <a
      href="https://periodicorease.pro.br/rease/article/view/8522"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#0A0F24] dark:text-gray-300 text-base hover:text-[#01f7ff]"
    >
      https://periodicorease.pro.br/
    </a>
  </div>


                        {/* Artigo 3 */}
  <div className="text-center">
    <h2 className="text-3xl md:text-3xl font-bold mb-4">
      Artigo <span className="text-[#01f7ff]">3</span>:
    </h2>
    <a
      href="https://openaccesslegada.emnuvens.com.br/dcet/article/view/338"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#0A0F24] dark:text-gray-300 text-base hover:text-[#01f7ff]"
    >
      https://openaccesslegada.emnuvens.com.br/
    </a>
  </div>


                        {/* Artigo 4 */}
                        <div className="text-center">
    <h2 className="text-3xl md:text-3xl font-bold mb-4">
      Artigo <span className="text-[#01f7ff]">4</span>:
    </h2>
    <a
      href="https://repositorio.uniceub.br/jspui/handle/prefix/17276"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#0A0F24] dark:text-gray-300 text-base hover:text-[#01f7ff]"
    >
     https://repositorio.uniceub.br/
    </a>
  </div>


                     {/* Artigo 5 - Agora dentro do grid */}
<div className="text-center md:col-span-2">
  <h2 className="text-3xl md:text-3xl font-bold mb-4">
    Artigo <span className="text-[#01f7ff]">5</span>:
  </h2>
  <a
    href="https://www.projecaociencia.com.br/index.php/Projecao4/article/view/312"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0A0F24] dark:text-gray-300 text-base hover:text-[#01f7ff]"
  >
    https://www.projecaociencia.com.br/
  </a>
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
