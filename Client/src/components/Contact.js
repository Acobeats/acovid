import React from "react";
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom'
import '../App.css';
import '../Styles/Contact.css';
import '../Styles/Landing.css';


function Contact(){
    const { register, formState:{errors}, handleSubmit } = useForm();

    const onSubmit = (data) => {
       console.log(data) ;
    }
 
     return(
        <div className="home-div">
            <h2>Formulario</h2>
            <form className="form-letter" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('nombre', {
                        required: true,
                        minLength: 3,
                    })} />
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" {...register('email', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                        required: true,

                    })} />
                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                    {errors.email?.type === 'required' && <p>El campo email es requerido</p>}

                </div>
                <div>
                    <label>Asunto</label>
                    <input type="text" {...register('asunto', {
                        required: true
                    })} />
                    {errors.asunto?.type === 'required' && <p>El campo asunto es requerido</p>}                       

                </div>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    
    );
}

export default Contact;
