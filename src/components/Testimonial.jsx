import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Testimonial() {
const  testimonialData = [
{
  image: "../images/avatar1.png",
  content: "I travel frequently for business and my experience with WTi Rent a car in Dubai has been nothing short of exceptional. The chauffeurs are always professional, the cars immaculate, and the service timely. Their tech platform makes bookings and tracking incredibly easy. Highly recommended for anyone seeking reliable transportation in the city.",
  name: "Samantha Al-Rashid",
  designation: "Traveller",

},
{
  image: "../images/avatar2.png",
  content: "Partnering with WTi Rent a car for our corporate transportation needs was one of the best decisions we’ve made. Their flexibility and diverse fleet options have proven invaluable to our operations. The added bonus? Their commitment to sustainability aligns perfectly with our company’s values.",
  name: "Mohammed Iqbal",
  designation: "Traveller",

},
{
  image: "../images/avatar1.png",
  content: "On my first visit to Dubai, I chose WTi Rent a car for a day tour around the city. The self-drive option gave me the freedom to explore at my own pace. The vehicle was in excellent condition, and the staff was helpful with recommendations. It made my trip memorable!",
  name: "Ayesha Farooq",
  designation: "Tourist",

}
]
  return (
    <div className='w-full flex justify-center items-center '>
    <div className='w-[90%] mt-4'> 
        <div className='text-[35px] font-semibold text-center text-blue-950'>Testimonials</div>
        <div className='h-[2px] rounded-full mb-12 w-[12%] bg-blue-950 mx-auto'></div>
        <div className='flex justify-center items-center'>
        <div className='w-[90%] h-[55vh] gap-4 grid grid-cols-3 mt-4 max-sm:block '>
          {testimonialData.map((items, index) =>(
        <div key={index}  className='bg-slate-100 border pt-12 px-6 text-center relative hover:shadow-2xl max-sm:pb-10'>
          <div className='absolute top-[-45px] left-[40%] w-[25%] h-[25%] rounded-full  '>
          {/* <div className='w-full h-full'>{items.image}</div> */}
          <img src={items.image} alt='' className='w-full rounded-full shadow-lg' />
        {/* <AccountCircleIcon className='text-[80px] text-blue-950 '/> */}
        </div>
        <div className='pt-2'>
    <FormatQuoteIcon className='text-blue-950 transform -scale-x-100 -scale-y-100 '/>{items.content}<FormatQuoteIcon className='text-blue-950'/><div className='absolute bottom-8 max-sm:bottom-0  '><span className='text-blue-950 font-bold text-[18px]'>{items.name}</span> <span className='text-[12px]'>{items.designation}</span></div></div>
</div>
 ))}
        </div>

        </div>
    </div>
    </div>
  )
}

export default Testimonial