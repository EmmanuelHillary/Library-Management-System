import React from 'react'

const BookComponent = ({title, author, image, id}) => {
  return (
    <div className='flex flex-col justify-center items-start'>
      <div className='bg-blue-500 h-full w-full max-w-[215px] max-h-[302px]'> 
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className="px-6 py-2">
      <h3 className='text-[#000] font-medium'>{title}</h3>
      <small className='text-[#9B9B9B] font-light'>{author}</small>      
      </div>
    </div>
  )
}

export default BookComponent
