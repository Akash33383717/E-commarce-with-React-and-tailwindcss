import React from 'react'
import img from '../assets/Nest(1).png'
import { FaFireAlt } from 'react-icons/fa'
import { NavLink } from 'react-router'
const Nav = () => {
  return (
    <div className='flex sticky top-0 z-10 border-b border-gray-300 justify-around items-center bg-white pt-2 pb-3'>
      <div className='h-full flex items-center justify-center gap-2'>
        <img src={img} alt="" />
        <div className='lg:flex gap-1 items-center justify-center  hidden lg:block'>
        <div className='text-green-400'><FaFireAlt /></div>
        <p tex>Hot Deals</p>
        </div>
      </div>
      <div className='hidden md:block'>
            <ul className='flex gap-5 items-center justify-center h-full'>
                <NavLink to = '/'><li>Home</li></NavLink>
                <NavLink to ='/about'><li>About</li></NavLink>
                <NavLink to ='/shop'><li>Shop</li></NavLink>
                <NavLink to ='/mega menu'><li>Mega Menu</li></NavLink>
                <NavLink to ='/blog'><li>Blog</li></NavLink>
                <NavLink to ='/contact'><li>Contact</li></NavLink>
            </ul>
      </div>
      <div className='flex justify-between gap-3'>
            
          
            <button className="bg-green-400 hover:bg-green-500 px-5 h-fit rounded md:px-10 py-1 md:py-2 text-white font-semibold transition duration-300 ease-in-out shadow-md">
              Login
            </button>
            
           
            <div className="dropdown dropdown-end md:hidden">
            
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              
           
              <ul
                tabIndex={0}
                className="menu menu-sm bg-green-50 shadow-black text-black dropdown-content rounded-box mt-3 w-52 p-2 shadow-lg"
              >
                <NavLink to = '/'><li>Home</li></NavLink>
                <NavLink to ='/about'><li>About</li></NavLink>
                <NavLink to ='/shop'><li>Shop</li></NavLink>
                <NavLink to ='/mega menu'><li>Mega Menu</li></NavLink>
                <NavLink to ='/blog'><li>Blog</li></NavLink>
                <NavLink to ='/contact'><li>Contact</li></NavLink>
              </ul>
            </div>
       </div>

    </div>
  )
}

export default Nav
