export const MinhaConta = () => {
    return (<>
        <div>
            <h2>Olá, {sessionStorage.getItem('nome')}</h2>
            <p>{`Seja bem vindo(a).`} <br/> Acesse o painel ao lado para saber mais informações sobre sua conta. </p>
            <p>Qualquer dúvida entre em contato.</p>
        </div>
    </>)
}