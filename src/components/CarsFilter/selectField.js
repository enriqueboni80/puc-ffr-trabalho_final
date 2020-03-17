import React from 'react'

const SelectField = (props) => {
    return (
        <select onChange={props.funcao}>
            <option>--------------</option>
            {props.array.map((objeto) => {
                return (
                    <option value={objeto.codigo}>{objeto.nome}</option>
                )
            })}
        </select>
    )
}

export default SelectField