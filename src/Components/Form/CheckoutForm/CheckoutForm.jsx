import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import './CheckoutForm.css'
import { ImSpinner9 } from 'react-icons/im'
import useAuth from '../../../Hook/useAuth'
import { createPaymentIntent, saveBookingInfo } from '../../../api/bookings'
import { swal } from 'sweetalert';
import { useNavigate } from 'react-router-dom'

const CheckoutForm = ({ bookingInfo, closeModal,handleChange }) => {
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()

  const [tourGuide, setTourGuide] = useState([]);

  useEffect(() => {
    fetch("https://roam-rift-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setTourGuide(data));
  }, []);

  // Create Payment Intent
  useEffect(()=>{
    //create payment intent
    if(bookingInfo.price > 0){
      createPaymentIntent({price: bookingInfo.price}).then((data)=>{
        console.log(data.clientSecret)
        setClientSecret(data.clientSecret)
      })
    }
  },[bookingInfo])

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(bookingInfo);

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    // card data lookup (asynchronous network call)
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message)
    } else {
      setCardError('')
      console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    // Taka katar jayga
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      })

    if (confirmError) {
      console.log(confirmError)
      setCardError(confirmError.message)
    }

    console.log('payment intent', paymentIntent)

    if (paymentIntent.status === 'succeeded') {
      // save payment information to the server
      const paymentInfo = {
        ...bookingInfo,
        transactionId: paymentIntent.id,
        date: new Date(),
      }
      //save payment information to the server
      try{
        await saveBookingInfo(paymentInfo)
        navigate('/dashboard/my-bookings')
      } catch(err){
        console.log(err);
        swal("Error!", err.message, "warning");
      }finally{
        setProcessing(false)
      }
      // Update room status in db

      setProcessing(false)
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font relative">
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
                    <label className="leading-7 text-sm text-gray-600">Area</label>
                    <input disabled type="text" id="" name="area" defaultValue={bookingInfo?.area} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Service Provider Email</label>
                    <input disabled defaultValue={bookingInfo?.TourGuide} type="email" id="providerEmail" name="providerEmail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Price</label>
                    <input disabled type="text" id="" name="price" defaultValue={bookingInfo?.price} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                {/* <div className="p-2 w-full ">
                  <input className="btn btn-primary w-full normal-case" type="submit" value="Book Package" />
                </div> */}
              </div>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              /> 
              <div className='flex mt-2 justify-around'>
                <button
                  type='button'
                  className='inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  disabled={!stripe || !clientSecret || processing}
                  className='w-1/2 inline-flex justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-black hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                >
                  {processing ? (
                    <ImSpinner9 className='m-auto animate-spin' size={24} />
                  ) : (
                    `Pay ${bookingInfo.price}$`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm

  // < form className = 'my-2' onSubmit = { handleSubmit } >
  //       <CardElement
  //         options={{
  //           style: {
  //             base: {
  //               fontSize: '16px',
  //               color: '#424770',
  //               '::placeholder': {
  //                 color: '#aab7c4',
  //               },
  //             },
  //             invalid: {
  //               color: '#9e2146',
  //             },
  //           },
  //         }}
  //       />
  //       <div className='flex mt-2 justify-around'>
  //         <button
  //           type='button'
  //           className='inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
  //           onClick={closeModal}
  //         >
  //           Cancel
  //         </button>
  //         <button
  //           type='submit'
  //           disabled={!stripe || !clientSecret || processing}
  //           className='w-1/2 inline-flex justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-black hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
  //         >
  //           {processing ? (
  //             <ImSpinner9 className='m-auto animate-spin' size={24} />
  //           ) : (
  //             `Pay ${bookingInfo.price}$`
  //           )}
  //         </button>
  //       </div>
  //     </form >