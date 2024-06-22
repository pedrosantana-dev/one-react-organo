import './Colaborador.css'

const Colaborador = ({imagem, nome, cargo, corPrimaria, corSecundaria}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img src={imagem} alt='Imagem do colaborador' />
            </div>
            <div className='rodape'>
                <h4 style={{color: corPrimaria}}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador