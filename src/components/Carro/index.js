import React, { useState, useEffect } from "react"
import useCarro from "./useCarro"
import useMarcas from "../Marcas/useMarcas"
import CarroPresentation from "./CarroPresentation"
import { useDispatch, useSelector } from 'react-redux'
import carrosFavoritos from "../../store/modules/carrosFavoritos/reducer"

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const idModelo = props.match.params.IdModelo
    const idAno = props.match.params.IdAno
    const carro = useCarro(idMarca, idModelo, idAno)
    const marca = useMarcas(idMarca)
    const carrosfavoritos = useSelector(state => state.carrosFavoritos)
    const [loading, setLoading] = useState(false)


    const dispatch = useDispatch();
    const favoritarCarro = (e, carro) => {
        e.preventDefault()
        dispatch({
            type: 'CARROS_FAVORITOS',
            carro
        })
    }

    const checarFavorito = (carro) => {
        var exist = false
        {
            carrosfavoritos.map((carroFavorito) => {
                if (carro.Marca === carroFavorito.Marca) {
                  exist = true
                }
            })
        }
        return exist
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
        <CarroPresentation carro={carro} marca={marca} loading={loading} fnFavoritar={(e) => favoritarCarro(e, carro)} checarFavorito={checarFavorito} />
    )
}

export default Index