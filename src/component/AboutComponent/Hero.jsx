import React from 'react'
import img from "../../assets/About/106.png"
import img1 from "../../assets/About/x.png"
import img2 from "../../assets/About/y.png"
import img3 from "../../assets/About/z.png"

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 px-5 flex flex-col md:flex-row items-center gap-12">

      {/* Left Image */}
      <div className="md:w-1/2">
        <img 
          src={img} 
          alt="" 
          className="w-full rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 space-y-8">

        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Welcome to <span className="text-green-600">Nest</span>
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate id est laborum.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos 
          interpre. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet 
          orci eget. Auctor elit sed vulputate mi sit amet.
        </p>

        {/* Small Images Row */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <img src={img1} alt="" className="w-28 h-28 rounded-xl shadow-sm hover:shadow-md transition" />
          <img src={img2} alt="" className="w-28 h-28 rounded-xl shadow-sm hover:shadow-md transition" />
          <img src={img3} alt="" className="w-28 h-28 rounded-xl shadow-sm hover:shadow-md transition" />
        </div>

      </div>
    </div>
  )
}

export default Hero
