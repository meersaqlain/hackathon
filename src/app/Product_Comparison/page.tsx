import React from "react";
import { Trophy , BadgeCheck ,Truck , Headset } from "lucide-react";
import { PaginationNext } from "@/components/ui/pagination";
const Product_Comparison = () => {
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
         
          <div className="text-4xl font-bold ">Product <span className="mr-10">Comparison</span> </div>
        
           <div className="flex gap-5 text-1xl mt-2">
          <div>Home </div>
          <div>Comparison</div>
         </div> 
         </div>
         </div>

         <div className="flex mb-20">
            <div className="m-10">
           <div className="text-black text-2xl font-bold ">Go To Product <br/>Page For More <br/>Products</div>
           <p className="text-gray-400">View More</p>
           
           <div className="space-y-5 text-black">
            <h1 className="text-black text-2xl font-bold mt-44 ">General</h1>
            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>            
           </div>
           <div className="space-y-5 mt-14 text-black">
            <h1 className="text-black text-2xl font-bold">Product</h1>
            <p>Filling Material</p>
            <p>Finish</p>
            <p>Adjustable</p>
            <p>Maximum Load Capacity</p>
            <p>Origin of Manufacture</p>
           </div>
           <div className="space-y-5 mt-14 text-black">
            <h1 className="text-black text-2xl font-bold ">Dimensions</h1>
            <p>Width</p>
            <p>Height</p>
            <p>Depth</p>
            <p>Weight</p>
            <p>Seat Height</p>
            <p>Leg Height</p>
           </div>
           <div className="space-y-14 mt-20 text-black">
            <h1 className="text-black text-2xl font-bold">Warranty</h1>
            <p>Warranty Summary</p>
            <p>Warranty Service <br/>Type</p>
            <p className="pt-5">Covered in Waranty</p>
            <p >Not Covered in <br/>Warranty</p>
            <p  className="pt-20">Domestic Warranty</p>
           </div>
           </div>
           <div>
            <div className="m-10"><img src="s1.png" alt="sofa" className="w-64 h-32"/>
            <div className="m-4 font-bold space-y-1 text-black">
            <p>Asgaard Sofa</p>
            <p>Rs.250.000.00</p>
            </div>
            </div>
          <div className="text-black ml-14">
            <div className="mt-40 space-y-5 ">
                <p>sectional sofa</p>
                <p>TFCBLIGRBL6SRHS</p>
                <p>Solid Wood</p>
                <p>L-shaped</p>
                <p>Fabric + Cotton</p>
                <p>Bright Grey & Lion</p>              
            </div>
            
            <div className="space-y-5 mt-28">
                <p>Foam</p>
                <p>Bright Grey & Lion</p>
                <p>No</p>
                <p>280 KG</p>
                <p>India</p>
                
            </div>
            <div className="space-y-5 mt-24">
                <p>265.32</p>
                <p>167.76</p>
                <p>45 KG</p>
                <p>41.52 cm</p>
                <p>4.46</p>
                <p>6.46</p>
            </div>
            
            <div className="space-y-5 mt-40">
                <p>1 year Manufacturing <br/> Warranty</p>
                <p>For Warranty Claims or <br/>Any Product Related <br/>Issues Please Email at<br/> operations@trevifurnitu<br/> re.com</p>
                <p>Warranty Against <br/>Manufacturing Defect</p>
                <p>The Warranty Does Not <br/> Cover Damages Due To <br/> Usage Of The Product <br/> Beyond Its Intended Use<br/> And Wear & Tear In The <br/>Natural Course Of <br/>Product Usage.</p>
                <p className="pt-3">1 Year</p>
                <button className="py-5 px-10 border border-black  text-white bg-[#B88E2F]">Add To Cart</button>
            </div>
           </div>
           </div>
           <div >
            <div className="m-10"><img src="s1.png" alt="sofa" className="w-64 h-32"/>
            <div className="m-4 font-bold space-y-1 text-black">
            <p>Asgaard Sofa Large</p>
            <p>Rs.350.000.00</p>
            </div>
            </div>
            <div className="text-black ml-14">
            <div className="mt-36 space-y-5">
                <p>1 three Seater ,2 Single <br/>Seater</p>
                <p>DTFCBLIGRBL6SRHS</p>
                <p>Solid Wood</p>
                <p>L-shaped</p>
                <p>Fabric + Cotton</p>
                <p>Bright Grey & Lion</p>              
            </div>
            <div className="space-y-5 mt-28">
                <p>Foam</p>
                <p>Bright Grey & Lion</p>
                <p>No</p>
                <p>300 KG</p>
                <p>India</p>
                
            </div>
            <div className="space-y-5 mt-24">
                <p>265.32</p>
                <p>167.76</p>
                <p>45 KG</p>
                <p>41.52 cm</p>
                <p>4.46</p>
                <p>6.46</p>
            </div>
            <div className="space-y-5 mt-40">
                <p>1.2 year Manufacturing <br/> Warranty</p>
                <p>For Warranty Claims or <br/>Any Product Related <br/>Issues Please Email at<br/> operations@trevifurnitu<br/> re.com</p>
                <p>Warranty Against <br/>Manufacturing Defect</p>
                <p>The Warranty Does Not <br/> Cover Damages Due To <br/> Usage Of The Product <br/> Beyond Its Intended Use<br/> And Wear & Tear In The <br/>Natural Course Of <br/>Product Usage.</p>
                <p className="pt-3">3 Months</p>
                <button className="py-5 px-10 border border-black  text-white bg-[#B88E2F]">Add To Cart</button>
            </div>
            </div>

           </div>
           <div>
            <div className="m-20 font-bold">
                <div className="text-black">Add A Product</div>
            <p className="text-white bg-[#B88E2F] mt-4 border border-black rounded">Choose a Product</p></div>
            
           </div>
         </div>
          
         <div className=" grid grid-cols-12 bg-[#FAF3EA] w- h-[270px] mb-5">
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
                <PaginationNext href="Blog" />
        </div>


        
    )
}

export default Product_Comparison;