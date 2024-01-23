import Heading from "../../Shared/Heading"

const Header = ({ singlePackage }) => {
  return (
    <>
      <Heading title={singlePackage?.title} 
      subtitle={singlePackage?.location}
       />
      <div className='w-full md:h-full overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full'
          src={singlePackage?.img}
          alt='header image'
        />
      </div>
    </>
  )
}

export default Header