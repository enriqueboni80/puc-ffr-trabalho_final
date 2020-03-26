import React from "react"
import { Link } from "react-router-dom"

const ModelosPresentation = (props) => {
    var idMarca = props.idMarca
    var modelos = props.modelos
    return (
        <div class="row text-center" style={{ marginTop: "25px" }}>
            <table class="table table-striped table-bordered table-hover" style={{ border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Modelos</th>
                    </tr>
                </thead>
                <tbody>
                    {modelos.map((modelo, key) => {
                        let toUrl = `/marcas/${idMarca}/modelos/${modelo.codigo}/anos`
                        return (
                            <tr style={{cursor:"pointer"}} onClick={() => window.location.href = toUrl}>
                                <td>{key + 1}</td>
                                <td><Link to={toUrl}>{modelo.nome}</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ModelosPresentation