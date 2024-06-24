import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

	const [times, setTimes] = useState([
        { nome: "Programação", corPrimaria: "#57c278", corSecundaria: "#d9f7d9" },
        { nome: "Front-End", corPrimaria: "#82CFFA", corSecundaria: "#E8F8FF" },
        { nome:"Data Science", corPrimaria: "#A6D157", corSecundaria: "#F0F8E2" },
        { nome: "Devops", corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
        { nome: "UX e Design", corPrimaria: "#db6ebf", corSecundaria: "#FAE9F5" },
        { nome: "Mobile", corPrimaria: "#ffba05", corSecundaria: "#fff5d9" },
        { nome: "Inovação e Gestão", corPrimaria: "#ff8a29", corSecundaria: "#FFEEDF" },
    ])

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
		},
		{
			nome: 'Amauri Jr',
			cargo: 'Full Stack Developer',
			imagem: 'https://randomuser.me/api/portraits/men/11.jpg',
			time: 'Front-End'
		},
		{
			nome: 'Gustavo Ferraz',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/1.jpg',
			time: 'UX e Design'
		},
		{
			nome: 'Peter Ferraz',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/12.jpg',
			time: 'Front-End'
		},
		{
			nome: 'Fred',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/51.jpg',
			time: 'Front-End'
		},
		{
			nome: 'Barbara',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/61.jpg',
			time: 'UX e Design'
		},
		{
			nome: 'Taina',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/11.jpg',
			time: 'Mobile'
		},
		{
			nome: 'Jaine',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/51.jpg',
			time: 'Mobile'
		},
		{
			nome: 'Patience',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/21.jpg',
			time: 'Mobile'
		},
		{
			nome: 'Gustavo Ferraz',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/31.jpg',
			time: 'Inovação e Gestão'
		},
		{
			nome: 'Galha',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/41.jpg',
			time: 'Inovação e Gestão'
		},
		{
			nome: 'Natasha',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/women/51.jpg',
			time: 'Inovação e Gestão'
		},
		{
			nome: 'Miguel',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
			time: 'Devops'
		},
		{
			nome: 'Walter',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/42.jpg',
			time: 'Devops'
		},
		{
			nome: 'Nicolas',
			cargo: 'Front-End Developer',
			imagem: 'https://randomuser.me/api/portraits/men/52.jpg',
			time: 'Devops'
		},
	])

	const aoNovoColaboradorAdicionado = (colaborador) => {
		debugger
		console.log(colaborador)
		setColaboradores([...colaboradores, colaborador])
	}

	function deletarColaborador(){
		console.log('deletar')
	}

	function mudarCorDoTime(cor, nome) {
		setTimes(times.map(time =>{
			if(time.nome === nome){
				time.corPrimaria = cor;
			}
			return time;
		}))
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
			aoDeletar={deletarColaborador}
			mudarCor={mudarCorDoTime}
			key={time.nome} />)}
			<Rodape />	
		</div>
	);
}

export default App;
