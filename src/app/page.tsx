import React from 'react'
import Navbar from '@/sections/Navbar'
import "./globals.css"
import {Raleway, Fira_Code, Outfit} from "next/font/google";
import SocialIcons from '@/components/SocialIcons';
import Email from '@/components/Email';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import MoreProjects from '@/sections/MoreProjects';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import CustomCursor from '@/components/CustomCursor';


const raleway = Raleway({ subsets: ["latin"],variable: '--font-raleway'});
const outfit = Raleway({ subsets: ["latin"],variable: '--font-outfit'});
const fireCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-firacode'
});

const page = () => {
  return (
    <div>
      <CustomCursor/>
      <Navbar/>
      <SocialIcons/>
      <Email/>
      <main className='px-6 sm:px-12 md:px-20 lg:px-32 py-2 flex flex-col gap-12 sm:gap-14 md:gap-16 graph-paper-bg'>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        {/* <MoreProjects/> */}
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default page