import {
    VERIFICAR_USER,
    LIMPIAR_USER,
    CREAR_USUARIO,
    BUSCAR_MEMORIA
} from './actions'

const initialState = {
    user:{},
    busqueda:[]
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
        case CREAR_USUARIO:
            return{state}
        case BUSCAR_MEMORIA:
            return{
                ...state,
                busqueda:payload
            }
        default:
            return {state}
    }
}
export default reducer