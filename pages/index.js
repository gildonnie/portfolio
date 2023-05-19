import { useState } from 'react';
import Head from 'next/head';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { MdOutlineWebAsset } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiTableau } from 'react-icons/si'
import Image from 'next/image';
import SelfImg from '../public/SelfImg.png';
import Dlogo from '../public/DLogo.png';
import DlogoDmode from '../public/DLogoDmode.png';
import Abnb from '../public/Abnb.png';
import Covid from '../public/Covid.png';
import ES from '../public/ES.png';
import Poke from '../public/Pokemon.png';
import Sql from '../public/SQL1.png';
import Weather from '../public/weather.png';
import Anime from '../public/anime.png';
import Iron from '../public/iron.png';
import ACTA from '../public/ACTA.png'

export default function Home() {

  
  const [darkMode, setDarkMode] = useState(false);
  const handleButtonClick = () => {
    window.location.href = 'mailto:gildonnie864@gmail.com';
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>DG Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet" />
        </Head>
        <main className="bg-slate-400 dark:bg-gray-800 static">
          <a className="fixed bottom-0 right-0 m-5 bg-slate-500 text-slate-300 px-4 py-1 rounded-xl hover:bg-slate-300 hover:text-slate-500 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-800 border-2 border-slate-400" href="#">Top</a>
          <section className="h-[800px] px-10 md:px-20 lg:px-40">
            <nav className="py-4 mb-12 flex justify-between items-center">
              {/* <a className="logo cursor-pointer">
                {!darkMode ? ( <Image src={Dlogo} alt="nav-logo" width={130} height={130} className="w-20 md:w-30 dark:text-slate-100" />) : ( <Image src={DlogoDmode} alt="nav-logo" width={130} height={130} className="w-20 md:w-30 dark:text-slate-100" /> )}
              </a> */}
              
                {/* Dark mode toggle */}
                <div className="flex items-center ml-4 md:ml-8">
                  <BsFillMoonStarsFill
                    className={`cursor-pointer text-2xl hover:text-slate-800 dark:text-slate-400 ${darkMode ? 'hidden' : 'block'}`}
                    onClick={() => setDarkMode(!darkMode)}
                  />
                  <BsFillSunFill
                    className={`cursor-pointer text-2xl dark:text-slate-200 dark:hover:text-slate-300 ${darkMode ? 'block' : 'hidden'}`}
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </div>

              {/* Hamburger menu */}
              <div className="md:hidden">
                {!isMenuOpen ? <GiHamburgerMenu onClick={toggleMenu} className="text-3xl hover:cursor-pointer dark:text-slate-400" /> : <AiOutlineClose className=" text-3xl border-2 h-8 border-slate-600  text-center bg-black text-slate-400 hover:cursor-pointer ml-5" onClick={toggleMenu}>X</AiOutlineClose>}
              </div>

              {/* Navigation links */}
              <div className={` md:flex md:items-center ${isMenuOpen ? 'flex ' : 'hidden'}`}>
                
                <ul className="navBar flex pt-7 font-normal text-slate-700 dark:text-slate-400">
                  <li>
                    
                  </li>
                  <li
                    className="mr-10 hover:cursor-pointer"  onClick={() => {
                    const anchor = document.querySelector('#about')
                    anchor.scrollIntoView({ behavior: 'smooth'})
                    setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    About
                  </li>
                  <li
                    className="mr-10 hover:cursor-pointer"  onClick={() => {
                    const anchor = document.querySelector('#journey')
                    anchor.scrollIntoView({ behavior: 'smooth'})
                    setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    My Journey
                  </li>
                  <li
                    className="mr-10 hover:cursor-pointer"  onClick={() => {
                    const anchor = document.querySelector('#web')
                    anchor.scrollIntoView({ behavior: 'smooth'})
                    setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    Web Developer Projects
                  </li>
                  <li
                    className="mr-10 hover:cursor-pointer"  onClick={() => {
                    const anchor = document.querySelector('#data')
                    anchor.scrollIntoView({ behavior: 'smooth'})
                    setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    Data Analyst Projects
                  </li>
                </ul>


                {/* Resume button */}
                <div className=" md:block">
                  <a
                    className="bg-slate-500 text-slate-300 px-4 py-1 rounded-xl ml-8 hover:bg-slate-300 hover:text-slate-500 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-800"
                    href="https://docs.google.com/document/d/1QlqehXL7JpoOfnSr7UQNQEyoYAWpbdkk/edit?usp=sharing&ouid=102567614860551222590&rtpof=true&sd=true" target="_blank" rel="noreferrer" 
                  >
                    Resume
                  </a>
                </div>
              </div>
            </nav>

            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-slate-800 font-medium md:text-7xl dark:text-slate-600">Donnie Gil</h2>
              <h3 className="text-2xl py-2 text-slate-700 md:text-3xl dark:text-slate-400">Developer and Data Analyst</h3>
              <p className="text-md py-5 leading-8 text-slate-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">React Apprentice. Building user-friendly and dynamic web interfaces</p>
            </div>
            <div className="text-3xl flex justify-center gap-16 text-slate-600 dark:text-slate-300">
              <a className="hover:text-slate-700 dark:hover:text-slate-500" href="https://github.com/gildonnie" target="_blank" rel="noreferrer"><AiFillGithub /></a>
              <a className="hover:text-slate-700 dark:hover:text-slate-500" href="https://www.linkedin.com/in/donnie-gil/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            </div>
            <div className=" mx-auto bg-gradient-to-b from-slate-600 rounded-full m-20 overflow-auto w-60 h-60 md:w-96 md:h-96"  >
              <Image src={SelfImg} width={500} height={500} alt="image of myself" />
            </div>
          </section>

          <section className="md:mb-60 md:-mt-5 px-10 md:px-20 lg:px-40 sm:-mt-30 xs:-mt-40 xxs:mt-1">
          <div className="md:mb-50">
            <h3 className="pt-60 text-3xl py-8 text-center mx-auto dark:text-slate-600" id="about">About Me</h3>
            <p className="text-md py-2 leading-8 text-slate-700 md:text-xl max-w-1xl mx-auto lg:text-xl max-w-6xl dark:text-slate-400">
              Hello, I am a driven and self-motivated individual with a passion for web development and data analysis.  <br />
              I am a quick learner, and I am always looking for opportunities to expand my skill set and knowledge. <br />I am eager to bring my passion and skills to a dynamic and challenging work environment where I can continue to grow and contribute to the success of the organization.
              If you are looking for a driven and enthusiastic web developer or data analyst, I would be a great fit for your team. Thank you for considering me for your open position.
            </p>
          </div>
          <div className="mb-60" >
            <h3 className="pt-60 text-3xl py-8 text-center mx-auto dark:text-slate-600" id="journey">My Journey</h3>
            <p className="text-md py-2 leading-8 text-slate-700 md:text-xl max-w-1xl mx-auto lg:text-xl max-w-6xl dark:text-slate-400">
            I’ve always had a passion for technology more precise coding.  I was a pest control technician trying to learn how to code but it found it difficult to find a solid structure I could use to self-teach myself. I was told about classes offered by Bitwise industries and their apprenticeship program. I gave them a try and these classes solidified that I do indeed love coding. I was able to pick up the material quickly from knowing nothing to learning the basics of HTML and CSS and was able to create my first site. I was offered a React Apprenticeship in which I was able to expand my knowledge in multiple technologies. I came a long way in a year to knowing little to nothing about building a website to now being able to make a full stack site.
            </p>
            <div className="md:flex gap-5 md:justify-center">
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10 dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700"
              >
                <Image src={Anime} alt="project-images" width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">Anime Website</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">This was my first website after 5 weeks of of my first coding class</p>
                <div className="flex justify-center">
                  <a className="mr-5 text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://gildonnie.github.io/final-project/" target="_blank" rel="noreferrer"><MdOutlineWebAsset /></a>
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://github.com/gildonnie/final-project" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">HTML</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">CSS</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">JavaScript</p>
              </div>
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10 dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700">
                <Image src={Iron} alt="project-images" width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">Iron For Iron</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">Second Website After my second coding class</p>
                <div className="flex justify-center">
                  <a className="mr-5 text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://gildonnie.github.io/" target="_blank" rel="noreferrer"><MdOutlineWebAsset /></a>
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://github.com/gildonnie/gildonnie.github.io" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">HTML</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">CSS</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Bootstrap</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">JavaScript</p>
              </div>
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10 dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700">
                <Image src={ES} alt="project-images" width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">Explore Space</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">Full stack application where I use NASAs API. Explore rover images, picture of the day, and asteroids near earth even play a asteroid game. This was also my capstone project for my appernticship</p>
                <div className="flex justify-center">
                  <a className="mr-5 text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://capstone-nasa-app.herokuapp.com/" target="_blank" rel="noreferrer"><MdOutlineWebAsset /></a>
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://github.com/gildonnie/capstone-nasa-app" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">React</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Reux</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">MongoDB</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Firebase</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl py-8 text-center mx-auto dark:text-slate-600" id="web">Web Development Projects</h3>
            <p className="text-md py-2 leading-8 text-slate-700 md:text-xl md:mb-30 max-w-1xl mx-auto lg:text-xl max-w-6xl dark:text-slate-400">As a React developer apprentice I have utilized a modern tech stack consisting of React JS as the front-end framework, JavaScript and TypeScript as programming languages, Styled Components for styling, Redux for state management, MongoDB as the backend database, and Firebase for real-time data storage and synchronization. These technologies provided the project with a strong foundation for creating dynamic and interactive user interfaces, managing complex application state, and handling large amounts of data efficiently. The use of MongoDB and Firebase ensured that the application was scalable and able to handle real-time data updates. </p>
          </div>
            <div className="md:flex gap-5 md:justify-center">
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10 dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700"
              >
                <Image src={Weather} alt="project-images" width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">Weather App</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">Weather Application that takes in a location and gives 8 day weather forecast</p>
                <div className="flex justify-center">
                  <a className="mr-5 text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://gildonnie.github.io/weather-app/" target="_blank" rel="noreferrer"><MdOutlineWebAsset /></a>
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://github.com/gildonnie/weather-app" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">React</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Axios</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Redux</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">SASS</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Styled Components</p>
              </div>
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10 dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700">
                <Image src={ACTA} alt="project-images" width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">SJVCCC</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">Wordpress website for artist in the central valley that can show their work. They can make signup and create a profile where they can plug their work.</p>
                <div className="flex justify-center">
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://github.com/Shift3/ACTA-SJVCCC" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">Wordpress</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">PHP</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">JavaScript</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">SASS</p>
              </div>
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10 dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700">
                <Image src={Poke} alt="project-images" width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">Pokemon Adoption App</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">Pokemon application that allows the user to search for pokemon and add to the table once they are adopted they can be removed from it.</p>
                <div className="flex justify-center">
                  <a className="mr-5 text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://gildonnie.github.io/pokemon_adopt/" target="_blank" rel="noreferrer"><MdOutlineWebAsset /></a>
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://github.com/gildonnie/pokemon_adopt" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">React</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">SCSS</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Fetch</p>
              </div>
            </div>
          </section>

          <section className="px-10 md:px-20 lg:px-40">
            <div>
              <h3 className="text-3xl py-8 dark:text-slate-600 text-center" id="data">Data Analytics Portfolio</h3>
              <p className="text-md py-2 leading-8 text-slate-700 md:text-xl max-w-1xl mx-auto lg:text-xl max-w-6xl dark:text-slate-400">As a Data Analyst I have utilized SQL, Excel and Tableau. SQL to manage and manipulate data stored in relational databases. And extract data from databases, perform queries and data cleaning, and perform data aggregation and analysis. Excel to easily import, explore, clean, analyze and visualize data. With tableau I created  interactive and dynamic dashboards, reports, and visualizations.</p>
            </div>
            <div className="md:flex gap-10 md:justify-center mb-40">
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10     dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700"
              >
                <Image src={Sql} alt="project-images"width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">COVID Project</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">Analyzed data related to COVID-19 deaths and vaccinations.</p>
                <div className="flex justify-center">
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://github.com/gildonnie/SQL-Projects/blob/main/COVID%20Portfolio%20Project.sql" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">SQL</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Excel</p>
              </div>
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10     dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700"
              >
                <Image src={Sql} alt="project-images" width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">Cleaning Data Project</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">Got a data set and cleaned it to optimize it to analyze</p>
                <div className="flex justify-center">
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://github.com/gildonnie/SQL-Projects/blob/main/Cleaning%20Data%20Project.sql" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">SQL</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Excel</p>
              </div>
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10 dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700">
                <Image src={Covid} alt="project-images" width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">COVID Dashboard</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">Dashboard that visualizes deaths per country and infections.</p>
                <div className="flex justify-center">
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://public.tableau.com/app/profile/donnie.gil/viz/TableauCOVIDProject_16752805228030/Dashboard1" target="_blank" rel="noreferrer"><SiTableau /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">SQL</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Tableau</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Excel</p>
              </div>
              <div className="pro-contain bg-slate-300 text-center shadow-md shadow-slate-600 p-10 rounded-lg my-10 dark:shadow-gray-900 dark:shadow-lg dark:bg-gray-700 ">
                <Image src={Abnb} alt="project-images" width={130} height={130} className="inline rounded-full shadow-md shadow-slate-600 dark:shadow-slate-800 "/>
                <h3 className="text-slate-800 text-lg font-medium pt-8 pb-2 dark:text-slate-500">Airbnb Tableau Dashboard</h3>
                <p className="text-slate-600 py-2 dark:text-slate-400">Dashboard for potenial client that is looking to see what type of porperty would be more profitable in their city</p>
                <div className="flex justify-center">
                  <a className="text-2xl hover:text-slate-700 dark:hover:text-slate-500" href="https://public.tableau.com/app/profile/donnie.gil/viz/AirbnbFullProject_16739257188830/Dashboard1" target="_blank" rel="noreferrer"><SiTableau /></a>
                </div>
                <h4 className="py-4 text-slate-800 dark:text-slate-500 font-bold underline underline-offset-1">Used</h4>
                <p className="text-slate-600 py-1 dark:text-slate-400">SQL</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Tableau</p>
                <p className="text-slate-600 py-1 dark:text-slate-400">Excel</p>
              </div>
            </div>
          </section>

          <section>
            <footer className="bg-slate-500 w-screen text-center h-65 pt-20 dark:bg-gray-700 dark:text-slate-400">
              <h3 className="text-center p-3 text-3xl">Get In Touch</h3>
              <p className="p-5">I’m currently looking for any new opportunities, my inbox is always open.</p>
              <button className="bg-transparent h-9 w-60 text-slate-700 rounded-lg p-1 border border-slate-900 mt-5 hover:text-slate-300 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200" onClick={handleButtonClick}>Email</button>
                <ul className=" text-lg mt-20">
                  <li className="p-3 text-slate-700">
                  <p>Created by Donnie Gil &copy;Copyright <span class="year">2023</span></p>
                  </li>
                </ul>
            </footer>
          </section>
        </main>
      </div>
    </>
  )
}
