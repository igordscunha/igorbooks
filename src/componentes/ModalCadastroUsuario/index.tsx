import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks'
import { useState } from 'react'
import imagemPrincipal from './assets/login.png'
import './ModalCadastroUsuario.css'
import http from '../../http'

interface ModalCadastroUsuarioProps {
    aberta: boolean
    aoFechar: () => void
}

const ModalCadastroUsuario = ({ aberta, aoFechar }: ModalCadastroUsuarioProps) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cep, setCep] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setSenhaConfirmada] = useState('')

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            nome,
            email,
            endereco,
            complemento,
            cep,
            senha,
        }

        http.post('public/registrar', usuario)
            .then(() => {
                alert('Cadastro realizado com sucesso!')
                setNome('')
                setEmail('')
                setEndereco('')
                setComplemento('')
                setCep('')
                setSenha('')
                setSenhaConfirmada('')
                aoFechar()
            })
            .catch(() => {
                alert('Ops! Alguma coisa deu errado...')
            })

    }

    return (<AbModal
        titulo="Cadastrar"
        aberta={aberta}
        aoFechar={aoFechar}
    >
        <div className='corpoModalCadastro'>
            <figure>
                <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado." />
            </figure>
            <form onSubmit={aoSubmeterFormulario}>
                <div className="input-cadastro">
                    <AbCampoTexto
                        value={nome}
                        label='Nome'
                        onChange={setNome}
                    />
                    <AbCampoTexto
                        value={email}
                        label='E-mail'
                        type='email'
                        onChange={setEmail}
                    />
                    <AbCampoTexto
                        value={endereco}
                        label='Endereço'
                        onChange={setEndereco}
                    />
                    <AbCampoTexto
                        value={complemento}
                        label='Complemento'
                        onChange={setComplemento}
                    />
                    <AbCampoTexto
                        value={cep}
                        label='CEP'
                        onChange={setCep}
                    />
                    <AbCampoTexto
                        value={senha}
                        label='Senha'
                        type='password'
                        onChange={setSenha}
                    />
                    <AbCampoTexto
                        value={senhaConfirmada}
                        label='Confirmar senha'
                        type='password'
                        onChange={setSenhaConfirmada}
                    />
                </div>
                <footer>
                    <AbBotao texto='Cadastrar' />
                </footer>
            </form>
        </div>
    </AbModal>)
}

export default ModalCadastroUsuario