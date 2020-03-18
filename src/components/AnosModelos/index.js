import React, { useState, useEffect } from "react"
import useAnosModelos from "./useAnosModelos"
import AnosModelosPresentation from "./AnosModelosPresentation"

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const idModelo = props.match.params.IdModelo
    const anosModelos = useAnosModelos(idMarca, idModelo)
    return (
        <AnosModelosPresentation anosModelos={anosModelos} idMarca={idMarca} idModelo={idModelo} />
    )
}

export default Index