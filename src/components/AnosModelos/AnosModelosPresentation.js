import React from "react"
import { Link } from "react-router-dom"

const AnosModelosPresentation = (props) => {
    var anosModelos = props.anosModelos
    var idMarca = props.idMarca
    var idModelo = props.idModelo
    return (
        <div>
            {anosModelos.map((anoModelo) => {
                return (
                    <article><Link to={`/marcas/${idMarca}/modelos/${idModelo}/anos/${anoModelo.codigo}`}>{anoModelo.nome}</Link></article>
                )
            })}
        </div>
    )
}

export default AnosModelosPresentation