import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteDataById, getData } from '../Api/Api'

const Showdata = () => {

    const Navigate=useNavigate()
    const [Data,setData]=useState()
    const [refresh,setRefresh]=useState(false)
    
    useEffect(()=>{
        getData().then((data)=>setData(data.data))
    },[refresh])

    console.log(Data)

    const handelEdit=(id)=>{
        Navigate(`/showdata/${id}`)
    }

    const handelDelete=async(id)=>{
        await deleteDataById(id)
        setRefresh(!refresh)
    }


  return (
    <div className="flex flex-col min-h-screen">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4 text-center">Id</th>
              <th scope="col" className="px-6 py-4 text-center">Name</th>
              <th scope="col" className="px-6 py-4 text-center">Email</th>
              <th scope="col" className="px-6 py-4 text-center">Skills</th>
              <th scope="col" className="px-6 py-4 text-center">Age</th>
              <th scope="col" className="px-6 py-4 text-center">Edit</th>
              <th scope="col" className="px-6 py-4 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
          {   Data && Data.map((x,index)=>{
            return (
                <tr className="border-b dark:border-neutral-500" key={x.id}>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-center">{x && index+1}</td>
              <td className="whitespace-nowrap px-6 py-4 text-center">{x && x.Name}</td>
              <td className="whitespace-nowrap px-6 py-4 text-center">{x && x.Email}</td>
              <td className="whitespace-nowrap px-6 py-4 text-center">{x && x.Skills}</td>
              <td className="whitespace-nowrap px-6 py-4 text-center">{x && x.Age}</td>
              <td onClick={()=>handelEdit(x.id)} className="whitespace-nowrap px-6 py-4 text-[25px] text-center text-green-500 cursor-pointer"><i className="fa-solid fa-pen-to-square"></i></td>
              <td onClick={()=>handelDelete(x.id)} className="whitespace-nowrap px-6 py-4 text-[25px] text-center text-red-500 cursor-pointer"><i className="fa-solid fa-trash"></i></td>
            </tr>
            )
          })
           }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Showdata