const marca = (state = [], action) => {
    switch (action.type) {
        case 'GUARDA_CARRO':
            /* var ehRepetido = false
            for (const carro of state) {
                if (carro.Marca === action.carro.Marca) {
                    ehRepetido = true;
                }
            }
            if (!ehRepetido) { */
                console.log(state)
                return [...state, action.carro]
           /*  } */
        default:
            return state
    }
}

export default marca