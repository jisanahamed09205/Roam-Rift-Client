import axiosSecure from "."

//save a new user data in database
export const saveUser = async user =>{
    const currentUser ={ 
        email: user.email,
        role:'Tourist',
        // role:'Tour Guide',
        // role:'Admin',
        status: 'Verified',
        image: user.photoURL
    }
    const {data}= await axiosSecure.put(`/users/${user?.email}`,currentUser)
    return data;
}


//get token from server
export const getToken = async email =>{
    const {data}= await axiosSecure.post(`/jwt`,{email})
    console.log('Token receive ------>',data);
    return data;
}

//clear token from browser
export const removeToken = async () =>{
    const {data}= await axiosSecure.get('/logout')
    console.log('Token receive ------>',data);
    return data;
}

// get user role
export const getRole = async (email) =>{
    const {data} = await axiosSecure(`/user/${email}`)
    return data.role;
}

//get all users
export const getAllUsers = async () =>{
    const {data} = await axiosSecure('/users')
    return data
}

// update user Role
export const updateRole = async ({email,role}) =>{
    const currentUser ={ 
        email,
        role,
        status: 'Verified',
    }
    const {data}= await axiosSecure.put(`/users/update/${email}`,currentUser)
    return data;
}

  //Become a host/Tour Guide
export const becomeHost = async(email) =>{
    const currentUser ={ 
        email,
        status: 'Requested',
    }
    const {data}= await axiosSecure.patch(`/user/${email}`,currentUser)
    return data;
}