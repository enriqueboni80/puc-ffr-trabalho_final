const carrosFavoritos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARROS_FAVORITOS':
            var ehRepetido = false
            for (const carro of state) {
                if (carro.Marca === action.carro.Marca) {
                    ehRepetido = true;
                }
            }
            if (!ehRepetido) {
                console.log(state)
                return [...state, action.carro]
            }
        case 'DEL_CARROS_FAVORITOS':
            return state.filter((carro) => carro.Marca !== action.carro.Marca)
        default:
            return state
    }
}

export default carrosFavoritos