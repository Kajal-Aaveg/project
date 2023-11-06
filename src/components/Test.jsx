import React, { useRef } from 'react';
import * as yup from 'yup';

function Test(props) {

  const nameInput = useRef();
  const numberInput = useRef();

const validationF = yup.object().shape({
  name: yup.string().required("Name is required"),
  number: yup.number().required("Number is required")
})

const handleSubmit = () => {
  validationF.validate({
    name: nameInput.current.value,
    number: numberInput.current.value
  },{abortEarly : false}).then(() =>{
    console.log("DONE")
  }).catch((error) => {
    const newErrors = {};

    error.inner.forEach((error) => {
      newErrors[error.path] = error.message;
    })
    console.log(newErrors);
  })
  
}

  return (
    <>
    <div className='bg-red-300'>
    <input ref={nameInput} type='text' name='name' id='name' className='mb-2' />
    <br />
    <input ref={numberInput} type='number' name='number' id='number' />
     <div onClick={handleSubmit}>
      Submit
     </div>
     <div>
      {props.var}
     </div>
    </div>
    </>
  )
}

export default Test