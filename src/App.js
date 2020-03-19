import React from "react";
import CarsFilter from "./components/CarsFilter";
import Marcas from "./components/Marcas"
import Modelos from "./components/Modelos"
import AnosModelos from "./components/AnosModelos"
import Carro from "./components/Carro"
import Header from "./components/Header"
import Home from "./components/Home"
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom"

import store from './store'

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Header / >
          <Route exact path="/" component={Marcas} />
          <Route exact path="/filtro" component={CarsFilter} />
          <Route exact path="/marcas/:IdMarca/modelos/" component={Modelos} />
          <Route exact path="/marcas/:IdMarca/modelos/:IdModelo/anos" component={AnosModelos} />
          <Route exact path="/marcas/:IdMarca/modelos/:IdModelo/anos/:IdAno" component={Carro} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
