import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { loginUser, logoutUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Login = () => {

  const dispatch = useDispatch()

  const { isLogin, user } = useSelector((state) => state.auth)

  const [name, setName] = useState("")

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
            <div
              className="modal show"
              style={{ display: 'block', position: 'initial' }}
            >
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Login User</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary">Close</Button>
                  <Button variant="primary">Save changes</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Login