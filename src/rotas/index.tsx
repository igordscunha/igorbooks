import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import AreaLogada from "../paginas/AreaLogada"
import { Pedidos } from "../componentes/Pedidos"
import { MinhaConta } from "../componentes/MinhaConta"
import { SeusDados } from "../componentes/SeusDados"
import { Cupons } from "../componentes/Cupons"
import { Trocas } from "../componentes/Trocas"


const Rotas = () => {
 
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path='/minha-conta' element={<AreaLogada/>}>
          <Route path='/minha-conta' element={<MinhaConta/>}/>
          <Route path="pedidos" element={<Pedidos/>}/>
          <Route path='trocas' element={<Trocas/>}/>
          <Route path='cupons' element={<Cupons/>}/>
          <Route path='dados' element={<SeusDados/>}/>
        </Route>
      </Route>
    </Routes>)
}

export default Rotas