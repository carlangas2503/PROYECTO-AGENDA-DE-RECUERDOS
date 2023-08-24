import { useDispatch } from "react-redux";
import { crearUsuario } from "../../redux/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './CreateAcount.module.css'

function CreateAcount({setAccess}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [usuario,setUsuario] = useState({
        Nombre:'',
        Apellido:'',
        Correo:'',
        Apodo:'',
        Contraseña:'',
        ConfirmarContraseña:'',
        FotoPerfil:''
    })
    const onSubmit = (event)=>{
        event.preventDefault()
        const {Nombre,Apellido,Correo,Apodo,Contraseña,FotoPerfil,ConfirmarContraseña} = usuario
        if(!Nombre && !Apellido && !Correo && !Apodo && !Contraseña && !FotoPerfil && !ConfirmarContraseña) return
        if(Contraseña !== ConfirmarContraseña || Contraseña.length < 6 || Contraseña.length > 15 ) return
        dispatch(crearUsuario(usuario))
        .then(pro=>{
            if(pro?.payload){
                navigate('/')
                alert('usuario creado')
                setAccess(false)
            }else{
                alert('error al crear el usuario')
            }
        })
    }
    const hanbleInputs = (event)=>{
        const newUser = {...usuario}
        newUser[event.target.id] = event.target.value
        setUsuario(newUser)
    }
    const goLoging = ()=>{
        navigate('/')
        setAccess(false)
    }
    return(
        <div className={style.allContainer}>
            <span onClick={goLoging} className={style.back}>Recordé mis datos</span>
            <br />
            <form className={style.container} onSubmit={(event)=>onSubmit(event)}>
                <h1>Crea tu cuenta!</h1>
                <br />
                <div className={style.inputGroup}>
                 <input type="text" id="Nombre" className={style.inputInput} required onChange={hanbleInputs}/>
                 <label for='Nombre' className={style.inputLabel}>Nombre</label>
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="Apellido" className={style.inputInput} required onChange={hanbleInputs}/>
                 <label for='Apellido' className={style.inputLabel}>Apellido</label>
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="Correo"  className={style.inputInput} required onChange={hanbleInputs}/>
                 <label for='Correo' className={style.inputLabel}>Correo</label> 
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="Apodo"  className={style.inputInput} required onChange={hanbleInputs}/>
                 <label for='Apodo' className={style.inputLabel}>Apodo</label> 
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="Contraseña"  className={style.inputInput} required onChange={hanbleInputs}/>
                 <label for='Contraseña' className={style.inputLabel}>Contraseña</label> 
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="ConfirmarContraseña"  className={style.inputInput} required onChange={hanbleInputs}/>
                 <label for='ConfirmarContraseña' className={style.inputLabel}>Confirmar Contraseña</label> 
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="FotoPerfil" className={style.inputInput} required onChange={hanbleInputs}/>
                 <label for='FotoPerfil' className={style.inputLabel}>Foto de perfil</label> 
                </div>

                <br />

                <button  className={style.button}>Crear</button>
            </form>
        </div>
    )   
}
export default CreateAcount;