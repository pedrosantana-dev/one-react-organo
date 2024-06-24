import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = {backgroundColor: hexToRgba(props.cor, '0.3'), color: props.cor}
    return (
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <input type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.cor} />
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome}
                    corPrimaria={props.cor} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    aoDeletar={props.aoDeletar} />
                )}
            </div>
        </section>
    )
}

export default Time;