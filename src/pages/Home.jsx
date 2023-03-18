import React from 'react'
import { app } from '../fb'

const Home = ({ usuario, loadingUser, navigate }) => {

  if (loadingUser) return <h1>cargando</h1>

  else if (!usuario) return navigate('/login')

  else if (usuario) {

    const singOut = () => {
      app.auth().signOut()
      navigate('/')
    }



    return (
      <>
        <div className='border p-5 m-5 position-relative'>
          <button className="btn btn-danger position-absolute top-0 end-0 m-5" onClick={singOut}>Cerrar sesion</button>

          {usuario.photoURL && <img src={usuario.photoURL} alt="" />}
          {usuario.displayName && <h1> {usuario.displayName}</h1>}
          <div> 
            {usuario.email && <>
              <p>{usuario.email}</p>
              <p>Estado del correo: {usuario.emailVerified ? "Verificado" : "Sin verificar"}</p>
            </>
            }
          </div>
        </div>
      </>
    )
  }
}

export default Home