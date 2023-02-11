import "./Lista.css"

const ListaSuspensa = (props) => {

    var mensagemLabel = props.label

    return (

        <div className="lista-suspensa">

            <label>{mensagemLabel}</label>

            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.inputObrigatorio} value={props.valor}>

                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa