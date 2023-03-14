import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    
<footer className="p-4 mt-12 bg-slate-600 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">iTravel™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        <li>
            {/* <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a> */}
            <Link to='/about'> <button  className="mr-4 hover:underline md:mr-6">About</button></Link>
        </li>
        <li>
           <Link to='/policy'> <button  className="mr-4 hover:underline md:mr-6">Privacy Policy</button></Link>
        </li>
        {/* <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li> */}
        <li>
            {/* <a href="#" className="hover:underline">Contact</a> */}
            <Link to='/contact' className="mr-4 hover:underline md:mr-6">Contact</Link>
        </li>
    </ul>
</footer>

  )
}

export default Footer