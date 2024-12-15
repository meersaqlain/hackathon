import {
   
    PaginationNext,
    
  } from "@/components/ui/pagination"


import Link from "next/link";
import { Trophy,BadgeCheck , Truck , Headset , Trash } from "lucide-react";
const Cart = () => {

    return (
        <div>
                     <div className="relative w-full h-64 text-black ">
         <img 
          src="rts1.png" 
          alt="image" 
          className="w-full h-full object-cover"
         />
       

        <img src="icon.png" alt="icon" className="top-4 left-2/4 ml-5 w-15 h-15 mt-20 absolute font-bold"/>
         <div className="absolute top-1/2 left-1/2 right-1/2 text-black ">
          <div className="text-4xl font-bold ">Cart </div>
           <div className="flex gap-5 text-1xl mt-2">
          <div>Home </div>
         
          <div>Cart</div>
         </div> 
         </div>
         </div> 
        <div className="bg-white  lg:w-[1440px] h-[525]">
          
          <div className="mt-5">



          </div>
           
           <div className="lg:ml-20 grid grid-cols-12  h-20 lg:w-7/12 lg:bg-[#F9F1E7] mr-96 mt-20 font-bold text-1xl mb-96">
          <div className=" col-span-9">
            <div className="">
                <ul className="flex justify-center lg:p-7 lg:gap-20  lg:pl-64 gap-5 pl-32">
                    <li>Product</li>
                    <li className="hidden sm:block">Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>

                </ul>
                </div>

                <div className="flex lg:gap-16 ">
                    <img src="cartsofa.png" alt="Sofa" className="mt-16  "/>
                    <p className="mt-24 text-gray-400">Asgaard Sofa</p>
                    <p className="mt-24 text-gray-400 hidden sm:block">250.000.00</p>
                    <p className="mt-24 text-gray-400 ml-7">1</p>
                    <p className="mt-24 text-black ml-7">250.000.00</p>
                   <p><Trash className="bg-[#B88E2F] mt-24"/></p> 
                </div>
                </div>


                <div className="lg:w-[393px] lg:h-[390px] lg:bg-[#F9F1E7] lg:ml-72 col-span-3 font-bold">
                    <div className="text-center mt-6 font-bold text-3xl hidden sm:block">Cart Totals</div>
                    <div  className="flex mt-20  ">
                    <div className="ml-20  hidden sm:block">Subtotal
                       <span className="pl-16 text-gray-400">250.000.00</span> 
                    </div>
                    </div>
                    <div className="flex ">
                    <div className="ml-20 mt-11 text-1xl font-bold hidden sm:block">Total
                       <span className="pl-16 text-[#B88E2F] text-1xl"> Rs.250.000.000</span>
                    </div>
                    </div>
                    <Link href="Check_Out"><button className="py-6 px-16 border border-black rounded-lg mt-10 ml-20 text-center text-1xl text black hidden sm:block">
                        Check Out
                    </button></Link>
                    <Link href="Check_Out"><button className="py-6 px-16 border border-black rounded-lg lg:mt-10 ml-20 text-center text-1xl text black mt-20 block lg:hidden">
                        Check Out
                    </button></Link>
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

                <div className="mb-10 mt-10">
                 
                  <PaginationNext href="Check_Out" />
                
              </div>
        </div>

    )
}

export default Cart ;