import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { AddData } from '../Api/Api'

const Register = () => {
    const Navigate=useNavigate()
    const [input,setInput]=useState({
        id:v4(),
        Name:"",
        Email:"",
        Skills:"",
        Age:""
    })

    const handelChange=(e)=>{
            const {name,value}=e.target
           setInput({...input,[name]:value})
    }

    const formSubmit=(e)=>{
        e.preventDefault()
        AddData(input)
        Navigate('/showdata')
        setInput({id:v4(),Name:"",Email:"",Skills:"",Age:""})
    }
  return (

<section className="relative flex flex-wrap lg:h-[90vh] lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Register Your Data!</h1>

      <p className="mt-4 text-gray-500">
        This Site using Json server , you can Add , Update , Delete Someone data.
      </p>
    </div>

    <form action="" className="mx-auto mt-8 mb-0 max-w-md " onSubmit={formSubmit}>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            name='Name'
            value={input.Name}
            onChange={handelChange}
            type="text"
            className="w-full border rounded-lg py-3 px-3 mt-4 bg-zinc-600 border-indigo-600 placeholder-white-500 text-white"
            placeholder="Enter Name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            name='Email'
            value={input.Email}
            onChange={handelChange}
            type="email"
            className="w-full border rounded-lg py-3 px-3 mt-4 bg-zinc-600 border-indigo-600 placeholder-white-500 text-white"
            placeholder="Enter email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            name='Skills'
            value={input.Skills}
            onChange={handelChange}
            type="text"
            className="w-full border rounded-lg py-3 px-3 mt-4 bg-zinc-600 border-indigo-600 placeholder-white-500 text-white"
            placeholder="Enter Skill"
          />

     
        </div>
        <div className="relative">
          <input
            name='Age'
            value={input.Age}
            onChange={handelChange}
            type="number"
            className="w-full mb-4 border rounded-lg py-3 px-3 mt-4 bg-zinc-600 border-indigo-600 placeholder-white-500 text-white"
            placeholder="Enter age"
          />

     
        </div>
      </div>

        <button type='submit' className='w-[40%]  bg-green-400 h-[40px] shadow-green-500 drop-shadow-md'>Submit</button>
 
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://t4.ftcdn.net/jpg/02/08/27/73/360_F_208277332_DgdJiQwSzIYw714ovaCwNBaSDdVtJB2M.jpg"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>

  )
}

export default Register