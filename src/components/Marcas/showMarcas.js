import React from "react"
import { Link } from "react-router-dom"

const ShowMarcas = (props) => {
    var marcas = props.marcas
    return (
        <div>
            {marcas.map((marca) => {
                return (
                    <article><Link to={`/marcas/${marca.codigo}/modelos`}>{marca.nome}</Link></article>
                )
            })}
        </div>
    )
}

export default ShowMarcas