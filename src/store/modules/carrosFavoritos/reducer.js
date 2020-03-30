const carrosFavoritos = (state = [], action) => {
    switch (action.type) {
        case 'CARROS_FAVORITOS':
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
        default:
            return state
    }
}

export default carrosFavoritos