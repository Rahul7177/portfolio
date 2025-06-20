import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Social = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-tr">
                <a href="https://www.linkedin.com/in/rahul-raj-5637a7230/" className="flex justify-between items-center w-full text-white">
                <>LinkedIn <FaLinkedin size={30}/>
                </>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
                <a href="https://github.com/Rahul7177" className="flex justify-between items-center w-full text-white">
                <>Github <FaGithub size={30}/>
                </>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
                <a href="mailto:rahulr7177@gmail.com" className="flex justify-between items-center w-full text-white">
                <>Mail <HiOutlineMail size={30}/>
                </>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-br">
                <a href="https://drive.google.com/file/d/1r30CJyESJOlaGVMANaXGXgODAXaggqaf/view?usp=drive_link" className="flex justify-between items-center w-full text-white">
                <>Resume <BsFillPersonLinesFill size={30}/>
                </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Social
