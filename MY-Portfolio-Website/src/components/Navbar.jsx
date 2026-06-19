import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <>
      <nav className="w-full h-[10vh] sticky top-0 bg-black/30 backdrop-blur-md z-[1000]">
        <div className="px-[5rem] pt-[18px]  flex justify-between items-center max-w-[1440px] mx-auto">

          <div>
            <h2
              className="text-white flex gap-[2px] cursor-pointer text-2xl font-bold"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              <span>folio</span>
              <span style={{ color: "crimson" }}>.</span>
            </h2>
          </div>

          <ul className="flex gap-8">

            <NavLink to="/"
            className={({ isActive }) => isActive ? 'border-b-2 border-[#D86D38]' : ''} > 
            <li className="hidden sm:block text-[rgb(168,168,168)] cursor-pointer hover:text-[white]">Home </li>
            </NavLink>


            <NavLink to="/Project"
              className={({ isActive }) => isActive ? 'border-b-2 border-[#D86D38]' : ''} > 
              <li className="hidden sm:block text-[rgb(168,168,168)] cursor-pointer hover:text-[white]">Project</li>
            </NavLink>

            <NavLink to="/About"
              className={({ isActive }) => isActive ? 'border-b-2 border-[#D86D38]' : ''} > 
              <li className="hidden sm:block text-[rgb(168,168,168)] cursor-pointer hover:text-[white]">About</li>
            </NavLink>

            <NavLink to="/Contact"
              className={({ isActive }) => isActive ? 'border-b-2 border-[#D86D38]' : ''} >
              <li className="hidden sm:block text-[rgb(168,168,168)] cursor-pointer hover:text-[white]">Contact</li>
            </NavLink>
            <li className="sm:hidden block text-[1.4rem] text-white cursor-pointer hover:text-[white]">
              <i className="ri-menu-line"></i>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar