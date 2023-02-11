import './colaborador.css'

const Colaborador = (props) => {

    console.log(props);
    return (

        <div className='colaborador' >

            <div className='cabecalho' style={{backgroundColor: props.corDeJogador}}>
                <img src={props.endereco} alt={props.nome}/>
            </div>

            <div className='footer'>
                <h4>{props.nome}</h4>
                <h5>{props.estilo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;