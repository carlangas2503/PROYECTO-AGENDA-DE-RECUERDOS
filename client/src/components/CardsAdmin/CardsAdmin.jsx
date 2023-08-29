
export default function CardsAdmin({Nombre,Apellido,Correo,Apodo,Habilitado}) {
    return(
        <div>
            <div>
             {Nombre} {Apellido}
            </div>
            <div>
                {Correo}
            </div>
            <div>
                {Apodo}
            </div>
            <div>
                {Habilitado?<button>Deshabilitar</button>:<button>Habilitar</button>}
            </div>
        </div>
    )
}