import axiosSecure from "."

//save user data in database
export const saveUser = async user =>{
    const currentUser ={ 
        email: user.email,
        role:'Tourist',
        // role:'Admin',
        status: 'Verified'
    }
    const {data}= await axiosSecure.put(`/users/${user?.email}`,currentUser)
    return data;
}


//get token from server
export const getToken = async email =>{
    const {data}= await axiosSecure.post(`/jwt`,email)
    console.log('Token revice ------>',data);
    return data;
}

//clear token from browser
export const removeToken = async () =>{
    const {data}= await axiosSecure.get('/logout')
    console.log('Token revice ------>',data);
    return data;
}