import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import TodayIcon from "@mui/icons-material/Today";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isClick, setIsClick] = useState(false);

  const booking = [
    {
      icon: "<TodayIcon />",
      title: "Reserved Seating",
      content: "Guarantee a seat for every commuter",
    },
    {
      icon: "<TodayIcon />",
      title: " Mobile App",
      content: "For hassle-free booking, seat selection, and cashless payments",
    },
    {
      icon: "<TodayIcon />",
      title: "Monthly Pass System",
      content: "Cost-effective & convenient monthly pass system",
    },
  ];

  const faqs = [
    {
      question: "What is Aaveg's Corporate Commuter Bus Service?",
      answer:
        "Aaveg's Corporate Commuter Bus Service is a specialized transportation solution designed to provide efficient, comfortable, and reliable commuting options for corporate employees. We offer a range of services including scheduled pickups, comfortable rides, and customized routing to cater to the specific needs of businesses and their workforce.",
    },
    {
      question: "How can I book a ride with Aaveg?",
      answer:
        "Booking a ride with Aaveg is simple and user-friendly. Just download the Aaveg app, select your destination, choose the Commuter Bus option, and set your pickup time. You will receive all the necessary details about your ride 25 minutes before your scheduled departure.",
    },
    {
      question: "Are the routes and timings of Aaveg buses flexible?",
      answer:
        "Yes, Aaveg offers flexible routes and timings to best suit the commuting needs of your employees. We work closely with our corporate clients to design and adjust routes and schedules that are most convenient for their teams.",
    },
    {
      question: "What safety measures does Aaveg implement for its commuter buses?",
      answer:
        "Safety is a top priority at Aaveg. Our buses are equipped with advanced safety features including CCTV surveillance, GPS tracking, and emergency response protocols. Additionally, all our drivers are thoroughly vetted, trained, and adhere to strict safety guidelines.",
    },
    {
      question: " Can I reserve a specific seat on an Aaveg bus?",
      answer:
        "Yes, Aaveg allows you to reserve a specific seat when you book your ride. This ensures that you have a guaranteed, comfortable spot on every trip.",
    },
    {
      question: " Does Aaveg offer any subscription or monthly pass options?",
      answer:
        "Yes, we offer monthly pass options which provide a convenient and cost-effective solution for regular commuters. These passes offer unlimited travel within the month and can be easily purchased through our app.",
    },
    {
      question: "What amenities are available on Aaveg buses?",
      answer:
        "Aaveg buses are designed for comfort and convenience. Amenities include ergonomic seating, climate control, on-board Wi-Fi, and entertainment options to ensure a pleasant commute.",
    },
    {
      question: "How does Aaveg contribute to environmental sustainability?",
      answer:
        "Aaveg is committed to sustainability. We use eco-friendly buses, including electric and hybrid models, and engage in green initiatives like tree planting to minimize our environmental impact.",
    },
    {
      question: "What is the process for feedback and complaints with Aaveg services?",
      answer:
        "We value your feedback. Passengers can easily submit feedback or raise complaints through the Aaveg app or website. Our customer service team is dedicated to addressing your concerns promptly and efficiently.",
    },
    {
      question: "Are there any special offers or discounts for first-time users?",
      answer:
        "Yes, Aaveg often runs promotional offers for first-time users, including discounted or free trial rides. Please check our app or website for the latest promotions.",
    },

  ];

  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleOpenState = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="w-full">
      {/* Nav Bar */}
      <div className="w-full  flex items-center justify-center text-white px-4 py-2 bg-blue-950">
        <div className="w-[50%] flex items-center ">
          <div className="px-8 text-[20px]">AAVEG</div>
          <div className="relative w-[30%]">
            {/* <a href="#home">Company</a><ArrowDropDownIcon/> */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className=" py-1 px-2  hover:bg-gray-700  rounded-2xl "
            >
              Company
              {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </button>
            {isOpen && (
              <div className="list-none absolute top-[42px] bg-white text-slate-700 w-full py-2 px-4 leading-8 shadow-lg rounded tracking-wide z-10">
                <li className="">
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Our Offerings</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </div>
            )}
          </div>
        </div>
        <div className=" w-[50%] flex items-end justify-end">
          <div className="flex items-center pr-8">
            <div className="list-none  mr-4">
              <li className="">
                <a href="">Contact Us</a>
              </li>
            </div>
            {/* <div className="relative w-[15%]">
            <button
              onClick={() => setIsClick((prev) => !prev)}
              className=" px-2 hover:bg-blue-300 rounded-2xl "
            >
             <ProductionQuantityLimitsIcon/> Product
            </button>
            {isClick && (
              <div className="list-none absolute top-[45px] bg-gray-200 text-slate-700 w-full py-2 px-4 leading-8 shadow-lg rounded-lg tracking-wide z-10">
                <li className="">
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Ride</a>
                </li>
                <li>
                  <a href="">Drive</a>
                </li>
                <li>
                  <a href="">Merchants</a>
                </li>
                <li>
                  <a href="">Freight</a>
                </li>
              </div>
            )}
          </div> */}
            <div>
              <button className="mr-4">Log in</button>
            </div>
            <div>
              <button className="bg-white text-blue-950 py-1 rounded-2xl px-2">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url('/images/contact1.jpeg')` }}
        className="bg-cover h-screen w-full  "
      >
        <div className="relative">
          <div className="  absolute top-24 left-24 text-white w-[35%] ">
            <div className="text-[52px] font-bold leading-[64px] p-4 drop-shadow-lg ">
              Elevate Your Daily Commute with Aaveg
            </div>
            <div className="leading-[24px] p-4">
              Aaveg Bus Services offers a seamless, luxurious, and efficient
              travel solution. Avoid the chaos of rush hour and travel in style
              and comfort. Book your spot now and enjoy the ease of commuting
              with Aaveg.
              <div className=" mt-8">
                <button className="bg-blue-950 rounded p-4 text-white font-semibold ">
                  Get a free ride
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-100 flex justify-center items-center py-4">
        <div className="grid grid-cols-3 gap-6 w-[98%]  p-8 ">
          {booking.map((items, index) => (
            <div
              key={index}
              className="border bg-blue-950 text-white shadow-xl rounded-lg border-slate-300 py-4 px-8 "
            >
              <div className="flex items-center">
                <TodayIcon />
                <span className="px-1 font-semibold">{items.title}</span>
              </div>
              <div className="text-[12px] py-2">{items.content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-4">
        <div className="w-[50%] py-10 px-20  ">
          <div className="pt-4 pb-6 text-[30px] font-bold">
            {" "}
            How to Book Your Aaveg Commuter Bus - A Step-by-Step Guide
          </div>
          <div className="pb-4 font-bold">Request Your Commuter Bus</div>
          <div className="pb-4">
            Enter your destination, then select the 'Commuter Bus' option. Our
            easy-to-navigate app lets you conveniently review fares, choose your
            desired route, and set your pick-up time. Once ready, tap 'Request'.
          </div>
          <div className="pb-4">
            We'll send you all the essential information about your driver and
            bus 25 minutes before your journey, ensuring a smooth start to your
            travel.
          </div>

          <div className="py-4 font-bold">Smooth Pickup Process</div>
          <div className="pb-4">
            Stay informed and prepared with our live bus tracking feature within
            the app. Proceed to the indicated pickup location on the map,
            arriving at least 5 minutes before your scheduled trip.
          </div>

          <div className="py-4 font-bold">Relaxing On-Trip Experience</div>
          <div className="pb-4">
            Board our comfortable Aaveg commuter bus and settle in for a
            pleasant ride. Our buses are tailored for your comfort and safety,
            offering a serene environment where you can unwind or catch up on
            work during your commute.
          </div>

          <div className="py-4 font-bold">Seamless Drop-Off</div>
          <div className="pb-4">
            Your driver will ensure a smooth drop-off at the pre-designated
            point. We're dedicated to making each aspect of your journey with us
            as seamless and enjoyable as possible.
          </div>
        </div>

        <div className="w-[50%] ">
          <video width="100%" height="auto" autoPlay muted className="p-20">
            <source src="../images/uber.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-4">
        <div className="w-[50%]  px-20 ">
          <div className="text-[40px] font-bold py-4">
            Searching for an Ideal Corporate Commuter Bus Service for Your Team?
          </div>
          <div>
            Explore Aaveg's Corporate Commuter Bus Solutions for comprehensive
            details and tailor your workforce's travel experience!
          </div>
          <button className="py-2 px-4 bg-blue-950 my-6 text-white font-semibold rounded-lg">
            Visit our website now
          </button>
        </div>

        <div className="w-[50%]">
          <img src="../images/shuttle1.jpg" alt="" className="w-full p-5" />
        </div>
      </div>

      {/* FAQs */}
<div className=" bg-gray-50 mt-4 ">
<div className="text-[35px] py-10 text-center font-semibold">Frequently asked questions</div>
  <div className=" flex items-center justify-center">
      <div className="grid grid-rows w-[90%] ">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div className="py-2 px-6 flex justify-between">
              <button
                onClick={() => toggleOpenState(index)}
                className="p-2 font-semibold"
              >
                {faq.question}
                {!openStates[index] ? (
                  <ArrowDropDownIcon className="" />
                ) : (
                  <ArrowDropUpIcon />
                )}
              </button>
            </div>
            {openStates[index] && (
              <div className="py-2 px-8">
                {/* Render the answer here */}
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
}

export default HomePage;
