import { useDispatch,useSelector } from "react-redux"
import { verificarUser } from "../../redux/actions"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Login({setAccess}) {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    const navigate = useNavigate()
    const [error,setError] = useState('')
    const [login,setLogin] = useState({
        Ingre:'',
        Contraseña:''
    })

    const onSubmit = async(event)=>{
        event.preventDefault()
        dispatch(verificarUser(login))
        .then(ele=>{
            if(ele.payload){
                if(!ele.payload.error){
                    setAccess(true)
                    return navigate(`/home/${ele.payload.ID}`)
                }
                if(ele.payload.error)return setError(ele.payload.error)
            }
        })
    }
    
    const inputsChange = (event)=>{
        const logg = {...login}
        logg[event.target.id] = event.target.value
        setLogin(logg)
    }
    return(
        <div>
            <form onSubmit={(event)=>onSubmit(event)}>
                <span>correo o usuario</span>
                <br />
                <input onChange={inputsChange} id="Ingre" type="text" value={login.Ingre}/>
                <br />
                <span>Contraseña</span>
                <br />
                <input onChange={inputsChange} id="Contraseña" type="password" Contraseña={login.Contraseña}/>
                <br />
                <div>{error}</div>
                <button>x</button>
            </form>
        </div>
    )
}