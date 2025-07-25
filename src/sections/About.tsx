"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '../style/About.css'; 

const About = () => {
  return (
    <section id="about" className="about-section p-8 shadow-lg rounded-2xl border-4 border-neutral-600 border-b-12">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="about-title">About Me</h2>
        <div className="w-full h-[2px] bg-neutral-700"></div>
      </div>

      <div className="about-content-grid">
        <div className="text-content">
          <p>
            Hi, I’m Rahul Raj — a passionate <span className='font-bold underline underline-offset-2'>Full Stack Developer</span> with certifications in <span className='font-bold underline underline-offset-2'>MERN Stack</span> and <span className='font-bold underline underline-offset-2'>AWS</span> and recent Computer Science graduate from VIT (2025) with a deep interest in crafting intelligent, user-centric web applications.
          </p>
          <p>
            My journey in tech began with curiosity and has evolved into a purpose: building digital solutions that truly matter. Over the years, I’ve honed my skills in various web technologies, while actively working on impactful projects ranging from AI-powered assistants to dynamic web platforms.
          </p>
          <p>
            I'm driven by the belief that even small lines of code can lead to big, meaningful change — and I’m excited to contribute to teams that value impact just as much as innovation.
          </p>
          <p>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="tech-list">
            {[
              'React',
              'Next.js',
              'Typescript',
              'Rest APIs',
              'Node.js',
              'Express.js',
              'Mongo DB',
              'Gsap',
              'Framer Motion'
            ].map((tech) => (
              <li key={tech} className="tech-list-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="photo-section">
          <div className="photo-overlay"></div>
          <div className="photo-border"></div>
          <div className="photo-image-wrapper">
            <Image
              src="/rahul.jpg"
              alt="profile"
              fill
              className="profile-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;