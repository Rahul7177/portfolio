import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Contact = () => {
  return (
    <div name="contact" className='w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 mt-16'>
                <p className='text-4xl font-bold inline border-b-2 border-blue-600'>
                    Contact
                </p>
            </div>
            <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/f12426ea-817b-4b72-a288-bb76387c11d1" method='post' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name= "name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="text" name= "email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea name="messege" rows="10" placeholder="Enter your messege..."  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '></textarea>
                <button className='text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200 bg-blue-600'>Send</button>
            </form>
            </div>

            <div className='flex justify-center items-center'>
                <ul className='flex flex-col lg:flex lg:flex-row justify-center items-center w-fit '>
                <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500  hover:scale-105 hover:bg-blue-600 duration-300">
                <a href="https://www.linkedin.com/in/rahul-raj-5637a7230/" className="flex justify-between items-center w-full text-white">
                <>LinkedIn <FaLinkedin size={30}/>
                </>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500  hover:scale-110 hover:bg-blue-600 duration-300">
                <a href="https://github.com/Rahul7177" className="flex justify-between items-center w-full text-white">
                <>Github <FaGithub size={30}/>
                </>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500  hover:scale-105 hover:bg-blue-600 duration-300">
                <a href="mailto:rahulr7177@gmail.com" className="flex justify-between items-center w-full text-white">
                <>Mail <HiOutlineMail size={30}/>
                </>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:scale-105 hover:bg-blue-600 duration-300">
                <a href="https://drive.google.com/file/d/1B6UhHQCxPvdsh35660hF4fWx9IeP63lA/view?usp=drive_link" className="flex justify-between items-center w-full text-white">
                <>Resume <BsFillPersonLinesFill size={30}/>
                </>
                </a>
            </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact