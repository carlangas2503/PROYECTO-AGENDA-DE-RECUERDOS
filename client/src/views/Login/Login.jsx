import { useDispatch } from "react-redux"
import { verificarUser } from "../../redux/actions"
import { useState} from "react"
import { useNavigate } from "react-router-dom"
import style from '../../components/CreateAcount/CreateAcount.module.css'


export default function Login({setAccess}) {
    const dispatch = useDispatch()
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
    const goToCreate = ()=>{
        setAccess(true)
        navigate('/crearCuenta')
    }
    return(
        <div className={style.allContainer}>
            <br />
            <form className={style.container} onSubmit={(event)=>onSubmit(event)}>
                <h1>Ingresa a nuesto blog!!</h1>
                <br />
                <div className={style.inputGroup}>
                 <input onChange={inputsChange} id="Ingre" type="text" className={style.inputInput} required value={login.Ingre}/>
                 <label for='Ingre' className={style.inputLabel}>Correo o Apodo</label>
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input onChange={inputsChange} id="Contraseña" type="password" className={style.inputInput} required value={login.Contraseña}/>
                 <label for='Contraseña' className={style.inputLabel}>Contraseña</label>
                </div>

                <br />
                
                <div>{error}</div>
                <h4>en caso de no tener cuenta {<span onClick={goToCreate} className={style.crear}>Crea una</span>}</h4>
                <button className={style.button}>Iniciar</button>
            </form>
        </div>
    )
}