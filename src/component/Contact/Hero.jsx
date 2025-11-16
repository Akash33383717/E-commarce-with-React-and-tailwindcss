import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/help.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className='container mx-auto flex items-center justify-between gap-10 my-10'>
      
      <div className='space-y-5'>
        <h1 className='text-green-500'>How can we help you?</h1>
        <p className='text-3xl'>Let us know how we can help you</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {data.map((i) => (
          <div key={i.id} className="space-y-2">
            <p className="text-xl font-bold hover:text-green-400 transition-colors duration-300">{i.id}. {i.title}</p>
            <p className="text-gray-600">{i.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Hero
