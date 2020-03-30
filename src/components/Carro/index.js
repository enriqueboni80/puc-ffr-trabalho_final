import React, { useState, useEffect } from "react"
import useCarro from "./useCarro"
import useMarcas from "../Marcas/useMarcas"
import CarroPresentation from "./CarroPresentation"
import { useDispatch } from 'react-redux'

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const idModelo = props.match.params.IdModelo
    const idAno = props.match.params.IdAno
    const carro = useCarro(idMarca, idModelo, idAno)
    const marca = useMarcas(idMarca)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const favoritarCarro = (e, carro) => {
        e.preventDefault()
        dispatch({
            type: 'CARROS_FAVORITOS',
            carro
        })
    }

    
    const verificaSeCarregouArray = () => {
        if (!(Array.isArray(marca) && Array.isArray(carro))) {
            setLoading(true)
        }
    }

    useEffect(() => {
        verificaSeCarregouArray();
    }, [verificaSeCarregouArray])

    return (
        <CarroPresentation carro={carro} marca={marca} loading={loading} fnFavoritar={(e) => favoritarCarro(e, carro)} />
    )
}

export default Index