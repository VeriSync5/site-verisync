import { Header } from "../components/Header"
import RuanImg from "../imagem/Ruan.jpeg";
import LarissaImg from "../imagem/Larissa.jpeg";
import Logo from "../imagem/Logo.png"

export function QuemSomos() {
    return (
        <div className="min-h-screen bg-[#00040f] text-white">
            <Header />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto pt-50 px-6 md:px-0 py-16">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-10 md:mb-6">
                        Quem <span className="text-[#01f7ff]">Somos</span>?
                    </h1>
                    <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Somos um grupo de estudantes dedicados ao desenvolvimento deste protótipo, unindo criatividade e
                        conhecimento técnico para entregar uma solução funcional e inovadora.
                    </p>
                </div>

                {/* Team Members */}
                <div className="space-y-16 pt-16">

                    {/* Ruan - left */}
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
                        <div className="w-40 h-40 rounded-lg overflow-hidden">
                            <img src={RuanImg} alt="Ruan" className="object-cover w-full h-full" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-3xl font-bold mb-2">Olá, eu sou o <span className="text-[#01f7ff]">Ruan</span></h3>
                            <a href="https://instagram.com/theofficial_ruan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#01f7ff] transition-colors">@theofficial_ruan</a>
                        </div>
                    </div>

                    {/* Larissa - right */}
                    <div className="flex flex-col items-end gap-4 md:flex-row-reverse md:items-center md:gap-8">
                        <div className="w-40 h-40 rounded-lg overflow-hidden">
                            <img src={LarissaImg} alt="Larissa" className="object-cover w-full h-full" />
                        </div>
                        <div className="text-right">
                            <h3 className="text-3xl font-bold mb-2">Olá, eu sou a <span className="text-[#01f7ff]">Larissa</span></h3>
                            <a href="https://instagram.com/withluv_lari" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#01f7ff] transition-colors">@withluv_lari</a>
                        </div>
                    </div>

                    {/* Kauanny - left */}
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
                        <div className="w-40 h-40 bg-[#d9d9d9] rounded-lg flex-shrink-0"></div>
                        <div className="text-left">
                            <h3 className="text-3xl font-bold mb-2">Olá, eu sou a <span className="text-[#01f7ff]">Kauanny</span></h3>
                            <a href="https://instagram.com/kauannyaguirre" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#01f7ff] transition-colors">@kauannyaguirre</a>
                        </div>
                    </div>

                    {/* Nayara - right */}
                    <div className="flex flex-col items-end gap-4 md:flex-row-reverse md:items-center md:gap-8">
                        <div className="w-40 h-40 bg-[#d9d9d9] rounded-lg flex-shrink-0"></div>
                        <div className="text-right">
                            <h3 className="text-3xl font-bold mb-2">Olá, eu sou a <span className="text-[#01f7ff]">Nayara</span></h3>
                            <a href="https://instagram.com/nayx_008" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#01f7ff] transition-colors">@nayx_008</a>
                        </div>
                    </div>

                    {/* Vitor - left */}
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
                        <div className="w-40 h-40 bg-[#d9d9d9] rounded-lg flex-shrink-0"></div>
                        <div className="text-left">
                            <h3 className="text-3xl font-bold mb-2">Olá, eu sou o <span className="text-[#01f7ff]">Vitor</span></h3>
                        </div>
                    </div>

                </div>

                {/* Contact Section */}
                <div className="text-center mt-32 mb-16">
                    <h2 className="text-3xl font-bold mb-4">Fale com a gente:</h2>
                    <a href="https://forms.google.com/exemplo" className="text-gray-400 hover:text-[#01f7ff] transition-colors">
                        https://forms.google.com/exemplo
                    </a>
                </div>
            </main>

            {/* Footer */}
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
