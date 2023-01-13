function Saudacao({ nome }) {
    function gerarSaudacao(usuario) {
        return `Olá ${usuario}, tudo bem?`
    }

    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao