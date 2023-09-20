import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from './Results.module.css'

function Results() {
    const busqueda = useSelector(state=>state.busqueda)
    const errorBusqueda = useSelector(state=>state.error)
    return(
        <div>
            <ul className={style.allCont}>
             {errorBusqueda || busqueda?.map((ele)=>{
                 return(
                     <Card
                        ID = {ele.ID}
                        Nombre={ele.Nombre}
                        Fecha={ele.Fecha}
                        Lugar={ele.Lugar}
                        Descripcion={ele.Descripcion}
                        Foto={ele.Foto}
                     />
                 )
             })}
            </ul>
        </div>
    )
}
export default Results;