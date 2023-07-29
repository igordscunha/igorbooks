import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import imagemPrincipal from '../ModalCadastroUsuario/assets/login.png'
import { useState } from "react"
import http from "../../http"
import './modallogin.css'
import { useNavigate } from "react-router-dom"

interface ModalLoginUsuarioProps {
    aberta: boolean
    aoFechar: () => void
    aoEfetuarLogin: () => void
}

const ModalLoginUsuario = ({ aberta, aoFechar }: ModalLoginUsuarioProps) => {

    let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            email,
            senha,
        }

        http.post('public/login', usuario)
            .then(resposta => {
                sessionStorage.setItem('token', resposta.data.access_token)
                setEmail('')
                setSenha('')
                aoFechar()
            })
            .catch(erro => {
                if (erro?.response?.data?.message) {
                    alert(erro.response.data.message)
                }
                else {
                    alert('Ops! Alguma coisa deu errado! Por favor entre em contato.')
                }
            })

        setTimeout(() => {
            navigate('minha-conta')
        }, 350)

        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    return (<AbModal titulo="Login" aberta={aberta} aoFechar={aoFechar}>

        <div className='corpoModalCadastro'>
            <figure>
                <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado." />
            </figure>
            <form onSubmit={aoSubmeterFormulario}>

                <div className="input-login">
                    <AbCampoTexto
                        value={email}
                        label='E-mail'
                        type='email'
                        onChange={setEmail}
                    />

                    <AbCampoTexto
                        value={senha}
                        label='Senha'
                        type='password'
                        onChange={setSenha}
                    />
                </div>

                <footer>
                    <AbBotao texto='Fazer Login' />
                </footer>
            </form>
        </div>

    </AbModal>)
}

export default ModalLoginUsuario