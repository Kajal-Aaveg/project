import React, { useRef } from 'react'

function OffersPopup() {

    const getEmail = useRef();

    const handleSaveForm = () => {
        console.log(getEmail.current.value);
    }

  return (
    <div className='w-full h-full flex justify-center item-center mt-14 bg-transparent max-sm:mt-0 ' >
        <div className='w-[80%] flex max-sm:w-full max-sm:block '>      
            <div className='w-[50%] max-sm:w-full'>
                <img src="../images/wtilogo.png" alt="" className='hidden w-[50%] mx-20 max-sm:block'/>
            <img src="../images/offersimg.jpg" alt="" className='max-sm:hidden'/>
            </div>
            <div className='w-[50%] bg-gradient-to-b flex-col justify-center from-[#759AAA] via-[#BFA4B5] to-[#CC9B94] max-sm:w-full ' >
                <h1 className='text-[45px] text-white font-bold px-20 py-4 drop-shadow-lg leading-tight max-sm:px-5 ' >Get Exclusive Dubai Itineraries And Offers Delivered Right To Your Inbox</h1>
                <p className='text-[28px] text-white px-20 max-sm:px-5 '>Sign up to get exclusive offers</p>
                <div className=' px-20 mt-3 max-sm:px-5 ' >
                <input ref={getEmail} type="email" placeholder='Email' className='w-full p-3 border-2 border-white bg-transparent text-white placeholder-white rounded outline-none '/>
                <button onClick={handleSaveForm} className='w-full bg-white mt-3 p-2 rounded text-[25px] shadow-md font-bold '>Send Me Offers</button>
                <button className='w-full bg-transparent text-white text-[22px] font-semibold p-3  '>No, Thanks</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OffersPopup