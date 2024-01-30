import React, { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AiTwotoneCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RfpPage from "./RfpPage";


function Blog() {
  const [favData, setFavData] = useState([]);

  const [ParticularData, setParticularData] = useState([]);

  const createMarkup = (content) => ({ __html: content });

  const { slug } = useParams();
  

  useEffect(() => {
    const func = async () => {
      const result = await fetch(
        `https://www.wticarrental.ae:3000/0auth/Blog/blogs/${slug}`,
        {
          method: "GET",
        }
      );
      const particularBlogData = await result.json();
      console.log(particularBlogData);
      //   setParticularBlog(particularBlogData);
      setParticularData(particularBlogData);

      //   console.log(particularBlogData);
    };

    const funcData = async () => {
      const result = await fetch(
        "https://www.wticarrental.ae:3000/0auth/Blog/getFavCategoriesblog",
        {
          method: "GET",
        }
      );
      const resdatablog = await result.json();
      setFavData(resdatablog);
      console.log(favData);
    };

    func();
    funcData();
  }, [slug]);
  console.log(slug);

  const formatDate = (timestamp) => {
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


  const navigate = useNavigate();

  // const handleClick = (slug) => {
  //   navigate(`/blog/${slug}`);
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   // Call the function when the button is clicked
  // };
  const Navigate=useNavigate();
  const handleClick = (slug,categoryName) => {
    const formattedCategoryName = categoryName.replace(/\s+/g, '-');
    Navigate(`/blog/${formattedCategoryName}/${slug}`)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
  };
  
  const navi = useNavigate();
  // const dispatch = useDispatch();
  const openContactModal = () => {
    navi("/contact-us");
  };

  const Navi=useNavigate();
  const handleClicks = (tags) => {
    const formattedtags = tags.replace(/\s+/g, '-');

    Navi(`/blog/tag/${formattedtags}`)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
  };


  return (
    <div>
      <div
        cl
        style={{
          backgroundImage: `url('${ParticularData?.image}')`,
        }}
        className={`px-52 h-[85vh] w-[100%] flex justify-center items-end pb-28 bg-cover no-repeat bg-[image:var(--image-url)] max-sm:w-full  max-sm:px-8 max-sm:py-8 `}
      >
        <div
          className="absolute inset-0  h-[85vh] w-[100%]"
          style={{
            backdropFilter: "brightness(0.5)", // Adjust the brightness value as needed
          }}
        ></div>
        <div className="relative w-full z-10">
          <button className="bg-orange-400 px-2 py-1 rounded-xl text-white font-bold text-sm ">
            {ParticularData.categories}
          </button>
          <h1 className="text-white w-full text-4xl py-1 font-bold  ">
            {ParticularData.title}
          </h1>
          <div className="flex gap-2 text-white ">
            <div className="flex items-center">
              <AiTwotoneCalendar className="text-[20px] mr-1" />
              {formatDate(ParticularData?.createdAt)}
            </div>
            <div className="flex items-center ">
              {" "}
              <AiOutlineClockCircle className="text-[20px] mr-1" />{" "}
              {ParticularData.readingtime}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <div className="w-full justify-center items-center text-[15px]  p-5 max-sm:p-2 ">
          <div className=" w-full flex max-sm:block ">
            <div className="w-[3%] mt-24 max-sm:my-8  ">
              <div className=" text-xl pl-[40px] sticky top-0  max-sm:flex  ">
                <div className="">
                  <LinkedInIcon className="text-[35px]" />
                </div>
                <div>
                  <TwitterIcon className="text-[35px]" />
                </div>
                <div>
                  <FacebookIcon className="text-[35px]" />
                </div>
                <div>
                  <InstagramIcon className="text-[35px]" />
                </div>
              </div>
            </div>
            <div className=" w-[60%] px-10 ml-28 max-sm:w-full max-sm:ml-0 ">
              <h1 className="font-bold text-[30px] pb-5 ">Introduction</h1>
              <div className="text-[16px] leading-7  ">
                <p
                  className=""
                  dangerouslySetInnerHTML={createMarkup(
                    ParticularData?.paragraph
                  )}
                />
              </div>
              <div className="w-full mt-4 pb-4 flex mb-2  border-b max-sm:w-full max-sm:mt-[30px] max-sm:ml-1">
                {/* <div className="p-4 w-[20%] max-sm:w-[40%] max-sm:pr-0  ">
              <h1 className="text-[14px] font-semibold  ">Post Tags:</h1>
            </div> */}
<div className="text-center gap-3 flex w-full mt-[10px] max-sm:w-full max-sm:mb-2 "><span className="font-bold mt-1">Tags:</span>
                  {ParticularData.tags &&
                    ParticularData.tags.split(",").map((tag, index) => (
                      <div
                        key={index}
                        onClick={() => handleClicks(tag)}
                        className="p-1 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mb-2 cursor-pointer max-sm:w-full "
                      >
                        {tag}
                    </div>
                    ))}
                </div>
                {/* <div className="text-center gap-3 flex w-full mt-[10px] max-sm:w-full max-sm:mb-2 ">
                  {ParticularData.tags &&
                    ParticularData.tags.split(",").map((tag, index) => (
                      <div
                        key={index}
                        onClick={() => handleClicks(ParticularData?.tags)}
                        className="p-1 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mb-2 cursor-pointer max-sm:w-full "
                      >
                        {tag}
                      </div>
                    ))}
                </div> */}
              </div>
              <div className=" flex max-sm:w-[98%] max-sm:mx-3 ">
                <div>
                  <img
                    src="../images/avatar.jpg"
                    alt=""
                    className="w-full h-fit p-1"
                  />
                </div>
                <div className="block px-2">
                  <div className="text-slate-700 font-bold">
                    Author: Siddharth
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[36%] h-[60vh] p-4 max-sm:w-full max-sm:h-full max-sm:pt-10 ">
              <h1 className="font-bold">Featured</h1>
              <div className="flex ">
                <div className="w-[18%] h-1 bg-black "></div>
                <div className="w-[90%] h-[1px] bg-stone-200 my-[1.5px] "></div>
              </div>
              <div className="w-full h-[45vh] mt-3 ">
                <div className="">
                  {favData.map((data, index) => (
                    <div
                      className="flex"
                      key={index}
                      onClick={() => handleClick(data?.slugs, data.categories)}
                    >
                      <div className="w-[35%] py-2 ">
                        <img
                          src={data?.image}
                          alt=""
                          className="w-[80%] rounded h-16 cursor-pointer "
                        />
                      </div>
                      <div className="w-[70%] py-1">
                        <a href="" className="font-bold cursor-pointer">
                          {data?.title}
                        </a>
                        <div className="items-center pt-[3px] flex gap-1 text-stone-400">
                          <AiOutlineClockCircle /> {data?.readingtime}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-[1px] w-[32vw] px-10 py-8 flex  flex-col gap-5 items-center mt-[110px] max-sm:w-full max-sm:mt-16 max-sm:mb-5 ">
                <h1 className="font-bold text-center text-black text-lg w-[30vw] max-sm:w-full ">
                  Join Our Newsletter and Get the Latest
                  <br />
                  Posts to Your Inbox
                </h1>
                <div className="flex justify-around w-[30vw] max-sm:block max-sm:w-full ">
                  <input
                    placeholder="Email Address"
                    className=" w-[20vw] outline-none border-[1px] bg-slate-100  px-4 py-2 focus:border-green-300 rounded-md max-sm:w-full "
                  />
                  <button className="bg-indigo-950 text-white px-3 py-2 rounded-md font-bold max-sm:w-full max-sm:my-2 ">
                    subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-[52.7%] bg-red-400 my-4 flex mb-2  border-b max-sm:w-full max-sm:mt-[30px] max-sm:ml-1"> */}
          {/* <div className="p-4 w-[20%] max-sm:w-[40%] max-sm:pr-0  ">
              <h1 className="text-[14px] font-semibold  ">Post Tags:</h1>
            </div> */}

          {/* <div className="text-center gap-3 flex w-full mt-[10px] max-sm:w-[40%] max-sm:mb-2 max-sm:block ">
  {ParticularData.tags &&
    ParticularData.tags.split(',').map((tag, index) => (
      <div
        key={index}
        onClick={() => handleClick(ParticularData?.slugs)}
        className="p-1 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mb-2 cursor-pointer"
      >
        {tag}
      </div>
    ))}
</div>  */}
          {/* </div> */}

          <div className="w-[97%] pt-8 pl-8 max-sm:pt-2 ">
            <h1 className="font-semibold py-5 text-[20px] ">
              You might also like
            </h1>
            <div className="flex ">
              <div className="w-[18%] h-1 bg-black "></div>
              <div className="w-[100%] h-[1px] bg-stone-200 my-[1.5px] "></div>
            </div>
          </div>

          <div className="flex justify-center items-center  ">
            <div className="grid grid-cols-3 max-sm:grid-cols-1 ">
              {favData.map((items, index) => (
                <div
                  key={index}
                  className=" rounded  m-7 "
                  onClick={() => handleClick(items?.slugs,items.categories)}
                >
                  <div>
                    <img
                      src={items?.image}
                      alt=""
                      className=" w-full rounded cursor-pointer  "
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-[18px] p-1 pt-[20px] cursor-pointer ">
                      {items?.title}
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <div className=" text-stone-400 flex justify-between items-center ">
                      {" "}
                      <DateRangeIcon className="text-[20px] mr-1" />{" "}
                      {formatDate(items?.createdAt)}
                    </div>
                    <div className=" items-center flex gap-1 text-stone-400">
                      <AiOutlineClockCircle />
                      {items?.readingtime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className=" mt-4 mb-16 py-4">
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
          </div> */}
<RfpPage/>
          
        </div>
      </div>
    </div>
  );
}

export default Blog;
