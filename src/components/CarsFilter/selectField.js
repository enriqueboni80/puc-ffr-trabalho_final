import React from 'react'

const SelectField = (props) => {
    return (
        <div className="form-row">
            <div class="form-group col-md-4 offset-md-4">
                <select onChange={props.funcao} id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    {props.array.map((objeto) => {
                        return (
                            <option value={objeto.codigo}>{objeto.nome}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default SelectField

