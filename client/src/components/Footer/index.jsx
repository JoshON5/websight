import { Link } from 'react-router-dom';
import Image from '../../assets/websight-icon.png';

{/* <Link to="https://github.com/JoshON5/websight"> WebSight Github
</Link> */}
const Footer = () => {
        return (
            <footer className="bg-gray-200 text-webGrey py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
              {/* Contact Column */}
              <div className="w-full sm:w-1/2 md:w-1/4 pr-8 mb-8 sm:mb-0">
                <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                <div className="text-sm text-gray-400">
                <p>Email: info@websight.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Web Street, San Antonio TX</p>
                </div>
              </div>
      
              {/* Links Column */}
              <div className="w-full sm:w-1/2 md:w-1/4 pl-8 mb-8 sm:mb-0">
                <h3 className="text-lg font-bold mb-4">About</h3>
                <div className="flex space-x-4 text-sm text-gray-400">
                  <Link to="https://github.com/JoshON5/websight" className='hover:text-webTeal'> WebSight Github
                    </Link> 
                </div>
                <div className="flex space-x-4 text-sm text-gray-400">
                  <Link to="/about" className='hover:text-webTeal'> Meet The Team
                    </Link> 
                </div>
                <div className="flex space-x-4 text-sm text-gray-400">
                  <Link to="/services" className='hover:text-webTeal'> FAQ
                    </Link> 
                </div>
              </div>
      
              {/* WebSight Icon Column */}
              <div className="w-full sm:w-1/2 md:w-1/4 flex items-center justify-center mb-8 sm:mb-0">
                <Link to="/">
                  <img src={Image} alt="WebSight Icon" className="h-12 w-12" />
                </Link>
              </div>
      
              {/* Copyright Division */}
              <div className="w-full border-t border-gray-300 pt-4 text-center text-gray-500 mt-5">
                <p>&copy; 2023 WebSight. All rights reserved.</p>
              </div>
            </div>
          </footer>
          );
    };
  
  export default Footer;