import { combineReducers } from 'redux'

import favorites from './favorites/reducer'
import marca from './marca/reducer'

export default combineReducers ({
    favorites, 
    marca
})