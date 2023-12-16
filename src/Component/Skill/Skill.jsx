import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { AiFillHtml5, AiFillDatabase, AiOutlineCode } from "react-icons/ai";
import { DiCss3, DiReact, DiNodejsSmall, DiGit, DiJavascript } from "react-icons/di";
import {
     SiTailwindcss, SiFirebase, SiMysql, SiJavascript, SiC, SiVisualstudiocode, SiGithub, SiNetlify, SiVercel, SiFigma, SiCanva, SiJsonwebtokens, SiNextdotjs
} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skill = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, [])
    return (
        <div name='skills' className='bg-black pb-8 md:pb-0 py-10 overflow-hidden'>
            <div className=  " border-[1px] border-b-[6px] border-[#a64da6] shadow-md shadow-[#993399] ">
            <h2 className="font-bold text-4xl uppercase   text-white text-center">My Skill</h2>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="3000" className="mt-10 py-10 text-8xl  text-purple-600 ">
            <Marquee>
            <span className="" > <AiFillHtml5/></span><DiReact></DiReact><DiNodejsSmall></DiNodejsSmall><DiGit></DiGit><SiNextdotjs></SiNextdotjs><SiVercel></SiVercel><SiCanva></SiCanva><SiJsonwebtokens></SiJsonwebtokens> <DiJavascript></DiJavascript><SiC></SiC><SiJavascript></SiJavascript> <SiFirebase/><SiTailwindcss></SiTailwindcss><SiMysql></SiMysql> <DiCss3></DiCss3><AiOutlineCode></AiOutlineCode> <SiVisualstudiocode></SiVisualstudiocode> <AiFillDatabase></AiFillDatabase> <SiGithub></SiGithub> <SiNetlify></SiNetlify> <SiFigma></SiFigma> 
</Marquee>
            </div>
            <h2 className="items-center text-center text-white text-4xl mb-5 ">My Experience</h2>
            <div data-aos="fade-up-right" className="items-center text-center text-white text-2xl">
            <ul className="steps steps-vertical lg:steps-horizontal">
  <li className="step step-primary">I have worked on html,css,react</li>
  <li className="step step-primary">I have gather knowledge on database ,python</li>
  <li className="step">Currently i am working on my design concept</li>
  <li className="step">i have worked on 10+ projects for my learning purpose</li>
</ul>
            </div>
        </div>
    );
};

export default Skill;