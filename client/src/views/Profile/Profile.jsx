import { useSelector } from "react-redux";
import style from './Profile.module.css'
import { AiOutlineGoogle, AiOutlineSetting } from 'react-icons/ai'

function Profile(params) {
    const user = useSelector(state => state.user)
    const fondoprov = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88672068827eaeeab540f584b883cc66&auto=format&fit=crop&w=1164&q=80"
    if (user) return (
        <div className={style.container}>
            <div className={style.background}></div>
            <div className={style.countInfo}>
                <div className={style.countInter}>
                    <div className={style.front}>
                        <img src={user.Fondo || fondoprov} className={style.background_foto} alt='' />
                        <img className={style.imagen} src={user.FotoPerfil} alt="" />
                        <div className={style.text}>
                            <h1 className={style.name}>{user.Nombre} {user.Apellido}</h1>
                            <p className={style.details}>Apodo: {user.Apodo}</p>
                            <p className={style.details}><AiOutlineGoogle />: {user.Correo}</p>
                        </div>
                        <button className={style.butonEdit}><AiOutlineSetting/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;