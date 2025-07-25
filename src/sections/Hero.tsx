'use client'
import React, { useState, useEffect } from 'react'
import Button from '@/components/Button'
import "../style/Hero.css"

import { 
  SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, 
  SiHtml5, SiCss3, SiGithub, SiCplusplus 
} from 'react-icons/si';

const techLogos = [
  SiCplusplus, SiJavascript, SiNodedotjs, SiReact, SiGithub, 
  SiHtml5, SiCss3, SiExpress, SiMongodb
];

type AnimatedItem = {
    id: number;
    IconComponent: React.ComponentType<{ className?: string }>;
    left: string;
    duration: string;
    delay: string;
    size: string;
};

// A simple shuffle function to randomize lane order
const shuffle = (array: number[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [animatedItems, setAnimatedItems] = useState<AnimatedItem[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2);
      const y = (clientY - innerHeight / 2);
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Lane-based generation logic ---
    const numItems = 15;
    const numLanes = 6; // Create 6 vertical lanes for the logos
    const laneWidth = 50 / numLanes; // Distribute lanes across the right 50% of the screen
    
    // Create an array of lane indices [0, 1, 2, 3, 4, 5, 0, 1, ...] and shuffle it
    const laneAssignments = Array.from({ length: numItems }, (_, i) => i % numLanes);
    const shuffledLanes = shuffle(laneAssignments);

    const generatedItems = Array.from({ length: numItems }).map((_, index) => {
      const laneIndex = shuffledLanes[index];
      // Start lanes from the middle (50%) and add the calculated lane position
      const leftPosition = 60 + (laneIndex * laneWidth);

      return {
        id: index,
        IconComponent: techLogos[index % techLogos.length],
        left: `${leftPosition}%`, // Assign to a non-overlapping lane
        duration: `${Math.random() * 10 + 15}s`,
        delay: `${Math.random() * -25}s`,
        size: ['text-3xl', 'text-4xl', 'text-5xl'][Math.floor(Math.random() * 3)]
      };
    });
    setAnimatedItems(generatedItems);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const parallaxStyle = {
    transform: `translateX(${position.x / -30}px) translateY(${position.y / -30}px)`,
    transition: 'transform 0.1s ease-out'
  };

  return (
    <div className="hero flex flex-col items-start justify-center gap-6 mt-8 mb-8 px-12 min-h-fit hero-section py-12 bg-white rounded-2xl shadow-lg relative overflow-hidden border-4 border-neutral-600 border-b-12">
      
      <div 
        style={parallaxStyle} 
        className="absolute inset-0 z-0 font-raleway font-medium pointer-events-none"
      >
        {animatedItems.map(item => (
          <div
            key={item.id}
            className={`scrolling-snippet`}
            style={{
              left: item.left,
              animationDuration: item.duration,
              animationDelay: item.delay,
            }}
          >
            <item.IconComponent className={item.size} /> 
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <h1 className="hero-title text-[var(--extra-dark-text)] text-md font-firacode tracking-normal relative z-10 ml-1">
        Hi, my name is
      </h1>
      <h2 className="hero-title-large font-raleway font-extrabold uppercase text-[var(--dark-text)] text-7xl text-shadow-lg relative z-10 backdrop-blur-2xl">
        Rahul Raj
      </h2>
      <div className="flex flex-wrap items-baseline gap-x-4 relative z-10">
        <h3 className="hero-title-sub font-raleway font-extrabold text-neutral-700 capitalize text-7xl -mt-2">
          I code things that
        </h3>
        <span className="hero-title-sub font-raleway font-extrabold text-[var(--theme-color)] text-7xl uppercase text-shadow-lg mt-4">
          matters.
        </span>
      </div>
      <div className="hero-button mt-4 text-xl relative z-10">
        <Button text="Check out my Work" link="https://github.com/Rahul7177" />
      </div>
    </div>
  )
}

export default Hero;
