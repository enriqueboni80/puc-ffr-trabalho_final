import React, { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"

const useModelos = (idMarca) => {

    const [modelos, setModelos] = useState([{}])

    const requestModelos = async () => {
        const result = await CarsServices.getModelos(idMarca)
        setModelos(result.data.modelos)
    }

    useEffect(() => {
        requestModelos();
    }, [])

    return modelos

}

export default useModelos