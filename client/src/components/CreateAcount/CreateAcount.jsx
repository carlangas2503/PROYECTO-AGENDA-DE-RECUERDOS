import { useDispatch } from "react-redux";
import { crearUsuario } from "../../redux/actions";
import { useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from 'react-dropzone'
import style from './CreateAcount.module.css'
import axios from "axios";
import { FaImage,FaRedo,FaRegFileExcel,FaRegFileImage,FaFileUpload } from "react-icons/fa";


function CreateAcount({setAccess}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const name_cloudinary = 'dpssouwww'
    const [usuario,setUsuario] = useState({
        Nombre:'',
        Apellido:'',
        Correo:'',
        Apodo:'',
        Contraseña:'',
        ConfirmarContraseña:''
    })
    const [FotoPerfil,setFotoPerfil] = useState('')
    const [errorFoto,setErrorFoto] = useState('')
    const onSubmit = (event)=>{
        event.preventDefault()
        const {Nombre,Apellido,Correo,Apodo,Contraseña,ConfirmarContraseña} = usuario
        if(!Nombre && !Apellido && !Correo && !Apodo && !Contraseña && !FotoPerfil && !ConfirmarContraseña) return
        if(Contraseña !== ConfirmarContraseña || Contraseña.length < 6 || Contraseña.length > 15 ) return
        dispatch(crearUsuario(usuario,FotoPerfil))
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
    const onDrop = useCallback(async(acceptedFiles,rejectFiles)=>{
        try {
          if(acceptedFiles){
          const file = acceptedFiles[0]
          const formData = new FormData();
          formData.append("file",file)
          formData.append("upload_preset","imagenes")
          const res = await axios.post(`https://api.cloudinary.com/v1_1/${name_cloudinary}/image/upload`,formData)
          if(res.data){
            setErrorFoto(<FaRegFileImage/>)
            setFotoPerfil(res.data.secure_url)
          }
          }else{
          console.log(rejectFiles);
          }
        } catch (error) {
          setErrorFoto(<FaRegFileExcel/>)  
          console.log(error.request.responseText.split(':')[2].split('}')[0]);
        }
        
    },[])
    const revertir = ()=>{
        setErrorFoto('')
        setFotoPerfil('')
    }
    const{ getRootProps, getInputProps,isDragActive} = useDropzone({onDrop})
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
                 <input type="text" id="Nombre" className={style.inputInput} value={usuario.Nombre} required onChange={hanbleInputs}/>
                 <label for='Nombre' className={style.inputLabel}>Nombre</label>
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="Apellido" className={style.inputInput} value={usuario.Apellido} required onChange={hanbleInputs}/>
                 <label for='Apellido' className={style.inputLabel}>Apellido</label>
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="Correo"  className={style.inputInput} value={usuario.Correo} required onChange={hanbleInputs}/>
                 <label for='Correo' className={style.inputLabel}>Correo</label> 
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="Apodo"  className={style.inputInput} value={usuario.Apodo} required onChange={hanbleInputs}/>
                 <label for='Apodo' className={style.inputLabel}>Apodo</label> 
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="Contraseña"  className={style.inputInput} value={usuario.Contraseña} required onChange={hanbleInputs}/>
                 <label for='Contraseña' className={style.inputLabel}>Contraseña</label> 
                </div>

                <br />

                <div className={style.inputGroup}>
                 <input type="text" id="ConfirmarContraseña"  className={style.inputInput} value={usuario.ConfirmarContraseña} required onChange={hanbleInputs}/>
                 <label for='ConfirmarContraseña' className={style.inputLabel}>Confirmar Contraseña</label> 
                </div>

                <br />

                {!FotoPerfil?<div className={style.drop} {...getRootProps()}>
                 <input id="FotoPerfil" {...getInputProps()} />
                 {isDragActive?<FaFileUpload/>:<FaImage/>}
                </div>:null}
                {FotoPerfil && <span className={style.buttonR} onClick={revertir}><FaRedo/></span>}
                <br />
                {errorFoto?errorFoto:null}
                <br />
                <button  className={style.button}>Crear</button>
            </form>
        </div>
    )   
}
export default CreateAcount;