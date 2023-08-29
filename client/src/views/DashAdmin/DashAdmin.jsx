import { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { allUserss } from "../../redux/actions";
import CardsAdmin from "../../components/CardsAdmin/CardsAdmin";

function DashAdmin(params) {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    const allUsers = useSelector(state=>state.allUsers)
    useEffect(()=>{
        dispatch(allUserss())
    },[dispatch,allUsers])

    
    if(user?.isAdmin)return(
        <div>
            {allUsers.map((ele)=>{
                return <CardsAdmin 
                Nombre={ele.Nombre} 
                Apellido={ele.Apellido} 
                Correo={ele.Correo} 
                Apodo={ele.Apodo} 
                Habilitado={ele.Habilitado}/>
            })}
        </div>
    )
    else return(
        <div>
            Permisos no validos
        </div>
    )
}
export default DashAdmin;