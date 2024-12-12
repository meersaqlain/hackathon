import React from "react";
import { PaginationNext  , } from "@/components/ui/pagination";
import { Search ,BadgeCheck ,Trophy , Truck , Headset } from "lucide-react";
const Blog = () =>{
    return(
        <div>
            <div className="relative w-full h-64 text-black ">
         <img 
          src="rts1.png" 
          alt="image" 
          className="w-full h-full object-cover"
         />
         <img src="icon.png" alt="icon" className="top-4 left-2/4 ml-5 w-15 h-15 mt-20 absolute"/>
         <div className="absolute top-1/2 left-1/2 right-1/2 text-black">
         
          <div className="text-4xl font-bold ">Blog </div>
        
           <div className="flex gap-5 text-1xl mt-2">
          <div>Home </div>
          <div>Blog</div>
         </div> 
         </div>
         </div>

         <div className="grid grid-cols-12">
          <div className="col-span-7  m-20 space-y-5">
          <img src="b1.png" alt="blog"/>
            <div className="flex text-gray-400 gap-10 ">
            <p>Admin</p>
            <p>14 Oct 2024</p>
            <p>Wood</p>
            </div>
            <h1 className="text-black text-2xl font-semibold mb-3 mt-3">Going all-in with millennial design</h1>
            <p className="text-gray-400 mr-24 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <p>Read more</p>
             <hr className="bg-black w-20"/>
            
             <img src="b2.png" alt="blog"/>
            <div className="flex text-gray-400 gap-10 ">
            <p>Admin</p>
            <p>14 Oct 2024</p>
            <p>Wood</p>
            </div>
            <h1 className="text-black text-2xl font-semibold mb-3 mt-3">Exploring new ways of decorating</h1>
            <p className="text-gray-400 mr-24 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <p>Read more</p>
             <hr className="bg-black w-20"/>

             <img src="b3.png" alt="blog"/>
            <div className="flex text-gray-400 gap-10 ">
            <p>Admin</p>
            <p>14 Oct 2024</p>
            <p>Wood</p>
            </div>
            <h1 className="text-black text-2xl font-semibold mb-3 mt-3">Handmade pieces that took time to make</h1>
            <p className="text-gray-400 mr-24 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <p>Read more</p>
             <hr className="bg-black w-20"/>
          </div>
         <div className="col-span-5 mt-20 space-y-8">
            <div className="py-5 w-60 border border-black rounded justify-items-end"><Search/>  </div>
            <h1 className="text-black text-2xl font-semibold">Categories</h1>
            <div className="space-y-10 text-gray-400">
            <p>Crafts<span className="ml-44">1</span></p>
            <p>Design<span className="ml-44">2</span></p>
            <p>Handmade<span className="ml-36">6</span></p>
            <p>Interior<span className="ml-44">8</span></p>
            <p>Wood<span className="ml-44">12</span></p>
            </div>

          <div className="space-y-7 text-gray-400">
            <h1 className="text-2xl text-black font-semibold mt-20 ">Recent Posts</h1>
            <div className="flex gap-5 ">
            <img src="rp1.png" alt="rp" />
           <p> Going all-in with <br/>millennial design<br/>
             03 Aug 2022</p></div>
             <div className="flex gap-5">
            <img src="rp2.png" alt="rp" />
           <p> Exploring new <br/>ways of decorating<br/>
           03 Aug 2022</p></div>
             <div className="flex gap-5">
            <img src="rp3.png" alt="rp" />
           <p> Handmade pieces that<br/> took time to make
           <br/>03 Aug 2022</p></div>
             <div className="flex gap-5">
            <img src="rp4.png" alt="rp" />
           <p> Modern home in<br/> Milan
           <br/>03 Aug 2022</p></div>
             <div className="flex gap-5">
            <img src="rp1.png" alt="rp" />
           <p> Colorful office<br/> redesign<br/>
           03 Aug 2022</p></div>
           
          </div>

         </div>
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
                <PaginationNext href="Sidebar" />
        </div>
    )
}

export default Blog ;