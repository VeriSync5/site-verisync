import { Header } from "../components/Header"
import Logo from "../imagem/Logo.png"
import LogoModoClaro from "../imagem/LogoModoClaro.png"

export function Instrucoes() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] dark:bg-[#00040f] text-[#0B1438] dark:text-white">
      <Header />
      {/* Main Content */}
      <main className="max-w-6xl mx-auto pt-24 sm:px-6 lg:px-8 py-12 ">

        {/* Title */}
        <div className="md:text-center mb-10 pt-24 md:pt-24 px-6 md:px-0">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">
            Descubra como o <span className="text-[#01f7ff]">VeriSync</span>
            <br />
            protege a sua casa.
          </h1>
        </div>


        {/* Texto dentro da caixinha */}
        <div className="text-center mb-8 mt-6 md:mt-8 pt-10">
          <span className="inline-block bg-[#012c5f]/80 text-[#01f7ff] px-6 py-2 rounded-full text-sm font-medium shadow-md">
            ▶ Assista o vídeo abaixo para entender melhor
          </span>
        </div>

        {/* Video Placeholder */}
        <div className="mb-16 px-4 md:px-0">
          <div className="bg-gray-200 rounded-lg w-full max-w-md md:max-w-2xl mx-auto aspect-[16/9] flex items-center justify-center relative">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] md:border-l-[10px] border-l-white border-t-[5px] md:border-t-[6px] border-t-transparent border-b-[5px] md:border-b-[6px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="pt-16 px-6 md:px-0 space-y-20 md:space-y-16">

          {/* Passo 1 - Esquerda */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20 items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 md:mb-6">
                <span className="text-[#0B1438] dark:text-white">Passo</span>
                <span className="text-[#01f7ff]"> 1</span>
                <span className="text-[#0B1438] dark:text-white">:</span>
              </h3>
              <p className="text-base text-[#0A0F24] dark:text-gray-300 leading-relaxed">
              Ao sair da residência, aproxime a TAG do leitor para ativar o sistema de segurança. Todos os sensores serão acionados automaticamente, e o indicador luminoso confirmará que o sistema está em funcionamento.
              </p>
            </div>
            <div></div>
          </div>

          {/* Passo 2 - Direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20 items-start">
            <div></div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 md:mb-6">
                <span className="text-[#0B1438] dark:text-white">Passo</span>
                <span className="text-[#01f7ff]"> 2</span>
                <span className="text-[#0B1438] dark:text-white">:</span>
              </h3>
              <p className="text-base text-[#0A0F24] dark:text-gray-300 leading-relaxed">
              Após a ativação, verifique o status dos sensores pelo aplicativo. Essa etapa garante que todos estejam operando corretamente e que o monitoramento do ambiente esteja ativo.
              </p>
            </div>
          </div>

          {/* Passo 3 - Esquerda */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20 items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 md:mb-6">
                <span className="text-[#0B1438] dark:text-white">Passo</span>
                <span className="text-[#01f7ff]"> 3</span>
                <span className="text-[#0B1438] dark:text-white">:</span>
              </h3>
              <p className="text-base  text-[#0A0F24] dark:text-gray-300 leading-relaxed">
              Ao retornar, aproxime novamente a TAG do leitor para desativar o sistema. O indicador luminoso mudará de estado, confirmando o encerramento da vigilância e permitindo o acesso seguro à residência.
              </p>
            </div>
            <div></div>
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
