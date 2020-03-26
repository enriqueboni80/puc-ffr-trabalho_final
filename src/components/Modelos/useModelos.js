import React, { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"

const useModelos = (idMarca, idModelo = null) => {

    const [modelos, setModelos] = useState([{}])

    const requestModelos = async () => {
        const result = await CarsServices.getModelos(idMarca)
        if (idModelo) {
            result.data.modelos.map((modelo) => {
                if (modelo.codigo == idModelo) {
                    setModelos(modelo)
                }
            })
        } else {
            setModelos(result.data.modelos)
        }
    }

    useEffect(() => {
        requestModelos();
    }, [])

    return modelos

}

export default useModelos