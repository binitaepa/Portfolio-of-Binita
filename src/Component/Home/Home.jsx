import { TypeAnimation } from "react-type-animation";

import { Link } from "react-scroll";
import { FiMail } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import pic from '../../assets/Binita.jpg'

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 5000 });
    }, [])
    return (
        <div>
        
        <div name='home' className='bg-black  pt-20  min-h-screen '>
            <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-14 pt-8 md:pt-20 md:mt-4  h-full lg:grid grid-cols-2 gap-4 '>
                <div className=' space-y-4'>
                    <h3 className='text-xl md:text-3xl font-bold text-white'></h3>
                    <h2 className='text-3xl md:text-5xl font-bold text-white'>I Am Binita Das Gupta</h2>
                    <h2 className='text-2xl md:text-4xl font-bold text-[#a64da6]'>
                        <TypeAnimation
                            sequence={[

                                'FULL Stack Developer',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'Frontend Developer',
                                1000,
                                'React Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className=''
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='text-gray-300 text-justify'>
                    🚀 Welcome to my Web World! 🌐. I am passionate about building dynamic web applications using the MERN stack. With my knowledge in Tailwind, React.js, Node.js, Express.js, and MongoDB, I can build website. With a toolbox filled with React, HTML, and CSS, I bring ideas to life on the digital canvas.
                    </p>
                    <div className='flex items-center gap-6'>
                    <div data-aos="flip-up" data-aos-duration="1200">
                    <Link to='contact' smooth duration={500}>
                            <button className='group text-white flex items-center gap-3 uppercase font-medium   py-2 px-4 rounded-lg border-[1px] border-b-[6px] border-[#a64da6] shadow-md shadow-[#993399] hover:bg-[#a64da6] hover:shadow-[0px] '>Contact Me <span><FiMail></FiMail></span></button>
                        </Link>
                    </div>
                       
                     <div data-aos="flip-up" data-aos-duration="1200">
                     <a download={true} href="https://drive.google.com/file/d/1fOtk03v_97vr-zTyLpLlSSKSqB_oZYwV/view?usp=download" className='hidden text-white border-[1px] border-r-[6px]   border-l-[6px] p-2 rounded-lg  border-[#a64da6] shadow-md shadow-[#993399] hover:bg-[#a64da6] hover:shadow-[0px] md:flex items-center gap-3 uppercase font-medium  py-2 px-4 hover:scale-x-105 duration-300'> DOWNLOAD CV<span className="text-purple-700"></span></a>
                     </div>
           

                    </div>
                </div>
                <div data-aos="flip-right" data-aos-duration="1200" className='order-first mx-auto  lg:order-last'>
                    <img className='border-white border-2 shadow-xl shadow-[#a64da6] hover:shadow-[0px] w-80 h-80 overflow-hidden rounded-full mx-auto mt-5 lg:mt-0' src={pic} alt="" />
                </div>

            </div>
        </div>
        </div>
    );
};

export default Home;