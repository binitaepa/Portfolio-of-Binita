import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, [])
    return (
        <div name="about" className='bg-black pb-8 md:pb-0 py-10 overflow-hidden'>
            <div className=  "  border-[1px] border-b-[6px] border-[#a64da6] shadow-md shadow-[#993399]">
            <h2 className="font-bold text-4xl uppercase   text-white text-center">About</h2>
            </div>
            <p className="text-center mt-5 text-white text-2xl">Hello there! I am Binita Das Gupta. A frontend developer. This is about my <span className="text-[#a64da6] font-bold">education and personal info..</span></p>
            <div className="text-center mt-5 text-white text-2xl">
                <p>NAME: Binita Das Gupta</p>
                <p>EMAIL: binitaepa@gmail.com</p>
                <p>CONTACT: 01648016202</p>
                <p>FATHERS NAME: Bipul Chandra Das</p>
                <p>MOTHERS NAME: Jaba Kushum Paul</p>
                <p>NATIONALITY: Bangladeshi</p>
                <p>LOCATION: Patharghata, Noju mia lane, Bangladesh</p>
                
            </div>
            <div className="text-center items-center flex flex-col justify-center text-white font-bold">
                <h2 className="text-xl mt-5 border-b-2 text-purple-800">Education</h2>
            <div  data-aos="fade-up-right"  className="overflow-x-auto w-[450px]">
  <table className="table text-xl">
    {/* head */}
    <thead>
      <tr className="text-white">
        <th></th>
        <th>Name</th>
        <th>GPA/CGPA</th>
        <th>FROM</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="hover:text-purple-500">
        <th>1</th>
        <td>SSC</td>
        <td>4.75</td>
        <td>Chattogram</td>
      </tr>
      {/* row 2 */}
      <tr className="hover:text-purple-500">
        <th>2</th>
        <td>HSC</td>
        <td>4.20</td>
        <td>Chattogram</td>
      </tr>
      {/* row 3 */}
      <tr className="hover:text-purple-500">
        <th>3</th>
        <td>BSc. in CSE</td>
        <td>3.53 out of 4</td>
        <td>Premier University, Chattogram</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
           
        </div>
    );
};

export default About;