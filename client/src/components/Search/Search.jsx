import { useState } from "react";
import style from './Search.module.css'
import Results from "../Results/Results";
import { buscarMemoria } from "../../redux/actions";
import { useDispatch} from 'react-redux'
import { FaSearch } from "react-icons/fa";

function Search() {
    const dispatch = useDispatch()

    const [search,setSearch] = useState("")
    const [tipoBusqueda,setTipoBusqueda]= useState(true)
    const [tipBus,setTipBus] = useState('BUSCAR POR NOMBRE DEL RECUERDO')

    const handleInput = (event)=>{
        setSearch(event.target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault()
        return dispatch(buscarMemoria(search,tipoBusqueda))
    }
    const buscarUbi = ()=>{
        setTipoBusqueda(false)
        setTipBus('BUSCAR POR UBICACIÓN DEL RECUERDO')
    }
    const buscarName = ()=>{
        setTipoBusqueda(true)
        setTipBus('BUSCAR POR NOMBRE DEL RECUERDO')
    }
    return(
        <div className={style.container}>
            <div className={style.contFilBus}>
             <button className={style.back} onClick={buscarName}>busqueda por nombre</button>
             <br />
             <button className={style.back} onClick={buscarUbi}>busqueda por Ubicación</button>
            </div>
            <br />
            <h2>{tipBus}</h2>
            <form onSubmit={(event)=>{onSubmit(event);setSearch('')}} action="">
             <div className={style.inputGroup}>
                <input type="text" id="search" className={style.inputInput} required value={search} onChange={handleInput}/>
                <label for='Nombre' className={style.inputLabel}><FaSearch/></label>
             </div>
            </form>
            <br />
            <Results/>
        </div>
    )
}

export default Search;