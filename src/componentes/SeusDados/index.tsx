import './meusdados.css'
import { AbBotao } from "ds-alurabooks"

export const SeusDados = () => {

    return (<>
        <div>
            <h1 className='header'>Meus dados</h1>
            <div className='container'>
                <ul className="infos">
                    <li>
                        <strong>Nome: </strong>{sessionStorage.getItem('nome')}
                    </li>
                    <li>
                        <strong>Email: </strong>{sessionStorage.getItem('email')}
                    </li>
                    <li>
                        <strong>Endereço: </strong>{sessionStorage.getItem('endereco')}
                    </li>
                    <li>
                        <strong>Complemento: </strong>{sessionStorage.getItem('complemento')}
                    </li>
                    <li>
                        <strong>CEP: </strong>{sessionStorage.getItem('cep')}
                    </li>
                </ul>
                <AbBotao texto="Editar" />
            </div>
        </div>
    </>)
}