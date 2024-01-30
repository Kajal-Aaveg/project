import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



function Blogs() {
    const data = [
        {
            image: "bi2.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October / Global",

        },
        {
            image: "bi3.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber ",
            date: "26 October / Global",

        },
        {
            image: "bi4.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October / Global",

        },
        {
            image: "bi2.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October / Global",

        },
        {
            image: "bi3.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October / Global",

        },
        {
            image: "bi4.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October / Global",

        },

    ]
    return (
        <div>
            <div className=' w-full flex justify-center' >
                <div className='w-[85%] justify-center items-center text-[15px]  p-5 ' >
                    <div className='flex w-full h-[5vh] 0 mb-4 text-[#00004d] '>
                        <h1 className='pr-[30px] font-bold '>WTI Blogs</h1>
                        <h1 className='pr-[15px] font-bold '>Explore</h1><div><KeyboardArrowDownIcon /></div>
                    </div>
                    <div className=' h-[60vh] flex max-sm:block '>
                        <div className=' h-[60vh] flex w-[50%] max-sm:w-full max-sm:h-[30vh]  ' >
                            <img src="./images/blogimg1.jpg" alt="" className=' h-[60vh] w-full max-sm:h-[30vh] ' />

                        </div>
                        <div className=' h-[60vh] bg-[#f2f2f2] w-[50%] flex-col justify-center items-center max-sm:w-full max-sm:h-[32vh] ' >
                            <h1 className='p-16 pb-[0px] font-bold max-sm:p-8 '>Real-Time Analytics for MobileApp Crashes using Apache Pinot</h1>
                            <p className='p-16 pt-[20px] max-sm:p-8 max-sm:pt-[4px] '>
                                Updating enterprise-scale software and infrastructure without creating unintentional downstream issues is a daunting task–we leveraged ApachePinot to create Healthline, a tool for minimizing release errors in real time and at Uberscale.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 '>
                {
                    data.map((items, index,) => (

                        <div key={index} className=' rounded w-[95%] bg-[#f2f2f2] m-7 '>  
                            <div >
                                <div>
                                    <img src={"./images/" + items.image} alt="" className=' w-full rounded' />

                                </div>
                                <div>
                                    <h1 className='font-bold text-[18px] p-5 pt-[30px]'>
                                        {items.content}</h1>
                                </div>
                                <div>
                                    <p className=' text-[18px] p-5 pt-[30px]'>
                                        {items.date}</p>
                                </div>
                            </div>

                            {/* <img src="./images/bi2.jpg" alt="" className=' w-full rounded' /> */}
                            {/* <h1 className='font-bold text-[18px] p-5 pt-[30px]'>Use Passkeys Wherever You Sign in to Uber</h1> */}
                            {/* <p className=' text-[18px] p-5 pt-[30px]' >26 October / Global</p> */}

                        </div>
                    )
                    )

                }

            </div>
                    {/* <div className='w-full h-[55vh] flex mt-10 max-sm:block max-sm:w-full max-sm:h-[100vh] ' >
                        <div className=' w-[32%] bg-[#f2f2f2] h-[55vh] mr-10 rounded max-sm:w-full max-sm:h-[40vh] max-sm:mt-4  '>
                            <img src="./images/bi2.jpg" alt="" className=' w-full rounded' />
                            <h1 className='font-bold text-[18px] p-5 pt-[30px]'>Use Passkeys Wherever You Sign in to Uber</h1>
                            <p className=' text-[18px] p-5 pt-[30px]' >26 October / Global</p>
                        </div>
                        <div className=' w-[32%] bg-[#f2f2f2] h-[55vh] mr-10 rounded max-sm:w-full max-sm:h-[40vh] max-sm:mt-4  '>
                            <img src="./images/bi3.jpg" alt="" className=' w-full rounded' />
                            <h1 className='font-bold text-[18px] p-5 pt-[30px]'>Use Passkeys Wherever You Sign in to Uber</h1>
                            <p className=' text-[18px] p-5 pt-[30px]' >26 October / Global</p>
                        </div>
                        <div className=' w-[32%] bg-[#f2f2f2] h-[55vh] rounded max-sm:w-full max-sm:h-[40vh] max-sm:mt-4 '>
                            <img src="./images/bi4.jpg" alt="" className=' w-full rounded ' />
                            <h1 className='font-bold text-[18px] p-5 pt-[30px]'>Use Passkeys Wherever You Sign in to Uber</h1>
                            <p className=' text-[18px] p-5 pt-[30px]' >26 October / Global</p>
                        </div>
                    </div>
                    <div className='w-full h-[55vh] flex mt-10 max-sm:block max-sm:h-[120vh] max-sm:w-full ' >
                        <div className=' w-[32%] bg-[#f2f2f2] h-[55vh] mr-10 rounded max-sm:w-full max-sm:h-[40vh] max-sm:mt-4  '>
                            <img src="./images/bi2.jpg" alt="" className=' w-full rounded ' />
                            <h1 className='font-bold text-[18px] p-5 pt-[30px]'>Use Passkeys Wherever You Sign in to Uber</h1>
                            <p className=' text-[18px] p-5 pt-[30px]' >26 October / Global</p>
                        </div>
                        <div className=' w-[32%] bg-[#f2f2f2] h-[55vh] mr-10 rounded max-sm:w-full max-sm:h-[40vh] max-sm:mt-4  '>
                            <img src="./images/bi3.jpg" alt="" className=' w-full rounded ' />
                            <h1 className='font-bold text-[18px] p-5 pt-[30px]'>Use Passkeys Wherever You Sign in to Uber</h1>
                            <p className=' text-[18px] p-5 pt-[30px]' >26 October / Global</p>
                        </div>
                        <div className=' w-[32%] bg-[#f2f2f2] h-[55vh] rounded max-sm:w-full  max-sm:h-[40vh] max-sm:mt-4 '>
                            <img src="./images/bi4.jpg" alt="" className=' w-full rounded  ' />
                            <h1 className='font-bold text-[18px] p-5 pt-[30px]'>Use Passkeys Wherever You Sign in to Uber</h1>
                            <p className=' text-[18px] p-5 pt-[30px]' >26 October / Global</p>
                        </div>
                    </div> */}
                    <div className=' mt-4 mb-5 flex justify-center items-center max-sm:w-full max-sm:mt-16 '>
                    <div className=' w-[45%] h-[21vh] bg-[#f2f2f2] rounded text-center max-sm:h-full max-sm:w-full ' >
                        <h1 className='text-[20px] font-bold pt-[10px] '>Want to know more?</h1>
                        <p className='font-semibold pt-[10px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <button className='w-[20%] p-1 bg-black text-white rounded-3xl mt-[10px] max-sm:w-[30%] max-sm:mb-2 '>Contact Us</button>
                    </div>
                        
                    </div>
                </div>
            </div>
            <div className='bg-[#6e6e6e] flex justify-center items-center  '>
            <div className='w-[90%] h-[40vh] bg-[#6e6e6e] flex text-white max-sm:block max-sm:h-full ' >
                <div className='w-[20%] p-10 max-sm:w-full ' >
                <h1 className='font-bold mb-4' >Company Info</h1>
                <a href='#' >About WTi Car Rental</a> <br/>
                <a href='#'>Blogs</a>
                </div>
                <div className='w-[20%] p-10 max-sm:w-full max-sm:pt-1 ' >
                <h1 className='font-bold mb-4'>Car Rentals</h1>
                <a href='#'>Self Drive Cars</a> <br/>
                <a href='#'>Chauffer Driven Cars</a><br/>
                <a href='#'>Our locations</a><br/>
                <a href='#'>Offers</a><br/>
                </div>
                <div className='w-[20%] p-10 max-sm:w-full max-sm:pt-1 ' >
                <h1 className='font-bold mb-4'>Business</h1>
                <a href='#' >Our Offerings</a> <br/>
                <a href='#'>Contact Us</a>
                </div>
                <div className='w-[20%] p-10 max-sm:w-full max-sm:pt-1 ' >
                <h1 className='font-bold mb-4'>Security & Privacy</h1>
                <a href='#'>Terms of Use</a> <br/>
                <a href='#'>Privacy Policy</a>
                </div>
                <div className='w-[30%] p-10 max-sm:w-full max-sm:pt-1 ' >
                <h1 className='font-bold mb-4'>Social Media</h1>
                <div className='flex '>
                <div className=''><LinkedInIcon/></div>
                <div><TwitterIcon/></div>
                <div><FacebookIcon/></div>
                <div><InstagramIcon/></div>
                </div>
                </div>
            </div>
            </div>
            <div className='bg-[#6e6e6e] h-[10vh] pt-[6px] max-sm:flex max-sm:justify-center max-sm:items-start '>
            <img src="./images/app.png" alt="" className=' w-[30%] rounded float-right pr-[20px] max-sm:w-[70%]  ' />
            </div>
            <div className='h-[15vh] bg-[#6e6e6e] pt-10 max-sm:p-5  '>
            <h1 className='text-center text-white'>Copy right by Wise Travel India Private Limited. All rights reserved.</h1>
            </div>

        </div>


    )
}

export default Blogs
