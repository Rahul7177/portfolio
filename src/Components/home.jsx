import React from 'react';
import profileimg from '../Assets/profilepic.png';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full items-center bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-blue-500">RAHUL RAJ</h2>
          <p className="text-gray-300 py-4 w-fit text-xl">
            Aspiring Software Developer<span className="font-bold text-xl"> | </span> <br />
            Designing and coding beautiful experiences.
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-auto mt-4 md:mt-0">
          <img
            src={profileimg}
            alt="Profile Img"
            className="rounded-full mx-auto w-64 md:w-96  mb-16" // Increased size
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

