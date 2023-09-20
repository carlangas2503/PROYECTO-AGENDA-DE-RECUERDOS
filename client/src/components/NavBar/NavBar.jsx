import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { limpiarUser } from "../../redux/actions"
import style from './NavBar.module.css'
import { FaSearch,FaSignInAlt,FaRegAddressBook,FaHome } from "react-icons/fa";

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
        <div className={style.container}>
            <div className={style.perfil}> 
             <Link to={`/profile/${user?.ID}`}><img className={style.imagen} src={user?.FotoPerfil} alt="" /></Link>   
            </div>
            <nav className={style.navLinks}>
                <ul>
                 <li className={style.eleList}><Link to={`/home`}><button className={style.butonList}><FaHome/></button></Link></li>
                 {user?.isAdmin && <li className={style.eleList}><Link to={'/dashAdmin'}><button className={style.butonList}><FaRegAddressBook/></button></Link></li>}
                 <li className={style.eleList}><Link to={`/search`}><button className={style.butonList}><FaSearch/></button></Link></li>
                </ul>  
            </nav>
            <button className={style.back} onClick={salir}><FaSignInAlt/></button>
        </div>
    )
}
export default NavBar