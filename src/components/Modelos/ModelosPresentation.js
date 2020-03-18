import React from "react"
import { Link } from "react-router-dom"

const ModelosPresentation = (props) => {
    var idMarca = props.idMarca
    var modelos = props.modelos
    return (
        <div>
            {modelos.map((modelo) => {
                return (
                    <article><Link to={`/marcas/${idMarca}/modelos/${modelo.codigo}/anos`}>{modelo.nome}</Link></article>
                )
            })}
        </div>
    )
}

export default ModelosPresentation