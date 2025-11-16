import React from 'react'
import img1 from '../assets/3card/alt(10).png'
import img2 from '../assets/3card/alt(11).png'
import img3 from '../assets/3card/alt(12).png'
import { FaArrowRight } from 'react-icons/fa'

const Card3 = () => {
    const images = [
        {
            id: 1,
            img: img1,
            details: `Everyday Fresh & Clean with Our Products`
        },
        {
            id: 2,
            img: img2,
            details: `Make your Breakfast Healthy and Easy`
        },
        {
            id: 3,
            img: img3,
            details: `Everyday The best Organic Products Online & Clean with Our Products`
        }
    ];

    return (
        <div className='grid  grid-cols-1 md:grid-cols-3 container mx-auto gap-5 py-5 md:py-10  justify-items-center'>
            {images.map((item) => (
                <div 
                key = {item.id}
                className='relative h-auto'
                >
                    <img src={item.img} alt="" className='h-auto'/>
                    <div 
                    className='absolute w-1/2 inset-0 flex flex-col gap-2 md:gap-5 items-start px-3 justify-center'
                    >
                        <p className='overflow-hidden py-2'>{item.details}</p>
                        <button className='bg-green-400 text-white px-2 py-1 rounded flex items-center gap-2 text-sm'>Shop now <div><FaArrowRight /></div></button>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default Card3
