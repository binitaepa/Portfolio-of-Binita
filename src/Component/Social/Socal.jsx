import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";


const Socal = () => {
    const links = [

        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/binita-das-23b982186?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/binitaepa",
        },
        {
            id: 3,
            child: (
                <>
                    <FiFacebook
                     size={30} />
                </>
            ),
            href: "https://www.facebook.com/binita.das.75436?mibextid=ZbWKwL",
        },
       
           
    ]
    return (
        <div>
              <div className='flex justify-center items-center'>
                {
                    links.map(({ id, child, href, download }) => <div key={id} className='mr-5'>
                        <a className={`px-4  font-semibold  text-white `} href={href} download={download} target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </div>)
                }

        </div>
        </div>
    );
};

export default Socal;