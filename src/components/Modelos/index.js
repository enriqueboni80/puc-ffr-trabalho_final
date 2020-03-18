import React, { useState, useEffect } from "react"
import useModelos from "./useModelos"
import ShowModelos from "./showModelos"

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const modelos = useModelos(idMarca)
    return (
        <ShowModelos modelos={modelos} idMarca={idMarca} />
    )
}

export default Index