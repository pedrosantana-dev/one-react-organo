import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = (props) => {
    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ]
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" obrigatorio={true} valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" obrigatorio={true} valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" obrigatorio={false} valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa label="Time" itens={times} obrigatorio={true} aoAlterado={valor => setTime(valor)} valor={time} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}
export default Formulario