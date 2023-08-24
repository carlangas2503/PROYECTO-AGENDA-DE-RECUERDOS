import { useState } from "react";
import style from './Search.module.css'
import Results from "../Results/Results";
import { buscarMemoria } from "../../redux/actions";
import { useDispatch} from 'react-redux'

function Search(params) {
    const dispatch = useDispatch()
    const [search,setSearch] = useState("")

    const handleInput = (event)=>{
        setSearch(event.target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault()
        dispatch(buscarMemoria(search))
    }
    return(
        <div className={style.container}>
            <form onSubmit={(event)=>{onSubmit(event);setSearch('')}} action="">
             <div className={style.inputGroup}>
                <input type="text" id="search" className={style.inputInput} required value={search} onChange={handleInput}/>
                <label for='Nombre' className={style.inputLabel}>🔍</label>
             </div>
            </form>
            <br />
            <Results/>
        </div>
    )
}

export default Search;