import React, { useState, useEffect } from "react";
import CarsServices from "../services/CarsService"


const useAnosModelo= () => {
  const [anosModelo, setAnosModelo] = useState()

  const requestAnosModelo = async () => {
    const result = await CarsServices.getAnosModelo(59, 5940)
    setAnosModelo(result)
  }

  useEffect(() => {
    requestAnosModelo();
  }, [])

  return anosModelo

}

export default useAnosModelo