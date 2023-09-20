import style from './Card.module.css'
import {Link} from 'react-router-dom'

function Card({Nombre,Fecha,Lugar,Descripcion,Foto,ID}) {
    return(
        <li className={style.center}>
            <Link to={`/detail/${ID}`}><div className={style.articleCard}>
                <div className={style.content}>
                <p className={style.date}>{Fecha}</p>
                <p className={style.title}>{Nombre}</p>
                <p className={style.place}>{Lugar}</p>
                </div>
                <img className={style.imagen} src={Foto} alt='' />
            </div></Link>
        </li>
    )
}
export default Card;