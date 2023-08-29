import {
    VERIFICAR_USER,
    LIMPIAR_USER,
    CREAR_USUARIO,
    BUSCAR_MEMORIA,
    VACIAR_BUSQUEDA,
    ALL_USERS
} from './actions'

const initialState = {
    user:{},
    busqueda:[],
    error:'',
    allUsers:[]
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
            return{...state}
        case BUSCAR_MEMORIA:
            return{
                ...state,
                busqueda:payload,
                error:''
            }
        case VACIAR_BUSQUEDA:
            return {
                ...state,
                busqueda:[],
                error:payload
            }
        case ALL_USERS:
            return{
                ...state,
                allUsers:payload
            }
        default:
            return {...state}
    }
}
export default reducer