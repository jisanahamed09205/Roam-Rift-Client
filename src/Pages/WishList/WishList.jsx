import { Helmet } from "react-helmet-async";

const WishList = () => {
    return (
        <div>
            <Helmet>
                <title>Roam Rift || Wish List</title>
            </Helmet>
        </div>
    );
};

export default WishList;

// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment, useState } from 'react'
// import useAuth from '../../Hook/useAuth';
// import { Elements } from '@stripe/react-stripe-js';

// import { loadStripe } from '@stripe/stripe-js'
// import CheckoutForm from '../Form/CheckoutForm/CheckoutForm';

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK_Stripe)


// const BookingModal = ({ closeModal, isOpen, singlePackage }) => {
//   const {user} = useAuth();
//   const [bookingInfo, setBookingInfo] = useState({
//     guest: {
//       touristName: user?.displayName || '',
//       touristEmail: user?.email || '',
//       touristImage: user?.photoURL || '',
//     },
//     date: '',
//     area: singlePackage?.location || '',
//     providerEmail: singlePackage?.host?.service_provider_email || '',
//     price: singlePackage?.price || '',
//     tour_type: 'Michael Wang',
//     title: singlePackage?.title || '',
//     serviceId: singlePackage?._id || '',
//   });
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setBookingInfo((prevBookingInfo) => ({
//       ...prevBookingInfo,
//       [name]: value,
//     }));
//   };
//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as='div' className='relative z-10' onClose={closeModal}>
//         <Transition.Child
//           as={Fragment}
//           enter='ease-out duration-300'
//           enterFrom='opacity-0'
//           enterTo='opacity-100'
//           leave='ease-in duration-200'
//           leaveFrom='opacity-100'
//           leaveTo='opacity-0'
//         >
//           <div className='fixed inset-0 bg-black bg-opacity-25' />
//         </Transition.Child>

//         <div className='fixed inset-0 overflow-y-auto'>
//           <div className='flex min-h-full items-center justify-center p-4 text-center'>
//             <Transition.Child
//               as={Fragment}
//               enter='ease-out duration-300'
//               enterFrom='opacity-0 scale-95'
//               enterTo='opacity-100 scale-100'
//               leave='ease-in duration-200'
//               leaveFrom='opacity-100 scale-100'
//               leaveTo='opacity-0 scale-95'
//             >
//               <Dialog.Panel className='w-11/12 max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
//                 <Dialog.Title
//                   as='h3'
//                   className='text-lg font-medium text-center leading-6 text-gray-900'
//                 >
//                   Review Info Before Booking
//                 </Dialog.Title>
//                 <Elements stripe={stripePromise}>
//                   <CheckoutForm closeModal={closeModal} bookingInfo={bookingInfo} handleChange={handleChange}></CheckoutForm>
//                 </Elements>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   )
// }

// export default BookingModal;