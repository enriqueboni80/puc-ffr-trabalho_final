import React, { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"

const useMarcas = () => {

    const [marcas, setMarcas] = useState([{}])

    const requestMarcas = async () => {
        const result = await CarsServices.getMarcas()
        var marcasComImagens = concatArrayImagens(result.data)
        setMarcas(marcasComImagens)
    }

    useEffect(() => {
        requestMarcas();
    }, [])

    return marcas
}

const concatArrayImagens = (arrayDeMarcas) => {
    const marcasImages = getMarcasImages()
    arrayDeMarcas.map((marca, index) => {
        marcasImages.forEach(imagens => {
            if (marca.codigo == imagens.codigo) {
                arrayDeMarcas[index] = { ...arrayDeMarcas[index], path_img: imagens.path_img }
            }
        });
    });
    console.log(arrayDeMarcas)
    return arrayDeMarcas
}

const getMarcasImages = () => {
    return [
        { codigo: "1", path_img: "https://www.carlogos.org/logo/Acura-logo.png" },
        { codigo: "2", path_img: "" },
        { codigo: "56", path_img: "https://www.carlogos.org/logo/Toyota-logo.png" },
        { codigo: "59", path_img: "https://www.carlogos.org/logo/Volkswagen-logo.png" },
        { codigo: "39", path_img: "https://www.carlogos.org/logo/Mercedes-Benz-logo.png" },
        { codigo: "32", path_img: "https://www.carlogos.org/logo/General-Motors-logo.png" },
        { codigo: "22", path_img: "https://www.carlogos.org/logo/Ford-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
        { codigo: "3", path_img: "https://www.carlogos.org/logo/Ferrari-logo.png" },
    ]
}

export default useMarcas