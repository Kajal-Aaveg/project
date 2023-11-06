import React from 'react'
import {useLocation} from 'react-router-dom';

function Props1() {

  const location = useLocation();

  return (

    <>
    <div className=' w-[80%] bg-red-200 h-[50vh]' >
    <div>{location.state.name}</div>
    <div>{location.state.number}</div>
    <div>{location.state.email}</div>
    </div>
  
    
  

    {/* <div className=' w-[80%] bg-slate-200 h-[50vh] '>
        <div className='pt-[20px] pl-[20px] ' >
            <label>Name: </label>
        <input  className=' outline-none ' type="text" name="" id="" />
        <br />
        <br />
        <label>Number: </label>
        <input  className='outline-none' type="text" name="" id="" />
        <br />
        <br />
        <label>Email: </label>
        <input className='outline-none' type="text" name="" id="" />
        <br />
        <br />
        </div>
    </div> */}
    
    </>
  )
}

export default Props1