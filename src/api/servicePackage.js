import axiosSecure from "."

//fetch all service from db
// export const getAllPackage = async () =>{
//     const {data} = await axiosSecure('/services')
//     return data
// }

//fetch single service from db
// export const getSinglePackage = async (id) =>{
//     const {data} = await axiosSecure(`/service/${id}`)
//     return data
// }

//save single service data in db
export const addPackage = async (packData) =>{
    const {data} = await axiosSecure.post(`/addService`,packData)
    return data
}

//fetch all service for host
//service_provider_email
export const getHostPack = async (email) =>{
    const {data} = await axiosSecure(`/services/${email}`)
    return data
}