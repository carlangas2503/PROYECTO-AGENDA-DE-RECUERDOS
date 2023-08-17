import axios from 'axios'
export const VERIFICAR_USER = 'VERIFICAR_USER'
export const LIMPIAR_USER = 'LIMPIAR_USER'

export const verificarUser= (login)=>{
    return async(dispatch)=>{
        try {
            const res = await axios.get(`http://localhost:3001/verificacion?Ingre=${login.Ingre}&Contraseña=${login.Contraseña}`)
            if(typeof res.data === "object"){
                return dispatch(
                    {
                        type:VERIFICAR_USER,
                        payload:res.data
                    }
                )
            }
        } catch (error) {
            return dispatch(
                {
                    type:VERIFICAR_USER,
                    payload:{error:error.response.data}
                }
            )
        }
    }
}

export const limpiarUser = ()=>{
    return{
        type:LIMPIAR_USER
    }
}