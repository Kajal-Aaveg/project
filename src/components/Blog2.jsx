import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { AiTwotoneCalendar, AiOutlineClockCircle } from 'react-icons/ai';


function Blog2() {
    const data = [
        {
            image: "bi2.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October |",
            time: "6 min"

        },
        {
            image: "bi3.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber ",
            date: "26 October |",
            time: "6 min"

        },
        {
            image: "bi4.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October |",
            time: "6 min"

        },
        {
            image: "bi2.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October |",
            time: "6 min"

        },
        {
            image: "bi3.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October |",
            time: "6 min"

        },
        {
            image: "bi4.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October |",
            time: "6 min"

        },

    ]

    const imgData = [
        {
            image: "bi2.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            time: "7 mins",
        },
        {
            image: "b1.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber;",
            time: "8 mins",
        },
        {
            image: "b1.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber;",
            time: "8 mins",
        }
    ]



    return (
        <div>
            <div className=" px-52 h-[85vh] w-[100%] flex justify-center items-end pb-28  bg-cover no-repeat bg-[url('https://th.bing.com/th/id/R.797e4ba481b7b05e44b8b749f0d1c327?rik=SokVKL5zrsefSg&riu=http%3a%2f%2fwww.factstoday.in%2fwp-content%2fuploads%2f2017%2f12%2f2.jpg&ehk=XxqlVV81nEfGpVm%2b8ou4NvuJErOKDW%2fhYm%2f75QWaQM4%3d&risl=&pid=ImgRaw&r=0')] max-sm:w-full max-sm:h-full max-sm:px-8 max-sm:py-8 ">
                <div>
                    <button className="bg-orange-400 px-2 py-1 rounded-xl text-white font-bold text-sm ">fitness</button>
                    <h1 className="text-white text-4xl font-bold ">Toning, Flexibility, And Strength⁠— Can Yoga Do It All Flexibility, And Strength⁠— Can Yoga?</h1>
                    <p className="text-white flex items-center gap-1 " ><AiTwotoneCalendar />Jul 13, 2022 | <AiOutlineClockCircle /> 34 min</p>

                </div>
            </div>
            <div className=' w-full flex justify-center' >
                <div className='w-full justify-center items-center text-[15px]  p-5 max-sm:p-2 ' >
                    {/* <div>
                        <h5 className='text-[10px] ' >Engineering, Backend, Mobile, Web</h5>
                        <h1 className='font-bold text-[30px] pl-10 ' >Use Passkeys Wherever You Sign in to Uber</h1>
                        <h5 className='text-[10px]' >26 October/Global</h5>
                        <div className='flex justify-center items-center ' >
                            <img src="./images/b1.jpg" alt="" className=' py-6 ' />
                        </div>
                    </div> */}

                    <div className=' w-full flex max-sm:block ' >
                        <div className='w-[3%] mt-24 max-sm:my-8  ' >
                            <div className=' text-xl pl-[40px] sticky top-0  max-sm:flex '>
                                <div className=''><LinkedInIcon /></div>
                                <div><TwitterIcon /></div>
                                <div><FacebookIcon /></div>
                                <div><InstagramIcon /></div>
                            </div>

                        </div>
                        <div className=' w-[60%] px-10 ml-28 max-sm:w-full max-sm:ml-0 ' >
                            <h1 className='font-bold text-[30px] ' >Introduction</h1>
                            <div className='text-[16px] leading-7 '>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vel aliquid suscipit quaerat ullam laborum tenetur beatae. Modi ipsa possimus quam illum commodi maxime quis eum repellendus dolores unde exercitationem quas, error id sed numquam ratione labore corrupti inventore sint.</p>
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod ad quia quas repellendus! In deserunt vero alias deleniti sed minus rerum cupiditate esse possimus sint omnis eum rem autem, cum voluptatibus sunt quae sapiente numquam quisquam recusandae inventore, explicabo, amet pariatur. Cupiditate deserunt dicta provident eos ex. Nam nesciunt repudiandae dolorem, porro minima quis, veniam quod magnam voluptates eveniet quo iure laborum nihil id totam fuga et optio? Cupiditate eos ipsam iusto vitae dolorum dicta. Sunt tempore, labore minima assumenda deleniti eveniet, mollitia illum repudiandae voluptas at, nostrum amet. Exercitationem illo corrupti perspiciatis quam quaerat, quas praesentium suscipit! Molestiae.</p>
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non, ad unde vel officiis reiciendis voluptate optio? Eius quod itaque sapiente sit molestiae totam perspiciatis cum, eum unde adipisci, placeat iusto ad odit deserunt iure similique ratione fuga nam dolores accusamus accusantium eos veritatis quam ipsa? Sit ratione asperiores quod?</p><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae tempora quas quaerat, ipsam doloremque animi earum aliquam facilis libero temporibus cumque architecto harum et consequuntur enim? Ratione, obcaecati omnis?</p>
                            </div>
                        </div>



                        <div className='w-[36%] h-[60vh] p-4 max-sm:w-full max-sm:h-full max-sm:pt-10 ' >
                            <h1 className='font-bold' >Featured</h1>
                            <div className='flex '>
                                <div className='w-[18%] h-1 bg-black '></div>
                                <div className='w-[90%] h-[1px] bg-stone-200 my-[1.5px] '></div>
                            </div >
                            <div className='w-full h-[45vh] mt-2 '>
                                <div className=''>
                                    {
                                        imgData.map((data, index) => (
                                            <div className='flex' key={index}>
                                                <div className='w-[35%] pt-[20px] pl-[10px]  '>
                                                    <img src={"../images/" + data.image} alt="" className='w-[80%] rounded h-16 ' />
                                                </div>
                                                <div className='w-[70%] py-[20px] '>
                                                    <a href="" className='font-bold cursor-pointer' >{data.content}</a>
                                                    <div className='items-center flex gap-1 text-stone-400' ><AiOutlineClockCircle /> {data.time} </div>
                                                </div>

                                                {/* <div className='w-[35%] pt-[20px] pl-[10px]  '>
                            <img src="../images/b1.jpg" alt="" className='w-[80%] rounded h-16 ' /> 
                        </div>
                        <div className='w-[70%] py-[20px] '>
                            <a href="Use Passkeys Wherever You Sign in to Uber" className='font-bold cursor-pointer ' >Use Passkeys Wherever You Sign in to Uber</a>
                            <div className=' text-sm text-stone-400 ' ><AccessTimeIcon/>7 min read</div>
                        </div> */}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className='border-[1px] w-[32vw] px-10 py-8 flex  flex-col gap-5 items-center mt-[110px] max-sm:w-full max-sm:mt-[-40px]  '>
                                <h1 className='font-bold text-center text-black text-lg w-[30vw] max-sm:w-full '>Join Our Newsletter and Get the Latest
                                    <br />Posts to Your Inbox</h1>
                                <div className='flex justify-around  w-[30vw] max-sm:block max-sm:w-full '>
                                    <input placeholder='Email Address' className=' w-[20vw] outline-none border-[1px] bg-slate-100  px-4 py-2 focus:border-green-300 rounded-md max-sm:w-full '  />
                                    <button className='bg-indigo-950 text-white px-3 py-2 rounded-md font-bold max-sm:w-full max-sm:my-2 '>subscribe</button>
                                </div>
                            </div>



                        </div>
                    </div>

                    {/* <div className='text-center font-bold m-8 text-[22px] '>
                        <a href="#"><u>Related Articles</u></a>
                    </div> */}

                    <div className='w-[40%]  flex mt-16 mb-10 ml-52 max-sm:w-full max-sm:mt-[30px] max-sm:ml-0 '>
                        <div className='p-4 w-[20%] max-sm:w-[40%]  ' ><h1 className='text-[14px] font-semibold  '>Post Tags:</h1></div>
                        <div className='flex  flex-wrap' >
                            <div className='w-[15%] text-center p-1 pl-0 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ' >
                                <a href="#" >CRD</a>
                            </div>
                            <div className='w-[15%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ' >
                                <a href="#" >MSP</a>
                            </div>
                            <div className='w-[15%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ' >
                                <a href="#" >LTR</a>
                            </div>
                            <div className='w-[15%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ' >
                                <a href="#" >ETS</a>
                            </div>
                            <div className='w-[15%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ' >
                                <a href="#" >Airport</a>
                            </div>
                            <div className='w-[15%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ' >
                                <a href="#" >Railway</a>
                            </div>
                            <div className='w-[20%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ' >
                                <a href="#" >Outstation</a>
                            </div>
                        </div>



                    </div>


                    <div className='w-[97%] pt-10 pl-8 max-sm:pt-2 ' >
                        <h1 className='font-semibold py-5 text-[20px] ' >You might also like</h1>
                        <div className='flex '>
                            <div className='w-[18%] h-1 bg-black '></div>
                            <div className='w-[100%] h-[1px] bg-stone-200 my-[1.5px] '></div>
                        </div >
                    </div >

                    <div className='flex justify-center items-center  ' >
                        <div className='grid grid-cols-3 max-sm:grid-cols-1 '>
                            {
                                data.map((items, index) => (

                                    <div key={index} className=' rounded  m-7 '>

                                        <div>
                                            <img src={"./images/" + items.image} alt="" className=' w-full rounded' />

                                        </div>
                                        <div>
                                            <h1 className='font-bold text-[18px] p-1 pt-[20px]'>
                                                {items.content}</h1>
                                        </div>
                                        <div className='flex' >
                                            <p className=' text-[12px] p-1 pt-[5px]'>
                                                {items.date}</p>
                                            <div className=' items-center flex gap-1 text-stone-400'><AiOutlineClockCircle />
                                                {items.time} </div>
                                            {/* <p className=' text-[12px] p-1 pt-[5px]'>
                                                {items.time}</p> */}
                                        </div>


                                        {/* <img src="./images/bi2.jpg" alt="" className=' w-full rounded' /> */}
                                        {/* <h1 className='font-bold text-[18px] p-5 pt-[30px]'>Use Passkeys Wherever You Sign in to Uber</h1> */}
                                        {/* <p className=' text-[18px] p-5 pt-[30px]' >26 October / Global</p> */}

                                    </div>
                                )
                                )

                            }

                        </div>
                    </div>
                    {/* <div className='border-[1px]  w-[50vw] px-10 py-8 flex  flex-col gap-5 items-center ml-10'>
            <h1 className='font-bold text-center text-black text-lg w-[30vw]  '>Join Our Newsletter and Get the Latest
            <br/>Posts to Your Inbox</h1>
            <div className='flex justify-around  w-[30vw]'>
                    <input placeholder='Email Address' className=' w-[20vw] outline-none border-[1px] bg-slate-100  px-4 py-2 focus:border-green-300 rounded-md' />
                        <button className='bg-pink-500 text-white px-3 py-2 rounded-md font-bold'>subscribe</button>
            </div>
          </div> */}
                    <br></br>
                    {/* <div className='border-[1px]  w-[50vw] px-10 py-8 flex  flex-col gap-5 items-center mx-auto'>
            <h1 className='font-bold text-center text-black text-lg w-[30vw]  '>Join Our Newsletter and Get the Latest
            <br/>Posts to Your Inbox</h1>
            <div className='flex justify-around  w-[30vw]'>
                    <input placeholder='Email Address' className=' w-[20vw] outline-none border-[1px] bg-slate-100  px-4 py-2 focus:border-green-300 rounded-md' />
                        <button className='bg-pink-500 text-white px-3 py-2 rounded-md font-bold'>subscribe</button>
            </div>
          </div> */}
                    {/* <div className='text-center font-bold mb-[30px] text-[22px] '>
                        <a href="#"><u>View more stories</u></a>
                    </div> */}
                    <div className='  flex justify-center items-center max-sm:w-full max-sm:mt-4 max-sm:mb-12 '>
                        <div className=' w-[45%] h-[21vh] bg-[#f2f2f2] mt-4 mb-5 border rounded text-center max-sm:h-full max-sm:w-full ' >
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
                        <a href='#' >About WTi Car Rental</a> <br />
                        <a href='#'>Blogs</a>
                    </div>
                    <div className='w-[20%] p-10 max-sm:w-full max-sm:pt-1 ' >
                        <h1 className='font-bold mb-4'>Car Rentals</h1>
                        <a href='#'>Self Drive Cars</a> <br />
                        <a href='#'>Chauffer Driven Cars</a><br />
                        <a href='#'>Our locations</a><br />
                        <a href='#'>Offers</a><br />
                    </div>
                    <div className='w-[20%] p-10 max-sm:w-full max-sm:pt-1 ' >
                        <h1 className='font-bold mb-4'>Business</h1>
                        <a href='#' >Our Offerings</a> <br />
                        <a href='#'>Contact Us</a>
                    </div>
                    <div className='w-[20%] p-10 max-sm:w-full max-sm:pt-1 ' >
                        <h1 className='font-bold mb-4'>Security & Privacy</h1>
                        <a href='#'>Terms of Use</a> <br />
                        <a href='#'>Privacy Policy</a>
                    </div>
                    <div className='w-[30%] p-10 max-sm:w-full max-sm:pt-1 ' >
                        <h1 className='font-bold mb-4'>Social Media</h1>
                        <div className='flex '>
                            <div className=''><LinkedInIcon /></div>
                            <div><TwitterIcon /></div>
                            <div><FacebookIcon /></div>
                            <div><InstagramIcon /></div>
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

export default Blog2