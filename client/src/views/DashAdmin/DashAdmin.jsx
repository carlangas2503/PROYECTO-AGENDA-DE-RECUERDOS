import { useSelector } from "react-redux";

function DashAdmin(params) {
    const user = useSelector(state=>state.user)
    
    if(user?.isAdmin)return(
        <div>
            Dash Admin
        </div>
    )
    else return(
        <div>
            Permisos no validos
        </div>
    )
}
export default DashAdmin;