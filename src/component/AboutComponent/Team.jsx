import React from 'react'
import img from '../../assets/About/Main.png'
import img1 from '../../assets/About/Main(1).png'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { CiInstagram, CiTwitter } from 'react-icons/ci'

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-5 grid grid-cols-1 md:grid-cols-3 items-center gap-12">

      {/* LEFT TEXT SECTION */}
      <div className="space-y-6">
        <p className="text-green-600 font-semibold tracking-wide uppercase">Our Team</p>

        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Meet Our Expert Team
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor,
          imperdiet nec consequat a, congue id sem. Maecenas malesuada faucibus finibus.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor,
          imperdiet nec consequat a, congue id sem. Maecenas malesuada faucibus finibus.
        </p>

        <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
          View All Members
        </button>
      </div>

      {/* MEMBER 1 */}
      <div className="relative group">
        <img 
          src={img} 
          alt=""
          className="rounded-xl shadow-md group-hover:shadow-xl transition"
        />

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white p-5 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-900">H. Merinda</h3>
          <p className="text-gray-500 mb-3">CEO & Co-Founder</p>

          <div className="flex justify-center gap-4 text-green-600 text-xl">
            <FaFacebook className="hover:text-black transition" />
            <CiTwitter className="hover:text-black transition" />
            <CiInstagram className="hover:text-black transition" />
            <FaYoutube className="hover:text-black transition" />
          </div>
        </div>
      </div>

      {/* MEMBER 2 */}
      <div className="relative group">
        <img 
          src={img1} 
          alt=""
          className="rounded-xl shadow-md group-hover:shadow-xl transition"
        />

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white p-5 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-900">Dilan Specter</h3>
          <p className="text-gray-500 mb-3">Head Engineer</p>

          <div className="flex justify-center gap-4 text-green-600 text-xl">
            <FaFacebook className="hover:text-black transition" />
            <CiTwitter className="hover:text-black transition" />
            <CiInstagram className="hover:text-black transition" />
            <FaYoutube className="hover:text-black transition" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
