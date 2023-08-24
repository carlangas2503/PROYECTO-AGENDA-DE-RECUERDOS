
function Card({Nombre,Fecha,Lugar,Descripcion,Foto}) {
    return(
        <div>
            <h1>{Nombre}</h1>
            <h2>{Fecha}</h2>
            <h3>{Lugar}</h3>
            <h3>{Descripcion}</h3>
            <img src={Foto} alt="" />
        </div>
    )
}
export default Card;