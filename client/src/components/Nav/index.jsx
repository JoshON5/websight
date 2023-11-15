import Image from '../../assets/websight.png'
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

    return (
      <nav className= " w-full bg-black border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link className=" self-center flex items-center" to="/">
            <img src={Image} className="h-12 mr-3" alt="WebSight Logo" />
            </Link>

      
    <div className=" w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 bg-transparent md:flex-row items-center md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
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
              <span>{Auth.getProfile().data.username}!</span>
          <button className="  py-2 pl-3 pr-4 font-medium text-webTeal md:hover:bg-text-webTeal hover:text-webGrey md:border-0 md:hover:text-cyan-50 md:p-0"
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