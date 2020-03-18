import React, { useState, useEffect } from "react"
import useModelos from "./useModelos"
import ModelosPresentation from "./ModelosPresentation"

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const modelos = useModelos(idMarca)
    return (
        <ModelosPresentation modelos={modelos} idMarca={idMarca} />
    )
}

export default Index