import React from 'react'

function ServicePage() {
    const data = [
        {
          image: "service1.jpg",
          title: "Self-Drive",
          content: " Explore amazing self drive cars in Dubai like Nissan Altima, Toyota Camry, etc.",
        },
        {
          image: "service2.jpg",
          title: "Chauffeur-Drive",
          content: "Travel in Style and Comfort with Our Premier Chauffeur-Driven Service.",
        },
        {
          image: "service3.jpg",
          title: "Airport-Transfers",
          content: " Enjoy hassle-free travel with our Airport Transfer Services in Dubai.",
        },
    ];
  return (
    <div>
        <div className="flex justify-center items-center  ">
          <div className="grid grid-cols-3 max-sm:grid-cols-1 w-full  max-sm:gap-y-6 ">
            {data.map((items, index) => (
              <div key={index} className=" rounded  m-2 bg-white  shadow-2xl ">
                <div>
                  <img
                    src={"./images/" + items.image}
                    alt=""
                    className=" w-full rounded"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-[25px] pt-6  text-center ">
                    {items.title}
                  </h1>
                </div>
                  <p className=" text-[20px] py-3 px-10 text-center ">
                    {items.content}
                  </p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default ServicePage