import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Testing from './Testing';
import { useParams } from 'react-router-dom';
import '../App.css';


function Blog1() {
    const [blog, setBlog] = useState({});
    const [postDate, setPostDate]=useState();
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
     
    const divRef = useRef();
const slug=useParams().slug;

    useEffect(() => {
        const fun=async()=>{
            try{
                const response=await fetch(`http://192.168.1.149:5000/0auth/blogs/${slug}`,{
                    method:'GET',
                    headers:{
                        'content-Type':'application/json',
                    },
                    credentials:'include',
                   });  
    
                   const resData=await response.json();
                   const date=new Date(resData.createdAt);
                   const foramtDate=new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'short'}).format(date);
                //   console.log();
                   setPostDate(foramtDate.replace(/\W/g,' '));
                //    console.log(postDate);
                   
                   setBlog(resData);
                   divRef.current.innerHTML = resData.paragraph;
                   console.log(resData);
            }
            catch(err){
                 console.log(err);
            } 
        }

        fun();
    //   console.log(slug);
      
       


    
     
    }, [])
    
  return (
    <div>
        <div className=' w-full flex justify-center' >
                <div className='w-[85%] justify-center items-center text-[15px]  p-5 ' >
                    <div>
                    <h5 className='text-[10px]' >{blog.categories}</h5>
                   <h1 className='font-bold text-[30px] ' >{blog.title}</h1>
                   <h5 className='text-[10px]' >{postDate}/Global</h5>
                   <div className='flex justify-center items-center ' >
                   <img src={blog.image} alt="" className=' py-6 ' />
                   </div>
                   </div>

                <div >
                <h1 className='font-bold text-[30px] ' >Introduction</h1>
                <div className='bimg'>
                <div className='blogimages' ref={divRef}>
                </div>
                </div>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vel aliquid suscipit quaerat ullam laborum tenetur beatae. Modi ipsa possimus quam illum commodi maxime quis eum repellendus dolores unde exercitationem quas, error id sed numquam ratione labore corrupti inventore sint.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod ad quia quas repellendus! In deserunt vero alias deleniti sed minus rerum cupiditate esse possimus sint omnis eum rem autem, cum voluptatibus sunt quae sapiente numquam quisquam recusandae inventore, explicabo, amet pariatur. Cupiditate deserunt dicta provident eos ex. Nam nesciunt repudiandae dolorem, porro minima quis, veniam quod magnam voluptates eveniet quo iure laborum nihil id totam fuga et optio? Cupiditate eos ipsam iusto vitae dolorum dicta. Sunt tempore, labore minima assumenda deleniti eveniet, mollitia illum repudiandae voluptas at, nostrum amet. Exercitationem illo corrupti perspiciatis quam quaerat, quas praesentium suscipit! Molestiae.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non, ad unde vel officiis reiciendis voluptate optio? Eius quod itaque sapiente sit molestiae totam perspiciatis cum, eum unde adipisci, placeat iusto ad odit deserunt iure similique ratione fuga nam dolores accusamus accusantium eos veritatis quam ipsa? Sit ratione asperiores quod?</p><br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae tempora quas quaerat, ipsam doloremque animi earum aliquam facilis libero temporibus cumque architecto harum et consequuntur enim? Ratione, obcaecati omnis?</p> */}
                <p></p>
                
                </div>

                <div className='text-center font-bold m-8 text-[22px] '>
                    <a href="#"><u>Related Articles</u></a>
                </div>

                   <div className='flex justify-center items-center  ' >
                    <div className='grid grid-cols-3  '>
                {
                    data.map((items, index,) => (

                        <div key={index} className=' rounded  bg-[#f2f2f2] m-7 '>  
                            
                                <div>
                                    <img src={"../images/" + items.image} alt="" className=' w-full rounded' />

                                </div>
                                <div>
                                    <h1 className='font-bold text-[18px] p-5 pt-[30px]'>
                                        {items.content}</h1>
                                </div>
                                <div>
                                    <p className=' text-[18px] p-5 pt-[30px]'>
                                        {items.date}</p>
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
            <div className='text-center font-bold mb-[30px] text-[22px] '>
                    <a href="#"><u>View more stories</u></a>
                </div>
                    <div className=' mt-4 mb-5 flex justify-center items-center max-sm:w-full max-sm:mt-16 '>
                    <div className=' w-[45%] py-4  bg-[#f2f2f2]  rounded text-center max-sm:h-full max-sm:w-full ' >
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

export default Blog1