import { useSelector } from "react-redux";

function Profile(params) {
    const user = useSelector(state=>state.user)
    if(user)return(
        <div>
            <h1>{user.Nombre} {user.Apellido}</h1>
            <h2>{user.Apodo}</h2>
            <h3>{user.Correo}</h3>
            <img src={user.FotoPerfil} alt="" />
        </div>
    )
}
export default Profile;