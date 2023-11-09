const Nav = () => {
    return (
      <nav className="bg-black border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://github.com/JoshON5/websight" className="flex items-center">
        <img src="../src/assets/websight.png" className="h-12 mr-3" alt="WebSight Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap">WebSight</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-webTeal rounded  md:hover:bg-transparent md:border-0 md:hover:text-cyan-50 md:p-0 ">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-webTeal rounded md:hover:bg-transparent md:border-0 md:hover:text-cyan-50 md:p-0 ">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-webTeal rounded md:hover:bg-transparent md:border-0 md:hover:text-cyan-50 md:p-0 ">Contact</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-webTeal rounded md:hover:bg-text-webTeal hover:text-webGrey md:border-0 md:hover:text-cyan-50 md:p-0 ">Log in</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    );
  };
  
  export default Nav;