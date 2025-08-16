import { Header } from "../components/Header"

export function Instrucoes() {
  return (
    <div className="min-h-screen bg-[#00040f] text-white">
      <Header />
      {/* Main Content */}
      <main className="max-w-6xl mx-auto pt-24 sm:px-6 lg:px-8 py-12 ">

        {/* Title */}
        <div className="text-center mb-10 pt-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Descubra como o <span className="text-[#01f7ff]">VeriSync</span>
            <br />
            protege a sua casa.
          </h1>
        </div>

        {/* Texto dentro da caixinha */}
        <div className="text-center mb-8 pt-8">
          <span className="inline-block bg-[#012c5f]/80 text-[#01f7ff] px-6 py-2 rounded-full text-sm font-medium shadow-md">
            ▶ Assista o vídeo abaixo para entender melhor
          </span>
        </div>

        {/* Video Placeholder */}
        <div className="mb-16">
          <div className="bg-gray-200 rounded-lg w-full max-w-2xl mx-auto aspect-[16/9] flex items-center justify-center relative">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-16 pt-16">

          {/* Passo 1 - Esquerda */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Passo <span className="text-[#01f7ff]">1</span>:
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div></div>
          </div>

          {/* Passo 2 - Direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div></div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Passo <span className="text-[#01f7ff]">2</span>:
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Passo 3 - Esquerda */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20  items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Passo <span className="text-[#01f7ff]">3</span>:
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div></div>
          </div>

          {/* Passo 4 - Direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20  items-start">
            <div></div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Passo <span className="text-[#01f7ff]">4</span>:
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 lg:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Logo</span>
          </div>
          <p className="text-gray-400 text-sm">Todos os direitos reservados © 2025.</p>
        </div>
      </footer>
    </div>
  )
}
