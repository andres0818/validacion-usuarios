import React from 'react'

const Login = ({ usuaruio, setUsuario }) => {

    const handlerSubmit = (e) => {
        e.preventDefault()

    }



    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder='Correo' />
                <label htmlFor="cotraseña">Cotraseña</label>
                <input type="password" name="cotraseña" id="cotraseña" />
                <button type="submit">Iniciar sesion</button>
                <hr />
                <button>Regitrarse</button>
                <hr />
            </form>
            <button>Iniciar con Google</button>
        </div>
    )
}

export default Login