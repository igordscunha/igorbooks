import { Link, Outlet } from "react-router-dom"
import './arealogada.css'
import { useState, useEffect } from "react"
import http from "../../http"

const AreaLogada = () => {


    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        http.get('usuarios')
        .then(resposta => {
            setUsuario(resposta.data.tokenUsuario)
            sessionStorage.setItem('nome', resposta.data.tokenUsuario.nome)
            sessionStorage.setItem('email', resposta.data.tokenUsuario.email)
            sessionStorage.setItem('cep', resposta.data.tokenUsuario.cep)
            sessionStorage.setItem('endereco', resposta.data.tokenUsuario.endereco)
            sessionStorage.setItem('complemento', resposta.data.tokenUsuario.complemento)
        })
        .catch(erro => console.log(erro))        
    }, [])

    if (!usuario) {
        return <div className="aviso">Por favor, certifique-se de estar logado em sua conta.</div>
    }

    return (<>
        <h1 className="AreaLogada_título">Minha conta</h1>
        <section className="AreaLogada">
            <div className="menu">
                <ul className="navegacao">
                    <li>
                        <Link to="/minha-conta/pedidos">Pedidos</Link>
                    </li>
                    <li>
                        <Link to="/minha-conta/trocas">Trocas</Link>
                    </li>
                    <li>
                        <Link to="/minha-conta/cupons">Cupons</Link>
                    </li>
                    <li>
                        <Link to="/minha-conta/dados">Seus dados</Link>
                    </li>
                </ul>
            </div>
            <div className="conteudo">
                <Outlet />
            </div>
        </section>
    </>)
}

export default AreaLogada