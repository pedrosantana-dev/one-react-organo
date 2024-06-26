import './ListaSuspensa.css';

const ListaSuspensa = (props) => {    
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                <option></option>
                {props.itens.map(item => <option value={item.id} key={item.id}>{item.nome}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa;