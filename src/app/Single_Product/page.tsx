import Link from 'next/link';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

import { ChevronRight , Star , Facebook , Twitter , Instagram} from 'lucide-react';
const SingleProduct = () => {

    return(
             
     
     <div>                       
          <div className="flex w-full h-[95px] bg-[#F9F1E7] text-black">
        <div className="ml-20" />
        
        <div className="mt-10 ml-2 my-2">Home </div>
        <ChevronRight className="mt-10 ml-2 my-2"/>
        <div className="mt-10 ml-16 my-2">Shop </div>
        <ChevronRight className="mt-10 ml-2 my-2"/>
       
        <div className="h-15 w-px bg-black mx-4 mt-8 mb-8 ml-16"></div>
        <div className="mt-10 ml-2 font-semibold">Asgaard sofa </div>
       
        </div>

        <div className="grid grid-cols-4">
            <div className="flex col-span-2 mt-5 ml-20 mb-12">
               
              <div className='space-y-7 '>
              <img src="c1.png" alt="asgaard sofa"/>
              <img src="c2.png" alt="asgaard sofa"/>
              <img src="c3.png" alt="asgaard sofa"/>
              <img src="c4.png" alt="asgaard sofa"/>
              </div> 
               <div><img src="c5.png" alt="Asgaard Sofa"/> </div>
            </div>

            <div>
                <h1 className='font-semibold text-black text-3xl mt-5' >Asgaard sofa</h1>
                <div className='text-gray-400 mt-2' >Rs 250.000.00
                    <div className='flex mt-2'>
                    <Star className='bg-yellow-500'/> <Star className='bg-yellow-500'/> <Star className='bg-yellow-500'/> <Star className='bg-yellow-500'/> <Star className='bg-yellow-500'/>
                   <div className='ml-4'> 0 Customer Review</div>
                    </div>
                </div>
                <div className='mt-5'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </div>
               <div className='mt-10 text-gray-400'>size</div>
               <div className='flex  text-gray-400 font-semibold gap-2 mt-2'>
               <div className="border border-gray-300 rounded-lg p-2 text-center font-bold hover:border-gray-500 hover:bg-[#B88E2F] cursor-pointer">L</div>
               <div className="border border-gray-300 rounded-lg p-2 text-center font-bold hover:border-gray-500 hover:bg-[#B88E2F] cursor-pointer">XL</div>
               <div className="border border-gray-300 rounded-lg p-2 text-center font-bold hover:border-gray-500 hover:bg-[#B88E2F] cursor-pointer">XS</div>
               </div>
                 <p className='text-gray-400 mt-5'>Color</p>
               <div className="flex gap-4 mt-5">
                         
                    <div className="w-10 h-10 rounded-full bg-[#816DFA] cursor-pointer hover:ring-2 hover:ring-black"></div>
                   <div className="w-10 h-10 rounded-full bg-black cursor-pointer hover:ring-2 hover:ring-black"></div>
                    <div className="w-10 h-10 rounded-full bg-[#B88E2F] cursor-pointer hover:ring-2 hover:ring-black"></div>

                   
             </div>

             <div className="flex gap-5 text-black">
                <div className='flex h-12 w-36 border border-black gap-11 pl-3 mt-5 py-3 rounded-lg'><p>-</p><p>1</p><p>+</p></div>
             <Link href="Cart"><div className='h-12 w-96 border border-black rounded-lg mt-5 justify-center items-center py-3 px-1 font-semibold'>Add To Cart</div></Link>
             <div className='h-12 w-96 border border-black rounded-lg mt-5 justify-center items-center py-2 px-3 font-semibold'>Compare</div>
           
             </div>
            <hr className="w-full bg-gray-950  my-10"/>

            <div className='flex gap-36 mb-10'>
                <div className="space-y-4">SKU         
                    <p>Category  </p>
                    <p>Tags      </p>
                    <p className='pt-8'>Share     </p>
                </div>
                <div className='space-y-4'>SS001
                    <p>Sofas</p>
                    <p>Sofas, Chair, Home, Shops</p>
                    <div className='flex gap-8'> 
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    </div> 
                </div> 
            </div>
            </div>    
        </div>

        <hr className="w-full bg-gray-950  my-10"/>

        <div className='w-full h-744 bg-white mb-5 flex gap-10 justify-center items-center'>
             <div>Description</div>
             <div>Additional Information</div>
             <div>Reviews </div>
        </div>
        
        <div className=' ml-20 mr-20  h-744 bg-white mb-5  gap-10 '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and 
          sound of Marshall, unplugs the chords, and takes the show on the road.
         
          <br/>
         <div className='pt-10'>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </div>
         </div>
         <div>
            <div className='flex justify-center items-center gap-5 mt-10 mb-10'>
             <img src='s1.png' alt='sofa'/>
             <img src='s2.png' alt='sofa'/>
            </div>
         </div>
         <hr className="w-full bg-gray-950  my-10"/>

         <h3 className="text-center text-black font-semibold text-2xl mt-10  bg-white">Related Products</h3>
         <div className="grid grid-cols-4 items-center justify-items-center mt-10 mb-10   bg-white">
                    
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
                    </ul>
                 </div>

                    

         
     
     </div>
     <div className="flex justify-center items-center text-center ">
                  <button className=" border border-[#B88E2F] text-[#B88E2F] bg-white py-4 px-10  rounded-lg m-10">Show More </button>
                 </div>

                 <hr className="w-full bg-gray-950  my-10"/>
         

                 <div className="mb-10 mt-10">
                  <Pagination>
                 <PaginationContent>
                 <PaginationItem>
                 <PaginationPrevious href="" />
                 </PaginationItem>
                  <PaginationItem>
                  <PaginationLink href="">1</PaginationLink>
                  </PaginationItem>
                 <PaginationItem>
                 <PaginationEllipsis />
                 </PaginationItem>
                    <PaginationItem>
                  <PaginationNext href="Cart" />
                  </PaginationItem>
                      </PaginationContent>
                      </Pagination>
              </div>
     </div>
   

    )
}

export default SingleProduct;