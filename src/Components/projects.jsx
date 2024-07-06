import React from 'react'
import foodsanta from '../Assets/santa.png'
import typespeed from '../Assets/typing.jpg'
import flappybird from '../Assets/bird2.png'
import voice_assistant from '../Assets/voiceassist.jpeg'
// import student_management from '../Assets/student.png'
import fluidity from '../Assets/Fluidity.png'
import autovista from '../Assets/autovista.png'



const Projects = () => {

    const projects = [
    {
        id: 1,
        src : autovista,
        demo : "https://autovista.vercel.app/",
        code: "https://github.com/Rahul7177/AutoVista",
        title : "Autovista"
    
    },
    {
        id: 2,
        src : foodsanta,
        demo : "https://foodsanta-eaec3.web.app/",
        code: "https://github.com/Rahul7177/FoodSanta",
        title : "FoodSanta"

    },
    {
        id: 3,
        src : typespeed,
        demo : "https://rahul7177.github.io/TypeSpeed/",
        code: "https://github.com/Rahul7177/TypeSpeed",
        title : "Typespeed"
    },
    {
        id: 4,
        src : fluidity,
        demo : "https://rahul7177.github.io/Fluidity/",
        code : "https://github.com/Rahul7177/Fluidity",
        title : "Fluidity"

    },
    {
        id: 5,
        src : voice_assistant,
        demo : "https://github.com/Rahul7177/Voice-Assistant.git",
        code : "https://github.com/Rahul7177/Voice-Assistant.git",
        title : "Voice Assistant"
    },
    {
        id: 6,
        src : flappybird,
        demo : "https://github.com/Rahul7177/Flappy-Bird.git",
        code : "https://github.com/Rahul7177/Flappy-Bird.git",
        title : "Flappy Bird"    
    },

    ]


  return (
    <div name="projects" className='bg-gradient-to-b from-gray-800 via-gray-800 to-black w-100  min-h-screen text-white pt-8'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mt-16 mb-8'>
                <p className='text-4xl font-bold inline border-b-2 border-blue-600'>Projects</p>
            </div>
        

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-12 w-full'>

        {projects.map(({id,src,demo,code,title}) => (
                    <div key={id} className='shadow-lg shadow-black rounded-lg my-8'>
                    <img src={src} alt="Under Development" className='flex items-center justify-center rounded-md rounded-b-none 
                   w-full h-3/4 duration-200 overflow-hidden '/>
                   <div className='bg-gray-600'>
                    
                    <div className='flex justify-center items-center'>
                        <h1 className=' text-sm p-2 font-semibold '>{title}</h1>
                    </div>
                   </div>
                   <hr />
                    <div className='flex items-center justify-center bg-gray-600 rounded-b-lg'>
                        <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110 hover:font-bold'><a href={demo} target="/a" className=' text-white'>Demo</a></button>
                        <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110 hover:font-bold'><a href={code} target="/a" className=' text-white'>Code</a></button>
                    </div>
                </div>
        ))        
        }



        </div>
        </div>

    </div>
  )
}

export default Projects