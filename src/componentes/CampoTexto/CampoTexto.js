import './CampoTexto.css'

const CampoTexto = (props) => {

    const inputMudando = function(evento) {

        props.aoAlterado(evento.target.value)
    }

    return (

        <div className='campo-texto'>

            <label>{props.label}</label>
            
            <input value={props.valor} onChange={inputMudando} required={props.inputObrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;