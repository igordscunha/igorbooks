import { AbBotao, AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import './cupons.css'

export const Cupons = () => {

    const [mostrarMensagem, setMostrarMensagem] = useState(false)
    const [cupom, setCupom] = useState('')

    const mensagem = (event: React.FormEvent<HTMLFormElement>) => {      
        event.preventDefault()  
        setMostrarMensagem(true)
        setCupom('')
    }


    return (
        <form onSubmit={mensagem}>
            <label>Digite seu cupom:</label>
            <AbCampoTexto placeholder={'Digite aqui seu cupom...'} type={'text'} value={cupom} onChange={setCupom} />
            <AbBotao texto="Aplicar" />


            {mostrarMensagem && (
                <div>
                    <p><strong>Cupom Aplicado!</strong></p>
                    <p>O desconto de 5% e frete grátis será aplicado já no seu próximo pedido!</p>
                </div>)}
        </form>

    )
}