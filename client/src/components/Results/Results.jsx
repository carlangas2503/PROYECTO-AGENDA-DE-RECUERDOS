import { useSelector } from "react-redux";
import Card from "../Card/Card";

function Results() {
    const busqueda = useSelector(state=>state.busqueda)
    const errorBusqueda = useSelector(state=>state.error)
    return(
        <div>
            {errorBusqueda || busqueda?.map((ele)=>{
                return(
                    <Card
                        Nombre={ele.Nombre}
                        Fecha={ele.Fecha}
                        Lugar={ele.Lugar}
                        Descripcion={ele.Descripcion}
                        Foto={ele.Foto}
                    />
                )
            })}
        </div>
    )
}
export default Results;