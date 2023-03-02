import axios from "axios";

const url='http://localhost:3005/users'


export const getData=async()=>{
    return await axios.get(url)
    
}

export const AddData=async(input)=>{
    return await axios.post(url,input)
}

export const getUpdateData=async(id)=>{
    return await axios.get(`${url}/${id}`)
}

export const updateDataById=async(id,input)=>{
    return await axios.put(`${url}/${id}`, input)
}

export const deleteDataById=async(id)=>{
    return await axios.delete(`${url}/${id}`)
}