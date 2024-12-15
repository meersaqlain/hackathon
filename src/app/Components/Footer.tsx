import React from "react";

const Footer = () => {
    return (
      <div>
        <footer className="grid grid-cols-12 bg-white lg:w-full w-[425px]">
              <div className=" col-span-3 ">
                <div className="text-2xl lg:ml-20 text-black font-bold">Funiro</div>
                <div className="mt-16 lg:ml-20 text-gray-500 ">400 University Drive Suite 200 Coral gables</div>
                <div className="lg:ml-20  text-gray-500 ">Fl 33134 USA </div>
              </div>

              <div className="col-span-6">
                <ul className="flex  gap-11 lg:ml-20">
                  <div className=" text-gray-500 ">Link
                    
                    <div className="mt-16 font-bold text-black">

                    <li className="pb-10"><a href="././">Home</a></li>
                    <li className="pb-10"><a href="./Shop">Shop</a></li>
                    <li className="pb-10"><a href="">About</a></li>
                    <li className="pb-10"><a href="Contact">Contact</a></li> 

                    </div>
                    
                    </div>
                    
              <div className=" text-gray-500">Help
                <div className="mt-16 font-bold text-black">
                  <li className="pb-10">
                    Payment Options
                  </li>
                  <li className="pb-10">Returns</li>
                  <li className="pb-10">Privacy Policies</li>
                </div>
              </div> 
              <div className=" text-gray-500 ">Newsletter
                <div className="mt-16 ">
                  <div className="lg:flex  text-gray-500 underline "><input type="email" placeholder="Enter Your Email Address "/>
                    <li className="lg:ml-20 text-black font-bold">SUBSCRIBE</li>
                  </div>
                  
                </div>
              </div>
              </ul>
              </div>
              
        </footer>
         <div className="lg:ml-20 text-black">
        <hr className="w-full bg-gray-950  my-10"/>

       <p className="font-bold mb-10">2024 furniro.All rights reverved</p>
       </div>
      </div>
      
            
      
        
    );
}

export default Footer;