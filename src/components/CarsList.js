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
  const [idModelo, setIdModelo] = useState()
  const [anos, setAnos] = useState([{}])
  const [idAno, setIdAno] = useState()
  const [carro, setCarro] = useState({})

  const requestMarcas = async () => {
    const result = await CarsServices.getMarcas()
    setMarcas(result.data)
  }

  const requestModelos = async (idMarca) => {
    const result = await CarsServices.getModelos(idMarca)
    setModelos(result.data.modelos)
  }

  const requestAnos = async (idModelo) => {
    const result = await CarsServices.getAnos(idMarca, idModelo)
    setAnos(result.data)
  }

  const requestCarro = async () => {
    const result = await CarsServices.getCarro(idMarca, idModelo, idAno)
    setCarro(result.data)
    console.log(carro)
  }

  useEffect(() => {
    requestMarcas();
    requestModelos();
    requestAnos();
    requestCarro();
  }, [])


  const getModelosDaMarca = (idMarca) => {
    setAnos([])
    setModelos([])
    setIdMarca(idMarca)
    requestModelos(idMarca)
  }

  const getAnosDosModelos = (idModelo) => {
    setIdModelo(idModelo)
    requestAnos(idModelo)
  }

  const getAno = (idAno) => {
    setIdAno(idAno)
  }

  const getCarro = (e) => {
    e.preventDefault()
    requestCarro()
  }


  return (
    <div>
      <form>
        <select onChange={(e) => getModelosDaMarca(e.target.value)}>
        <option>--------------</option>
          {marcas.map((marca) => {
            return (
              <option value={marca.codigo}>{marca.nome}</option>
            )
          })}
        </select>
        <select onChange={(e) => getAnosDosModelos(e.target.value)}>
        <option>--------------</option>
          {modelos.map((modelo) => {
            return (
              <option value={modelo.codigo}>{modelo.nome}</option>
            )
          })}
        </select>
        <select onChange={(e) => getAno(e.target.value)}>
        <option>--------------</option>
          {anos.map((ano) => {
            return (
              <option value={ano.codigo}>{ano.nome}</option>
            )
          })}
        </select>
        <button onClick = {(e) => getCarro(e)}>Procurar</button>
      </form>
    </div>
  )
};


export default CarsList
