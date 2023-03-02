import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUpdateData, updateDataById } from '../Api/Api'

const UpdateData = () => {
  const {id}=useParams()
  const Navigate=useNavigate()
  const [input,setInput]=useState({
    Name:"",
    Email:"",
    Skills:"",
    Age:""
  })

useEffect(()=>{
  if(id){
    getUpdateData(id).then((Data)=>setInput(Data.data))
  } 
},[id])


const handelChange=(e)=>{
    const {name,value}=e.target
    setInput({...input,[name]:value})
}

const formSubmit= async (e)=>{
  e.preventDefault();
  await updateDataById(id,input)
  Navigate('/showdata')

}

  return (

<section className="relative flex flex-wrap lg:h-[90vh] lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Update Your Data!</h1>

      <p className="mt-4 text-gray-500">
        This Site using Json server , you can Add , Update , Delete Someone data.
      </p>
    </div>

    <form action="" className="mx-auto mt-8 mb-0 max-w-md " onSubmit={formSubmit}>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="text"
            name='Name'
            value={input.Name}
            onChange={handelChange}
            className="w-full border rounded-lg py-3 px-3 mt-4 bg-zinc-600 border-indigo-600 placeholder-white-500 text-white"
            placeholder="Enter Name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            name='Email'
            value={input.Email}
            onChange={handelChange}
            className="w-full border rounded-lg py-3 px-3 mt-4 bg-zinc-600 border-indigo-600 placeholder-white-500 text-white"
            placeholder="Enter email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="text"
            value={input.Skills}
            onChange={handelChange}
            name='Skills'
            className="w-full border rounded-lg py-3 px-3 mt-4 bg-zinc-600 border-indigo-600 placeholder-white-500 text-white"
            placeholder="Enter Skill"
          />

     
        </div>
        <div className="relative">
          <input
            type="number"
            value={input.Age}
            onChange={handelChange}
            name='Age'
            className="w-full mb-4 border rounded-lg py-3 px-3 mt-4 bg-zinc-600 border-indigo-600 placeholder-white-500 text-white"
            placeholder="Enter age"
          />

     
        </div>
      </div>

        <button type='submit'  className='w-[40%]  bg-green-400 h-[40px] shadow-green-500 drop-shadow-md'>Submit</button>
 
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1628544106915-0d756c7dadfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
      className="absolute inset-0 h-full w-full object-cover "
    />
  </div>
</section>

  )
}

export default UpdateData