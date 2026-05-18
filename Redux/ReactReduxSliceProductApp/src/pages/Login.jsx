import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useState } from 'react'
import { loginUser , logoutUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'


const Login = () => {

  const dispatch = useDispatch()

  const {isLogin , user} = useSelector((state) => state.auth)

  const [name , setName] = useState("")

  const handleLogin = () => {
    dispatch(loginUser(name))
    toast.success("Login Successfully!!")
  }

  const handleLogout = () => {
    dispatch(logoutUser())
    toast.error("Logout Successfully!!")
  }

  return (
    <>
    <div className='mt-20'>

    {
      isLogin ? (
        <div>
          <h2>Welcome {user}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center bg-blue-700 p-4'>
          <input type="text" value={name} name="username" onChange={(e) => setName(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )
    }
    </div>
    </>
  )
}

export default Login