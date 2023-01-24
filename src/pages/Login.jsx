import React, { useState } from 'react'
import './modalRegister.scss'
import { app } from "../fb"
import {GoogleAuthProvider} from "firebase/auth"


const Login = ({navigate}) => {

    const [modalRegister, setModalRegister] = useState(false)
    const [error, setError] = useState(null)

    const handlerSubmit = async (e) => {

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.cotraseña.value

        if (!modalRegister) {

            app.auth().signInWithEmailAndPassword(email, password).then(() => {
                navigate("/")
            }).catch((error) => {
                setError(error.message)

            })
        }

        if (modalRegister) {
            app.auth().createUserWithEmailAndPassword(email, password).then(() => {
                setModalRegister(false)
            }).catch((error) => {
                setError(error.message)
            })
        }
    }

    const loginGoogle = () => {
        app.auth().signInWithPopup(new GoogleAuthProvider()).then(()=>{
            navigate("/")
        })
    }

    return (
        <>
            <div className='border border-dark-subtle rounded-4 m-5 p-5'>
                <h1 className=''>Inicia sesión</h1>
                <form className='row g-3 mt-3' onSubmit={handlerSubmit} >
                    <div className='class="col-md-4"'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input className='form-control rounded-4' required type="text" name="email" id="email" placeholder='Correo' />
                        <label className='form-label' htmlFor="cotraseña">Cotraseña</label>
                        <input className='form-control rounded-4' required type="password" name="cotraseña" id="cotraseña" />
                    </div>
                    <button className='btn btn-success rounded-3' type="submit">Iniciar sesion</button>
                    {error ?? <p className='text-primary'>{error}</p>}
                </form>
                <div className='row-2 mt-5'>
                    <button onClick={loginGoogle} className='btn btn-primary rounded-3' >Iniciar con Google</button>
                    <button onClick={() => setModalRegister(true)} className='btn btn-info ms-5 rounded-3'>Regitrarse</button>
                </div>
            </div>
            {modalRegister && <>
                <div className='container__modal'>
                    <div className='container__contenido'>
                        <div className='border border-dark-subtle rounded-4 m-5 p-5'>
                            <h1 className=''>Registrarse</h1>
                            <form className='row g-3 mt-3' onSubmit={handlerSubmit} >
                                <div className='class="col-md-4"'>
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input className='form-control rounded-4' required type="text" name="email" id="email" placeholder='Correo' />
                                    <label className='form-label' htmlFor="cotraseña">Cotraseña</label>
                                    <input className='form-control rounded-4' required type="password" name="cotraseña" id="cotraseña" />
                                </div>
                                <button className='btn btn-success rounded-3' type="submit">Registrarse</button>
                                {error ?? <p className='text-primary'>{error}</p>}

                            </form>
                            <div className='row-2 mt-5'>
                                <button onClick={loginGoogle} className='btn btn-primary rounded-3' >Registrar con Google</button>
                                <button onClick={() => setModalRegister(false)} className='btn btn-info ms-5 rounded-3'>Iniciar sesion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default Login