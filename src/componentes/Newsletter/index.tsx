import { AbBotao, AbCampoTexto } from 'ds-alurabooks'
import { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
    const [email, setEmail] = useState('')
    return (<section className='Newsletter'>
        <div className='container-news'>
            <h6>Fique por dentro das novidades!</h6>
            <p>Atualizações de e-books, novos livros, promoções e outros.</p>
            <form>
                <AbCampoTexto
                    darkmode={false}
                    value={email}
                    onChange={setEmail}
                    placeholder="Cadastre seu e-mail"
                    placeholderAlign='center'
                />
                <div className='botao'><AbBotao texto='Cadastrar' /></div>
            </form>
        </div>
    </section>)
}

export default Newsletter