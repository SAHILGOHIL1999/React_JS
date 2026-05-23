import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const AddUser = () => {

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")

  console.log(name);
  console.log(email);
  
  async function addUser(e) {
  e.preventDefault();


  async function addUser(){

    let user = {
      name,
      email
      
    }

    await axios.post("http://localhost:3000/users" , user).then((data) => console.log(data))

    alert("User Added!!")
  }


  return (
    <>
    <div>AddUser</div>
    <div className='flex justify-center h-screen items-center '>
    <form onSubmit={addUser} className='bg-gray-500 p-6 text-white w-[500px]'>
      <div>
      <label htmlFor="name">Name</label><br></br>
      <input className='p-4 border w-full' type="text" name="name" id="" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='my-6'>
      <label htmlFor="email">Email</label><br></br>
      <input className='p-4 border w-full' type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type='submit' className='bg-black w-full py-4'>Add User</button>
    </form>
    </div>
    </>
  )
}

export default AddUser