
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser , faMagnifyingGlass , faHeart , faCartShopping} from '@fortawesome/free-solid-svg-icons';





export default function Navbar() {
  return (
    <div>
      
      <header className=" grid grid-cols-6 p-10 bg-[#FFFFFF] w-[1440px] h-100px  text-black" >
        
          <div className="flex gap-2 justify-start font-bold text-[#000000] text-3xl col-span-2 size-7">
            <img src="icon.png " alt="Logo" className="w-12 h-auto"/>
            <a href=""><h1 className="">Furniro</h1></a>
         
          </div>
        <ul className="flex justify-center items-center gap-10 text-[#000000]bg-[#FFFFFF]  col-span-2 mr-5 text-black font-bold">
        <Link href="././"><li>Home</li></Link>
        

          <a href="./Shop"><li>Shop</li></a>
          

          <a href=""><li>Blog</li></a>
          

          <a href=""><li>Contact</li></a>
          
        </ul> 

        <div className="flex gap-7 col-span-2 ml-10">
         <div className=" flex size-5 gap-1">
        <FontAwesomeIcon icon={faUser}  />
        </div>

        <div className=" flex size-5 gap-1">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

       
       
          <div className=" flex size-5 gap-1">
        <FontAwesomeIcon icon={faHeart} />
        </div>

        <Link href="Cart"><div className=" flex size-5 gap-1">
        <FontAwesomeIcon icon={faCartShopping} />
        </div></Link>
       
        </div>
      </header>
      </div> 

  )
}