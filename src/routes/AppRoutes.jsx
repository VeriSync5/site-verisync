import { Home } from "../pages/Home"
import { Instrucoes } from "../pages/Instrucoes"
import { QuemSomos } from "../pages/QuemSomos"
import { Produtos } from "../pages/Produtos"
import { Referencias } from "../pages/Referencias"
import { Jogo } from "../pages/Jogo"

import { Routes, Route } from "react-router"

export function AppRoutes(){
    return(
        <Routes>
            
            <Route path="/" index element={<Home />} />
            <Route path="/instruções" element={<Instrucoes />} />
            <Route path="/quemsomos" element={<QuemSomos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/referências" element={<Referencias />} />
            <Route path="/jogo" element={<Jogo/>} />
             
        </Routes>
    )
}