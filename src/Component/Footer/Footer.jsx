import Socal from "../Social/Socal";


const Footer = () => {
    return (
       <div className='border-b-2 '>
         <footer className="footer footer-center p-10 bg-black  text-primary-content">
  <aside>
  
    <p className="font-bold">
      Binita Das Gupta <br/>Frontend Developer <br/>Contact:01648016202 <br/>Email: binitaepa@gmail.com
    </p> 
    <p>Copyright © 2023 - All right reserved</p>
    <Socal></Socal>
  </aside> 
  
</footer>
       </div>
    );
};

export default Footer;