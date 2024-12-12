import {

  PaginationNext,
  
} from "@/components/ui/pagination"

import Herosection from "./Components/Herosection";

import Featured_Product from "./Components/Featured_Products";


export default function Home() {
  return (
     <div>
    
      <div>
        <Herosection/>
      </div>
      <div>
        <Featured_Product/>
      </div>

    <hr className="my-6 w-full bg-gray-950"/>

    <div className="mb-10 mt-10">
                  
                  <PaginationNext href="Shop" />
                
              </div>
     
       
    </div>
  );
}
