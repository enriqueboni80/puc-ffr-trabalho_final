import React, { useState, useEffect } from "react"
import useModelos from "./useModelos"
import useMarcas from "../Marcas/useMarcas"
import ModelosPresentation from "./ModelosPresentation"

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const marca = useMarcas(idMarca)

    const modelos = useModelos(idMarca)
    return (
        <ModelosPresentation modelos={modelos} idMarca={idMarca} marca={marca} />
    )
}

export default Index