import { AbBotao } from "ds-alurabooks"
import './pedidos.css'
import { useEffect, useState } from "react"
import { IPedido } from "../../interfaces/IPedido"
import { Link } from "react-router-dom"
import http from "../../http"

export const Pedidos = () => {

    const [pedidos, setPedidos] = useState<IPedido[]>([])

    useEffect(() => {

        http.get<IPedido[]>('pedidos')
            .then(resposta => setPedidos(resposta.data))
            .catch(erro => console.log(erro))
    }, [])

    // const excluir = (pedido: IPedido) => {

    //     const token = sessionStorage.getItem('token')
    //     http.delete<IPedido[]>('pedidos/' + pedido.id, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then(() => {
    //         setPedidos(pedidos.filter(p => p.id !== pedido.id))
    //     }).catch((erro) => {
    //         console.log(erro)
    //     })
    // }

    return (<>
        <div className="conteudo-header"><h1>Pedidos</h1></div>

        {pedidos.map(pedido => (
            <div className="pedido" key={pedido.id}>
                <ul>
                    <li>Pedido: <strong>{pedido.id}</strong></li>
                    <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                    <li>Valor total: <strong>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(pedido.total)}</strong></li>
                    <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                    {/* <li><button onClick={() => excluir(pedido)}>Excluir</button></li> */}
                </ul>
                <Link to=''><AbBotao texto="Detalhes" /></Link>
            </div>
        ))}
    </>)
}