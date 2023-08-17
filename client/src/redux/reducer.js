import {
    VERIFICAR_USER,
    LIMPIAR_USER
} from './actions'

const initialState = {
    user:{}
}

const reducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case VERIFICAR_USER:
            return {
                ...state,
                user:payload
            }
        case LIMPIAR_USER:
            return {
                ...state,
                user:{}
            }
        default:
            return {state}
    }
}
export default reducer