import React, { useState, useEffect } from "react"
import useCarro from "./useCarro"
import CarroPresentation from "./CarroPresentation"

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const idModelo = props.match.params.IdModelo
    const idAno = props.match.params.IdAno
    const carro = useCarro(idMarca, idModelo, idAno)
    return (
        <CarroPresentation carro={carro} />
    )
}

export default Index