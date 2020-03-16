import React from "react"

const ShowCar = (props) => {
    var carro = props.carro
    console.log(carro)
    return (
        <div>
            {carro.Marca}<br />
            {carro.Modelo}<br />
            {carro.AnoModelo}<br />
            {carro.Combustivel}<br />
            {carro.CodigoFipe}<br />
            {carro.Valor}<br />
        </div>
    )
}

export default ShowCar