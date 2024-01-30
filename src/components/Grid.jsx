import React from 'react'

function Grid() {
    const data = [
        {
            image: "bi2.jpg",
            content: "Use Passkeys Wherever You Sign in to Uber",
            date: "26 October / Global",

        },
        {
            image: "bi3.jpg",
            content: "Wherever You Sign in to Uber",
            date: "26 October",

        },
        {
            image: "bi4.jpg",
            content: "You Sign in to Uber",
            date: "Global",

        },
        

    ]

    return (
        <div>
            <div className='grid grid-cols-3 '>
                {
                    data.map((items, index,) => (

                        <div key={index} className=' rounded w-[80%] bg-sky-300 m-7 '>  
                            <div >
                                <div>
                                    <img src={"./images/" + items.image} alt="" className=' w-full rounded' />

                                </div>
                                <div>
                                    <h1 className='font-bold text-[18px] p-5 pt-[30px]'>
                                        {items.content}</h1>
                                </div>
                                <div>
                                    <p className=' text-[18px] p-5 pt-[30px]'>
                                        {items.date}</p>
                                </div>
                            </div>

                            {/* <img src="./images/bi2.jpg" alt="" className=' w-full rounded' /> */}
                            {/* <h1 className='font-bold text-[18px] p-5 pt-[30px]'>Use Passkeys Wherever You Sign in to Uber</h1> */}
                            {/* <p className=' text-[18px] p-5 pt-[30px]' >26 October / Global</p> */}

                        </div>
                    )
                    )

                }

            </div>
        </div>
    )
}

export default Grid