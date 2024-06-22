import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria, color: props.corPrimaria}
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome}
                    corDeFundo={props.corPrimaria} 
                    corPrimaria={props.corPrimaria} 
                    corSecundaria={props.corSecundaria}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} />)}
            </div>
        </section> : ''
    )
}

export default Time;