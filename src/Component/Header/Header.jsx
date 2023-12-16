import { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";
import {FiDownload} from 'react-icons/fi'

const TEXTS = ['Hello','Welcome','Binita..'];
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [index, setIndex] = useState(0);
 
    useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        2000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  const navItems = [
    { id: 1, name: 'home' },
    { id: 2, name: 'about' },
    { id: 3, name: 'skills' },
    { id: 4, name: 'projects' },
    { id: 5, name: 'contact' }
   
  ]
    return (
        <div >
        <div className='bg-black z-40 fixed h-20 w-full  border-gray-300 shadow-xl'>
          <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-14  h-full  flex justify-between items-center  text-white'>
            <div>
            <h2 className="text-3xl font-bold uppercase">
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h2>
            </div>
  
            <ul className=' hidden md:flex gap-7'>
              {
                navItems.map(navItem => <li className='text-gray-300 cursor-pointer font-medium uppercase hover:text-white hover:scale-105 duration-300' key={navItem.id}>
                  <Link to={navItem.name} smooth duration={500}>
                    {navItem.name}
                  </Link>
  
                </li>)
              }
            </ul>
            <a download={true} href="https://drive.google.com/file/d/1fOtk03v_97vr-zTyLpLlSSKSqB_oZYwV/view?usp=download" className='hidden text-white border-[1px] border-r-[6px]   border-l-[6px] p-2 rounded-lg  border-[#a64da6] shadow-md shadow-[#993399] hover:bg-[#a64da6] hover:shadow-[0px] md:flex items-center gap-3 uppercase font-medium  py-2 px-4 hover:scale-x-105 duration-300'> DOWNLOAD CV<span className="text-purple-700"><FiDownload></FiDownload></span></a>
           
            <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer  text-gray-300 md:hidden">
              {
                menuOpen ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
              }
            </div>
  
            {
              menuOpen && <ul className='absolute top-20 box-border bg-black  w-[50vw] rounded-xl py-6 right-0'>
                {
                  navItems.map(navItem => <li className=' text-gray-300 cursor-pointer font-medium uppercase px-6 py-3 hover:bg-white hover:text-black  duration-300' key={navItem.id}><Link to={navItem.name} smooth duration={600}>
                  {navItem.name}
                </Link></li>)
                }
              </ul>
            }
  
          </div>
        </div>
      </div>
    );
};

export default Header;