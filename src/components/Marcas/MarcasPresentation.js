import React from "react"
import { Link } from "react-router-dom"
import "./marcas.css"

const MarcasPresentation = (props) => {
    var marcas = props.marcas
    return (
        <div className="marcas-container">
            <div class="title">PRINCIPAIS MARCAS</div>
            <div class="row">
                {marcas.map((marca) => {
                    if (marca.path_img) {
                        return (
                            <div class="marca-container">
                                <Link to={`/marcas/${marca.codigo}/modelos`}>
                                    <div className="marca-card">
                                        <img src={marca.path_img} />
                                        <p>{marca.nome}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                })}
            </div>
        </div>
    )
}

export default MarcasPresentation

