import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function CarTest() {
  const data = [
    {
      image: "bi2.jpg",
      content: "Use Passkeys Wherever You Sign in to Uber",
      date: "26 October |",
      time: "6 min",
    },
    {
      image: "bi3.jpg",
      content: "Use Passkeys Wherever You Sign in to Uber ",
      date: "26 October |",
      time: "6 min",
    },
    {
      image: "bi4.jpg",
      content: "Use Passkeys Wherever You Sign in to Uber",
      date: "26 October |",
      time: "6 min",
    },
    {
      image: "bi2.jpg",
      content: "Use Passkeys Wherever You Sign in to Uber",
      date: "26 October |",
      time: "6 min",
    },
    {
      image: "bi3.jpg",
      content: "Use Passkeys Wherever You Sign in to Uber",
      date: "26 October |",
      time: "6 min",
    },
    {
      image: "bi4.jpg",
      content: "Use Passkeys Wherever You Sign in to Uber",
      date: "26 October |",
      time: "6 min",
    },
  ];

  const imgData = [
    {
      image: "bm4.jpg",
      content: "Real-Time Analytics for Mobile App Crashes using Apache Pinot",
      para: "Updating enterprise-scale software and infrastructure without creating unintentional down stream issues is adaunting task – we leveraged Apache Pinot to create Healthline, a tool for minimizing release errors in real",
      time: "7 mins",
    },
    {
      image: "bm4.jpg",
      content: "Real-Time Analytics for Mobile App Crashes using Apache Pinot",
      para: "Updating enterprise-scale software and infrastructure without creating unintentional down stream issues is adaunting task – we leveraged Apache Pinot to create Healthline, a tool for minimizing release errors in real",
      time: "8 mins",
    },
    {
      image: "bm4.jpg",
      content: "Real-Time Analytics for Mobile App Crashes using Apache Pinot",
      para: "Updating enterprise-scale software and infrastructure without creating unintentional down stream issues is adaunting task – we leveraged Apache Pinot to create Healthline, a tool for minimizing release errors in real",
      time: "8 mins",
    },
  ];
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    
    <div className="w-full h-full flex justify-center items-center ">
      
      <div className="w-[95%] h-full">
        <div className="w-full h-[80vh] flex justify-center item-center">
          <div className="w-[50%]   ">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full  bg-center bg-cover duration-500"
            >
              {/* Left Arrow */}
              <div className=" group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className="">
                <div className=" group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-[682px] text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
              </div>
              <div className="flex top-4 justify-center pt-[490px] text-white ">
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl cursor-pointer">
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-[80vh] w-[50%] block bg-red-200">
            <div className="h-[40vh] w-[100%] bg-no-repeat bg-[url('../public/images/bm1.jpg')]">
              <div className="w-[45%]">
                <h1 className="px-6 pt-[160px] text-[20px] text-white ">
                  Use Pass keys Wherever You Sign in to Uber
                </h1>
              </div>
            </div>
            <div className="flex ml-2">
              <div className="h-[40vh] w-[50%] bg-no-repeat bg-[url('../public/images/bm2.jpg')]">
                <div className="w-[100%]">
                  <h1 className="px-6 pt-[160px] text-[20px] text-white ">
                    Use Pass keys Wherever You Sign in to WTi
                  </h1>
                </div>
              </div>
              <div className="h-[40vh] w-[50%] bg-no-repeat bg-[url('../public/images/bm3.jpg')]">
                <div className="w-[100%]">
                  <h1 className="px-6 pt-[160px] text-[20px] text-white ">
                    Use Pass keys Wherever You Sign in to WTi
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[46vh] my-4 ">
          <div className="w-full h-full bg-[url('../public/images/bm5.jpg')] ">
            <button className=" w-[12%] h-[8vh] rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 relative top-32 left-[950px] shadow-lg shadow-black">
              <h3 className="text-white text-xl ">Book Now</h3>
            </button>
          </div>
        </div>
        <div className="w-full h-[30vh] my-8 flex justify-center items-center ">
          <div className="w-[90%] h-[30vh] flex border border-gray-400 rounded-lg ">
            <div className="w-[45%]  h-[30vh]  pl-8 py-16 ">
              <h1 className="text-[22px] font-semibold text-indigo-950 ">
                Get a weekly dose of latest stories and useful tips directly in
                your inbox!
              </h1>
            </div>
            <div className="w-[40%] h-[30vh] pl-10 py-20">
              <input
                type="text"
                className="w-[90%] h-[6vh] rounded-lg outline-none p-2  border-[2px]  border-gray-400 "
              />
            </div>
            <div className="w-[20%] h-[30vh] py-20">
              <button className="w-[80%] h-[6vh] bg-indigo-950 text-white rounded-lg text-xl ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="font-semibold px-8 text-[18px] ">Trending Topics</div>
          <div className=" relative left-[970px]  ">View All </div>
          <div className="relative left-[980px] rounded bg-slate-200">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <div className="grid grid-cols-3 max-sm:grid-cols-1 ">
            {data.map((items, index) => (
              <div key={index} className=" rounded  m-7 ">
                <div>
                  <img
                    src={"./images/" + items.image}
                    alt=""
                    className=" w-full rounded"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-[18px] p-1 pt-[20px]">
                    {items.content}
                  </h1>
                </div>
                <div className="flex">
                  <p className=" text-[12px] p-1 pt-[5px]">{items.date}</p>
                  <div className=" items-center flex gap-1 text-stone-400">
                    {items.time}{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="w-[60%] h-[140vh] px-10 ">
            <h1 className="font-bold pt-6 ">You Might Also Like</h1>
            <div className="flex pb-3 ">
              <div className="w-[18%] h-1 bg-black "></div>
              <div className="w-[100%] h-[1px] bg-stone-200 my-[1.5px] "></div>
            </div>
            <div className="w-full h-[45vh] mt-2 ">
              <div className="">
                {imgData.map((data, index) => (
                  <div className="flex" key={index}>
                    <div className="w-[70%] h-[40vh] mb-4 ">
                      <img
                        src={"../images/" + data.image}
                        alt=""
                        className="w-[100%] rounded h-full "
                      />
                    </div>
                    <div className="w-[80%] py-4 px-4  ">
                      <a href="" className="font-bold cursor-pointer ">
                        {data.content}
                      </a>
                      <div className="w-[100%] py-3">
                        {/* <a href="" className=' cursor-pointer' >{data.para}</a> */}
                        <p className="">{data.para}</p>
                      </div>
                      <div className="items-center flex gap-1 text-stone-400">
                        {data.time}{" "}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          <div className="w-[40%] h-[58vh]">
            <div className="w-[90%] ml-20 mt-20 max-sm:w-full max-sm:mt-[30px] max-sm:ml-0 ">
              <div className="p-4 w-[50%] max-sm:w-[80%] ">
                <h1 className="text-[14px] font-bold  ">Tags:</h1>
              </div>
              <div className="flex w-[80%] ">
                <div className="w-[70%] h-[50vh]  ">
                  <div className="w-[85%] text-center p-1 pl-0 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">CRD</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">MSP</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">LTR</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">ETS</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">Airport</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">Railway</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">Outstation</a>
                  </div>
                </div>
                <div className="w-[70%] h-[50vh] ">
                  <div className="w-[85%] text-center p-1 pl-0 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">CRD</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">MSP</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">LTR</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">ETS</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">Airport</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">Railway</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">Outstation</a>
                  </div>
                </div>
                <div className="w-[70%] h-[50vh] ">
                  <div className="w-[85%] text-center p-1 pl-0 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">CRD</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">MSP</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">LTR</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">ETS</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">Airport</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">Railway</a>
                  </div>
                  <div className="w-[85%] text-center p-1 m-2 bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
                    <a href="#">Outstation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-auto ml-10" >
        <Stack spacing={2}>
        <Pagination count={10} />
        {/* <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled /> */}
      </Stack>
      </div>
        <div className="  flex justify-center items-center max-sm:w-full max-sm:mt-4 max-sm:mb-12 ">
          <div className=" w-[45%] h-[24vh] bg-[#f2f2f2] mt-8 mb-10 border rounded text-center max-sm:h-full max-sm:w-full ">
            <h1 className="text-[20px] font-bold pt-[18px] ">
              Want to know more?
            </h1>
            <p className="font-semibold pt-[10px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="w-[20%] p-1 bg-black text-white rounded-3xl mt-[10px] max-sm:w-[30%] max-sm:mb-2 ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarTest;
