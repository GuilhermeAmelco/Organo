import Colaborador from '../Colaborador';
import './rank.css'

const Rank = (props) => {
    
    return (

       (props.jogadores.length > 0) && <section className='rank-box' style={{ backgroundColor: props.corSecundaria }}>
            
            <h3>{props.nome}</h3>
            <div className='border-title' style={{ borderColor: props.corPrimaria}}/>

            {props.jogadores.map( jogador => <Colaborador corDeJogador={props.corPrimaria} key={jogador.nome} nome={jogador.nome} estilo={jogador.rank} endereco={jogador.imagem}/>)}
        </section>
    )
}

export default Rank;