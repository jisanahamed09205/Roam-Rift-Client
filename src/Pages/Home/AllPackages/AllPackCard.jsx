import { Link } from "react-router-dom";

const AllPackCard = ({allData}) => {
    const {_id,img,tour_type,title,price} = allData;
    return (
      <div className='col-span-1 cursor-pointer group mx-auto'>
        <div className='flex flex-col gap-2 w-96'>
          <div
            className='aspect-square w-full relative overflow-hidden rounded-xl'>
            <img
              className='object-cover h-full w-full group-hover:scale-110 transition' src={img} alt='Card' />
            <div
              className='absolute top-3 right-3'>
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
          <Link to={`/packageDetail/${_id}`} className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
            View Package
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </Link>
        </div>
      </div>
    )
};

export default AllPackCard;