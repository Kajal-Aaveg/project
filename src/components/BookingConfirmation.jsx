import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';

function BookingConfirmation() {
  return (
    <div className='w-full flex justify-center items-center mt-4'>
        <div className='w-[70%]   '>
            <div className='w-full  py-6 flex justify-center items-center'>
            {/* <div className='w-[20%] bg-orange-400 '> 
            <CheckCircleIcon className='text-[100px] m-8 text-[#0891B2] '/>
            </div> */}
            {/* <div className='w-full justify-center items-center'>
            <p className='p-1 text-[25px] font-bold text-[#0891B2]'> YOUR BOOKING IS COMPLETE</p>
            <p className='p-1 text-[20px] font-bold'>Thank you for booking with us</p>
            <p className='p-1 text-[18px] font-semibold text-green-700'>You will soon receive an email confirmation </p>
            </div> */}
            <div className=' flex '> 
            <div className='mr-2'><CheckCircleIcon className='text-[100px] text-[#0891B2] '/></div>
            <div className='w-full justify-center items-center'>
            <p className='p-1 text-[25px] font-bold text-[#0891B2]'> YOUR BOOKING IS COMPLETE</p>
            <p className='p-1 text-[20px] font-bold'>Thank you for booking with us</p>
            <p className='p-1 text-[18px] font-semibold text-green-700'>You will soon receive an email confirmation </p>
            </div>
            </div>
            </div>
            <div className='w-full py-8'>
            <div className='flex items-center justify-center'>
            <div className='w-[30%] p-1 border-2 border-dotted text-center '>
            <div className='text-slate-500 text-[20px]'>Booking Reference</div>
            <div className='font-bold text-[18px]'>WTICABS123</div>
            </div>
            </div>
            <div className='flex items-center justify-center text-slate-500 text-[18px] p-3'>Date Booked: <span className='pl-1'>Sep 3, 2023</span></div>
            </div>

            
            
            <div className='w-[100%] flex justify-center items-center mt-5'>
            <div className='w-[75%] px-12  '>
                <div className='text-justify'>Thank you for successfully completing the payment for your car subscription plan with WTi Rent a Car LLC. To expedite the process and ensure a seamless experience, we kindly request you to upload scanned copies of your UAE Driving License and Emirates ID to the email sent to your registered email ID.
</div>
            </div>
            <div className='w-[25%] px-6'>
            <div><PrintOutlinedIcon className='text-[#72cc04] text-[60px]'/>
            <button className='text-white p-1 bg-[#72cc04] ml-2 font-semibold' >Print this page</button>
            </div>
            </div>
            </div>
        </div>  
    </div>
  )
}

export default BookingConfirmation