import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b  from-gray-800 via-gray-800 to-black text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='mt-8'>
                <p className='text-4xl font-bold border-b-2 border-blue-600 inline '>About</p>
            </div>
            <p className=' text-xl mt-8 text-gray-300'>👋 Hi there! I'm Rahul Raj, a pre-final year student pursuing B.Tech Computer Science and Engineering at VIT Chennai having a knack for coding and development.I've honed my skills in a range of programming languages including C++, Python, and Java. My fascination for technology extends to the realm of front-end web development, where I'm proficient in crafting engaging user experiences using HTML, CSS, and JavaScript.I've also dabbled in React.js to add that extra touch of interactivity to my projects. 🌐💻
            </p>
            <br />
            <p className=' text-xl mt-4 text-gray-300'>
            I believe in the power of innovation and collaboration, and I'm always eager to take on new challenges. Whether it's solving complex coding problems or creating interactive web interfaces, I'm committed to delivering high-quality results.
            Let's connect and explore the possibilities of coding, web development, and technology together. Feel free to reach out to discuss ideas, opportunities, or simply have a chat! 🚀🔗
            </p>
        </div>
    </div>
  )
}

export default About