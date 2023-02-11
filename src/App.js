import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rank from './componentes/Rank';
import RodapePrincipal from './componentes/Rodape';

function App() {

  const ranks = [

    {
      nome: 'Bronze',
      corPrimaria: '#EBB86B',
      corSecundaria: '#ECDBC3'
    },
    {
      nome: 'Prata',
      corPrimaria: '#8D8D8D',
      corSecundaria: '#B7B8BA'
    },
    {
      nome: 'Ouro',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Platina',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Diamante',
      corPrimaria: '#211CA6',
      corSecundaria: '#BEDEFF'
    },
    {
      nome: 'Champion',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Grand Champion',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Sonic Legend',
      corPrimaria: '#E8E8E8',
      corSecundaria: '#F5F5F5'
    }
  ]

  const [jogadores, setJogadores] = useState([]);

  const aoJogadorRegistrado = (jogador) => {

    setJogadores([...jogadores, jogador]);
  }

  return (

    <div className="App">
      <Banner />
      <Formulario rank={ranks.map(rank => rank.nome)} aoJogadores={jogador => aoJogadorRegistrado(jogador)}/>

      {ranks.map(rank => <Rank 
        key={rank.nome} 
        nome={rank.nome} 
        corPrimaria={rank.corPrimaria} 
        corSecundaria={rank.corSecundaria}  
        jogadores={jogadores.filter(jogador => jogador.rank === rank.nome)}
      />)}

      <RodapePrincipal />   
      </div>
  );
}

export default App;
