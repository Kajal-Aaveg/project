import React, { useRef, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import * as yup from 'yup';

function Popup() {
  const getName = useRef(null);
  const getNumber = useRef(null);

  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});

  function openTerms() {
    setShow(true);
  }

  function closeTerms() {
    setShow(false);
    setErrors({}); // Clear errors when closing the form
  }

  const phoneRegExp = /^[0-9]{10}$/; // Modify this regex according to your phone number format
  const nameRegExp = /^[A-Za-z ]+$/; // Only letters and spaces allowed, modify as needed

  const validationForm = yup.object().shape({
    name: yup.string().required('Name is required').matches(nameRegExp, 'Invalid Name').min(2, 'Name must be at least 2 characters').max(50, 'Name must be at most 50 characters'),
    number: yup.string().matches(phoneRegExp, 'Invalid Phone Number').required('Number is required'),
  });

  const handleSaveForm = async () => {
    try {
      const values = {
        name: getName.current.value,
        number: getNumber.current.value,
      };

      await validationForm.validate(values, { abortEarly: false });
      // Validation successful, you can proceed with further processing or form submission
      console.log('Form submission successful:', values);
    } catch (error) {
      // Validation failed, handle errors
      console.error('Validation error:', error.errors);
      setErrors(error.inner.reduce((acc, val) => {
        acc[val.path] = val.message;
        return acc;
      }, {}));
    }
  };

  return (
    <div className='w-full h-full flex justify-center item-center my-8 bg-transparent max-sm:mt-0 '>
      <div className='w-[80%] flex justify-center item-center max-sm:w-full max-sm:block '>
        {show === true ? (
          <div className='w-[50%] bg-gradient-to-b flex-col justify-center from-[#110d2e] via-[#211d33] to-[#36364d] max-sm:w-full shadow-[0px_13px_40px_-15px_black] relative'>
            <span className='absolute top-2 right-4 text-white cursor-pointer z-50 ' onClick={closeTerms}><CancelIcon /></span>
            <h1 className='text-[45px] text-white font-bold px-20 py-4 drop-shadow-lg leading-tight max-sm:px-5'>Get Exclusive Dubai Itineraries And Offers Delivered Right To Your Inbox</h1>
            <p className='text-[28px] text-white px-20 max-sm:px-5'>Sign up to get exclusive offers</p>
            <div className=' px-20 mt-3 max-sm:px-5 '>
              <input ref={getName} type="text" placeholder='Name' className='w-full p-3 border-2 border-white bg-transparent text-white placeholder-white rounded outline-none' />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
              <input ref={getNumber} type="text" placeholder='Phone Number' className='w-full p-3 my-3 border-2 border-white bg-transparent text-white placeholder-white rounded outline-none' />
              {errors.number && <p className="text-red-500">{errors.number}</p>}
              <div className='flex justify-center item-center'>
                <button onClick={handleSaveForm} className='w-[50%] bg-white mb-6 p-2 rounded text-[25px] shadow-md font-bold'>Submit</button>
              </div>
            </div>
          </div>
        ) : (
          <button className='p-4 bg-blue-500 text-white border rounded-md' onClick={openTerms}>Click me</button>
        )}
      </div>
    </div>
  );
}

export default Popup;
