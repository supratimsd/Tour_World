// import { useState } from 'react'

  
function Nav(){
  

  
    return (
      <>
      
       <header>
        <div className="px-4 py-2 text-white flex  justify-between bg-blue-900">
          <h1>LOGO</h1>
          <div  id="menu">
          <ul>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">Home</li>
            <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative"><a>Products</a></li> 
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">AboutUs</li>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">ContactUs</li>
          </ul>
          </div>
          <div className= "cursor-pointer md:hidden">
            <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
            <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" >
              <span  className="navicon bg-white-darkest flex items-center relative"></span>
            </label>
        </div>
        </div>
      </header>
      </>
    )
  }
  
  
  
  
  export default Nav
  