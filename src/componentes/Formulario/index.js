import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [estilo, setEstilo] = useState('');
    const [imagem, setImagem] = useState('');
    const [rank, setRank] = useState('');

    const RevisarFormulario = (evento) => {

        evento.preventDefault()

        props.aoJogadores({
            nome,
            estilo,
            imagem,
            rank
        })

        setNome('');
        setEstilo('');
        setImagem('');
        setRank('Bronze')
    }

    return (

        <section className='formulario'>
            <form onSubmit={RevisarFormulario}>
                <h2>Preencha os dados para criar o card de seu rank</h2>
                <CampoTexto 
                    inputObrigatorio={true} 
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    inputObrigatorio={true} 
                    label="Estilo de jogo" 
                    placeholder="Digite seu estilo de jogo"
                    valor={estilo}
                    aoAlterado={valor => setEstilo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    inputObrigatorio={true} 
                    label='Rank'
                    itens={props.rank} 
                    valor={rank}
                    aoAlterado={valor => setRank(valor)}
                />
                <Botao> 
                    
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;