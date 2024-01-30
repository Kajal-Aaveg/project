import React, { useRef, useState } from "react";


function ContactUs() {
  const [formErrors, setFormErrors] = useState({});
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPhone = useRef(null);
  const userLocation = useRef(null);
  const userMessage = useRef(null);

  const validateForm = () => {
    const errors = {};

    if (!userName.current.value.trim()) {
      errors.name = "Name is required";
    }

    if (!userEmail.current.value.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
        userEmail.current.value
      )
    ) {
      errors.email = "Invalid email address";
    }

    if (!userPhone.current.value.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(userPhone.current.value)) {
      errors.phone = 'Invalid number (must be 10 digits)';
    }

    if (!userLocation.current.value.trim()) {
      errors.location = "Location is required";
    }

    if (!userMessage.current.value.trim()) {
      errors.message = "Message is required";
    }

  

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = () => {
    const isValid = validateForm();

    if (isValid) {
      const formSubmit = {
        name: userName.current.value,
        workEmail: userEmail.current.value,
        phone: userPhone.current.value,
        location: userLocation.current.value,
        message: userMessage.current.value,
      };
      console.log(formSubmit);
    }
  };

  return (
    <div className="w-full">
      {/* <img src="../images/contact1.jpeg" alt=""  className='w-full h-[100vh]' /> */}
      <div
        style={{ backgroundImage: `url('/images/contact1.jpeg')` }}
        className="bg-cover h-screen "
      >
        <div className="flex items-center justify-center">
          <div className="w-[80%] flex gap-24 mt-10 ">
            <div className="w-[55%] bg-white px-10 py-2 rounded shadow-[1px_1px_30px_5px_rgba(0,0,0,0.3)] ">
              <div className="">
                <div className="text-[25px] font-bold text-blue-950 py-2">
                  <h1>Contact Us</h1>
                </div>
                <div className="text-slate-600">
                  Need assistance with your car rental or have questions about
                  our services? Contact us today, and our dedicated team will be
                  happy to help you find the perfect vehicle for your journey.
                </div>
              </div>
              <div className=" mt-4">
                <div className="  h-14">
                  <input
                    type="text" ref={userName}
                    className="bg-slate-200 w-full p-2 outline-gray-200 rounded "
                    placeholder="Name*"
                  />
                   {formErrors.name && (
                <div className="text-red-500 ">{formErrors.name}</div>
              )}
                </div>
                <div className=" h-14">
                  <input
                    type="text" ref={userEmail}
                    className="bg-slate-200 w-full  p-2 outline-gray-200 rounded mt-2"
                    placeholder="Email*"
                  />
                  {formErrors.email && (
                <div className="text-red-500 ">{formErrors.email}</div>
              )}
                </div>
                <div className=" h-16">
                  <input
                    type="text" ref={userPhone}
                    className="bg-slate-200 w-full p-2 outline-gray-200 rounded mt-4"
                    placeholder="Phone*"
                  />
                  {formErrors.phone && (
                <div className="text-red-500 ">{formErrors.phone}</div>
              )}
                </div>
                <div className=" h-16">
                  <input
                    type="text" ref={userLocation}
                    className="bg-slate-200 w-full p-2 outline-gray-200 rounded mt-4"
                    placeholder="Location*"
                  />
                   {formErrors.location && (
                <div className="text-red-500 ">{formErrors.location}</div>
              )}

                </div>
                <div className=" h-24 ">
               
                  <textarea
                    type="text"  ref={userMessage}
                    className="bg-slate-200 w-full p-2 outline-gray-200 rounded mt-4"
                    placeholder="Your message to us*"
                  />
                  {formErrors.message && (
      <div className="text-red-500 relative bottom-2 ">
        {formErrors.message}
      </div>
    )}
  
                </div>
                <div className=" my-4">
                  <button onClick={handleSubmit} className=" w-full py-2 px-6 rounded bg-blue-950 text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[45%] flex justify-center items-center">
              <div className="w-full bg-blue-950 opacity-90 shadow-md text-white p-2 rounded">
                <div className="text-center text-[25px] font-bold text-white ">
                <h2>We are Here to Help!</h2>
                </div>
                <div className="text-center text-[14px]">Our experts will connect with you within 24 hrs.</div>
                <div className="p-5">
                  <div className="text-center">Want to get in touch? We would love to hear from you! Here’s how you can reach us!</div>
                  <div className="pt-3 pb-1 font-bold">Corporate Office Address :</div>
                  <div className="pb-3">Smark 9, Zabeel business center building, 302-3 - Dubai - United Arab Emirates</div>
                  <div><span className="font-bold">Contact :  </span> +971 56 909 7524, +971 50 264 1477</div>
                  <div><span className="font-bold">Email : </span>s.mubeen@wtimobility.ae</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
