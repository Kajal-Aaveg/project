import React, { useState, useRef } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function TagTest() {
  const [blogdata, setBlogdata] = useState();
  const [data, setdata] = useState([]);
  const [imgData, setreldata] = useState([]);
  const [relBlog, setRelBlog] = useState([]);
  const [firstImgLink, setFirstImageLink] = useState(null);
  // const [isHovered, setIsHovered] = useState(false);

  // const containerStyle = {
  //   transition: 'transform 0.3s',
  //   transform: isHovered ? 'scale(1.01)' : 'scale(1)',
  // };

  const divRef = useRef(null);

  // const [relatedblog, setRelatedData]=useState([]);

  const [resdatablog, setFavBlog] = useState();
  const [favData, setFavData] = useState([]);
  console.log(typeof favData[0]?.image);

  //API CALL

  useEffect(() => {
    const func = async () => {
      const result = await fetch(
        "https://wticarrental.ae:3000/app/v1/blogs/allBlog",
        {
          method: "GET",
        }
      );
      const resdata = await result.json();
      setBlogdata(resdata);
      setdata(resdata);
    };

    const funcData = async () => {
      const result = await fetch(
        "https://www.wticarrental.ae:3000/0auth/Blog/getFavCategoriesblog",
        {
          method: "GET",
        }
      );

      // let response = await axios.get("http://43.205.205.54:5000/0auth/Blog/getFavCategoriesblog")
      const resdatablog = await result.json();

      setFavBlog(resdatablog);
      let resObj = resdatablog[0];
      // resdatablog.push(resObj);
      setFavData(resdatablog);
      setFirstImageLink(resdatablog[0].image);
      console.log(favData);
    };
  

    const relblogdata = async () => {
      const result = await fetch(
        "http://43.205.205.54:5000/0auth/Blog/getallRelativeBlog/Hotels",
        {
          method: "GET",
        }
      );
      const reldata = await result.json();

      reldata.map((rel, item) => {

        const date = new Date(rel.createdAt);
        const foramtDate = new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "short",
        }).format(date);
        const formattedTime = new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(date);
        const newObj = {
          image: rel.image,
          content: rel.title,
          paragraph: rel.paragraph,
          date: `${foramtDate}`,
          time: formattedTime,
        };

        setRelBlog(reldata);
        console.log(reldata);

        setreldata((prevObjects) => [...prevObjects, newObj]);
      });
    };

    func();
    funcData();
    relblogdata();
  }, []);

  const limitText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  // Set the maximum number of characters you want to display
  const maxCharacters = 200;

  const createMarkup = (content) => ({ __html: content });

  // const createMarkup = (html) => {
  //   // Sanitize the HTML using DOMPurify to prevent XSS attacks
  //   // const sanitizedHtml = DOMPurify.sanitize(html);

  //   return { __html: sanitizedHtml };
  // };

  const extractTextWithoutTags = (html) => {
    // Remove HTML tags and trim the content
    const plainText = html.replace(/<[^>]*>/g, '').trim();
    
    // Get the first 200 characters

    const limitedText = plainText.slice(0, 250);
    return { __html: limitedText };
    // return limitedText;
  };


  const funcDate = (timestamp) => {
    try {
      const date = new Date(timestamp);
  
      if (isNaN(date.getTime())) {
        // Invalid timestamp or date string
        throw new Error("Invalid time value");
      }
  
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(date);
  
      return formattedDate;
    } catch (error) {
      console.error("Error formatting timestamp:", error.message);
      return "Invalid Date";
    }
  };

  // const formatTime = (timestamp) => {
  //   try {
  //     const date = new Date(timestamp);
  
  //     if (isNaN(date.getTime())) {
  //       // Invalid timestamp or date string
  //       throw new Error("Invalid time value");
  //     }
  
  //     const formattedTime = new Intl.DateTimeFormat("en-US", {
  //       hour: "numeric",
  //       minute: "numeric",
  //     }).format(date);
  
  //     return formattedTime;
  //   } catch (error) {
  //     console.error("Error formatting timestamp:", error.message);
  //     return "Invalid Time";
  //   }
  // };
 
  console.log(firstImgLink);
 
 const Navigate=useNavigate();
  const handleClick = (slug) => {
    Navigate(`/blog/${slug}`)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
  };

  function truncateText(text, limit) {
    return text && text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  const navig = useNavigate();
  // const dispatch = useDispatch();
  const openContactModal = () => {
    navig("/contact-us");
  };

  return (
    <>
      {favData ? (
        <div className="w-full h-full flex justify-center items-center  ">
          <div className="w-[95%] max-sm:w-full ">
            <div className="w-full flex justify-center item-center max-sm:block   flex-col sm:flex-row ">
              <div
              className="w-[50%] h-[81vh] max-sm:h-[50vh] cursor-pointer hover:scale-[1.007] mr-1 max-sm:w-full max-sm:mb-1 bg-cover bg-center  "
              onClick={() => handleClick(favData[0]?.slugs)} >
                <div
                  style={{
                    "--image-url": `url(${
                      favData.length === 0 ? "" : favData[3]?.image
                    })`,
                  }}
                  className={`w-full h-full bg-no-repeat bg-cover bg-[image:var(--image-url)] max-sm:w-full `}
                >
                  <div className="w-full relative backdrop-brightness-[.60] h-full">
                    <h1 className="text-[22px] absolute bottom-16 px-4 font-bold text-white  ">
                    {truncateText(favData[0]?.title, 50)}
                    </h1>
                    <div className="flex pl-4 pt-4 max-lg:pt-2  ">
                      <div className=" text-[12px] absolute bottom-10 text-white pr-3 flex items-center justify-between ">
                
                        <DateRangeIcon className="text-[20px] mr-1" /> 
                        {funcDate(favData[0]?.createdAt)}
                        {}
                      </div>
                      <div className=" text-[12px] absolute bottom-10 left-[8rem] flex items-center justify-between gap-1 text-white ">
                        <AccessTimeIcon className="text-[20px] mr-1" />
                        {favData[0]?.readingtime}
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="h-[81vh] w-[50%] block max-sm:w-full" >
                <div 
                  style={{
                    "--image-url": `url(${
                      favData.length === 0 ? "" : favData[1]?.image
                    })`,
                  }}
                  className={`h-[40.3vh] cursor-pointer hover:scale-[1.008] w-[100%] bg-no-repeat bg-cover bg-[image:var(--image-url)] max-sm:w-full `}
                  onClick={() => handleClick(favData[1]?.slugs)} >
                  <div className="w-full backdrop-brightness-[.60] h-full">
                    <h1 className="text-[20px] pt-44 px-4 font-semibold text-white">
                    {truncateText(favData[1]?.title, 30)}
                    </h1>
                    <div className="flex pl-4 pt-1">
                      <div className=" text-[12px] text-white flex justify-between items-center pr-3 ">
                        <DateRangeIcon className="text-[20px] mr-1 " />{" "}
                        {funcDate(favData[1]?.createdAt)}
                      </div>
                      <div className=" text-[12px] items-center flex gap-1 text-white justify-between ">
                        <AccessTimeIcon className="text-[20px] mr-1" />
                        {favData[1]?.readingtime}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-1 gap-1">
                  <div  onClick={() => handleClick(favData[2]?.slugs)}
                    style={{
                      "--image-url": `url(${
                        favData.length == 0 ? "" : favData[2]?.image
                      })`,
                    }}
                    className={`h-[40vh] w-[50%] cursor-pointer hover:scale-[1.008] bg-no-repeat bg-cover bg-[image:var(--image-url)]`}
                  >
                    <div className="w-[100%] backdrop-brightness-[.60] h-full max-sm:w-full pt-3 ">
                      <h1 className="text-[20px] pt-32 px-3 font-semibold text-white max-sm:text-lg max-sm:px-3 ">
                      {truncateText(favData[2]?.title, 50)}
                      </h1>
                      <div className="flex pt-2">
                        <div className=" text-[12px] pl-3 text-white flex justify-between items-center pr-3 ">
                          <DateRangeIcon className="text-[20px] mr-1  " />{" "}
                          {funcDate(favData[2]?.createdAt)}
                        </div>
                        <div className=" text-[12px] items-center flex gap-1 text-white justify-between ">
                          <AccessTimeIcon className="text-[20px] " />{" "}
                          {favData[2]?.readingtime}

                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      "--image-url": `url(${
                        favData.length == 0 ? "" : favData[3]?.image
                      })`,
                    }}
                    className={`h-[40vh] w-[50%] cursor-pointer hover:scale-[1.008] bg-no-repeat bg-cover bg-[image:var(--image-url)] `}
                    onClick={() => handleClick(favData[3]?.slugs)}>
                    <div className="w-full backdrop-brightness-[.60] h-full pt-3 max-sm:w-full ">
                      <h1 className="text-[20px] pt-32 px-3 font-semibold text-white max-sm:text-lg max-sm:px-3">
                      {truncateText(favData[3]?.title, 50)}
                      </h1>
                      <div className="flex ">
                        <div className=" text-[12px] pl-3 pr-3 pt-2 text-white flex justify-between items-center ">
                          <DateRangeIcon className="text-[20px] mr-1 " />{" "}
                          {funcDate(favData[3]?.createdAt)}
                        </div>
                        <div className=" text-[12px] items-center pt-2 flex text-white justify-between ">
                          <AccessTimeIcon className="text-[20px]  mr-1" />{" "}
                          {favData[3]?.readingtime}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="w-full h-[30vh] my-8 flex justify-center items-center ">
              <div className="w-[100%] h-[30vh] block border border-gray-400 rounded-lg max-sm:px-2 ">
                <div className="w-full">
                  <h1 className="text-[22px] text-center font-semibold pt-8 text-indigo-950 max-sm:pt-5 ">
                    Get a weekly dose of latest stories and useful tips directly
                    in your inbox!
                  </h1>
                </div>
                <div className="flex justify-center items-center gap-5 py-10 max-sm:py-5 max-sm:gap-2 max-sm:px-4 ">
                  <div className=" w-[30%] max-sm:w-full ">
                    <input
                      type="text"
                      className="w-full h-[6vh] rounded-lg outline-none p-2  border-[2px]  border-gray-400  "
                    />
                  </div>
                  <div className=" w-[10%] max-sm:w-[50%] ">
                    <button className="w-full h-[6vh] bg-indigo-950 text-white rounded-lg text-xl  ">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="font-semibold px-8 text-[18px]">
                Trending Topics
              </div>
              <div className="flex justify-end ">
                <div className="mr-2">View All </div>
                <div className="rounded bg-slate-200">
                <ArrowForwardIosIcon />
              </div>
              </div>
            
            </div>
            <div className="flex justify-center  items-center  ">
              <div className="grid grid-cols-3  gap-0 max-sm:grid-cols-1" >
                {favData.map((items, index) => (
                  <div key={index} className=" rounded  m-7" onClick={() => handleClick(items?.slugs)} >
                    <div>
                      <img
                        src={items?.image}
                        alt=""
                        className=" w-full rounded bg-center bg-cover  cursor-pointer hover:scale-[1.008] h-[13rem]"
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] p-1 pt-[20px]">
                        {items?.title}
                      </h1>
                    </div>
                    <div className="flex">
                      <div className=" text-[12px] text-stone-400 pr-3 flex justify-between items-center   ">
                        <DateRangeIcon className="text-[20px] mr-1" />
                        {funcDate(items?.createdAt)}
                      </div>
                      <div className=" items-center  text-[12px] flex justify-between  text-stone-400">
                        <AccessTimeIcon className="text-[20px] mr-1" />
                        {items?.readingtime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex max-sm:block ">
              <div className="w-[60%]  px-10  max-sm:w-full max-sm:h-full ">
                <h1 className="font-bold pt-6 ">You Might Also Like</h1>
                <div className="flex  pb-3">
                  <div className="w-[18%] h-1 bg-black  "></div>
                  <div className="w-[100%] h-[1px] bg-stone-200 my-[1.5px]  "></div>
                </div>
                <div className="w-full mt-2  ">
                  <div className="text-[11pt] font-['Average_Sans'] ">
                    {favData.map((data, index) => (
                      <div className="flex  max-sm:block max-sm:pt-4  " key={index} onClick={() => handleClick(data?.slugs)}>
                        <div className="w-[50%] cursor-pointer hover:scale-[1.008]  h-[13rem] mb-7 max-sm:w-full ">
                          <img
                            src={data?.image}
                            alt=""
                            className="w-full rounded h-full "
                          />
                        </div>
                        <div className="w-[50%]  px-4 max-sm:w-full max-sm:px-0  ">
                          <a href="" className="font-bold cursor-pointer  ">
                            {data?.title}
                          </a>
                          <div className="w-[100%] pt-4" ref={divRef}>
                            {/* <a href="" className=' cursor-pointer' >{data.para}</a> */}
                            {/* <p className="" dangerouslySetInnerHTML={createMarkup(data?.paragraph.slice(0,300))}/> */}
                            <p className="" dangerouslySetInnerHTML={extractTextWithoutTags(data?.paragraph)}/>

                          </div>
                          <div className="flex mt-5 ">
                            <p className=" text-[12px] pr-2 text-stone-400 flex justify-between items-center gap-1 ">
                              <DateRangeIcon className="text-[20px] " />
                              {funcDate(data?.createdAt)}
                            </p>
                            <div className=" text-[12px] items-center flex gap-1  text-stone-400">
                              <AccessTimeIcon className="text-[20px] " />
                              {data?.readingtime}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="w-full h-auto">
                    <Stack spacing={2}>
                      <Pagination count={10} />
                    </Stack>
                  </div> */}
                </div>
              </div>
              <div className="w-[40%] max-sm:w-full ">
                <div className="  mx-10 mt-20 max-sm:mt-10">
                  <div className="p-4 w-[50%] max-sm:px-0 max-sm:w-full ">
                    <h1 className="text-[14px] font-bold  ">Tags:</h1>
                  </div>
                  
                    
          <div className="grid grid-cols-3 gap-1  ">
          {favData.map((itemTags, index) => (
                <div key={index} className=" rounded " >
                 <div className="text-center p-1  bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-full max-sm:mb-2"> {itemTags.tags.split(',')[0]}</div>
                </div>
              ))}
          </div>  
                </div>
              </div>
            </div>

            {/* <div className="  flex justify-center items-center max-sm:w-full  ">
              <div className=" w-[45%] h-[24vh] bg-[#F2F4F9] mt-8 mb-10 border rounded text-center max-sm:h-full max-sm:w-full max-sm:mx-2 ">
                <h1 className="text-[20px] font-bold pt-[18px] ">
                  Want to know more?
                </h1>
                <p className="font-semibold pt-[10px] text-xs ">
                Have questions or feedback? We're here to help! Contact us today.
                </p>
                <button className="w-[20%] p-1 bg-black text-white rounded-3xl mt-6 max-sm:w-[30%] max-sm:mb-5 ">
                  Contact Us
                </button>
              </div>
            </div> */}
            <div className=" mt-4 mb-16 py-4">
            <div className="w-[40%] m-auto rounded bg-[#F2F4F9] text-center text-[#0F0A34] py-4 max-sm:w-[70%]">
              <h2 className="font-semibold text-lg">Want to know more?</h2>
              <div className="text-xs mt-2 max-sm:px-6">
                Have questions or feedback? We're here to help! Contact us
                today.
              </div>
              <div
                className="mt-6 m-auto bg-[#0F0A34] text-white text-center text-sm w-fit rounded-2xl px-3 py-1 cursor-pointer"
                onClick={openContactModal}
              >
                Contact Us
              </div>
            </div>
          </div>
          </div>
        </div>
      ) : (
        <>Loading....</>
      )}
    </>
  );
}

export default TagTest;