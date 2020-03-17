import React from 'react'

const SelectForm = (props) => {
    return (
        <form>
            <select onChange={props.getModelosDaMarca}>
                <option>--------------</option>
                {props.marcas.map((marca) => {
                    return (
                        <option value={marca.codigo}>{marca.nome}</option>
                    )
                })}
            </select>
            <select onChange={props.getAnosDosModelos}>
                <option>--------------</option>
                {props.modelos.map((modelo) => {
                    return (
                        <option value={modelo.codigo}>{modelo.nome}</option>
                    )
                })}
            </select>
            <select onChange={props.getAno}>
                <option>--------------</option>
                {props.anos.map((ano) => {
                    return (
                        <option value={ano.codigo}>{ano.nome}</option>
                    )
                })}
            </select>
            <button onClick={props.getCarro}>Procurar</button>
        </form>

    )
}

export default SelectForm