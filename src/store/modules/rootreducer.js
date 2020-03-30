import { combineReducers } from 'redux'

import favorites from './favorites/reducer'
import marca from './marca/reducer'
import carro from './carro/reducer'

export default combineReducers ({
    favorites, 
    marca,
    carro
})