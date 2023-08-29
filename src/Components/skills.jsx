import React from 'react';
import html from '../Assets/html.png';
import css from '../Assets/css.png';
import javascript from '../Assets/javascript.png';
import react from '../Assets/react.png';
import tailwind from '../Assets/tailwind.png';
import c from '../Assets/c.png';
import bootstrap from '../Assets/bootstrap.png';
import python from '../Assets/python.png';
import github from '../Assets/github.png';


const Skills = () => {

    const tech = [

        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-800'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-300'
        },
        {
            id: 4,
            src: react,
            title: 'React-Js',
            style: 'shadow-sky-400'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-600'
        },
        {
            id: 6,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 7,
            src: c,
            title: 'C++',
            style: 'shadow-blue-700'
        },
        {
            id: 8,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-600'
        },
        {
            id: 9,
            src: github,
            title: 'Github',
            style: 'shadow-green-500'
        },
    ]


  return (
    <div name="skills" className='bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='mb-8'>
                <p className='text-4xl font-bold border-b-2 border-blue-600 inline'>
                    Skills
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
                
            {
                tech.map(({id,src,title,style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-200 hover:font-bold py-2 bg-gray-900 rounded-lg ${style}`}>
                    <img src={src} alt={title} className='w-20 mx-auto px-2' />
                    <p className='mt-4'>{title}</p>
                    </div>
                ))
            }

                
            </div>
        </div>
    </div>
  )
}

export default Skills