import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../../../Hook/useAuth';
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa6";


// const PackageCard = ({popularData}) => {

//     const {img,tour_type,title,price} = popularData;
//     const {user} =useAuth()
//     const navigate = useNavigate()
//     const handleAddWishList = wish =>{
//         if(user && user.email){
//             //send wish to database
//         }
//         else{
//             Swal.fire({
//                 title: "Your are not logged in",
//                 text: "Please login to add wish",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, Login!"
//               }).then((result) => {
//                 if (result.isConfirmed) {
//                     navigate('/login');
//                 }
//               });
//         }
//     }

//     return (
//         <div>
//             <div className="w-96 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mx-auto my-5">
//                 <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={img} />
//                 <button className="absolute right-0 mr-4 mt-4 btn btn-circle btn-sm" onClick={handleAddWishList}><FaHeart className="text-red-500 text-xl"></FaHeart></button>
//                 <div className="p-4">
//                     <h2 className="text-xl  font-semibold">{title}</h2>
//                     {/* <p className="text-gray-600">{service_description}</p> */}
//                     {/* <div className="flex justify-between items-center">
//                         <div className="avatar placeholder">
//                             <div className="bg-neutral-focus  rounded-full w-8 mr-2">
//                                 <img src={service_provider_img} alt="" />
//                             </div>
//                             <h6>{service_provider_name}</h6>
//                         </div>
//                         <div className="rating rating-sm">
//                             <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                             <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
//                             <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                             <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                             <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                         </div>
//                     </div> */}
//                     {/* <p><small>{service_area}</small></p> */}
//                     <h6>Tour Type: {tour_type}</h6>
//                     <h6>Price: ${price}</h6>
//                     <Link>
//                         <div className="flex justify-between items-center mt-4">
//                             <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">ViewDetails</button>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PackageCard;

const PackageCard = ({popularData}) => {
    const {img,tour_type,title,price} = popularData;
    return (
      <div className='col-span-1 cursor-pointer group mx-auto'>
        <div className='flex flex-col gap-2 w-96'>
          <div
            className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
          >
            <img
              className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
              src={img}
              alt='Card'
            />
            <div
              className='
              absolute
              top-3
              right-3
            '
            >
              {/* <HeartButton /> */}
            </div>
          </div>
          <div className='font-semibold text-lg'>{title}</div>
          <div className='font-light text-neutral-500'>
            5 nights . June 19 - 26
          </div>
          <div className='flex flex-row items-center gap-1'>
            <div className='font-semibold'>$ {price}</div>
            <div className='font-light'>{tour_type}</div>
          </div>
        </div>
      </div>
    )
  }
  
export default PackageCard