import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

	const times = [
        { nome: "Programação", corPrimaria: "#57c278", corSecundaria: "#d9f7d9" },
        { nome: "Front-End", corPrimaria: "#82CFFA", corSecundaria: "#E8F8FF" },
        { nome:"Data Science", corPrimaria: "#A6D157", corSecundaria: "#F0F8E2" },
        { nome: "Devops", corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
        { nome: "UX e Design", corPrimaria: "#db6ebf", corSecundaria: "#FAE9F5" },
        { nome: "Mobile", corPrimaria: "#ffba05", corSecundaria: "#fff5d9" },
        { nome: "Inovação e Gestão", corPrimaria: "#ff8a29", corSecundaria: "#FFEEDF" },
    ]

	const [colaboradores, setColaboradores] = useState([
		{
			nome: 'Pedro Santana',
			cargo: 'Back-End Developer',
			imagem: 'https://github.com/pedrosantana-dev.png',
			time: 'Programação'
		},
		{
			nome: 'Noble Majo',
			cargo: 'Full Stack Developer',
			imagem: 'https://github.com/NobleMajo.png',
			time: 'Programação'
		},
		{
			nome: 'Asaolu Elijah',
			cargo: 'Full Stack Developer',
			imagem: 'https://github.com/AsaoluElijah.png',
			time: 'Programação'
		}
	])

	const aoNovoColaboradorAdicionado = (colaborador) => {
		debugger
		console.log(colaborador)
		setColaboradores([...colaboradores, colaborador])
	}

	return (
		<div className="App">
			<Banner />	
			<Formulario times={times.map(item => item.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
			{times.map(time => <Time 
			nome={time.nome} 
			corPrimaria={time.corPrimaria} 
			corSecundaria={time.corSecundaria} 
			colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
			key={time.nome} />)}
			<Rodape />	
		</div>
	);
}

export default App;
