"use client";

import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../style/About.css'; 

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Assign the ref's current value to local constants.
    // This is a clean way to work with refs and helps TypeScript's type inference.
    const section = sectionRef.current;
    const title = titleRef.current;
    const textContent = textContentRef.current;
    const photo = photoRef.current;

    // The guard clause now checks the constants, ensuring they are not null.
    if (!section || !title || !textContent || !photo) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section, // Use the constant
          start: "top 60%",
          toggleActions: "play none none none",
        }
      });

      // Use the non-nullable constants throughout the animation logic.
      tl.from(title, { x: -50, opacity: 0, duration: 1, ease: "power3.out" })
        .from(title.nextElementSibling, { scaleX: 0, transformOrigin: 'left', duration: 1, ease: "power3.out" }, "-=0.8");

      tl.from(gsap.utils.toArray('.text-content p, .text-content .tech-list'), { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.5");

      tl.from(photo, { scale: 0.9, opacity: 0, duration: 1.2, ease: "power4.out" }, "<");

    }, section); // Scope the context to the main section element

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section p-8 shadow-lg rounded-2xl border-4 border-neutral-600 border-b-12 overflow-hidden">
      <div className="flex items-center gap-6 mb-12">
        <h2 ref={titleRef} className="about-title">About Me</h2>
        <div className="w-full h-[2px] bg-neutral-700"></div>
      </div>

      <div className="about-content-grid">
        <div ref={textContentRef} className="text-content">
          <p>
            Hi, I&apos;m Rahul Raj — a passionate <span className='font-bold underline underline-offset-2'>Full Stack Developer</span> with certifications in <span className='font-bold underline underline-offset-2'>MERN Stack</span> and <span className='font-bold underline underline-offset-2'>AWS</span> and recent Computer Science graduate from VIT (2025) with a deep interest in crafting intelligent, user-centric web applications.
          </p>
          <p>
            My journey in tech began with curiosity and has evolved into a purpose: building digital solutions that truly matter. Over the years, I’ve honed my skills in various web technologies, while actively working on impactful projects ranging from AI-powered assistants to dynamic web platforms.
          </p>
          <p>
            {/* THIS LINE IS THE FIX: "I'm" and "I’m" are replaced with "I&apos;m" */}
            I&apos;m driven by the belief that even small lines of code can lead to big, meaningful change — and I&apos;m excited to contribute to teams that value impact just as much as innovation.
          </p>
          <p>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="tech-list">
            {['React', 'Next.js', 'Typescript', 'Rest APIs', 'Node.js', 'Express.js', 'Mongo DB', 'Gsap', 'Framer Motion'].map((tech) => (
              <li key={tech} className="tech-list-item">{tech}</li>
            ))}
          </ul>
        </div>

        <div ref={photoRef} className="photo-section">
          <div className="photo-overlay"></div>
          <div className="photo-border"></div>
          <div className="photo-image-wrapper">
            <Image src="/rahul.jpg" alt="profile" fill className="profile-image object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
