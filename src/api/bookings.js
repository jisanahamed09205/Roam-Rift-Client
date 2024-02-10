import axiosSecure from "."


//create payment intent
export const createPaymentIntent = async price=>{
    const {data} = await axiosSecure.post('/create-payment-intent',price)
    // console.log(data);
    return data;
}

//save booking info in db
export const saveBookingInfo = async paymentInfo=>{
    const {data} = await axiosSecure.post('/bookings',paymentInfo)
    return data;
}

//wishlist save on db
// export const saveWishList = async(paymentInfo)=>{
//     const {data} = await axiosSecure.post('/wishlist',paymentInfo)
//     return data;
// }

//get all bookings for a Tourist by email
export const getBookings = async (email) =>{
    const {data} = await axiosSecure(`/bookings?email=${email}`)
    // console.log(data);
    return data;
}
//get all bookings for a TourGuide by email 
// which tourGuide add package these package manage or assign only but this assignment need to all over tourGuide package handle any tourGuider so i didn't apply this method
export const getTourGuidBookings = async (email) =>{
    const {data} = await axiosSecure(`/bookings/TourGuide?email=${email}`)
    // console.log(data);
    return data;
}