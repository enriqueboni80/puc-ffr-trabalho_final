import React, { useState, useEffect } from "react";
import CarsServices from "../services/CarsService"


const useModelos= () => {
  const [modelos, setModelos] = useState()

  const requestModelos = async () => {
    const result = await CarsServices.getModelos(59)
    setModelos(result)
  }

  useEffect(() => {
    requestModelos();
  }, [])

  return modelos

}

export default useModelos