import React, { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"

const useMarcas = () => {

    const [marcas, setMarcas] = useState([{}])

    /* const requestMarcas = async () => {
        const result = await CarsServices.getMarcas()
        setMarcas(result.data)
    } */

    const marcasImages = [
        { id: "1", path: "https://www.carlogos.org/logo/Ferrari-logo.png" }
    ]

    const requestMarcas = async () => {
        var arraySemImagens = []
        const result = await CarsServices.getMarcas()
        arraySemImagens = result.data
        var arrayComimagens = []
        arraySemImagens.map((marca, index) => {
            marcasImages.forEach(imagens => {
                if (marca.codigo == imagens.id) {
                    arrayComimagens[index] = { ...arraySemImagens[index], path: "wwww.terra.com.br" }
                } else {
                    arrayComimagens[index] = arraySemImagens[index]
                }
            });
        });
        setMarcas(arrayComimagens)
    }


    useEffect(() => {
        requestMarcas();
    }, [])





    /* var arrayComimagens = []
    marcas.map((marca, index) => {
        marcasImages.forEach(imagens => {
            if (marca.codigo == imagens.id) {
                arrayComimagens[index] = { ...marcas[index], path: "wwww.terra.com.br" }
            } else {
                arrayComimagens[index] = marcas[index]
            }
        });
    }); */
    /* console.log(arrayComimagens) */



    /* var arrayComimagens = []
    marcas.map((marca, index) => {
        if(marca.codigo == 2){
            arrayComimagens[index] = {...marcas[index], path:"wwww.terra.com.br"}
        }else{
            arrayComimagens[index] = marcas[index]
        }
    });
    console.log(arrayComimagens) */
    console.log(marcas)
    return marcas

}

export default useMarcas