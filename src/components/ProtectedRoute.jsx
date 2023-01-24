import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ usuario, children }) => {

  const navigate=useNavigate()
  
  useEffect(()=>{
    if (!usuario) {
    }
  },[])

  return (
    <>{children}</>
  )
}

export default ProtectedRoute 