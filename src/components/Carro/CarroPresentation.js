import React from "react"
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'


const CarroPresentation = (props) => {
    var carro = props.carro
    var marca = props.marca

    return (
        <>
            <div class="row text-center" style={{ marginTop: "25px" }}>
                <div class="row slug-header">
                    <div class="col-lg-2 col-md-4 col-sm-4 logo"><img src={marca.path_img} /></div>
                    <div class="col-lg-5 col-md-4 com-sm-4 title">{marca.nome}</div>
                    <div class="col-lg-4 col-md-4 com-sm-4 content">
                        <div onClick={props.fnFavoritar}>< IoIosStarOutline style={{ fontSize: "30px" }} /></div>
                        <div>{carro.Modelo} ({carro.AnoModelo})</div>

                    </div>

                </div>
            </div>
            <div class="row text-center carro-presentation-container">
                <div class="carro-presentation-board">
                    <div class="valor">{carro.Valor}</div>
                    <div><b>Modelo:</b> {carro.Modelo} ({carro.Marca})</div>
                    <div><b>Ano:</b> {carro.AnoModelo}</div>
                    <div><b>Combustível:</b> {carro.Combustivel}</div>
                    <div><b>Código Fipe:</b> {carro.CodigoFipe}</div>
                    <div><b>Mês de Referência:</b> {carro.MesReferencia}</div>
                </div>
            </div>
        </>
    )
}

export default CarroPresentation