import React from "react"
import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import "./marcas.css"

const MarcasPresentation = (props) => {
    var marcas = props.marcas
    return (
        <>
            <Banner />
            <div class="row text-center">
                {marcas.map((marca) => {
                    if (marca.path_img) {
                        return (
                            <div class="col-lg-3 col-md-6 mb-4">
                                <Link to={`/marcas/${marca.codigo}/modelos`}>
                                    <div class="card h-100">
                                        <img class="card-img-top" src={marca.path_img} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">{marca.nome}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default MarcasPresentation

