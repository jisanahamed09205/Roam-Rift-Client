import { Dialog, Transition } from '@headlessui/react'
// import { format } from 'date-fns'
import { Fragment, 
  // useEffect, 
  useState } from 'react'
import useAuth from '../../Hook/useAuth';
import { Elements } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '../Form/CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK_Stripe)


const BookingModal = ({ closeModal, isOpen, singlePackage }) => {
  const {user} = useAuth();
  // const [tourGuide, setTourGuide] = useState([]);

  // useEffect(() => {
  //   fetch("https://roam-rift-server.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setTourGuide(data));
  // }, []);


  // const [bookingInfo,setBookingInfo] = useState()


  // const handlePurchase = (e) => {
  //   e.preventDefault()
  //   setBookingInfo({
  //     guest: {
  //       touristName: user?.displayName,
  //       touristEmail: user?.email,
  //       touristImage: user?.photoURL
  //     },
  //     host: singlePackage?.host?.service_provider_email,
  //     title: singlePackage?.title,
  //     price: singlePackage?.price,
  //     tour_type: singlePackage?.tour_type,
  //     serviceId: singlePackage?._id,
  //     img: singlePackage?.img,
  //     location: singlePackage?.location
  //   })

  // }


         // const form = e.target;
        // const name = form.name.value;
        // const userEmail = user?.email;
        // const date = form.date.value;
        // const area = form.area.value;
        // const providerEmail = form.providerEmail.value;
        // const price = form.price.value;
        // const imgURL = form.imgURL.value;


  //   const [bookingInfo,setBookingInfo] = useState({
  //     guest: {
  //         touristName:user?.displayName, 
  //         touristEmail:user?.email, 
  //         touristImage: user?.photoURL
  //     },
  //     host: singlePackage?.host?.service_provider_email,
      // title: singlePackage?.title,
      // serviceId: singlePackage?._id,
  //     price: singlePackage?.price,
  //     tour_type: singlePackage?.tour_type,

  //     img: singlePackage?.img,
  //     location: singlePackage?.location
  // })

  //chat gpt provided
  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      touristName: user?.displayName || '',
      touristEmail: user?.email || '',
      touristImage: user?.photoURL || '',
    },
    date: '',
    area: singlePackage?.location || '',
    TourGuide: singlePackage?.host?.service_provider_email || '',
    price: singlePackage?.price || '',
    tour_type: 'Michael Wang',
    title: singlePackage?.title || '',
    serviceId: singlePackage?._id || '',
    image: singlePackage?.img || '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookingInfo((prevBookingInfo) => ({
      ...prevBookingInfo,
      [name]: value,
    }));
  };
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
    // Do something with the complete bookingInfo object, like sending it to a server
  //   console.log('Booking Info:', bookingInfo);
  // };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-11/12 max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Review Info Before Booking
                </Dialog.Title>
                {/* <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Service: {bookingInfo.title}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Location: {bookingInfo.location}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Guest: {bookingInfo.guest.touristName}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Price: $ {bookingInfo.price}
                  </p>
                </div>
                <hr className='mt-8 ' /> */}
                {/* My self made form */}
                {/* <section className="text-gray-600 body-font relative">
                  <div className="container px-5 py-5 mx-auto ">
                    <div className=" mx-auto">
                      <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -m-2">
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label className="leading-7 text-sm text-gray-600">Tour Title</label>
                              <input type="text" id="name" disabled defaultValue={bookingInfo?.title} name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                          </div>
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label className="leading-7 text-sm text-gray-600">Tourist Name</label>
                              <input type="text" id="name" disabled defaultValue={bookingInfo?.guest?.touristName} name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                          </div>
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label className="leading-7 text-sm text-gray-600">Tourist Email</label>
                              <input
                                defaultValue={bookingInfo?.guest?.touristEmail} disabled
                                type="email" id="phn" name="userEmail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                          </div>
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label className="leading-7 text-sm text-gray-600">Date</label>
                              <input
                                required
                                type="date"
                                id="date"
                                name="date"
                                value={bookingInfo.date}
                                onChange={handleChange}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              />
                            </div>
                          </div>
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label className="leading-7 text-sm text-gray-600">Area</label>
                              <input disabled type="text" id="" name="area" defaultValue={bookingInfo?.area} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                          </div>
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label className="leading-7 text-sm text-gray-600">Service Provider Email</label>
                              <input disabled defaultValue={bookingInfo?.providerEmail} type="email" id="providerEmail" name="providerEmail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                          </div>
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label className="leading-7 text-sm text-gray-600">Price</label>
                              <input disabled type="text" id="" name="price" defaultValue={bookingInfo?.price} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                          </div>
                          <div className='p-2 w-1/2 text-sm'>
                            <label htmlFor='category' className='block text-black'>
                              Tour Guide
                            </label>
                            <select
                              required
                              className='w-full px-4 py-3 text-base border-green-300 focus:outline-green-500 rounded-md'
                              name='tour_type'
                              value={bookingInfo.tour_type}
                              onChange={handleChange}
                            >
                              {tourGuide.map(guide => (
                                <option value={guide?.host?.service_provider_name} key={guide._id}>
                                  {guide?.host?.service_provider_name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="p-2 w-full ">
                            <input className="btn btn-primary w-full normal-case" type="submit" value="Book Package" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </section> */}
                {/* Card data form */}
                {/* Checkout Form */}
                <Elements stripe={stripePromise}>
                  <CheckoutForm closeModal={closeModal} bookingInfo={bookingInfo} handleChange={handleChange}></CheckoutForm>
                </Elements>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default BookingModal;

// const handleAddDonation = () =>{

//   const addDonatesArray = [];

//   const donateItem = JSON.parse(localStorage.getItem('donates'));

//   if(!donateItem){
//       addDonatesArray.push(card)
//       swal("Good job!", "Your Donation Successfully!", "success");
//       localStorage.setItem('donates',JSON.stringify(addDonatesArray));
//   }
//   else{
//       swal("Good job!", "Your Donation Successfully!", "success");
//       const isExits = donateItem.find((card)=>card.id === id)
//       if(!isExits){
//           addDonatesArray.push(...donateItem,card)
//           localStorage.setItem('donates',JSON.stringify(addDonatesArray));
          
//       }
//       else{
//           swal("Error!", "Already Exist!", "warning");
//       }

      
//   }
// }