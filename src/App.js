import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { app } from './fb'
import Home from './pages/Home'
import Login from './pages/Login'
import { useNavigate } from 'react-router-dom'







const App = () => {

  const [usuario, setUsuario] = useState(null)
  const [loadingUser, setLoadingUser] = useState()
  const navigate = useNavigate()

  const usuarioLogin = () => {
    app.auth().onAuthStateChanged((userFirebase) => {
      setUsuario(userFirebase);
      setLoadingUser(false);
    })
  }

  useEffect(() => {
    setLoadingUser(true);
    usuarioLogin()

  }, [])

  console.log(loadingUser);
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Home usuario={usuario} loadingUser={loadingUser} navigate={navigate} />} />
          <Route path='/login' element={<Login setUsuario={setUsuario} navigate={navigate} />} />
          <Route path='*' element={<Login setUsuario={setUsuario} navigate={navigate} />} />
        </Routes>
      
    </>
  )

}

export default App