
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



const Header = () => {
    const [pageState, setPageState] = useState("Sign in");
    const location = useLocation();
   
    function pathMatchRoute(route) {
        if (route === location.pathname) {
          return true;
        }
      }
    
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>

        <Link to="/" className="logo">
        <img  src="https://images.unsplash.com/photo-1619718082268-5a1b74988497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="coins-logo"
            className="h-5 cursor-pointer" /> 
      </Link>
 </div>
       
        

<div >
       <nav className="flex space-x-4">
        <NavLink to="/"  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}  >Home</NavLink>
        <NavLink to="/offers" className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}   >Offers</NavLink>
        <NavLink to="/sign-in" className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}>{pageState}</NavLink>
      </nav>
</div>


        
      </header>
    </div>
  );
}



export default Header
