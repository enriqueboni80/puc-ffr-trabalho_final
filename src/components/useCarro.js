import React, { useState, useEffect } from "react";
import CarsServices from "../services/CarsService"


const useCarro = () => {
  const [carro, setCarro] = useState()

  const requestCarro = async () => {
    const result = await CarsServices.getCarro(59, 5940, "2014-3")
    setCarro(result)
  }

  useEffect(() => {
    requestCarro();
  }, [])

  return carro

}

export default useCarro