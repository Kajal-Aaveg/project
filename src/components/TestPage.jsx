import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";



function TestPage() {

    const [imgData, setData]=useState([])
   
    useEffect(()=>{
        fetch("https://wticarrental.ae:3000/app/v1/blogs/allBlog")
        
        .then((result)=>{
            result.json().then((resp)=>{
                console.log("result",resp)
                setData(resp)
            })
        })
    },[])

  return (
    <div>
                <div className="flex max-sm:block ">
          <div className="w-[60%] h-[140vh] px-10  max-sm:w-full max-sm:h-full ">
            <h1 className="font-bold pt-6 ">You Might Also Like</h1>
            <div className="flex pb-3">
              <div className="w-[18%] h-1 bg-black  "></div>
              <div className="w-[100%] h-[1px] bg-stone-200 my-[1.5px]  "></div>
            </div>
            <div className="w-full h-[45vh] mt-2 ">
              <div className="">
                {imgData.map((d,index) => (
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
                          {d.createdAt}
                        </p>
                        <div className=" items-center flex gap-1 text-stone-400">
                          <AccessTimeIcon />
                          {d.updatedAt}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-auto" >
        <Stack spacing={2} >
        <Pagination count={10} />
      </Stack>
      </div>
            </div>
          </div>
          <div className="w-[40%] h-[58vh] max-sm:mt-[1400px] ">
            <div className="w-[90%] ml-20 mt-20 max-sm:w-full max-sm:ml-10 ">
              <div className="p-4 w-[50%] ">
                <h1 className="text-[14px] font-bold  ">Tags:</h1>
              </div>
              <div className="flex w-[80%] max-sm:w-full ">
                <div className="w-[70%] h-[50vh] max-sm:w-full max-sm:h-full  ">
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
                <div className="w-[70%] h-[50vh] ">
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
                <div className="w-[70%] h-[50vh] ">
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

    </div>
  )
}

export default TestPage