import React from "react"
import { Link } from "react-router-dom"

const AnosModelosPresentation = (props) => {
    var anosModelos = props.anosModelos
    var idMarca = props.idMarca
    var idModelo = props.idModelo
    var marca = props.marca
    var modelo = props.modelo
    return (
        <div class="row text-center" style={{ marginTop: "25px" }}>
            <img src={marca.path_img} /><p>{marca.nome} => {modelo.nome}</p>
            <table class="table table-striped table-bordered table-hover" style={{ border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ano</th>
                    </tr>
                </thead>
                <tbody>
                    {anosModelos.map((anoModelo, key) => {
                        let toUrl = `/marcas/${idMarca}/modelos/${idModelo}/anos/${anoModelo.codigo}`
                        return (
                            <tr style={{ cursor: "pointer" }} onClick={() => window.location.href = toUrl}>
                                <td>{key + 1}</td>
                                <td><Link to={toUrl}>{anoModelo.nome}</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default AnosModelosPresentation