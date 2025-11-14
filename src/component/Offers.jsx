import React, { useEffect, useState } from 'react'

const Offers = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("/offers.json")
            .then(res => res.json())
            .then(json => setdata(json))
    },[])

  return (
    <div className='my-10 gap-5 container mx-auto grid grid-cols-1 md:grid-cols-5'>
      {data.map((item) => (
        <div 
          key={item.id}
          className="shadow flex items-center justify-center gap-4 bg-gray-500/10 container mx-auto rounded p-5"
        >
            <img src={item.img} alt="" className="w-24 h-24 object-contain" />

            <div>
                <h2 className="font-semibold">{item.offer}</h2>
                <p className="text-gray-500">{item.details}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Offers
