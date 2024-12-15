
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser , faMagnifyingGlass , faHeart , faCartShopping} from '@fortawesome/free-solid-svg-icons';






export default function Navbar() {
  return (
    <div>
      
      <header className=" grid grid-cols-6 lg:p-10 bg-[#FFFFFF] lg:w-full   lg:h-100px  text-black w-[425px] " >
        
          <div className="flex gap-2 justify-start font-bold text-[#000000] lg:text-3xl col-span-2 size-7 text-1xl">
            <img src="icon.png " alt="Logo" className="w-12 lg:h-7 lg:mt-0 h-4 mt-1"/>
            <a href="./"><h1 className="">Furniro</h1></a>
         
          </div>
        <ul className="flex justify-center items-center lg:gap-10  bg-[#FFFFFF]  col-span-2 lg:mr-5 text-black font-bold lg:w-[425px] gap-2 ">
        <Link href="././"><li>Home</li></Link>
        

          <a href="./Shop"><li>Shop</li></a>
          

          <a href="Blog"><li>Blog</li></a>
          
         
          <a href="Contact"><li>Contact</li></a>
          
        </ul> 

        <div className="flex gap-7 col-span-2 ml-10 w-[425px] ">
         <div className=" flex size-5 gap-1">
        <FontAwesomeIcon icon={faUser}  />
        </div>

        <div className=" flex size-5 gap-1">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

       
       
          <div className=" flex size-5 gap-1">
        <FontAwesomeIcon icon={faHeart} />
        </div>

        <Link href="Single_Product"><div className=" flex size-5 gap-1">
        <FontAwesomeIcon icon={faCartShopping} />
        </div></Link>
        
        </div>
      </header>
      </div> 

  )
}