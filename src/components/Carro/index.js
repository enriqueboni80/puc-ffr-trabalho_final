import React, { useState, useEffect } from "react"
import useCarro from "./useCarro"
import useMarcas from "../Marcas/useMarcas"
import CarroPresentation from "./CarroPresentation"

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const idModelo = props.match.params.IdModelo
    const idAno = props.match.params.IdAno
    const carro = useCarro(idMarca, idModelo, idAno)
    const marca = useMarcas(null, carro.Marca)
    console.log(marca)

    return (
        <CarroPresentation carro={carro} />
    )
}

export default Index