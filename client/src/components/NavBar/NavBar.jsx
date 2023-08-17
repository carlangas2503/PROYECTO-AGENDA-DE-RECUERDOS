import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { limpiarUser } from "../../redux/actions"

function NavBar({setAccess}) {
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const salir = ()=>{
        navigate('/')
        setAccess(false)
        return dispatch(limpiarUser())
    }
    return(
        <div>
            <Link to={`/profile/${user?.ID}`}><button>Perfil</button></Link>
            <Link to={`/home/${user?.ID}`}><button>Inicio</button></Link>
            <button onClick={salir}>Cerrar Sesión</button>
        </div>
    )
}
export default NavBar