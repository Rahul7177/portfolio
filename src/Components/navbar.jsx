import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"

const Navbar = () => {

    const [nav, setNav] = useState(false);


  return (
    <div className=" flex justify-between items-center w-full h-16 px-4 text-white bg-black sticky top-0 z-10">
        <div>
            <h1 className= "font-signature text-3xl">Rahul</h1>
        </div>
        <ul className=" hidden md:flex ">
            <Link to='home' smooth duration={500}><li className="px-4 cursor-pointer capitalize font-medium text-grey hover:scale-100 duration-200 hover:border-b-2 hover:border-blue-500">Home</li></Link>
            <Link to='about' smooth duration={500}><li className="px-4 cursor-pointer capitalize font-medium text-grey hover:scale-100 duration-200 hover:border-b-2 hover:border-blue-500">About</li></Link>
            <Link to='skills' smooth duration={500}><li className="px-4 cursor-pointer capitalize font-medium text-grey hover:scale-100 duration-200 hover:border-b-2 hover:border-blue-500">Skills</li></Link>
            <Link to='projects' smooth duration={500}><li className="px-4 cursor-pointer capitalize font-medium text-grey hover:scale-100 duration-100 hover:border-b-2 hover:border-blue-500">Projects</li></Link>
            <Link to='contact' smooth duration={500}><li className="px-4 cursor-pointer capitalize font-medium text-grey hover:scale-100 duration-100 hover:border-b-2 hover:border-blue-500">Contact</li></Link>
        </ul>

        <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            <Link onClick={()=> setNav(!nav)} to='home' smooth duration={500}><li className="px-4 cursor-pointer capitalize py-6 text-xl font-medium text-grey hover:scale-110 duration-200">Home</li></Link>
            <Link onClick={()=> setNav(!nav)} to='about' smooth duration={500}><li className="px-4 cursor-pointer capitalize py-6 text-xl font-medium text-grey hover:scale-110 duration-200">About</li></Link>
            <Link onClick={()=> setNav(!nav)} to='skills' smooth duration={500}><li className="px-4 cursor-pointer capitalize py-6 text-xl font-medium text-grey hover:scale-110 duration-200">Skills</li></Link>
            <Link onClick={()=> setNav(!nav)} to='projects' smooth duration={500}><li className="px-4 cursor-pointer capitalize py-6 text-xl font-medium text-grey hover:scale-110 duration-200">Projects</li></Link>
            <Link onClick={()=> setNav(!nav)} to='contact' smooth duration={500}><li className="px-4 cursor-pointer capitalize py-6 text-xl font-medium text-grey hover:scale-110 duration-200">Contact</li></Link>
            </ul>
        )}


    </div>
  )
}

export default Navbar