import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

	const [times, setTimes] = useState([
        { id: uuidv4(), nome: "Programação", cor: "#57c278" },
        { id: uuidv4(), nome: "Front-End", cor: "#82CFFA" },
        { id: uuidv4(), nome: "Data Science", cor: "#A6D157" },
        { id: uuidv4(), nome: "Devops", cor: "#E06B69" },
        { id: uuidv4(), nome: "UX e Design", cor: "#db6ebf" },
        { id: uuidv4(), nome: "Mobile", cor: "#ffba05" },
        { id: uuidv4(), nome: "Inovação e Gestão", cor: "#ff8a29" },
    ])

	const [colaboradores, setColaboradores] = useState([
		{
			id: uuidv4(),
			nome: 'Pedro Santana',
			cargo: 'Back-End Developer',
			imagem: 'https://github.com/pedrosantana-dev.png',
			timeId: times[0].id
		},
		{
			id: uuidv4(),
			nome: 'Noble Majo',
			cargo: 'Full Stack Developer',
			imagem: 'https://github.com/NobleMajo.png',
			timeId: times[0].id
		},
		{
			id: uuidv4(),
			nome: 'Asaolu Elijah',
			cargo: 'Full Stack Developer',
			imagem: 'https://github.com/AsaoluElijah.png',
			timeId: times[0].id
		},
		{
			id: uuidv4(),
			nome: 'Amauri Jr',
			cargo: 'Full Stack Developer',
			imagem: 'https://randomuser.me/api/portraits/men/11.jpg',
			timeId: times[1].id
		},
		{
			id: uuidv4(),
			nome: 'Gustavo Ferraz',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/1.jpg',
			timeId: times[1].id
		},
		{
			id: uuidv4(),
			nome: 'Peter Ferraz',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/12.jpg',
			timeId: times[1].id
		},
		{
			id: uuidv4(),
			nome: 'Fred',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/51.jpg',
			timeId: times[2].id
		},
		{
			id: uuidv4(),
			nome: 'Barbara',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/61.jpg',
			timeId: times[2].id
		},
		{
			id: uuidv4(),
			nome: 'Taina',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/11.jpg',
			timeId: times[2].id
		},
		{
			id: uuidv4(),
			nome: 'Jaine',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/51.jpg',
			timeId: times[3].id
		},
		{
			id: uuidv4(),
			nome: 'Patience',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/21.jpg',
			timeId: times[3].id
		},
		{
			id: uuidv4(),
			nome: 'Gustavo Ferraz',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/31.jpg',
			timeId: times[3].id
		},
		{
			id: uuidv4(),
			nome: 'Galha',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/41.jpg',
			timeId: times[4].id
		},
		{
			id: uuidv4(),
			nome: 'Natasha',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/51.jpg',
			timeId: times[4].id
		},
		{
			id: uuidv4(),
			nome: 'Miguel',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
			timeId: times[4].id
		},
		{
			id: uuidv4(),
			nome: 'Walter',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/42.jpg',
			timeId: times[5].id
		},
		{
			id: uuidv4(),
			nome: 'Nicolas',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/52.jpg',
			timeId: times[5].id
		},
		{
			id: uuidv4(),
			nome: 'Natasha',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/51.jpg',
			timeId: times[5].id
		},
		{
			id: uuidv4(),
			nome: 'Fred',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/51.jpg',
			timeId: times[6].id
		},
		{
			id: uuidv4(),
			nome: 'Barbara',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/61.jpg',
			timeId: times[6].id
		},
		{
			id: uuidv4(),
			nome: 'Taina',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/11.jpg',
			timeId: times[6].id
		},
	])

	const aoNovoColaboradorAdicionado = (colaborador) => {
		// debugger
		console.log(colaborador)
		setColaboradores([...colaboradores, colaborador])
	}

	function deletarColaborador(id){
		setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id))
	}

	function mudarCorDoTime(cor, id) {
		setTimes(times.map(time =>{
			if(time.id === id){
				time.cor = cor;
			}
			return time;
		}))
	}

	return (
		<div className="App">
			<Banner />	
			<Formulario times={times.map(item => ({id: item.id, nome: item.nome }))} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
			{times.map(time => <Time 
			id={time.id}
			nome={time.nome} 
			cor={time.cor} 
			colaboradores={colaboradores.filter(colaborador => colaborador.timeId === time.id)}
			aoDeletar={deletarColaborador}
			mudarCor={mudarCorDoTime}
			key={time.id} />)}
			<Rodape />	
		</div>
	);
}

export default App;
