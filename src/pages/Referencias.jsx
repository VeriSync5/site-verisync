import { Header } from "../components/Header"
import Logo from "../imagem/Logo.png"

export function Referencias() {
    return (

        <div className="min-h-screen bg-[#00040f] text-white">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-8 py-16 pt-45">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-16">Referências</h1>

                    {/* Articles Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16 pt-16">
                        {/* Artigo 1 */}
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Artigo <span className="text-[#01f7ff]">1</span>:
                            </h2>
                            <a href="www.artigocientifico.com.br" className="text-white text-lg hover:text-[#01f7ff]">www.artigocientifico.com.br</a>

                        </div>

                        {/* Artigo 2 */}
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Artigo <span className="text-[#01f7ff]">2</span>:
                            </h2>
                            <a href="www.artigocientifico.com.br" className="text-white text-lg hover:text-[#01f7ff]">www.artigocientifico.com.br</a>
                        </div>

                        {/* Artigo 3 */}
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Artigo <span className="text-[#01f7ff]">3</span>:
                            </h2>
                            <a href="www.artigocientifico.com.br" className="text-white text-lg hover:text-[#01f7ff]">www.artigocientifico.com.br</a>
                        </div>

                        {/* Artigo 4 */}
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Artigo <span className="text-[#01f7ff]">4</span>:
                            </h2>
                            <a href="www.artigocientifico.com.br" className="text-white text-lg hover:text-[#01f7ff]">www.artigocientifico.com.br</a>
                        </div>
                    </div>

                    {/* Artigo 5 - Centered */}
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Artigo <span className="text-[#01f7ff]">5</span>:
                        </h2>
                        <a href="www.artigocientifico.com.br" className="text-white text-lg hover:text-[#01f7ff]">www.artigocientifico.com.br</a>
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

