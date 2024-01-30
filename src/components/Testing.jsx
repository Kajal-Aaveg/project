import React, { useRef, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

function Testing() {
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

    // Add more validations for other fields

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
    <div className="w-full flex justify-center items-center mt-10 ">
      <div className="w-[80%] bg-slate-300 flex">
        <div className="w-[65%]  ">
          <div className="pl-16">
            <div className="text-[25px] font-bold text-blue-950 py-2">
              Send us a message
            </div>
            <div>
              Please fill in the form and we shall send the experts to discuss
              your requirement.
            </div>
          </div>
          <div className=" mt-4 ">
            <div className="flex justify-center items-center gap-6 ">
              <div className=" w-[40%] flex flex-col items-start mt-6 h-10">
              <input
                type="text"
                ref={userName}
                className="bg-slate-50 w-full p-2 outline-gray-200 rounded "
                placeholder="Name*"
              />
               {formErrors.name && (
                <div className="text-red-500 ">{formErrors.name}</div>
              )}

              </div>
              <div className=" w-[40%] flex flex-col items-start mt-6 h-10">
              <input
                type="text"
                ref={userEmail}
                className="bg-slate-50 w-full p-2 outline-gray-200 rounded   "
                placeholder="Work Email*"
              />
              {formErrors.email && (
                <div className="text-red-500 ">{formErrors.email}</div>
              )}
              </div> 
            </div>
            <div className="flex justify-center items-center mt-8 gap-6  ">
            <div className=" w-[40%]  flex flex-col items-start h-10">
              <input
                type="text"
                ref={userPhone}
                className="bg-slate-50 w-full p-2 outline-gray-200 rounded  "
                placeholder="Phone*"
              />
               {formErrors.phone && (
                <div className="text-red-500 ">{formErrors.phone}</div>
              )}

              </div>
              <div className=" w-[40%]  flex flex-col items-start h-10">
              <input
                type="text"
                ref={userLocation}
                className="bg-slate-50 w-full p-2 outline-gray-200 rounded  "
                placeholder="Location*"
              />
               {formErrors.location && (
                <div className="text-red-500 ">{formErrors.location}</div>
              )}

              </div>
            </div>
            <div className="flex justify-center flex-col mt-8 items-center ">
            
              <input
                type="text"
                ref={userMessage}
                className="bg-slate-50 w-[83.5%] px-2 py-6 outline-gray-200 rounded "
                placeholder="Your message to us with requirements*"
              />
              {formErrors.message && (
              <div className="text-red-500">{formErrors.message}</div>
            )}
               
            </div>
            <div className="pl-14 pb-6">
              <button
                onClick={handleSubmit}
                className="py-2 px-6 rounded bg-blue-950 text-white mt-6"
              >
                Submit
              </button>
            </div>
            {/* {formErrors.name && <div className='text-red-500'>{formErrors.name}</div>} */}
            {/* {formErrors.email && <div className='text-red-500'>{formErrors.email}</div>} */}
            {/* {formErrors.phone && (
              <div className="text-red-500">{formErrors.phone}</div>
            )} */}
            {/* {formErrors.location && (
              <div className="text-red-500">{formErrors.location}</div>
            )} */}
            {/* {formErrors.message && (
              <div className="text-red-500">{formErrors.message}</div>
            )} */}

            {/* Add more error message displays for other fields */}
          </div>
        </div>

        <div className="w-[35%] flex justify-center items-center">
          <div className="w-[70%] bg-white shadow-md text-center p-2">
            <div>
              {" "}
              <LocationOnIcon />
            </div>
            <div>Address</div>
            <div className="text-slate-500">
              Smark 9, Zabeel business center building, 302-3 - Dubai - United
              Arab Emirates
            </div>
            <div className="pt-5">
              <LocalPhoneIcon />
            </div>
            <div>Phone</div>
            <div className="text-slate-500">+971 56 909 7524</div>
            <div className="text-slate-500">+971 50 264 1477</div>

            <div className="pt-5">
              <EmailIcon />
            </div>
            <div>Email</div>
            <div className="text-slate-500">s.mubeen@wtimobility.ae</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testing;
