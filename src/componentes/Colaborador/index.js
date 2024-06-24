import { AiFillCloseCircle } from "react-icons/ai";
import './Colaborador.css'


const Colaborador = ({imagem, nome, cargo, corPrimaria, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={20} className='deletar' onClick={aoDeletar} />
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