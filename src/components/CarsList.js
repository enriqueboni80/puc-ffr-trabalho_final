import React, { useState, useEffect } from "react";
/* import useMarcas from "./useMarcas"
import useModelos from "./useModelos"
import useAnosModelo from "./useAnosModelo"
import useCarro from "./useCarro" */

import CarsServices from "../services/CarsService"

const CarsList = () => {
  const [marcas, setMarcas] = useState([{}])
  const [idMarca, setIdMarca] = useState(1)
  const [modelos, setModelos] = useState([{}])
  const [anosModelo, setAnosModelo] = useState([{}])
  /* const [carro, setCarro] = useState() */

  const requestMarcas = async () => {
    const result = await CarsServices.getMarcas()
    setMarcas(result.data)
  }

  const requestModelos = async (idMarca) => {
    const result = await CarsServices.getModelos(idMarca)
    setModelos(result.data.modelos)
  }

  const requestAnosModelo = async (idModelo) => {
    const result = await CarsServices.getAnosModelo(idMarca, idModelo)
    console.log(result.data)
    setAnosModelo(result.data)
  }
  
  /* 
  const requestCarro = async () => {
    const result = await CarsServices.getCarro(59, 5940, "2014-3")
    setCarro(result)
  } */

  useEffect(() => {
    requestMarcas();
    requestModelos();
    requestAnosModelo();
   /*  requestCarro(); */
  }, [])


  const getModelos = (idMarca) => {
    setIdMarca(idMarca)
    requestModelos(idMarca)
  }

  const getAnosModelo = (idModelo) => {
    requestAnosModelo(idModelo)
  }

  return (
    <div>
      <select onChange = {(e) => getModelos(e.target.value)}>
        {marcas.map((marca) => {
          return (
            <option value={marca.codigo}>{marca.nome}</option>
          )
        })}
      </select>
      <select onChange = {(e) => getAnosModelo(e.target.value)}>
        {modelos.map((modelo) => {
          return (
            <option value={modelo.codigo}>{modelo.nome}</option>
          )
        })}
      </select>
      <select>
        {anosModelo.map((ano) => {
          return (
            <option value={ano.codigo}>{ano.nome}</option>
          )
        })}
      </select>
    </div>
  )
};


export default CarsList
