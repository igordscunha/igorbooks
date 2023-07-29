import { AbBotao } from "ds-alurabooks"
import './trocas.css'
import { useEffect, useState } from "react"
import { IPedido } from "../../interfaces/IPedido"
import { Link } from "react-router-dom"
import http from "../../http"

export const Trocas = () => {

    const [pedidos, setPedidos] = useState<IPedido[]>([])

    useEffect(() => {
        http.get<IPedido[]>('pedidos')
            .then(resposta => setPedidos(resposta.data))
            .catch(erro => console.log(erro))
    }, [])

    return (
        <>
            <div className="conteudo-header"><h1>Trocas</h1></div>

            {pedidos.map(pedido => (
                <div className="troca" key={pedido.id}>
                    <ul>
                        <li>Pedido: <strong>{pedido.id}</strong></li>
                        <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                        <li>Valor total: <strong>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(pedido.total)}</strong></li>
                        <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>                        
                    </ul>
                    <Link to=''><AbBotao texto="Trocar" /></Link>
                </div>
            ))}
        </>
    )
}