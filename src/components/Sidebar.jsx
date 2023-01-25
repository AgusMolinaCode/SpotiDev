import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri'
import {logo} from '../assets'
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink 
      key={item.name}
      to={item.to}
      onClick={() => handleClick && handleClick()}
      className='flex flex-row justify-center items-center my-8 text-md font-medium text-white hover:text-cyan-900'> 
        <item.icon className="w-6 h-6 mr-2 text-white" /> 
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 text-white bg-gray-800">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine onClick={() => setMobileMenuOpen(false)} className="w-6 h-6 text-white mr-2" />
        ) : <HiOutlineMenu onClick={() => setMobileMenuOpen(true)} className="w-6 h-6 text-white mr-2" />}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/70 to-indigo-900 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>

    </>
  )
}

export default Sidebar;
