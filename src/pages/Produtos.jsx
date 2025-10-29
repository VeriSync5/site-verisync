import { Header } from "../components/Header"
import Logo from "../imagem/Logo.png"
import LogoModoClaro from "../imagem/LogoModoClaro.png"

import Esp32Cam from "../imagem/esp32-cam.png"
import Esp32 from "../imagem/esp.jpg"
import Sensor_de_gás from "../imagem/sensor-de-gas.jpg"
import lcd from "../imagem/LCD.webp"
import usb from "../imagem/cabo_usb_micro.webp"
import tag from "../imagem/Kit_RFID.png"
import led from "../imagem/led.webp"
import buzzer from "../imagem/buzzer.webp"
import fi0s from "../imagem/fi0s.webp"
import pr0t from "../imagem/pr0t0b0ard.webp"
import resist0r from "../imagem/resist0r.webp"
import f0nte from "../imagem/f0nte.jpg"
import ajustavel from "../imagem/ajustavel.webp"
import sens0r from "../imagem/sens0r.webp"
import c0nvers0r from "../imagem/c0nvers0r.webp"
import pla from "../imagem/pla.webp"
import mp3 from "../imagem/mp3.jpg"
import alt0 from "../imagem/alt0 falante.jpg"
import i2C from "../imagem/i2C.webp"
import verisync from "../imagem/verisync.jpg"

export function Produtos() {
    const products = [
        { name: "ESP32-CAM", price: "R$ 99,90", image: Esp32Cam},
        { name: "ESP32", price: "R$ 49,90", image: Esp32 },
        { name: "Sensor de Gás MQ-2", price: "R$ 19,90", image: Sensor_de_gás },
        { name: "LCD 16X2", price: "R$ 16,90", image: lcd},
        { name: "Cabo USB Micro", price: "R$ 9,90", image: usb},
        { name: "Kit RFID Mfrc522", price: "R$ 13,50", image: tag},
        { name: "LED", price: "R$ 8,00", image: led },
        { name: "Módulo Buzzer Ativo 5v ", price: "R$ 5,90", image: buzzer },
        { name: "Fios", price: "R$ 23,70", image: fi0s },
        { name: "Protoboard", price: "R$ 17,80", image: pr0t},
        { name: "Resistores (220Ω e 10kΩ)", price: "R$ 0,90", image: resist0r},
        { name: "Fonte 12V 1A Bivolt", price: "R$ 18,90", image: f0nte },
        { name: "Fonte Ajustável para Protoboard", price: "R$ 10,90", image: ajustavel },
        { name: "Sensor de Presença PIR - HC-SR501", price: "R$ 8,90", image: sens0r },
        { name: "Módulo Conversor USB para RS232 TTL - FTDI FT232RL", price: "R$ 20,90", image: c0nvers0r },
        { name: "Filamento PLA Voolt3D 1.75mm 1kg - Branco Dental", price: "R$ 89,00", image: pla },
        { name: "Módulo MP3 - DFPlayer Mini", price: "R$ 26,00", image: mp3 },
        { name: "Mini Alto-Falante - 0.5W 8Ω", price: "R$ 7,80", image: alt0 },
        { name: "Módulo I2C para Display LCD", price: "R$ 6,50", image: i2C }

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
    bg-[#d9d9d9] rounded-2xl w-52 h-52 mx-auto mb-4
    transform transition duration-300 
    hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30
    overflow-hidden
  "
>
  {product.image && (
    <img
      src={product.image}
      alt={product.name}
      className="object-cover w-full h-full"
    />
  )}
</div>


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
        className="
            bg-[#d9d9d9] rounded-2xl w-72 h-72 mx-auto mb-4
            transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40
            overflow-hidden relative
        "
    >
        <img
            src={verisync}
            alt="Projeto Finalizado"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
    </div>

    {/* Total alinhado à esquerda */}
    <div className="w-72 mx-auto text-left">
        <h3 className="text-[#0B1438] dark:text-white font-medium text-2xl mb-1">Total</h3>
        <p className="text-[#01f7ff] font-bold text-2xl">R$ 908,08</p>
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