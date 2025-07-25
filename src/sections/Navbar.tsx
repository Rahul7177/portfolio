'use client'
import Logo from '@/components/Logo'
import Link from 'next/link'
import React, { useState } from 'react'
import '../app/globals.css'
import Button from '@/components/Button'
import { Menu, X } from 'lucide-react'
import "../style/Navbar.css"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isGithubActions = process.env.NODE_ENV === 'production';
  const repo = 'portfolio';
  const basePath = isGithubActions ? `/${repo}` : '';
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Projects", link: "/#projects" },
    { name: "Contact", link: "/#contact" },
  ];

  // This function handles the smooth scrolling logic.
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    // 1. Prevent the default browser behavior of instantly jumping to the section.
    e.preventDefault();

    // 2. Extract the element ID from the link (e.g., from "/#about" to "about").
    const targetId = link.replace("/#", "");
    const elem = document.getElementById(targetId);

    // 3. If the element exists, scroll to it smoothly.
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="h-fit bg-white text-[vsr(--dark-text)] font-raleway w-full px-0 sm:px-6 md:px-0 z-10 shadow-lg">
      <div className="flex justify-between px-16 items-center w-full relative py-2 max-w-screen-2xl mx-auto navbar backdrop-blur-3xl">

        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0" style={{ minWidth: "fit-content" }}>
          <Link href="/" className="flex items-center transition-all duration-300 ease-in-out">
            <Logo />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center ">
          <ul className="list-none flex gap-2">
            {sectionLinks.map(({ name, link }) => (
              <li key={name} className='px-4 py-2 text-[var(--dark-text)] font-semibold transition-all duration-150 hover:text-[var(--theme-color)] focus:outline-none focus-visible:outline-dashed focus-visible:outline-2'>
                {/* The onClick handler is added here for desktop links. */}
                <Link href={link} onClick={(e) => handleScroll(e, link)} className='focus-visible:outline-blue-100'>{name}</Link>
              </li>
            ))}
          </ul>
          <Button text="Resume" link={`${basePath}/resume.pdf`} />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-neutral-800 p-2 z-50 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-neutral-50 z-11 flex flex-col gap-4 p-6 font-firacode md:hidden transition-all duration-300 ease-in-out">
            {sectionLinks.map(({ name, link }) => (

              <Link
                key={name}
                href={link}
                className="py-2 border-b border-neutral-700 hover:text-[var(--theme-color)]"
                onClick={(e) => {
                  handleScroll(e, link);
                  setMobileOpen(false);
                }}
              >
                {name}
              </Link>
            ))}
            <Button text="Resume" link={`${basePath}/resume.pdf`} />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
