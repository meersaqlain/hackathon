import React from "react";
import Link from "next/link";
import { Trophy , BadgeCheck , Truck , Headset,  } from "lucide-react";
import {   PaginationNext } from "@/components/ui/pagination";

const Check_Out = () => {
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
         
          <div className="text-2xl font-bold ">Check <span className="pl-4">Out</span> </div>
           <div className="flex gap-5 text-1xl mt-2">
          <div>Home </div>
          <div>CheckOut</div>
         </div> 
         </div>
         </div>
        
        <form className="bg-white ">
            <div className="  h-[1280px]  grid lg:grid-cols-2">
              <div className="font-bold text-black lg:justify-items-center">
                <h1 className="ml-24 mt-20 font-bold text-2xl text-black">Billing Details</h1>
             <div className="flex gap-3 ml-24 mt-5 ">
                <div>
                <p>First Name</p>
              <div className=" py-6 w-32 border rounded border-black mt-5"> </div>
                </div>

                <div>
                <p>Last Name</p>
              <div className=" py-6 w-32 border rounded border-black mt-5"> </div>
                </div>
             </div>
             <div className="ml-24 space-y-5 mt-5 ">
             <p>Company Name (Optional)</p>
             <div className=" py-6 w-64 border rounded border-black mt-5 "> </div>
             <p >Country / Region</p>
             <div className=" py-6 w-64 border rounded border-black mt-5"> </div>
             <p>Street Address</p>
             <div className=" py-6 w-64 border rounded border-black mt-5"> </div>
             <p>Town/City</p>
             <div className=" py-6 w-64 border rounded border-black mt-5"> </div>
             <p>Province</p>
             <div className=" py-6 w-64 border rounded border-black mt-5"> </div>
             <p>ZIP code</p>
             <div className=" py-6 w-64 border rounded border-black mt-5"> </div>
             <p>Phone</p>
             <div className=" py-6 w-64 border rounded border-black mt-5"> </div>
             <p>Email Address</p>
             <div className=" py-6 w-64 border rounded border-black mt-5"> </div>
             
             <div className=" py-6 w-64 border rounded border-black mt-5 text-center">Additional Information </div>
             </div>

             

              </div>


            <div >
                <div className="flex lg:mt-48 gap-52 font-bold mt-7">
                    <h1 className="space-y-10 mb-10 text-black">Product
                        <p className="mt-5 text-gray-400">Asgaard sofa</p>
                        <p className="text-black">Subtotal</p>
                        <p className="text-black">Total</p>
                    </h1>
                    <h1 className="space-y-10 text-black">Subtotal
                        <p className="mt-5 text-black">Rs.250.000.00</p>
                        <p className="text-black">Rs.250.000.00</p>
                        <p className="text-[#B88E2F] text-2xl">Rs.250.000.00</p>
                    </h1>

                    
                </div>
                  <hr className=" w-full bg-slate-950 my-10 "/>
                <div>
                    <h1 className="font-bold text-black mb-3">Direct Bank Transfer</h1>
                    <p className="text-gray-400">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <h1 className="text-gray-400 mt-3 mb-3">Direct Bank Transfer</h1>
                    <h1 className="text-gray-400 mb-3">Cash On Delivery</h1>
                    <p className="text-black mb-5">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span> </p>
                    <Link href="Contact"><button className="py-5 px-20  border border-black rounded-lg font-bold text-black ">Place Order</button></Link>
                </div>
            </div>
            
            </div>
        </form>
      <div className="mt-[800px] lg:mt-0">
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
                </div>
                <PaginationNext href="Contact" />
        </div> 
        

    )
}

export default Check_Out;