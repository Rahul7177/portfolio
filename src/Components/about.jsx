import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b  from-gray-800 via-gray-800 to-black text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='mt-8'>
                <p className='text-4xl font-bold border-b-2 border-blue-600 inline '>About</p>
            </div>
            <p className=' text-2xl mt-10 text-gray-300'>👋 Hi there! I'm Rahul Raj, a final year student pursuing B.Tech Computer Science and Engineering at VIT Chennai having a knack for coding and development. I've honed my skills in a range of programming languages including <span className='text-blue-500 font-bold'>C++</span>, <span className='text-blue-500 font-bold'>Python</span>, and <span className='text-blue-500 font-bold'>Java</span>. My fascination for technology extends to the realm of <span className='text-blue-500 font-bold'>Full Stack Development</span>, where I'm proficient in crafting engaging user experiences using <span className='text-blue-500 font-bold'>MERN Stack</span>. I am passionate about creating impactful technological solutions and continuously expanding my knowledge in the field.
            </p>
            <br />
        </div>
    </div>
  )
}

export default About