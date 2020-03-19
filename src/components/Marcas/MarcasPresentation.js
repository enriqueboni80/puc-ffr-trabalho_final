import React from "react"
import { Link } from "react-router-dom"
import "./marcas.css"

const MarcasPresentation = (props) => {
    var marcas = props.marcas
    return (
        <div className="marcas-container">
            <div class="row">
                {marcas.map((marca) => {
                    return (
                        <div class="col-sm-3 marca-container">
                            <Link to={`/marcas/${marca.codigo}/modelos`}><div className="marca-card">{marca.nome}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MarcasPresentation

