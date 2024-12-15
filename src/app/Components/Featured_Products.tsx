import Link from "next/link";
const Featured_Product = () => {
    return (
        <div className=" bg-white justify-center items-center lg:w-full w-[425px]">
            <h3 className="flex justify-center text-black font-semibold mt-6">Browse The Range</h3>
            <p className="text-black flex justify-center mb-5">Lorem , Ipsum , dolor  sit amet, consectetur , adicipiscing elit</p>
            <div className="flex justify-center items-center gap-2 mt-5 text-center font-semibold text-black ">
                <div>
                    <img src="img3.png" alt="product" className="lg:w-full w-[105px] lg:h-full h-[250px]" />
                    <p className="mt-5">Dining</p>
                </div>
                <div>
                    <img src="img2.png" alt="product"  className="lg:w-full w-[105px] lg:h-full h-[250px]"/>
                    <p className="mt-5">Living</p>
                </div>
                <div>
                    <img src="img1.png" alt="product"  className="lg:w-full w-[105px] lg:h-full h-[250px]"/>
                    <p className="mt-5">Bedroom</p>
                </div>
                
               
            </div>
            <h3 className="text-center text-black font-semibold text-2xl mt-10 mb-2 bg-white">Our Products</h3>
             <div className="lg:grid grid-cols-4 items-center justify-items-center mt-10 gap-5 text-pretty bg-white lg:w-full w-[425px] ">
                    
                     <div className="lg:w-[285px] lg:h-[446px] bg-gray-200 "><img src="p1.png" alt="product"/>
                     <ul className="font-semibold text-black ml-4 mt-4">
                        <li>Syltherine</li>
                        <li>Rp 2500.000</li>
                     </ul>
                     </div>
                     
                    <Link href="Cart"><div className="lg:w-[285px] lg:h-[446px] bg-gray-200"><img src="p2.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                        <li>Patty</li>
                        <li>Rp 2500.000</li>
                     </ul></div> 
                     </Link>          
                    
                    <div className="lg:w-[285px] lg:h-[446px] bg-gray-200"><img src="p3.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                        <li>Laviosa</li>
                        <li>Rp 2500.000</li>
                     </ul></div>
                     
                    <div className="lg:w-[285px] lg:h-[446px] bg-gray-200"><img src="p4.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                        <li>Lolito</li>
                        <li>Rp 2500.000</li>
                     </ul></div>
                    <div className="lg:w-[285px] lg:h-[446px] bg-gray-200"><img src="p5.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                        <li>Respira</li>
                        <li>Rp 2500.000</li>
                     </ul></div>
                    <div className="lg:w-[285px] lg:h-[446px] bg-gray-200"><img src="p6.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                        <li>Grifa</li>
                        <li>Rp 2500.000</li>
                     </ul></div>
                    <div className="lg:w-[285px] lg:h-[446px] bg-gray-200 "><img src="p7.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                        <li>Mugga</li>
                        <li>Rp 2500.000</li>
                     </ul></div>
                    <div className="lg:w-[285px] lg:h-[446px] bg-gray-200"><img src="p8.png" alt="product"/>   <ul className="font-semibold text-black ml-4 mt-4">
                        <li>Pingky</li>
                        <li>Rp 2500.000</li>
                     </ul></div>
                    
              
                 
                </div>
                <div className="flex justify-center ">
                  <button className="  border border-[#B88E2F] text-[#B88E2F] bg-white py-4 px-10  rounded-lg m-10">Show More </button>
                 </div>

                 <div className="bg-[#FCF8F3] lg:w-full lg:h-[670px] grid grid-cols-3">
                 <div>
                   <ul className="text-black font-bold lg:text-6xl lg:m-10 text-2xl "><li>50 + Beatiful Rooms</li>
                   <li>Inspiration</li></ul>
                   <ul className="lg:m-10">
                   <li>Lorem , Ipsum , dolor  sit amet, consectetur , adicipiscing elit </li>
                   </ul>
                   <button className="py-4 px-10 bg-[#B88E2F] text-white ml-10">Explore More</button>
                 </div>
                 <div><img src="r2.png" alt="product"/></div>
                 <div><img src="r1.png" alt="product"/></div>
                 </div>
               
               <p className="flex justify-center text-black mt-10">Share your setup with</p>
               <h1 className="flex justify-center text-black font-bold text-2xl m-5">#FuniroFurniture</h1>

               <div className="grid grid-cols-10 m-5 gap-5 ">
                <div className="col-span-4">
                    <div className="flex justify-items-center gap-5" >
                    <div><img src="rt1.png" alt="product" /></div>
                    <div><img src="rt2.png" alt="product"/></div>
                    </div>
                    <div className="flex justify-items-center gap-5">
                    <div><img src="rt3.png" alt="product"/></div>
                    <div><img src="rt4.png" alt="product"/></div>
                   </div>
                </div>    
                <div className="col-span-2 mr-10">
                <div className="flex justify-center mt-48  "> </div>
                <img src="rt5.png " alt="product"/>
                </div>
               
                

                <div className="col-span-4 ">
               <div className=" flex justify-items-center gap-5">
                <div> <img src="rt6.png" alt="product" /></div>
                <div><img src="rt7.png" alt="product" /></div>
                </div>
                
                <div className="flex justify-items-center gap-5">
                <div><img src="rt8.png" alt="product" /></div>
                <div><img src="rt9.png" alt="product" /></div>
               </div>
                </div>


               </div>
        </div>
    )
}

export default Featured_Product;