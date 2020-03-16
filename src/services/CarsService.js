import axios from "axios";

class CarsService {

  //Manual da API - https://deividfortuna.github.io/fipe/

  static _withBaseUrl(path = "/marcas") {
    return `https://parallelum.com.br/fipe/api/v1/carros/${path}`;
  }

  static getMarcas() {
    return axios(CarsService._withBaseUrl("marcas"));
  }

  static getModelos(idMarca = 1){
    return axios(CarsService._withBaseUrl(`marcas/${idMarca}/modelos`));
  }

  static getAnos(idMarca = 59, idModelo = 5940){
    return axios(CarsService._withBaseUrl(`marcas/${idMarca}/modelos/${idModelo}/anos`));
  }

  static getCarro(idMarca, idModelo, idAno) {
    return axios(CarsService._withBaseUrl(`marcas/${idMarca}/modelos/${idModelo}/anos/${idAno}`));
  }

}

export default CarsService
