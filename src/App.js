import React from "react";
import CarsFilter from "./components/CarsFilter";
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom"

import store from './store'

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={CarsFilter} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
