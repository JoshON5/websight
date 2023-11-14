import Image from '../../assets/websight.png'
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

    return (
      <nav className="bg-black border-gray-200 flex w-screen">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex">
            <Link className="flex items-center" to="/">
            <img src={Image} className="h-12 mr-3" alt="WebSight Logo" />
            </Link>
        </div>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      
    <div className=" w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
        <li>
        <Link className="block py-2 pl-3 pr-4 text-webTeal rounded  md:hover:bg-transparent md:border-0 md:hover:text-cyan-50 md:p-0" to="/about" >About</Link>
        </li>
        <li>
        <Link className="block py-2 pl-3 pr-4 text-webTeal rounded md:hover:bg-transparent md:border-0 md:hover:text-cyan-50 md:p-0" to="/services">Services</Link>
        </li>
        <li>
        <Link  className="block py-2 pl-3 pr-4 text-webTeal rounded md:hover:bg-transparent md:border-0 md:hover:text-cyan-50 md:p-0" to="/about">Contact</Link>
        </li>
        <li>
        {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
          <button className="block py-2 pl-3 pr-4 text-webTeal rounded md:hover:bg-text-webTeal hover:text-webGrey md:border-0 md:hover:text-cyan-50 md:p-0"
          onClick={logout} > Log Out</button>
                      </>
          ) : (
            <>
          <Link className="block py-2 pl-3 pr-4 text-webTeal rounded md:hover:bg-text-webTeal hover:text-webGrey md:border-0 md:hover:text-cyan-50 md:p-0 " to="/login">Log in
          </Link>
          </>
                    )}
        </li>
      </ul>
    </div>
  </div>
</nav> 
    );
  };
  
  export default Nav;