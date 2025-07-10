import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoCloseOutline } from 'react-icons/io5'

const Popupbox = ({orderPopup, handleOrderPopup}) => {
  const [submit, setSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm("all");

  const submitHandler = (data) => {
    const namelength = data.name.length;
    const emaillength = data.email.length;
    const addresslength = data.address.length;

    setSubmit(false);
    if(namelength > 0 && emaillength > 0 && addresslength > 0)
      setSubmit(true);
  }
  
  return (
    <div>
      {
        orderPopup && (
          <div className='fixed top-0 left-0 z-20 h-screen w-screen backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900
              dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px]'>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className='flex justify-between items-center'>
                  <h1>Order Your Book</h1>
                  <IoCloseOutline className='text-2xl cursor-pointer' onClick={handleOrderPopup} />
                </div>
                <div className='space-y-6 py-6'>
                  {
                    ["Name", "Email", "Address"].map((text, i) => (
                      <div key={i}>
                        <input placeholder={`${text}`} 
                          className='rounded-3xl p-2 w-full outline outline-1 outline-gray-500 
                            dark:outline-1 dark:outline-white/80 border-0 dark:bg-gray-700 px-4' 
                            {...register(`${text.toLowerCase()}`, {
                              required : {
                                value: true,
                                message: `Pls enter the ${text}` 
                              },
                          })}
                        />
                        {/* it is same as     errors.name, errors.email but dynamically */}
                        <span className='text-rose-500'>{errors[`${text.toLowerCase()}`]?.message}</span>
                      </div>
                    ))
                  }
                </div>
                <div className='flex justify-center'>
                  <button className='button' type="submit" onClick={submit && handleOrderPopup}>
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Popupbox