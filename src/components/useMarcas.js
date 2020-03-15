import React, { useState, useEffect } from "react";
import CarsServices from "../services/CarsService"


const useMarcas = () => {
  const [marcas, setMarcas] = useState([{}])

  const requestMarcas = async () => {
    const result = await CarsServices.getMarcas()
    setMarcas(result.data)
  }

  useEffect(() => {
    requestMarcas();
  }, [])

  return marcas

}

export default useMarcas