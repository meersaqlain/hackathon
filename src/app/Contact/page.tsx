import { Trophy , BadgeCheck , Truck , Headset } from "lucide-react";
import Link from "next/link";
import React from "react";
import { PaginationNext } from "@/components/ui/pagination";
const Contact =  () => {
    return (
        <div>

          <div className="relative w-full h-64 text-black ">
         <img 
          src="rts1.png" 
          alt="image" 
          className="w-full h-full object-cover"
         />
         <img src="icon.png" alt="icon" className="top-4 left-2/4 ml-5 w-15 h-15 mt-20 absolute"/>
         <div className="absolute top-1/2 left-1/2 right-1/2 text-black ">
         
          <div className="text-2xl font-bold ">Contact</div>
           <div className="flex gap-5 text-1xl mt-2">
          <div>Home </div>
          <div>Contact</div>
         </div> 
         </div>
         </div>
        
        <div className="h-[1080px] bg-white">
          <div className="m-20  text-center space-y-7">
            <h1 className="text-black text-2xl font-bold">Get In Touch With Us</h1>
            <p className="text-gray-400">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. <br/> Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="lg:ml-96">
                <div className="text-black mb-10 ">
                <h1 className="font-bold">Address</h1>
                <p>236 5th SE Avenue, New York <br/> NY10000, United States</p>
                </div>
                <div className="text-black mb-10 ">
                <h1 className="font-bold">Phone</h1>
                <p>Mobile: +(84) 546-6789<br/>
                Hotline: +(84) 456-6789</p>
                </div>
                <div className="text-black mb-10">
                <h1 className="font-bold">Working Time</h1>
                <p>Monday-Friday: 9:00 - 22:00<br/>
                Saturday-Sunday: 9:00 - 21:00</p>
                </div>
            </div>
            <div className="space-y-6 text-black font-bold justify-items-start">
             <p >Your Name</p>   
            <div className=" py-6 lg:w-96 w-52 border rounded border-black mt-5 "> </div>
            <p >Email Address</p>
            <div className=" py-6 lg:w-96 w-52 border rounded border-black mt-5 "> </div>
             <p >Subject</p>
             <div className=" py-6 lg:w-96 w-52 border rounded border-black mt-5 "> </div>
             <p >Message</p>
             <div className=" py-12 lg:w-96 w-52 border rounded border-black mt-5 "> </div>
             <Link href="Sidebar"><button className="py-4 px-16 bg-[#B88E2F] text-white mt-5">Submit</button></Link>
             
            </div>
          </div>

        </div>

       <div className=" grid grid-cols-12 bg-[#FAF3EA] w-full lg:h-[270px] mb-5">
                               <Trophy className="lg:size-24 lg:mt-20 Lg:ml-10 size-10 " />
                                <div className="col-span-2 lg:ml-10 lg:mt-24 ml-2">
                                   <div className="lg:text-2xl font-bold text-black">High Quality</div>
                                   <p className="text-[#898989]">Crafted From Top Materials</p>
                                </div>
                                <BadgeCheck className="lg:size-24 lg:mt-20 Lg:ml-10  size-10"/>
                                <div className="col-span-2 lg:ml-10 lg:mt-24 ml-2">
                                   <div className="lg:text-2xl font-bold text-black">Warranty Protection</div>
                                   <p className="text-[#898989]">Over 2 years</p>
                                </div>
                                <Truck  className="lg:size-24 lg:mt-20 Lg:ml-10 size-10 ml-2" />
                                <div className="col-span-2 lg:ml-10 lg:mt-24 ml-2 ">
                                   <div className="lg:text-2xl font-bold text-black">Free Shipping</div>
                                   <p className="text-[#898989]">Over 150 $</p>
                                </div>
                                <Headset className="lg:size-24 lg:mt-20 Lg:ml-10 size-10 "/>
                                <div className="col-span-2 lg:ml-10 lg:mt-24 ml-2 ">
                                   <div className="lg:text-2xl font-bold text-black">24 / 7 Support</div>
                                   <p className="text-[#898989]">Dedicated support</p>
                                </div>
                                   
                               </div>

                <PaginationNext href="Product_Comparison" />
        </div>
    )
}

export default Contact;