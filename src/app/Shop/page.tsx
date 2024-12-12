

import {

    PaginationNext,
   
  } from "@/components/ui/pagination"
  


import React from "react";
import { SlidersHorizontal , GripHorizontal , TableOfContents , Trophy , BadgeCheck  , Truck , Headset, Link} from 'lucide-react';
const Shop = () => {
   
    return (
        
         <div>
         <div className="relative w-full h-64 text-black ">
         <img 
          src="rts1.png" 
          alt="image" 
          className="w-full h-full object-cover"
         />
         <img src="icon.png" alt="icon" className="top-4 left-2/4 ml-5 w-15 h-15 mt-20 absolute"/>
         <div className="absolute top-1/2 left-1/2 right-1/2 text-black">
         
          <div className="text-4xl font-bold ">Shop </div>
           <div className="flex gap-5 text-1xl mt-2">
          <div>Home </div>
          <div>Shop</div>
         </div> 
         </div>

         <div className="flex w-full h-[95px] bg-[#F9F1E7]">
        
         <div className="ml-20"><SlidersHorizontal className="size-4 mt-11" /></div>
         <div className="mt-10 ml-2 my-2 font-bold">Filter  </div>
         <div className="size-max mt-11 ml-5">< GripHorizontal />
         </div>
         <div className="size-4 mt-11 ml-4"><TableOfContents /></div>
         <div className="h-15 w-px bg-black mx-4 mt-6 mb-2 ml-6"></div>
         <div className="mt-10 ml-5 font-bold">Showing 1-16 of 32 results </div>
         <div className="mt-10 ml-[660px] font-bold">Show</div>
         <div className="mt-10 ml-5 text-[#9F9F9F]">16</div>
         <div className="mt-10 ml-5 font-bold">Short by </div>
         <div className="mt-10 ml-5 text-[#9F9F9F]">Default</div>
         </div>
          </div>
          <div>

         <div className="grid grid-cols-4 items-center justify-items-center mt-40 gap-5  bg-white">
                    
                    <div className="w-[285px] h-[446px] bg-gray-200"><img src="p1.png" alt="product"/>
                    <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Syltherine</li>
                       <li>Rp 2500.000</li>
                    </ul>
                    </div>
                   <a href="./Single_Product"><div className="w-[285px] h-[446px] bg-gray-200"><img src="p2.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Patty</li>
                       <li>Rp 2500.000</li>
                    </ul></div></a>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p3.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Laviosa</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p4.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Lolito</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p5.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Respira</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p6.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Grifa</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200 "><img src="p7.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Mugga</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p8.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Pingky</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                    <div className="w-[285px] h-[446px] bg-gray-200"><img src="p2.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Patty</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p3.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Laviosa</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p4.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Lolito</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p5.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Respira</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p6.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Grifa</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200 "><img src="p7.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Mugga</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                   <div className="w-[285px] h-[446px] bg-gray-200"><img src="p8.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Pingky</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                    <div className="w-[285px] h-[446px] bg-gray-200 "><img src="p7.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                       <li>Mugga</li>
                       <li>Rp 2500.000</li>
                    </ul></div>
                    </div>               
                 </div>

                  <div className="mb-10 mt-10">
                
                 
                  <PaginationNext href="Single_Product" />
                  
              </div>

              
                <div className=" grid grid-cols-12 bg-[#FAF3EA] w-full h-[270px] mb-5">
                <Trophy className="size-24 mt-20 ml-10" />
                 <div className="col-span-2 ml-10 mt-24 ">
                    <div className="text-2xl font-bold text-black">High Quality</div>
                    <p className="text-[#898989]">Crafted From Top Materials</p>
                 </div>
                 <BadgeCheck className="size-24 mt-20 ml-10"/>
                 <div className="col-span-2 ml-10 mt-24 ">
                    <div className="text-2xl font-bold text-black">Warranty Protection</div>
                    <p className="text-[#898989]">Over 2 years</p>
                 </div>
                 <Truck  className="size-24 mt-20 ml-10" />
                 <div className="col-span-2 ml-10 mt-24 ">
                    <div className="text-2xl font-bold text-black">Free Shipping</div>
                    <p className="text-[#898989]">Over 150 $</p>
                 </div>
                 <Headset className="size-24 mt-20 ml-10"/>
                 <div className="col-span-2 ml-10 mt-24 ">
                    <div className="text-2xl font-bold text-black">24 / 7 Support</div>
                    <p className="text-[#898989]">Dedicated support</p>
                 </div>
                    
                </div>
              







         </div>

    );
}

export default Shop;



