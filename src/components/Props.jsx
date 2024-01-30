import React from 'react'
import { useRef, } from 'react';
import { useNavigate } from 'react-router-dom';

function Props(props) {

    const nameRef = useRef(null);
    const numberRef = useRef(null);
    const emailRef = useRef(null);

    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/Props1', 
        { state: 
            {
                name: nameRef.current.value, 
                number: numberRef.current.value,
                email: emailRef.current.value 
            } 
        }
        );

        const data = {
            name: nameRef.current.value,
            number: numberRef.current.value,
            email: emailRef.current.value
        }
        console.log(data);

    }
    console.log('props');

    return (
        <div className=' w-[80%] bg-slate-200 h-[50vh] '>
            <div className='pt-[20px] pl-[20px] ' >
                <label>Name: </label>
                <input ref={nameRef} className=' outline-none ' type="text" name="" id="" />
                <br />
                <br />
                <label>Number: </label>
                <input ref={numberRef} className='outline-none' type="text" name="" id="" />
                <br />
                <br />
                <label>Email: </label>
                <input ref={emailRef} className='outline-none' type="email" name="" id="" />
                <br />
                <br />
            </div>
            <div onClick={handleClick} className='w-[8%] bg-black text-white rounded-2xl border cursor-pointer border-black text-center '>Button</div>
            <div>
            </div>
        </div>
        
    )
}

export default Props