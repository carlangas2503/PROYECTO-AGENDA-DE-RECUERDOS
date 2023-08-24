import axios from 'axios'
export const VERIFICAR_USER = 'VERIFICAR_USER'
export const LIMPIAR_USER = 'LIMPIAR_USER'
export const CREAR_USUARIO = 'CREAR_USUARIO'
export const BUSCAR_MEMORIA = 'BUSCAR_MEMORIA'

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
export const crearUsuario = ({Nombre,Apellido,Correo,Apodo,Contraseña,FotoPerfil})=>{
    return async(dispatch)=>{
        try {
            const res = await axios.post('http://localhost:3001/crearUsuario',{
                Nombre,
                Apellido,
                Correo,
                Apodo,
                Contraseña,
                FotoPerfil
            })
            if(res.data){
                return dispatch({
                    type:CREAR_USUARIO,
                    payload:true
                })
            }
            return dispatch({
                type:CREAR_USUARIO,
                payload:false
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const buscarMemoria = (memorie)=>{
    return async(dispatch)=>{
        try {
            const res = await axios(`http://localhost:3001/memories?search=${memorie}`)
            return dispatch({
                type:BUSCAR_MEMORIA,
                payload:res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}