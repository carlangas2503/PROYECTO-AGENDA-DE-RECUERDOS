import { useSelector } from "react-redux";
import style from './Profile.module.css'
import {FaWhmcs } from "react-icons/fa";

function Profile(params) {
    const user = useSelector(state=>state.user)
    if(user)return(
        <div className={style.container}>
            <figure className={style.contImagen}>
             <img className={style.imagen} src={user.FotoPerfil} alt="" />
             <div className={style.editFoto}><FaWhmcs/></div>
            </figure>
            <h1>{user.Nombre} {user.Apellido}</h1>
            <h2>{user.Apodo}</h2>
            <h3>{user.Correo}</h3>
        </div>
    )
}
export default Profile;