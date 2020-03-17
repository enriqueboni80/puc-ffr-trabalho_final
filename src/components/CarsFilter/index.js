import React, { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"
import SelectField from "./selectField"
import ShowCar from "./showCar"

const Index = () => {
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
  }

  useEffect(() => {
    requestMarcas();
    requestModelos();
    requestAnos();
    requestCarro();
  }, [])

  const getModelosDaMarca = (idMarca) => {
    setModelos([])
    setAnos([])
    setIdMarca(idMarca)
    requestModelos(idMarca)
  }

  const getAnosDosModelos = (idModelo) => {
    setAnos([])
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
        <SelectField funcao={(e) => getModelosDaMarca(e.target.value)} array={marcas} />
        <SelectField funcao={(e) => getAnosDosModelos(e.target.value)} array={modelos} />
        <SelectField funcao={(e) => getAno(e.target.value)} array={anos} />
        <button onClick={(e) => getCarro(e)}>Procurar</button>
      </form>
      <ShowCar carro={carro} />
    </div>
  )
};

export default Index
