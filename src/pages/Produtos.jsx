import { Header } from "../components/Header"
import Logo from "../imagem/Logo.png"
import LogoModoClaro from "../imagem/LogoModoClaro.png"

export function Produtos() {
    const products = [
        { name: "Nome Produto", price: "R$ 35,00" },
        { name: "Nome Produto", price: "R$ 35,00" },
        { name: "Nome Produto", price: "R$ 35,00" },
        { name: "Nome Produto", price: "R$ 35,00" },
        { name: "Nome Produto", price: "R$ 35,00" },
        { name: "Nome Produto", price: "R$ 35,00" },
        { name: "Nome Produto", price: "R$ 35,00" },
        { name: "Nome Produto", price: "R$ 35,00" },
        { name: "Nome Produto", price: "R$ 35,00" },
    ]

    return (
        <div className="min-h-screen bg-[#EFEFEF] dark:bg-[#00040f] text-[#0B1438] dark:text-white">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="px-6 py-16 lg:px-12 lg:py-24 pt-24 lg:pt-30">
                {/* Products Section */}
                <div className="max-w-6xl mx-auto pt-20">
                    <h1 className="text-5xl font-bold text-center mb-12">Produtos</h1>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 pt-8">
                        {products.map((product, index) => (
                            <div key={index} className="text-center">
                                {/* 🔹 Quadrado centralizado */}
                                <div
                                    className="
                                        cursor-pointer bg-[#d9d9d9] rounded-2xl w-50 h-50 mx-auto mb-4
                                        transform transition duration-300 
                                        hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30
                                    "
                                ></div>

                                {/* Nome e preço alinhados à esquerda */}
                                <div className="w-48 mx-auto text-left">
                                    <h3 className="text-[#0B1438] dark:text-white font-semibold text-base mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-[#01f7ff] font-bold text-base">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Projeto Finalizado Section */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-12 pt-16">
                            Projeto <span className="block md:inline text-[#01f7ff]">Finalizado</span>
                        </h2>

                        <div className="inline-block">
                            {/* 🔹 Quadrado maior */}
                            <div
                                className=" bg-[#d9d9d9] cursor-pointer rounded-2xl w-72 h-72 mx-auto mb-4 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
                            ></div>

                            {/* Total alinhado à esquerda */}
                            <div className="w-72 mx-auto text-left">
                                <h3 className="text-[#0B1438] dark:text-white font-medium text-2xl mb-1">Total</h3>
                                <p className="text-[#01f7ff] font-bold text-2xl">R$ 1.000,00</p>
                            </div>
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
