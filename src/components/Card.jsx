import React from "react";

function Card() {
    // const card = [{

    // }]
  return (
    <div className="w-full h-full ">
      <div className="justify-center items-center grid grid-cols-3">
        <div className="h-[485px] w-[85%] rounded-xl outline outline-gray-300 cursor-pointer m-5 hover:outline-cyan-600 ">
            {/* {card.map((items, index) =>(
                <div  key={index} className="div">

                </div>
            ))} */}
            <div className="flex w-full p-1" >
                <span className="w-[65%] text-[16px] font-bold py-4 px-5" >Mercedes-Benz CLA 250 Model 2023</span>
                <span className="w-[35%] text-[16px] font-semibold py-4 px-3" >Available now</span>
            </div>
            <div className="mb-14">
                <img src="./images/carone.png" alt="" />
            </div>
            <div className="flex px-5">
                <div className="w-[45%] ">
                   <span className="text-[16px] font-bold ">3 months</span><br></br>
                   <span className="text-[14px] font-normal text-[#666666]">Contract term</span>
                </div>
                <div className="w-[45%]">
                    <span className="text-[16px] font-bold" >62,000 KM</span><br></br>
                    <span className="text-[14px] font-normal text-[#666666]">Mileage</span>
                </div>
                <div className="w-[45%]">
                    <span className="text-[20px] font-bold text-cyan-600">AED 1,305<span className="text-[#666666] font-thin text-[14px] ">/months</span></span><br></br>
                    <span className="text-[14px] font-normal text-[#666666]">VAT Inclusive</span>
                </div>
            </div>
            <div className="px-5">
                <a href=""><u>See all options(+8).</u></a>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
