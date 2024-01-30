import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Tpage() {
  //   const data = [
  //     {
  //       image: "bi2.jpg",
  //       content: "Use Passkeys Wherever You Sign in to Uber",
  //       date: "26 October |",
  //       time: "6 min",
  //     },
  //     {
  //       image: "bi3.jpg",
  //       content: "Use Passkeys Wherever You Sign in to Uber ",
  //       date: "26 October |",
  //       time: "6 min",
  //     },
  //     {
  //       image: "bi4.jpg",
  //       content: "Use Passkeys Wherever You Sign in to Uber",
  //       date: "26 October |",
  //       time: "6 min",
  //     },
  //     {
  //       image: "bi2.jpg",
  //       content: "Use Passkeys Wherever You Sign in to Uber",
  //       date: "26 October |",
  //       time: "6 min",
  //     },
  //     {
  //       image: "bi3.jpg",
  //       content: "Use Passkeys Wherever You Sign in to Uber",
  //       date: "26 October |",
  //       time: "6 min",
  //     },
  //     {
  //       image: "bi4.jpg",
  //       content: "Use Passkeys Wherever You Sign in to Uber",
  //       date: "26 October |",
  //       time: "6 min",
  //     },
  //   ];

  //   const imgData = [
  //     {
  //       image: "bm4.jpg",
  //       content: "Real-Time Analytics for Mobile App Crashes using Apache Pinot",
  //       para: "Updating enterprise-scale software and infrastructure without creating unintentional down stream issues is adaunting task – we leveraged Apache Pinot to create Healthline, a tool for minimizing release errors in real",
  //       date: "2 November |",
  //       time: "7 mins",
  //     },
  //     {
  //       image: "bm4.jpg",
  //       content: "Real-Time Analytics for Mobile App Crashes using Apache Pinot",
  //       para: "Updating enterprise-scale software and infrastructure without creating unintentional down stream issues is adaunting task – we leveraged Apache Pinot to create Healthline, a tool for minimizing release errors in real",
  //       date: "2 November |",
  //       time: "8 mins",
  //     },
  //     {
  //       image: "bm4.jpg",
  //       content: "Real-Time Analytics for Mobile App Crashes using Apache Pinot",
  //       para: "Updating enterprise-scale software and infrastructure without creating unintentional down stream issues is adaunting task – we leveraged Apache Pinot to create Healthline, a tool for minimizing release errors in real",
  //       date: "2 November |",
  //       time: "8 mins",
  //     },
  //   ];
  // const slides = [
  //   {
  //     url: "http://localhost:3000/images/wti-blog-pages-2_03.jpg",
  //     content: "Use Pass keys Wherever You Sign in to Uber",
  //     date: "2 November |",
  //     time: "5 Min",
  //   },

  //   {
  //     url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  //     content: "Use Pass keys Wherever You Sign in to Uber ",
  //     date: "3 November |",
  //     time: "6 Min",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  //     content: "Use Pass keys Wherever You Sign in to Uber",
  //     date: "4 November |",
  //     time: "7 Min",
  //   },

  //   {
  //     url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
  //     content: "Use Pass keys Wherever You Sign in to Uber",
  //     date: "5 November |",
  //     time: "8 Min",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  //     content: "Use Pass keys Wherever You Sign in to Uber",
  //     date: "6 November |",
  //     time: "9 Min",
  //   },
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [];
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // console.log(currentIndex +" here");

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [imgData, setimgData] = useState([]);
  const [data, setData] = useState([]);
  //   const [slides, setSlideData]=useState([])

  // const[resdatablog, setFavBlog]=useState();
  const [favData, setFavData] = useState([]);
  // console.log(typeof favData[0]?.image);

  useEffect(() => {
    fetch("http://192.168.1.182:5000/0auth/getallRelativeBlog/health").then(
      (result) => {
        result.json().then((resp) => {
          // console.log("result",resp)
          setimgData(resp);
        });
      }
    );

    fetch("https://wticarrental.ae:3000/app/v1/blogs/allBlog").then(
      (result) => {
        result.json().then((resp) => {
          // console.log("result",resp)
          setData(resp);
        });
      }
    );

    const funcData = async () => {
      const result = await fetch(
        "http://192.168.1.182:5000/0auth/getFavCategoriesblog",
        {
          method: "GET",
        }
      );
      const resdatablog = await result.json();

      // // setFavBlog(resdatablog);
      // setFavData(resdatablog);
      // console.log(resdatablog);

      resdatablog.map((elem) => {
        // console.log(elem);
        // const dateObject = new Date(ele.createdAt);
        // const date=dateObject.toLocaleString();

        const date = new Date(elem.createdAt);
        const foramtDate = new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "short",
        }).format(date);
        const formattedTime = new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(date);
        //   console.log();
        // setPostDate(foramtDate.replace(/\W/g,' '));
        const newObj = {
          image: elem.image,
          content: elem.title,
          date: `${foramtDate}`,
          time: formattedTime,
        };
        console.log(newObj);

        setFavData((prevObjects) => [...prevObjects, newObj]);
      });
    };
    funcData();
  }, []);

  //     console.log(favData);
  console.log(currentIndex);

  return (
    <>
      {favData ? (
        <div className="w-full flex justify-center items-center  ">
          <div className="w-[95%] max-sm:w-full ">
            <div className="w-full flex justify-center item-center max-sm:block ">
              <div className="w-[50%] mr-1 max-sm:w-full max-sm:mb-1 ">
                <div
                  style={{
                    backgroundImage: `url(${
                      favData.length == 0 ? "" : favData[currentIndex]?.image
                    })`,
                  }}
                  className="w-full h-[80.6vh] bg-center bg-cover duration-500 "
                >
                  {/* Left Arrow */}
                  <div className=" group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer max-sm:left-1 ">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                  </div>
                  <div className="relative top-[400px] left-10 max-sm:left-4  ">
                    <div className="text-black text-[20px] font-semibold ">
                      {favData[currentIndex]?.content}
                    </div>
                    <div className="flex">
                      <div className="text-white text-[20px] p-1 ">
                        {" "}
                        <DateRangeIcon />
                        {favData[1]?.date}
                      </div>
                      <div className="text-white text-[20px] p-1 ">
                        <AccessTimeIcon />
                        {favData[1]?.time}
                      </div>
                    </div>
                  </div>
                  {/* Right Arrow */}
                  <div className="">
                    <div className=" group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-[692px] text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer max-sm:right-1 ">
                      <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                  </div>
                  {/* <div className="text-2xl text-white pt-[450px] pl-[30px]">
                  Lorem ipsum dolor sit amet.
                </div> */}
                  <div className="flex top-4 justify-center pt-[420px] text-white max-sm:pt-[355px] ">
                    {slides.map((slide, slideIndex) => (
                      <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="text-2xl cursor-pointer"
                      >
                        <RxDotFilled />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" w-[50%] block max-sm:w-full ">
                <div
                  style={{
                    "--image-url": `url(${
                      favData.length == 0 ? "" : favData[0]?.image
                    })`,
                  }}
                  className={`h-[40vh] w-[100%] bg-cover bg-no-repeat bg-[image:var(--image-url)] max-sm:w-full `}
                >
                  <div className="w-[45%] max-sm:w-[70%]">
                    <h1 className="px-6 relative top-40 text-[20px] font-semibold text-white">
                      {favData[1]?.content}
                    </h1>
                    <div className="flex ml-5">
                      <p className=" text-[12px] p-1 relative top-40 text-white ">
                        <DateRangeIcon />
                        {favData[1]?.date}
                      </p>
                      <div className=" items-center relative top-40 flex gap-1 text-white">
                        <AccessTimeIcon /> {favData[1]?.time}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-1 gap-1 max-sm:block ">
                  <div
                    style={{
                      "--image-url": `url(${
                        favData.length == 0 ? "" : favData[2]?.image
                      })`,
                    }}
                    className={` h-[40vh]  w-[50%] bg-cover bg-no-repeat bg-[image:var(--image-url)] max-sm:w-full`}
                  >
                    <div className="w-[100%] max-sm:w-full  ">
                      <h1 className="px-6 relative top-40 text-[20px] font-semibold text-white max-sm:text-lg max-sm:px-2 ma ">
                        {favData[1]?.content}
                      </h1>
                      <div className="flex ml-5 max-sm:ml-0">
                        <p className=" text-[12px] relative top-40 p-1 pt-[5px] text-white  ">
                          <DateRangeIcon />
                          {favData[1]?.date}
                        </p>
                        <div className=" items-center relative top-40 flex gap-1 text-white ">
                          <AccessTimeIcon /> {favData[1]?.time}
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
                    className={`h-[40vh] w-[50%] bg-cover bg-no-repeat bg-[image:var(--image-url)] max-sm:w-full  `}
                  >
                    <div className="w-[100%] max-sm:w-full  ">
                      <h1 className="px-6 relative top-40 text-[20px] font-semibold text-white max-sm:text-lg max-sm:px-2 ">
                        {favData[1]?.content}
                      </h1>
                      <div className="flex ml-5 max-sm:ml-0 ">
                        <p className=" text-[12px] relative top-40 p-1 pt-[5px] text-white  ">
                          <DateRangeIcon />
                          {favData[1]?.date}
                        </p>
                        <div className=" items-center relative top-40 flex gap-1 text-white ">
                          <AccessTimeIcon /> {favData[1]?.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  h-[46vh] mt-2 ">
              <div className="w-full h-full bg-no-repeat bg-cover bg-center bg-[url('../public/images/bm5.jpg')] max-sm:w-full max-sm:h-full ">
                <button className=" w-fit px-4 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 relative top-32 left-[950px] shadow-lg shadow-black max-sm:realtive max-sm:left-36 max-sm:top-48 ">
                  <h3 className="text-white text-xl ">Book Now</h3>
                </button>
              </div>
            </div>
            <div className="w-full my-8 flex justify-center items-center ">
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
                      className="w-full h-[6vh] rounded-lg outline-none p-2  border-[2px]  border-gray-400 "
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
            <div className="flex">
              <div className="font-semibold px-8 text-[18px] ">
                Trending Topics
              </div>
              <div className=" relative left-[970px] max-sm:left-[90px] ">
                View All{" "}
              </div>
              <div className="relative left-[980px] max-sm:left-[100px] rounded bg-slate-200">
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div className="flex justify-center items-center  ">
              <div className="grid grid-cols-3 max-sm:grid-cols-1 ">
                {data.map((items, index) => (
                  <div key={index} className=" rounded  m-7 ">
                    <div>
                      <img
                        src={items.image}
                        alt=""
                        className=" w-full rounded"
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] p-1 pt-[20px]">
                        {items.title}
                      </h1>
                    </div>
                    <div className="flex">
                      <p className=" text-[12px] p-1 pt-[5px] text-stone-400  ">
                        <DateRangeIcon />
                        {new Date(items.createdAt).toLocaleString("en-US", {
                                day: "numeric",
                                month: "short",
                              })}
                      </p>
                      <div className=" items-center flex gap-1 text-stone-400">
                        <AccessTimeIcon />
                        {new Date(items.createdAt).toLocaleString("en-US", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true, // Set to false if you want 24-hour format
                              })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex max-sm:block ">
              <div className="w-[60%] px-10 max-sm:w-full ">
                <h1 className="font-bold pt-6 ">You Might Also Like</h1>
                <div className="flex pb-3">
                  <div className="w-[18%] h-1 bg-black  "></div>
                  <div className="w-[100%] h-[1px] bg-stone-200 my-[1.5px]  "></div>
                </div>
                <div className="w-full mt-2 ">
                  <div className="">
                    {imgData.map((d, index) => (
                      <div className="flex max-sm:block " key={index}>
                        <div className="w-[70%] h-[40vh] mb-4 max-sm:w-full ">
                          <img
                            src={d.image}
                            alt=""
                            className="w-[100%] rounded h-full "
                          />
                        </div>
                        <div className="w-[80%] py-4 px-4 max-sm:w-full  ">
                          <a href="" className="font-bold cursor-pointer ">
                            {d.title}
                          </a>
                          <div className="w-[100%] py-3">
                            {/* <a href="" className=' cursor-pointer' >{data.para}</a> */}
                            <p className="">{d.paragraph}</p>
                          </div>
                          <div className="flex">
                            <p className=" text-[12px] p-1 pt-[5px] text-stone-400  ">
                              <DateRangeIcon />
                              {new Date(d.createdAt).toLocaleString("en-US", {
                                day: "numeric",
                                month: "short",
                              })}
                            </p>
                            <div className=" items-center flex gap-1 text-stone-400">
                              <AccessTimeIcon />
                              {new Date(d.createdAt).toLocaleString("en-US", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true, // Set to false if you want 24-hour format
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full max-sm:py-2 ">
                    <Stack spacing={2}>
                      <Pagination count={10} />
                    </Stack>
                  </div>
                </div>
              </div>
              <div className="w-[40%]  ">
                <div className="w-[90%] ml-20 mt-20 max-sm:w-full max-sm:ml-10 max-sm:mt-4 ">
                  <div className="p-4 w-[50%] ">
                    <h1 className="text-[14px] font-bold ">Tags:</h1>
                  </div>
                  <div className="flex w-[80%] max-sm:w-full ">
                    <div className="w-[70%] max-sm:w-full max-sm:h-full  ">
                      <div className="w-[85%] text-center p-1 pl-0 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px]">
                        <a href="#">CRD</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px]  ">
                        <a href="#">MSP</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">LTR</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">ETS</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">Airport</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">Railway</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">Outstation</a>
                      </div>
                    </div>
                    <div className="w-[70%]">
                      <div className="w-[85%] text-center p-1 pl-0 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">CRD</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">MSP</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">LTR</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">ETS</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">Airport</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">Railway</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">Outstation</a>
                      </div>
                    </div>
                    <div className="w-[70%]">
                      <div className="w-[85%] text-center p-1 pl-0 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">CRD</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">MSP</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">LTR</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">ETS</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">Airport</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">Railway</a>
                      </div>
                      <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] ">
                        <a href="#">Outstation</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  flex justify-center items-center max-sm:w-full">
              <div className=" w-[45%] py-5 bg-[#f2f2f2] m-5  border rounded text-center max-sm:h-full max-sm:w-full  ">
                <h1 className="text-[20px] font-bold ">Want to know more?</h1>
                <p className="font-semibold py-1 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <button className="w-[20%] p-1 bg-black text-white rounded-3xl mt-[10px] max-sm:w-[30%] max-sm:mb-5 ">
                  Contact Us
                </button>
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

export default Tpage;
