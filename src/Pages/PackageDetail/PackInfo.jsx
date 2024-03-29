const PackInfo = ({ singlePackage }) => {
    return (
      <div className=' my-5 col-span-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div
            className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
          >
            <div>Hosted by {singlePackage?.host?.service_provider_name}</div>
  
            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              src={singlePackage?.host?.service_provider_img}
            />
          </div>
        </div>
  
        <hr />
        <div
          className='
          text-lg font-light text-neutral-500 grid grid-cols-2'
        >
          {singlePackage?.description}
        </div>
        <hr />
      </div>
    )
  }
  
export default PackInfo