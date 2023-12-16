import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, [])
    const projects = [

        {
            id: 1,
            img: "https://i.ibb.co/Fm2zHHy/screencapture-dream-house-877c7-web-app-2023-12-12-15-11-44.png",
            name: "Dream House",
            description: "A  website for a Real State Business Site",
            tech: "React.js , Node.js , Express.js , MongoDB , Firebase Authentication",
            liveURL: "https://dream-house-877c7.web.app/",
            gitClientURL: "https://github.com/binitaepa/Dream-house-client",

        },
        {
            id: 2,
            img: "https://i.ibb.co/74VvxdV/screencapture-gaming-event-react-web-app-2023-12-12-15-14-06.png",
            name: "GamenTo",
            description: " A full-stack website for gamer to play game",
            tech: "React.js , Express.js , MongoDB , Firebase Authentication , React Router  , Tailwind CSS",
            liveURL: "https://gaming-event-react.web.app",
            gitClientURL: "https://github.com/binitaepa/Game-event",


        },
        {
            id: 3,
            img: "https://i.ibb.co/Rym3xnC/screencapture-food-donation-bc75e-web-app-2023-12-12-15-15-12.png",
            name: "Nourish Neighbor",
            description: "A full stack website for people who want to share food or take food . Like donation food.",
            tech: "React.js , Express.js , Firebase Authentication , React Router , REST APIs , Tailwind ",
            liveURL: "https://food-donation-bc75e.web.app",
            gitClientURL: "https://github.com/binitaepa/food-donation-client",


        },
        {
            id: 4,
            img: "https://i.ibb.co/zFRwqTS/screencapture-cosmetics-and-beauty-web-app-2023-12-12-15-10-40.png",
            name: "BeautyHub",
            description: "A Front-end web application for beauty Product",
            tech: "React.js, React Router ,Firebase,mongoDB, Tailwind CSS",
            liveURL: "https://cosmetics-and-beauty.web.app",
            gitClientURL: "https://github.com/binitaepa/Beauty-and-cosmetics-client",


        }
      

    ];
    return (
        <div name='projects' className='bg-black pb-8 md:pb-0 py-10 overflow-hidden'>
            <div className=  "  border-[1px] border-b-[6px] border-[#a64da6] shadow-md shadow-[#993399]">
            <h2 className="font-bold text-4xl uppercase   text-white text-center">My Projects</h2>
            </div>
            <div data-aos="flip-left"  className="max-w-screen-lg mx-auto lg:grid grid-cols-2 gap-5 lg:mt-20 ">
           { projects?.map((project) => (
                            <div
                                key={project.id}
                                
                                className="p-6 mt-10 mx-10 lg:m-0
                        bg-white text-black "
                            >
                                <figure className="h-60  border-[1px] border-b-4 overflow-hidden rounded-md shadow-lg shadow-[#800080] ">
                                    <img
                                        src={project.img}
                                        className="w-full  transition-transform duration-[10000ms] hover:-translate-y-[80%]"
                                    />
                                </figure>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-black mt-3 mb-2 text-purple-400">{project.name}</h3>
                                        
                                    </div>
                                   
                                    <p>{project.description}.</p>
                                    <h3 className="font-semibold text-purple-500">Technology</h3>
                                    <p>{project.tech}.</p>
                                    <div className=" flex gap-4 ">

<a
    href={project.liveURL}
    target="blank"
    className="project-card flex text-purple-950"
    title="Live Link"
>
  <p>Link :</p>  <FaExternalLinkAlt size={25} />
</a>
<a
    href={project.gitClientURL}
    target="blank"
    className="project-card flex text-purple-500"
    title="Github Link"
>
  <p>Github: </p>  <FaGithub size={25} />
</a>
</div>
                                </div>
                            </div>
                        ))
           }
            </div>
        </div>
    );
};

export default Project;