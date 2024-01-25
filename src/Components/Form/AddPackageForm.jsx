// import React from 'react'
// import { DateRange } from 'react-date-range'
// import { TbFidgetSpinner } from 'react-icons/tb'
// import { categories } from '../Categories/categoriesData'
// import swal from 'sweetalert';
const AddRoomForm = ({handleAddPackage,user}) => {
    // const handleAddPackage = e =>{
        // e.preventDefault();
        // const form = e.target;
        // const title = form.serviceName.value;
        // const service_provider_email = user?.email;
        // const service_provider_name = user?.displayName;
        // const service_provider_img = user?.photoURL;
        // const location = form.area.value;
        // const description = form.serviceDetails.value;
        // const price = form.price.value;
        // const img = form.imgURL.value;
        // const newPackage ={
        //     title,
        //     service_provider_email,
        //     service_provider_name,
        //     service_provider_img,
        //     location,
        //     description,
        //     price,
        //     img,
        // }


        // send data to the database server
        // fetch('https://repair-revivalists-server.vercel.app/addService',{
        //     method: 'POST',
        //     headers:{
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newPackage)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     if(data.insertedId){
        //         swal("Added!", "Service Added Successfully!", "success")
        //         form.reset();
        //     }
        // })
    // }
    return (
        <div>
            <h2 className=" text-3xl text-center py-5">Add Package</h2>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-5 mx-auto ">
                    <div className=" mx-auto">
                        <form 
                        onSubmit={handleAddPackage}
                        >
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Package Title</label>
                                        <input required type="text" id="serviceName" name="serviceName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Service Provider Email</label>
                                        <input 
                                            defaultValue={user?.email}
                                            type="email" id="phn" name="service_provider_email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Service Provider Name</label>
                                        <input type="text" id="userName"
                                            defaultValue={user?.displayName} 
                                            name="userName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Service Provider Img</label>
                                        <input type="text" id="userImg"
                                            defaultValue={user?.photoURL} 
                                            name="userImg" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Location</label>
                                        <input required type="text" id="" name="area" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                {/* <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Service Description</label>
                                        <input required type="text" id="serviceDescription" name="serviceDescription" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div> */}
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Service Provider Description</label>
                                        <textarea required name="serviceDetails" id="" cols="20" rows="5" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                                        {/* <input required type="text" id="serviceDetails" name="serviceDetails" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> */}
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Price</label>
                                        <input required type="text" id="" name="price" defaultValue={'$'} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className=' p-2 bg-white w-1/2  m-auto rounded-lg'>
                                    <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                        <div className='flex flex-col w-max mx-auto text-center'>
                                            <label>
                                                <input
                                                    className='text-sm cursor-pointer w-36 hidden'
                                                    type='file'
                                                    name='image'
                                                    id='image'
                                                    accept='image/*'
                                                    hidden
                                                    required
                                                />
                                                <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                                    Package Image Upload
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 w-full ">
                                    <input className="btn btn-primary w-full normal-case" type="submit" value="Add Service" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddRoomForm

    // < div className = 'w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50' >
    //     <form>
    //         <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
    //             <div className='space-y-6'>
    //                 <div className='space-y-1 text-sm'>
    //                     <label htmlFor='location' className='block text-gray-600'>
    //                         Location
    //                     </label>
    //                     <input
    //                         className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
    //                         name='location'
    //                         id='location'
    //                         type='text'
    //                         placeholder='Location'
    //                         required
    //                     />
    //                 </div>

    //                 <div className='space-y-1 text-sm'>
    //                     <label htmlFor='category' className='block text-gray-600'>
    //                         Category
    //                     </label>
    //                     <select
    //                         required
    //                         className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
    //                         name='category'
    //                     >
    //                         {categories.map(category => (
    //                             <option value={category.label} key={category.label}>
    //                                 {category.label}
    //                             </option>
    //                         ))}
    //                     </select>
    //                 </div>

    //                 <div className='space-y-1'>
    //                     <label htmlFor='location' className='block text-gray-600'>
    //                         Select Availability Range
    //                     </label>
    //                     <DateRange rangeColors={['#F43F5E']} />
    //                 </div>
    //             </div>
    //             <div className='space-y-6'>
    //                 <div className='space-y-1 text-sm'>
    //                     <label htmlFor='title' className='block text-gray-600'>
    //                         Title
    //                     </label>
    //                     <input
    //                         className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
    //                         name='title'
    //                         id='title'
    //                         type='text'
    //                         placeholder='Title'
    //                         required
    //                     />
    //                 </div>

    //                 <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
    //                     <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
    //                         <div className='flex flex-col w-max mx-auto text-center'>
    //                             <label>
    //                                 <input
    //                                     className='text-sm cursor-pointer w-36 hidden'
    //                                     type='file'
    //                                     name='image'
    //                                     id='image'
    //                                     accept='image/*'
    //                                     hidden
    //                                 />
    //                                 <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
    //                                     Upload Image
    //                                 </div>
    //                             </label>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className='flex justify-between gap-2'>
    //                     <div className='space-y-1 text-sm'>
    //                         <label htmlFor='price' className='block text-gray-600'>
    //                             Price
    //                         </label>
    //                         <input
    //                             className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
    //                             name='price'
    //                             id='price'
    //                             type='number'
    //                             placeholder='Price'
    //                             required
    //                         />
    //                     </div>

    //                     <div className='space-y-1 text-sm'>
    //                         <label htmlFor='guest' className='block text-gray-600'>
    //                             Total guest
    //                         </label>
    //                         <input
    //                             className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
    //                             name='total_guest'
    //                             id='guest'
    //                             type='number'
    //                             placeholder='Total guest'
    //                             required
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className='flex justify-between gap-2'>
    //                     <div className='space-y-1 text-sm'>
    //                         <label htmlFor='bedrooms' className='block text-gray-600'>
    //                             Bedrooms
    //                         </label>
    //                         <input
    //                             className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
    //                             name='bedrooms'
    //                             id='bedrooms'
    //                             type='number'
    //                             placeholder='Bedrooms'
    //                             required
    //                         />
    //                     </div>

    //                     <div className='space-y-1 text-sm'>
    //                         <label htmlFor='bathrooms' className='block text-gray-600'>
    //                             Bathrooms
    //                         </label>
    //                         <input
    //                             className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
    //                             name='bathrooms'
    //                             id='bathrooms'
    //                             type='number'
    //                             placeholder='Bathrooms'
    //                             required
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className='space-y-1 text-sm'>
    //                     <label htmlFor='description' className='block text-gray-600'>
    //                         Description
    //                     </label>

    //                     <textarea
    //                         id='description'
    //                         className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
    //                         name='description'
    //                     ></textarea>
    //                 </div>
    //             </div>
    //         </div>

    //         <button
    //             type='submit'
    //             className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
    //         >
    //             {loading ? (
    //                 <TbFidgetSpinner className='m-auto animate-spin' size={24} />
    //             ) : (
    //                 'Save & Continue'
    //             )}
    //         </button>
    //     </form>
    //     </div >