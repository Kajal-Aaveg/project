import React, {useRef} from 'react';
import * as yup from 'yup';
import Test from './Test';

function Test1() {

    const kajal = "hello";
  const refname = useRef();
  const refnumber = useRef();

    const testForm = yup.object().shape({
        name: yup.string().required(""),
        number: yup.number().required("")
    })
    const handleSubmit = () => {
        testForm.validate({
          name: refname.current.value,
          number: refnumber.current.value
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
    <div className='bg-slate-300'>
<input ref={refname} type="text" name="name" id='name' value="" className='mb-2' />
<br />
    <input ref={refnumber} type="number" name="number" id='number' value="" />
    <div onClick={handleSubmit}>button</div>
    </div>
    <Test var={kajal}/>
    </>
  )
  
}

export default Test1