import React from 'react'
import profileimg from '../Assets/profile.jpg'


const Home = () => {
  return (
    <div name="home" className="h-screen w-full items-center bg-gradient-to-b from-black via-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full sd:items-center">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">RAHUL RAJ</h2>
                <p className="text-gray-300 py-4 w-fit text-xl">
                    Aspiring Software Developer<span className=' font-bold text-xl'> | </span> <br />
                    Designing and coding beautiful experiences.
                </p>
            </div>
        <div>
            <img src={profileimg} alt="Profile Img" className="rounded-2xl mx-auto w-2/3 md:w-2/3 " />
        </div>
        </div>
    </div>
  )
}

export default Home